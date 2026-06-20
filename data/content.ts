export const doctor = {

  // ── Personal ────────────────────────────────────────────────
  name: "Dr. Your Name",
  shortName: "Dr. Your Name",
  title: "BAMS · Ayurveda Physician",
  tagline: "Your professional tagline goes here",
  profilePhoto: "/images/profile.jpg",
  email: "your.email@example.com",
  phone: "+91 00000 00000",
  location: "Your Clinic Address, City, State, India – 000000",
  consultationHours: "Mon – Sat, 9:00 AM – 6:00 PM",

  // ── About ───────────────────────────────────────────────────
  bio: [
    "Write your first bio paragraph here. Introduce yourself, your qualification, and institution.",
    "Describe your clinical training, internships, and key experience in this second paragraph.",
    "Write about your current practice, specialisations, and your philosophy of care here.",
  ],

  stats: [
    { value: "5+",   label: "Years of Study" },
    { value: "200+", label: "OPD Cases" },
    { value: "8",    label: "Panchakarma Therapies" },
    { value: "1",    label: "Research Papers" },
  ],

  // ── Skills ──────────────────────────────────────────────────
  skills: [
    {
      icon: "GiHerbsBundle",
      title: "Panchakarma & Detox",
      items: ["Vamana", "Virechana", "Basti", "Nasya", "Shirodhara", "Leech therapy"],
    },
    {
      icon: "FaSeedling",
      title: "Women's Health",
      items: ["PCOD / PCOS management", "Hormonal imbalance", "Menstrual disorders", "Weight management therapy"],
    },
    {
      icon: "GiMeditation",
      title: "Neurological & Mental Health",
      items: ["Sinus & Migraine", "Stress & Anxiety", "Insomnia", "Hypertension management"],
    },
    {
      icon: "MdOutlineScience",
      title: "Lifestyle Diseases",
      items: ["Diabetes", "Hypertension", "Thyroid dysfunction", "Obesity & metabolic disorders"],
    },
    {
      icon: "FaLeaf",
      title: "Gastrointestinal Health",
      items: ["Acidity & GERD", "Irritable Bowel Syndrome (IBS)", "Constipation", "Digestive disorders"],
    },
    {
      icon: "FaBone",
      title: "Musculoskeletal & Pain",
      items: ["Cervical & shoulder pain", "Low back ache", "Sciatica", "Joint disorders & Arthritis"],
    },
  ],

  // ── Experience ──────────────────────────────────────────────
  experience: [
    {
      role: "Ayurveda Physician",
      institution: "Your Current Clinic / Hospital Name",
      location: "City, State",
      period: "Month Year – Present",
      highlights: [
        "Describe your primary responsibilities and treatments provided.",
        "Mention key specialisations or patient populations served.",
        "Highlight any notable protocols or authorisations.",
      ],
    },
    {
      role: "Ayurveda Consultant",
      institution: "Previous Clinic / Hospital Name",
      location: "City, State",
      period: "Month Year – Month Year",
      highlights: [
        "Describe consultations and treatment approaches used.",
        "Mention patient management scope.",
        "Highlight any specialised protocols designed.",
      ],
    },
    {
      role: "Compulsory Rotating Intern",
      institution: "Your Medical College Name",
      location: "City, State",
      period: "Year – Year",
      highlights: [
        "Managed OPD and IPD patients under physician supervision.",
        "Assisted in Panchakarma procedures and Ayurvedic treatments.",
        "Participated in clinical rounds, case discussions, and documentation.",
      ],
    },
  ],

  // ── Certifications ──────────────────────────────────────────
  certifications: [
    {
      name: "BAMS – Bachelor of Ayurvedic Medicine & Surgery",
      issuer: "Your Medical College Name, City",
      year: "Year",
      category: "degree" as const,
    },
    {
      name: "Workshop / Training Name",
      issuer: "Organising Institution",
      year: "Year",
      category: "workshop" as const,
    },
  ],

  // ── Research ────────────────────────────────────────────────
  research: [
    {
      title: "Your Research Paper Title",
      venue: "Journal Name (Journal Abbreviation)",
      year: "Month Year",
      type: "Published" as const,
      link: "",
    },
    {
      title: "Your Research Paper Title",
      venue: "\"Conference Name\" Conference",
      year: "Year",
      type: "Presented" as const,
      link: "",
    },
    {
      title: "Conference or Event Name",
      venue: "Organising Institution",
      year: "Year",
      type: "Delegate" as const,
      link: "",
    },
  ],

  // ── Testimonials ────────────────────────────────────────────
  testimonials: [
    {
      quote: "Patient testimonial goes here. Describe the condition and the outcome of treatment.",
      name: "Anonymous",
      role: "Patient, City",
      rating: 5,
    },
    {
      quote: "Another patient testimonial. Keep these genuine and concise.",
      name: "Anonymous",
      role: "Patient, City",
      rating: 5,
    },
    {
      quote: "A third testimonial from a patient or colleague.",
      name: "Anonymous",
      role: "Colleague",
      rating: 5,
    },
  ],

  // ── Social links ────────────────────────────────────────────
  social: {
    linkedin: "https://www.linkedin.com/in/your-profile",
    instagram: "",
    whatsapp: "+910000000000",
  },
}
