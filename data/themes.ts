export type ThemeName = "emerald" | "ocean" | "saffron" | "lotus" | "amethyst" | "teal"

export interface ThemeColors {
  50: string
  100: string
  200: string
  300: string
  400: string
  500: string
  600: string
  700: string
  800: string
  900: string
}

export interface Theme {
  name: ThemeName
  label: string
  description: string
  brand: ThemeColors
  swiper: string  // active dot colour
}

export const themes: Record<ThemeName, Theme> = {

  // ── 1. Emerald Green (default – nature & healing) ─────────────────────────
  emerald: {
    name: "emerald",
    label: "Emerald",
    description: "Nature & Healing",
    brand: {
      50:  "#f0fdf4",
      100: "#dcfce7",
      200: "#bbf7d0",
      300: "#86efac",
      400: "#4ade80",
      500: "#22c55e",
      600: "#16a34a",
      700: "#15803d",
      800: "#166534",
      900: "#14532d",
    },
    swiper: "#16a34a",
  },

  // ── 2. Ocean Blue (trust & calm) ─────────────────────────────────────────
  ocean: {
    name: "ocean",
    label: "Ocean",
    description: "Trust & Calm",
    brand: {
      50:  "#eff6ff",
      100: "#dbeafe",
      200: "#bfdbfe",
      300: "#93c5fd",
      400: "#60a5fa",
      500: "#3b82f6",
      600: "#2563eb",
      700: "#1d4ed8",
      800: "#1e40af",
      900: "#1e3a8a",
    },
    swiper: "#2563eb",
  },

  // ── 3. Saffron (Ayurvedic tradition & warmth) ─────────────────────────────
  saffron: {
    name: "saffron",
    label: "Saffron",
    description: "Ayurvedic Tradition",
    brand: {
      50:  "#fffbeb",
      100: "#fef3c7",
      200: "#fde68a",
      300: "#fcd34d",
      400: "#fbbf24",
      500: "#f59e0b",
      600: "#d97706",
      700: "#b45309",
      800: "#92400e",
      900: "#78350f",
    },
    swiper: "#d97706",
  },

  // ── 4. Lotus (women's health & compassion) ────────────────────────────────
  lotus: {
    name: "lotus",
    label: "Lotus",
    description: "Compassion & Care",
    brand: {
      50:  "#fff1f2",
      100: "#ffe4e6",
      200: "#fecdd3",
      300: "#fda4af",
      400: "#fb7185",
      500: "#f43f5e",
      600: "#e11d48",
      700: "#be123c",
      800: "#9f1239",
      900: "#881337",
    },
    swiper: "#e11d48",
  },

  // ── 5. Amethyst (wisdom & spirituality) ──────────────────────────────────
  amethyst: {
    name: "amethyst",
    label: "Amethyst",
    description: "Wisdom & Spirituality",
    brand: {
      50:  "#f5f3ff",
      100: "#ede9fe",
      200: "#ddd6fe",
      300: "#c4b5fd",
      400: "#a78bfa",
      500: "#8b5cf6",
      600: "#7c3aed",
      700: "#6d28d9",
      800: "#5b21b6",
      900: "#4c1d95",
    },
    swiper: "#7c3aed",
  },

  // ── 6. Teal (balance & renewal) ──────────────────────────────────────────
  teal: {
    name: "teal",
    label: "Teal",
    description: "Balance & Renewal",
    brand: {
      50:  "#f0fdfa",
      100: "#ccfbf1",
      200: "#99f6e4",
      300: "#5eead4",
      400: "#2dd4bf",
      500: "#14b8a6",
      600: "#0d9488",
      700: "#0f766e",
      800: "#115e59",
      900: "#134e4a",
    },
    swiper: "#0d9488",
  },
}
