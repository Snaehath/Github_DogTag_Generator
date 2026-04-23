import React, { useEffect, useState, useRef } from "react";
import { fetchGitHubUser } from "../api/githubApi";
import type { ColorScheme, FontStyle, GitHubUser } from "../types";
import DogTagPreview, { type DogTagPreviewHandle } from "../components/dogTagPreview";
import DogTagForm from "../components/dogTagForm";
import { COLOR_SCHEMES, FONT_STYLES } from "../constants";

const Home: React.FC = () => {
  const [userName, setUserName] = useState<string>("octocat");
  const [githubData, setGithubData] = useState<GitHubUser | null>(null);
  const [activeTheme, setActiveTheme] = useState<ColorScheme>(COLOR_SCHEMES[0]);
  const [activeFont, setActiveFont] = useState<FontStyle>(FONT_STYLES[0]);
  const [quote, setQuote] = useState<string>("Eat. Sleep. Code. Repeat.");
  const previewRef = useRef<DogTagPreviewHandle>(null);

  useEffect(() => {
    handleFetchUser();
  }, []);

  const handleDownload = () => {
    previewRef.current?.handleDownload();
  };

  const handleFetchUser = async () => {
    if (!userName) return;
    try {
      const user = await fetchGitHubUser(userName);
      setGithubData(user);
    } catch (error) {
      console.error(error);
    }
  };

 
  const handleThemeChange = (theme: ColorScheme) => {
    setActiveTheme(theme);
  };

  const handleFontChange = (font: FontStyle) => {
    setActiveFont(font);
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden font-inter">
      {/* Background elements */}
      <div className="animated-bg" />
      <div className="fixed inset-0 soft-glow pointer-events-none" />

      <main className="relative z-10 max-w-6xl mx-auto px-6 py-16 lg:py-24">
        <header className="text-center mb-20 space-y-6">
          <div className="inline-block">
            <h1 className="text-6xl md:text-8xl font-space-grotesk font-black tracking-[0.1em] text-white uppercase">
              DOG<span className="text-white/40">TAG</span>
            </h1>
          </div>
          <p className="text-slate-500 text-xl max-w-2xl mx-auto font-light leading-relaxed tracking-wide">
            The definitive GitHub identity forge.
          </p>
        </header>

        <div className="grid lg:grid-cols-[1fr_550px] gap-16">
          <div className="flex flex-col">
            <div className="glass-morphism rounded-3xl p-10 neon-border h-full">

              <div className="space-y-10">
                <div>
                  <label
                    htmlFor="username"
                    className="block text-[10px] font-space-grotesk font-bold text-slate-500 uppercase tracking-[0.3em] mb-4"
                  >
                    User Identification
                  </label>
                  <div className="flex gap-3">
                    <div className="relative flex-grow group">
                      <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none text-slate-600 group-focus-within:text-white transition-colors">
                        <span className="font-roboto-mono text-sm">@</span>
                      </div>
                      <input
                        type="text"
                        name="username"
                        id="username"
                        className="w-full pl-12 pr-5 py-5 bg-white/[0.02] border border-white/5 rounded-2xl focus:outline-none focus:ring-1 focus:ring-white/20 focus:border-white/20 transition-all font-roboto-mono text-white placeholder:text-slate-700 text-lg"
                        placeholder="username"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleFetchUser()}
                      />
                    </div>
                    <button
                      onClick={handleFetchUser}
                      className="px-10 bg-white text-black font-space-grotesk font-black text-sm rounded-2xl hover:bg-slate-200 transition-all active:scale-95 flex items-center gap-2 group"
                    >
                      SYNC
                    </button>
                  </div>
                </div>

                <DogTagForm
                  activeFont={activeFont}
                  onFontChange={handleFontChange}
                  colorTheme={activeTheme}
                  onThemeChange={handleThemeChange}
                  quote={quote}
                  onQuoteChange={setQuote}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="glass-morphism rounded-3xl p-10 neon-border h-full flex flex-col">
              
              <div className="flex-grow flex flex-col justify-center items-center py-10">
                <div className="relative group w-full flex justify-center">
                  <div className="relative w-full">
                    <DogTagPreview ref={previewRef} user={githubData} colorTheme={activeTheme} activeFont={activeFont} quote={quote} />
                  </div>
                </div>
              </div>

              {githubData && (
                <div className="mt-10">
                  <button
                    onClick={handleDownload}
                    className="w-full py-5 bg-transparent border border-white/10 text-white font-space-grotesk font-bold text-sm tracking-widest rounded-2xl hover:bg-white hover:text-black transition-all duration-500 active:scale-95 flex items-center justify-center gap-4 group"
                  >
                    <svg className="w-4 h-4 transition-transform group-hover:translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    DOWNLOAD ASSET
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
