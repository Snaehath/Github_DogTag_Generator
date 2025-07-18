import React from "react";
import { COLOR_SCHEMES, FONT_STYLES } from "../constants";
import type { ColorScheme, FontStyle } from "../types";

interface DogTagFormProps {
  colorTheme: ColorScheme;
  activeFont: FontStyle;
  onThemeChange: (theme: ColorScheme) => void;
  onFontChange: (font: FontStyle) => void;
}

const DogTagForm: React.FC<DogTagFormProps> = ({
  onThemeChange,
  colorTheme,
  onFontChange,
  activeFont,
}) => {
  return (
    <div className="bg-white p-4 rounded-md shadow-sm space-y-6">
      {/* Theme Selector */}
      <div>
        <p className="text-md font-medium text-gray-800 mb-2">Select Theme</p>
        <div className="flex flex-wrap gap-2">
          {COLOR_SCHEMES.map((scheme) => (
            <button
              key={scheme.name}
              onClick={() => onThemeChange(scheme)}
              className={`px-3 py-1.5 text-sm rounded-md transition-all duration-200 ${
                colorTheme.name === scheme.name
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              {scheme.name}
            </button>
          ))}
        </div>
      </div>

      {/* Font Selector */}
      <div>
        <p className="text-md font-medium text-gray-800 mb-2">Select Font</p>
        <div className="flex flex-wrap gap-2">
          {FONT_STYLES.map((font) => (
            <button
              key={font.name}
              onClick={() => onFontChange(font)}
              className={`px-3 py-1.5 text-sm rounded-md transition-all duration-200 ${
                activeFont.name === font.name
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
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
