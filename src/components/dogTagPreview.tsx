import React, { useRef } from "react";
import type { ColorScheme, FontStyle, GitHubUser } from "../types";
import { DoorOpen, Users } from "lucide-react";
import * as htmlToImage from "html-to-image";

interface DogTagPreviewProps {
  user: GitHubUser | null;
  colorTheme: ColorScheme;
  activeFont: FontStyle;
}

const DogTagPreview: React.FC<DogTagPreviewProps> = ({
  user,
  colorTheme,
  activeFont,
}) => {
  const dogTagRef = useRef<HTMLDivElement>(null);

  if (!user) return null;

  const memberSince = new Date(user.created_at).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
  });

  const handleDownload = async () => {
    if (!dogTagRef.current || !user) return;

    try {
      await document.fonts.ready;
      await new Promise((r) =>
        requestAnimationFrame(() => requestAnimationFrame(r))
      );
      const dataUrl = await htmlToImage.toPng(
        dogTagRef.current as HTMLElement,
        {
          pixelRatio: 3,
          backgroundColor: "transparent",
        }
      );

      const link = document.createElement("a");
      link.download = `${user.login}-dog-tag.png`;
      link.href = dataUrl;
      link.click();
    } catch (error) {
      console.error("oops, something went wrong!", error);
    }
  };

  return (
    <div ref={dogTagRef} className="relative">
      <div className="absolute top-23 left-1 z-30 flex gap-[2px]">
        {[...Array(10)].map((_, i) => {
          const offset = Math.sin(i * 0.6) * 4;
          return (
            <div
              key={i}
              className="w-2 h-2 rounded-full border border-gray-400 bg-gradient-to-br from-gray-200 to-gray-500 shadow-sm"
              style={{ transform: `translateY(${offset}px)` }}
            />
          );
        })}
      </div>
      <div className="absolute top-37 left-4  z-30 rotate-12 flex gap-[2px]">
        {[...Array(10)].map((_, i) => {
          const offset = Math.sin(i * 0.8) * 2;
          return (
            <div
              key={i}
              className="w-2 h-2 rounded-full border border-gray-400 bg-gradient-to-br from-gray-200 to-gray-500 shadow-sm"
              style={{ transform: `translateY(${offset}px)` }}
            />
          );
        })}
      </div>
      <div className="absolute top-22 left-31 z-30 -rotate-3 flex flex-col gap-[2.5px]">
        {[...Array(7)].map((_, i) => {
          const offset = Math.sin(i * 0.6) * 4;
          return (
            <div
              key={i}
              className="w-2 h-2 rounded-full border border-gray-400 bg-gradient-to-br from-gray-200 to-gray-500 shadow-sm"
              style={{ transform: `translateX(${offset}px)` }}
            />
          );
        })}
        <div>
          <div className="w-2 h-2 rounded-full border relative transform translate-x-1 border-gray-400 bg-gradient-to-br from-gray-200 to-gray-500 shadow-sm" />
          <div className="w-2.5 h-2.5 rounded-full border relative -top-2 -left-1/0.5 transform translate-x-1 border-gray-500 shadow-sm" />
        </div>
          <div className="w-2.5 h-2.5 rounded-full border relative -top-24 -left-1/2 transform translate-x-1 border-gray-500 shadow-sm" />
      </div>
      {/* first tag */}
      <div
        className={`relative w-[65%] left-25 top-5 p-5 mb-2 flex items-center gap-3 rounded-full text-sm border-2 z-20 
    ${colorTheme.bg} ${colorTheme.text} ${colorTheme.border} ${colorTheme.shadow} `}
      >
        {/* <div className="rounded-full w-2 h-2 bg-gray-300" /> */}
        {/*hole*/}
        <img
          src={user.avatar_url}
          alt="User avatar"
          crossOrigin="anonymous"
          className={`w-24 h-24 ml-5 rounded-full border-2 ${colorTheme.border}`}
        />
        <div className="flex flex-col gap-1">
          <h1
            className={`font-bold ${colorTheme.text} ${activeFont.className}`}
          >
            {user.name}
          </h1>
          <a href={user.html_url} target="_blank" rel="noopener noreferrer">
            <p className={`${colorTheme.accentText} ${activeFont.className}`}>
              @{user.login}
            </p>
          </a>
          <div className={`flex gap-6 mt-1 text-sm ${colorTheme.text}`}>
            <div className="flex gap-1">
              <DoorOpen className={`w-4 h-5 ${colorTheme.accentText}`} />
              <span className={`font-semibold ${activeFont.className}`}>
                {user.public_repos.toLocaleString()}
              </span>
            </div>
            <div className="flex gap-1">
              <Users className={`w-4 h-5 ${colorTheme.accentText}`} />
              <span className={`font-semibold ${activeFont.className}`}>
                {user.followers.toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* second tag */}
      <div
        className={`relative w-[65%] left-25 top-5 transform -translate-y-3 rotate-20 z-10 p-5 flex items-center gap-6 rounded-full text-sm border-2
    ${colorTheme.bg} ${colorTheme.text} ${colorTheme.border} ${colorTheme.shadow}`}
      >
        {/* <div className="rounded-full w-2 h-2 bg-gray-300" /> */}
        {/*hole*/}
        <div className="flex flex-col gap-1 ml-5">
          <div className={`flex gap-2 ${activeFont.className}`}>
            <span className="font-medium">Company:</span>
            <span className={colorTheme.accentText}>
              {user.company || "N/A"}
            </span>
          </div>

          <div className={`flex gap-2 ${activeFont.className}`}>
            <span className="font-medium">Location:</span>
            <span className={colorTheme.accentText}>
              {user.location || "N/A"}
            </span>
          </div>
          <div className={`flex gap-2 ${activeFont.className}`}>
            <span className="font-medium">Member Since:</span>
            <span className={colorTheme.accentText}>{memberSince}</span>
          </div>
          <div className="border border-gray-300 w-55 mr-2"></div>
          <p className={`italic text-center ${activeFont.className}`}>
            Eat. Sleep. Code. Repeat.
          </p>
        </div>
      </div>
      <button
        onClick={handleDownload}
        className="mt-4 w-20 py-2 relative -top-40 -left-100 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
      >
        Download
      </button>
    </div>
  );
};

export default DogTagPreview;
