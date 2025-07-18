import type { ColorScheme, FontStyle } from "./types";

export const COLOR_SCHEMES: ColorScheme[] = [
  {
    name: "White",
    bg: "bg-gradient-to-br from-blue-50 via-slate-100 to-gray-200",
    text: "text-slate-800",
    accentText: "text-blue-500",
    accentColor: "#3b82f6",
    border: "border-slate-300",
    shadow: "shadow-lg shadow-blue-200/40",
  },

  {
    name: "Dark",
    bg: "bg-gradient-to-br from-black via-gray-900 to-green-950",
    text: "text-gray-300",
    accentText: "text-olive-300",
    accentColor: "#a3e635",
    border: "border-gray-800",
    shadow: "shadow-md shadow-lime-900/10",
  },
  {
    name: "Ocean",
    bg: "bg-gradient-to-br from-blue-900 via-cyan-900 to-teal-800",
    text: "text-cyan-100",
    accentText: "text-sky-300",
    accentColor: "#7dd3fc",
    border: "border-cyan-700",
    shadow: "shadow-xl shadow-sky-500/20",
  },
  {
    name: "Vice",
    bg: "bg-gradient-to-br from-pink-700 via-purple-700 to-blue-700",
    text: "text-white",
    accentText: "text-pink-300",
    accentColor: "#f472b6",
    border: "border-pink-500",
    shadow: "shadow-xl shadow-pink-500/20",
  },
  {
    name: "Bronze",
    bg: "bg-gradient-to-br from-orange-900 via-[#b87333] to-gray-700",
    text: "text-gray-100",
    accentText: "text-orange-200",
    accentColor: "#b87333",
    border: "border-gray-600",
    shadow: "shadow-xl shadow-orange-400/20",
  },
  {
    name: "Silver",
    bg: "bg-gradient-to-br from-gray-100 via-gray-300 to-gray-200",
    text: "text-gray-800",
    accentText: "text-gray-600",
    accentColor: "#a3a3a3",
    border: "border-gray-400",
    shadow: "shadow-lg shadow-gray-400/30",
  },
  {
    name: "Gold",
    bg: "bg-gradient-to-br from-[#fef3c7] via-[#fcd34d] to-[#b45309]",
    text: "text-[#4b3200]",
    accentText: "text-[#92400e]",
    accentColor: "#d97706",
    border: "border-[#eab308]",
    shadow: "shadow-lg shadow-amber-400/30",
  },
];

export const FONT_STYLES: FontStyle[] = [
  { name: "Roboto Mono", className: "font-roboto-mono" },
  { name: "Share Tech Mono", className: "font-share-tech-mono" },
  { name: "Orbitron", className: "font-orbitron" },
  { name: "VT323", className: "font-vt323" },
];
