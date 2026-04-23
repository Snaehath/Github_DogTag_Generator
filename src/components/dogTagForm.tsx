import React from "react";
import { COLOR_SCHEMES, FONT_STYLES } from "../constants";
import type { ColorScheme, FontStyle } from "../types";

interface DogTagFormProps {
  colorTheme: ColorScheme;
  activeFont: FontStyle;
  quote: string;
  onThemeChange: (theme: ColorScheme) => void;
  onFontChange: (font: FontStyle) => void;
  onQuoteChange: (quote: string) => void;
}

const DogTagForm: React.FC<DogTagFormProps> = ({
  onThemeChange,
  colorTheme,
  onFontChange,
  activeFont,
  quote,
  onQuoteChange,
}) => {
  return (
    <div className="space-y-12">
      {/* Quote Input */}
      <div>
        <label
          htmlFor="quote"
          className="block text-[10px] font-space-grotesk font-bold text-slate-500 uppercase tracking-[0.3em] mb-4"
        >
          Tag Motto / Quote
        </label>
        <div className="relative group">
          <input
            type="text"
            name="quote"
            id="quote"
            className="w-full px-5 py-5 bg-white/[0.02] border border-white/5 rounded-2xl focus:outline-none focus:ring-1 focus:ring-white/20 focus:border-white/20 transition-all font-roboto-mono text-white placeholder:text-slate-700 text-lg"
            placeholder="Custom Motto"
            value={quote}
            onChange={(e) => onQuoteChange(e.target.value)}
          />
        </div>
      </div>

      {/* Theme Selector */}
      <div className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="w-1 h-3 bg-white/20" />
          <p className="text-[10px] font-space-grotesk font-bold text-slate-500 uppercase tracking-[0.3em]">Visual Matrix</p>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {COLOR_SCHEMES.map((scheme) => (
            <button
              key={scheme.name}
              onClick={() => onThemeChange(scheme)}
              className={`px-3 py-4 text-[9px] font-space-grotesk uppercase tracking-[0.2em] rounded-xl transition-all duration-500 border ${
                colorTheme.name === scheme.name
                  ? "bg-white text-black border-white shadow-[0_10px_30px_rgba(255,255,255,0.1)] scale-105"
                  : "bg-white/[0.02] border-white/5 text-slate-600 hover:border-white/20 hover:text-slate-300"
              }`}
            >
              {scheme.name}
            </button>
          ))}
        </div>
      </div>

      {/* Font Selector */}
      <div className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="w-1 h-3 bg-white/20" />
          <p className="text-[10px] font-space-grotesk font-bold text-slate-500 uppercase tracking-[0.3em]">Typeface Matrix</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {FONT_STYLES.map((font) => (
            <button
              key={font.name}
              onClick={() => onFontChange(font)}
              className={`px-3 py-4 text-[9px] font-space-grotesk uppercase tracking-[0.2em] rounded-xl transition-all duration-500 border ${
                activeFont.name === font.name
                  ? "bg-white text-black border-white shadow-[0_10px_30px_rgba(255,255,255,0.1)] scale-105"
                  : "bg-white/[0.02] border-white/5 text-slate-600 hover:border-white/20 hover:text-slate-300"
              }`}
            >
              {font.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DogTagForm;
