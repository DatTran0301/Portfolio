"use client";

import BgHome from "./../public/image/bg_home.svg";
import { FacebookIcon, GithubIcon, LinkedinIcon } from "./components/SvgIcon";

export default function Home() {
  console.log("Environment Variables:", process.env.TELEGRAM_BOT_TOKEN);
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center py-12 sm:py-16 lg:py-28">
          <div className="flex items-center justify-center order-1 lg:order-2 mt-8 lg:mt-0">
            <div className="sm:w-1/4 xl:w-full md:w-1/2 flex justify-center">
              <BgHome />
            </div>
          </div>

          <div className="order-2 lg:order-1 space-y-6 sm:space-y-8 animate-fade-in">
            {/* Greeting */}
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-black leading-tight">
                Hello I'am <span className="font-bold">Tran Thanh Dat</span>
              </h1>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-black flex items-center gap-2">
                <span>Unity</span>
                <span className="font-black text-white [-webkit-text-stroke:1.5px_black]">
                  Developer
                </span>
              </h2>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-black leading-tight">
                {" "}
                &{" "}
              </h1>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-black flex items-center gap-2">
                <span>Frontend</span>
                <span className="font-black text-white [-webkit-text-stroke:1.5px_black]">
                  Developer
                </span>
              </h2>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 text-base sm:text-2xl">
              <span className="text-gray-700">
                Based in{" "}
                <span className="font-bold text-black">HCM City, Vietnam</span>
              </span>
            </div>

            {/* Bio */}
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              4+ Years of Experience in Game Development. Building mobile games,
              AR applications, and modern web - app experiences.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 sm:gap-4 pt-4 sm:pt-6">
              {[
                {
                  name: "Facebook",
                  icon: <FacebookIcon className="w-5 h-5" />,
                  href: "https://www.facebook.com/tran.thanh.at.736642",
                },
                {
                  name: "GitHub",
                  icon: <GithubIcon className="w-5 h-5" />,
                  href: "https://github.com/DatTran0301",
                },
                {
                  name: "LinkedIn",
                  icon: <LinkedinIcon className="w-5 h-5" />,
                  href: "https://linkedin.com/in/datthanhtran0301",
                },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  title={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg border-2 border-black text-black flex items-center justify-center font-bold hover:bg-black hover:text-white hover:scale-110 transition-all duration-300 shadow-md hover:shadow-lg text-xs sm:text-sm"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating animation */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
