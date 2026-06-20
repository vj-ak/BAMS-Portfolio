'use client'

import { motion } from 'framer-motion'
import { MdOutlineScience } from 'react-icons/md'
import { HiOutlineBookOpen, HiOutlineMicrophone } from 'react-icons/hi'
import { doctor } from '@/data/content'

type ResearchItem = typeof doctor.research[number]

// Group papers by title to show Presented → Published journey
function groupPapers(papers: ResearchItem[]) {
  const map = new Map<string, ResearchItem[]>()
  for (const p of papers) {
    if (!map.has(p.title)) map.set(p.title, [])
    map.get(p.title)!.push(p)
  }
  // Sort each group: Presented first, Published last
  const order = ['Presented', 'Under Review', 'Published']
  for (const [, group] of map) {
    group.sort((a, b) => order.indexOf(a.type) - order.indexOf(b.type))
  }
  return [...map.values()]
}

const typeConfig: Record<string, { icon: React.ElementType; color: string; bg: string; label: string }> = {
  Presented:      { icon: HiOutlineMicrophone, color: 'text-blue-600',  bg: 'bg-blue-50 border-blue-200',   label: 'Presented' },
  'Under Review': { icon: MdOutlineScience,    color: 'text-amber-600', bg: 'bg-amber-50 border-amber-200', label: 'Under Review' },
  Published:      { icon: HiOutlineBookOpen,   color: 'text-brand-600', bg: 'bg-brand-50 border-brand-200', label: 'Published' },
}

export default function Research() {
  if (!doctor.research.length) return null

  const groups = groupPapers(doctor.research)

  return (
    <section id="research" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <p className="text-sm font-medium uppercase tracking-widest text-brand-600 mb-2">
            Research
          </p>
          <h2 className="font-serif text-3xl font-semibold bg-gradient-to-r from-brand-700 via-brand-600 to-brand-500 bg-clip-text text-transparent mb-12">
            Publications & Presentations
          </h2>
        </motion.div>

        <div className="space-y-6">
          {groups.map((group, gi) => (
            <motion.div
              key={group[0].title}
              className="rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: gi * 0.08, ease: 'easeOut' }}
            >
              {/* Paper Title Header */}
              <div className="bg-gray-50 border-b border-gray-100 px-6 py-4 flex items-start gap-3">
                <MdOutlineScience className="text-xl text-brand-600 flex-shrink-0 mt-0.5" />
                <h3 className="text-base font-semibold text-gray-800 leading-snug">
                  {group[0].link ? (
                    <a href={group[0].link} target="_blank" rel="noopener noreferrer" className="hover:text-brand-600 transition-colors">
                      {group[0].title}
                    </a>
                  ) : group[0].title}
                </h3>
              </div>

              {/* Journey Steps */}
              <div className="divide-y divide-gray-50">
                {group.map((step, si) => {
                  const cfg = typeConfig[step.type] ?? typeConfig['Under Review']
                  const Icon = cfg.icon
                  const isLast = si === group.length - 1
                  return (
                    <div key={si} className="px-6 py-4 flex items-center gap-4 bg-white">
                      {/* Step indicator */}
                      <div className="flex flex-col items-center flex-shrink-0">
                        <div className={`w-8 h-8 rounded-full border flex items-center justify-center ${cfg.bg}`}>
                          <Icon className={`text-sm ${cfg.color}`} />
                        </div>
                        {!isLast && <div className="w-px h-4 bg-gray-200 mt-1" />}
                      </div>

                      {/* Step info */}
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-600 leading-snug">{step.venue}</p>
                      </div>

                      {/* Year + badge */}
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <span className="text-xs text-gray-400">{step.year}</span>
                        <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full border ${cfg.bg} ${cfg.color}`}>
                          {cfg.label}
                        </span>
                      </div>
                    </div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

