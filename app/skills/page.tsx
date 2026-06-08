"use client";

import IconAppflyer from "../../public/image/icon_af.svg";
import IconXcode from "../../public/image/icon_xcode.svg";
import IconUnity from "../../public/image/icon_unity.svg";
import IconGit from "../../public/image/icon_git.svg";
import IconFirebase from "../../public/image/icon_firebase.svg";
import IconCsharp from "../../public/image/icon_c#.svg";
import IconAndroid from "../../public/image/icon_android.svg";
import IconAR from "../../public/image/icon_ar.svg";
import IconOOP from "../../public/image/icon_oop.svg";
import IconMobileGameOptimization from "../../public/image/icon_op.svg";
import IconTypescript from "../../public/image/icon_ts.svg";
import IconJavascript from "../../public/image/icon_js.svg";
import IconHtml from "../../public/image/icon_html.svg";
import IconCss from "../../public/image/icon_css.svg";
import IconDesignPatterns from "../../public/image/icon_designpatterns.svg";

interface Skill {
  id: number;
  name: string;
  icon: React.ReactNode;
}

const skillsData: Skill[] = [
  { id: 1, name: "Unity", icon: <IconUnity /> },
  { id: 2, name: "OOP", icon: <IconOOP /> },
  { id: 3, name: "C#", icon: <IconCsharp /> },
  { id: 4, name: "Design Patterns", icon: <IconDesignPatterns /> },
  {
    id: 5,
    name: "UX/UI",
    icon: <div className="text-black flex items-center">UX/UI</div>,
  },
  { id: 6, name: "Xcode", icon: <IconXcode /> },
  { id: 7, name: "Android Studio", icon: <IconAndroid /> },
  { id: 8, name: "Firebase", icon: <IconFirebase /> },
  { id: 9, name: "AR", icon: <IconAR /> },
  { id: 10, name: "AppFlyer", icon: <IconAppflyer /> },
  {
    id: 11,
    name: "Mobile Game Optimization",
    icon: <IconMobileGameOptimization />,
  },
  { id: 12, name: "Git", icon: <IconGit /> },
  { id: 13, name: "TypeScript", icon: <IconTypescript /> },
  { id: 14, name: "JavaScript", icon: <IconJavascript /> },
  { id: 15, name: "HTML", icon: <IconHtml className="w-30 h-30" /> },
  { id: 16, name: "CSS", icon: <IconCss className="w-30 h-30" /> },
  {
    id: 17,
    name: "Photoshop",
    icon: (
      <div className="bg-black text-white p-3 rounded-xl flex items-center">
        Ps
      </div>
    ),
  },
  {
    id: 5,
    name: "MUI Theme",
    icon: (
      <div className="bg-black text-white p-3 rounded-xl flex items-center">
        MUI
      </div>
    ),
  },
  {
    id: 5,
    name: "Ant Design",
    icon: (
      <div className="bg-black text-white p-3 rounded-xl flex items-center">
        Ant
      </div>
    ),
  },
];

export default function SkillsPage() {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50">
      {/* Skills Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-black mb-4">
            My <span className="font-bold">Skills</span>
          </h1>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            A collection of technologies and expertise I've developed through
            years of unity development and frontend development.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
          {skillsData.map((skill) => (
            <div
              id={skill.id.toString()}
              key={skill.id}
              className="group h-60 bg-white border-2 border-black rounded-lg p-6 sm:p-8 flex flex-col items-center justify-center text-center hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <div className="h-50 w-full flex items-center justify-center text-4xl sm:text-5xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <h3 className=" font-semibold text-black text-sm sm:text-base">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
