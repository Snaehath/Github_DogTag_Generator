import type { ColorScheme, FontStyle } from "./types";

export const COLOR_SCHEMES: ColorScheme[] = [
  {
    name: "LIGHT",
    bg: "bg-gradient-to-br from-blue-50 via-slate-100 to-gray-200",
    text: "text-slate-800",
    accentText: "text-blue-500",
    accentColor: "#3b82f6",
    border: "border-slate-300",
    shadow: "shadow-lg shadow-blue-200/40",
  },
  {
    name: "DARK",
    bg: "bg-gradient-to-br from-black via-[#111] to-[#050505]",
    text: "text-white",
    accentText: "text-slate-400",
    accentColor: "#ffffff",
    border: "border-white/10",
    shadow: "shadow-2xl shadow-black",
  },
  {
    name: "STEALTH",
    bg: "bg-gradient-to-br from-black via-gray-900 to-green-950",
    text: "text-gray-300",
    accentText: "text-olive-300",
    accentColor: "#a3e635",
    border: "border-gray-800",
    shadow: "shadow-md shadow-lime-900/10",
  },
  {
    name: "COBALT",
    bg: "bg-gradient-to-br from-blue-900 via-cyan-900 to-teal-800",
    text: "text-cyan-100",
    accentText: "text-sky-300",
    accentColor: "#7dd3fc",
    border: "border-cyan-700",
    shadow: "shadow-xl shadow-sky-500/20",
  },
  {
    name: "NEON",
    bg: "bg-gradient-to-br from-pink-700 via-purple-700 to-blue-700",
    text: "text-white",
    accentText: "text-pink-300",
    accentColor: "#f472b6",
    border: "border-pink-500",
    shadow: "shadow-xl shadow-pink-500/20",
  },
  {
    name: "LUXE",
    bg: "bg-gradient-to-br from-[#fef3c7] via-[#fcd34d] to-[#b45309]",
    text: "text-[#4b3200]",
    accentText: "text-[#92400e]",
    accentColor: "#d97706",
    border: "border-[#eab308]",
    shadow: "shadow-lg shadow-amber-400/30",
  },
];

export const FONT_STYLES: FontStyle[] = [
  { name: "Inter", className: "font-inter" },
  { name: "Space Grotesk", className: "font-space-grotesk" },
  { name: "JetBrains Mono", className: "font-jetbrains-mono" },
  { name: "Roboto Mono", className: "font-roboto-mono" },
];
