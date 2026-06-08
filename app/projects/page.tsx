import { Divider, Image } from "antd";
import { ArrowOpenLinkIcon } from "../components/SvgIcon";

const projectsWorkedOnData = [
  {
    number: "01",
    name: "Match 3 Arena",
    icon: (
      <div className="flex items-center justify-center bg-white w-full h-96 rounded-4xl overflow-hidden">
        <Image
          width={600}
          src="https://play-lh.googleusercontent.com/wPeSz9Pk79jQXOCZ1P42ZDUF_n8u7VOCbxfQK59Uh2gOVQKnle--4GO9n0Qj-m-fDw=w240-h480-rw"
          alt="Project One"
          preview={false}
        />
      </div>
    ),
    description:
      "A casual 1v1 multiplayer Match-3 game with high-quality 2D graphics, available on Android and iOS.",
    experience:
      "Real-time multiplayer architecture, matchmaking systems, SDK integration, UX/UI design, team collaboration, and mobile game publishing on Google Play and App Store.",
    url: "https://play.google.com/store/apps/details?id=com.match3arena.puzzleforge&hl=vi",
  },
  {
    number: "02",
    name: "Talentive",
    icon: (
      <div className="flex items-center justify-center bg-gray-800 w-full h-96 rounded-4xl overflow-hidden">
        <Image
          width={500}
          src="https://images.squarespace-cdn.com/content/v1/6364dbaadbe66f463c1b21d1/376abc61-1ca4-4077-9f1e-0d9af8491b46/LOGO+TALENTIVE.png?format=1500w"
          alt="Project Two"
          preview={false}
        />
      </div>
    ),
    description:
      "An AR-powered player assessment application that combines real-world testing with interactive gameplay experiences.",
    experience:
      "Built and maintained AR features, integrated Firebase and third-party services, collaborated with backend and product teams, optimized performance, and gained experience in production deployment across Android and iOS platforms.",
    url: "https://www.talentiveapp.com/",
  },
  {
    number: "03",
    name: "Space King",
    icon: (
      <div className="flex items-center justify-center bg-white w-full h-96 rounded-4xl overflow-hidden">
        <iframe
          src="https://drive.google.com/file/d/1m3h2JfBORSLjqmZgvJdDLgOXCnVpLZgV/preview"
          className="w-full h-full"
          allow="autoplay"
          allowFullScreen
        />
      </div>
    ),
    description:
      "A multiplayer fish shooting arcade game where up to 10 players can play together in real time, featuring 2D/3D graphics and interactive gameplay.",
    experience:
      "Object-oriented programming (OOP), socket-based networking, multiplayer game architecture, and Unity game development fundamentals.",
    url: "https://drive.google.com/file/d/1m3h2JfBORSLjqmZgvJdDLgOXCnVpLZgV/preview",
  },
  {
    number: "04",
    name: "NewStarPaper ERP Sales - Web and App Shop",
    icon: (
      <div className="flex items-center justify-center bg-gray-800 w-full h-96 rounded-4xl overflow-hidden">
        <Image
          width={900}
          height={390}
          src="/image/img_erp.webp"
          alt="Project Two"
          preview={false}
        />
      </div>
    ),
    description:
      "A digital ecosystem for a paper manufacturing company, including an ERP management system, e-commerce website, and mobile shopping application. The platform streamlines business operations, product management, sales processes, and customer purchasing experiences across web and mobile platforms.",
    experience:
      "Developed and maintained web and mobile applications using React, Next.js, and React Native. Collaborated with Business Analysts, designers, and stakeholders to improve UX/UI and business workflows. Gained experience in enterprise software development, e-commerce systems, cross-platform mobile development, and production deployment for Android and iOS. (Next.js, React.js, React Native, JavaScript, HTML, CSS, MUI, Ant Design, Android Studio, Xcode)",
    url: "",
  },
  {
    number: "05",
    name: "VThinkTech",
    icon: (
      <div className="flex items-center justify-center bg-gray-800 w-full h-96 rounded-4xl overflow-hidden">
        <Image
          width={600}
          src="https://vthinktech.vn/wp-content/uploads/2023/11/logo.png"
          alt="Project Two"
          preview={false}
        />
      </div>
    ),
    description:
      "A business website designed to present the company's web development services, project portfolio, and outsourcing capabilities.",
    experience:
      "Worked with WordPress customization, theme configuration, content management, responsive design, and website optimization for better user engagement and online presence. (WordPress, HTML, CSS, JavaScript)",
    url: "https://vthinktech.vn/",
  },
  {
    number: "06",
    name: "Mobileland App",
    icon: (
      <div className="flex items-center justify-center bg-gray-800 w-full h-96 rounded-4xl overflow-hidden">
        <Image
          width={900}
          src="/image/img_mobileland.png"
          alt="Project Two"
          preview={false}
        />
      </div>
    ),
    description:
      "A mobile application that allows users to view and track land planning information, helping them access zoning and land-use data conveniently.",
    experience:
      "A mobile application for searching and monitoring land planning information through interactive maps and geographic data. (React Native / Google Maps API / REST API)",
    url: "https://vthinktech.vn/",
  },
];

const myProjectsData = [
  {
    number: "01",
    name: "Tank Shooter (Unity)- Game Development",
    icon: (
      <div className="relative flex items-center justify-center bg-white w-full h-96 rounded-4xl overflow-hidden">
        <Image
          width={600}
          src="/image/icon_tank_shooter.png"
          alt="Tank Shooter"
          preview={false}
        />
        <a
          href="/unity/TankShooter/index.html"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 flex items-center justify-center"
        >
          <span className="px-6 py-3 bg-black text-white rounded-lg">
            Play Game
          </span>
        </a>
      </div>
    ),
    description:
      "A top-down hyper-casual tank shooting game featuring fast-paced combat, simple controls, and engaging arcade-style gameplay designed for mobile devices.",
    experience:
      "Designed and implemented core gameplay mechanics, enemy AI, shooting systems, game balancing, and UI/UX. Gained hands-on experience in game architecture, optimization, and independent game development using Unity.",
    url: "/unity/TankShooter/index.html",
  },
  {
    number: "02",
    name: "Solitaire Game (React + Vite)- Frontend Development",
    icon: (
      <div className="relative flex items-center justify-center bg-white w-full h-90 rounded-4xl overflow-hidden">
        <Image
          width={600}
          src="/image/img_solitaire_game.png"
          alt="Solitaire Web Game"
          preview={false}
        />
        <a
          href="https://solitaire-game-vite.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 flex items-center justify-center"
        >
          <span className="px-6 py-3 bg-black text-white rounded-lg">
            Play Game
          </span>
        </a>
      </div>
    ),
    description:
      "A classic Solitaire card game recreated for the web, providing a smooth and engaging user experience through modern frontend technologies.",
    experience:
      "Developed complex UI interactions, managed application state, implemented game logic, and improved frontend architecture and performance optimization skills. (React, Vite, TypeScript, CSS)",
    url: "https://solitaire-game-vite.vercel.app",
  },
  {
    number: "03",
    name: "Demo Monitor Web (React + Vite)- Frontend Development",
    icon: (
      <div className="flex items-center justify-center bg-white w-full h-90 rounded-4xl overflow-hidden">
        <Image
          width={600}
          src="/image/img_demo_monitor_web.png"
          alt="Solitaire Web Game"
          preview={false}
        />
      </div>
    ),
    description:
      "A web dashboard prototype for tracking, managing, and visualizing business data through interactive charts and reporting interfaces.",
    experience:
      "Designed dashboard layouts, developed reusable UI components, integrated mock data sources, and gained experience building data-driven user interfaces. (React, Vite, TypeScript, Chart.js/Recharts, CSS)",
    url: "https://vector-info-tech-monitor-fe.vercel.app",
  },
  {
    number: "04",
    name: "HookHook - Game Jam 2019 - Gameloft",
    icon: (
      <div className="flex items-center justify-center bg-white w-full h-90 rounded-4xl overflow-hidden">
        <Image
          width={600}
          src="/image/img_hookhook.png"
          alt="Solitaire Web Game"
          preview={false}
        />
      </div>
    ),
    description:
      "A hyper-casual game developed within 24 hours during a Game Jam competition organized by Gameloft. The project focused on delivering a complete and playable game experience under a tight deadline.",
    experience:
      "Collaborated in a fast-paced team environment, rapidly prototyped gameplay mechanics, managed development priorities, and gained experience delivering a functional game within a limited timeframe.",
    url: "https://drive.google.com/file/d/1kBxmbZqHzNWY6-p_qD7Mgk5duAHPbITx/preview",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-4">
            Commercial <span className="font-bold"> Projects</span>
          </h1>
        </div>
        {projectsWorkedOnData.map((project, index) => (
          <div
            key={index}
            className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-20 items-center"
          >
            <div
              className={`flex justify-center ${
                index % 2 === 0 ? "sm:order-1" : "sm:order-2"
              }`}
            >
              {project.icon}
            </div>

            <div
              className={`p-2 ${index % 2 === 0 ? "sm:order-2" : "sm:order-1"}`}
            >
              <h3 className="text-5xl font-bold text-white">
                {project.number}
              </h3>
              <h3 className="text-3xl font-bold text-white mt-4">
                {project.name}
              </h3>
              <p className="text-gray-300 mt-4">{project.description}</p>
              <p className="text-white mt-4">
                <span className="text-gray-300 mt-4">What I learned:</span>{" "}
                {project.experience}
              </p>
              {project.url !== "" && (
                <a
                  href={project.url}
                  title={project.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ArrowOpenLinkIcon className="text-gray-400 w-8 mt-4 hover:text-white hover:scale-110" />
                </a>
              )}
            </div>
          </div>
        ))}

        <div className="border-t border-gray-800 h-px w-full mt-12 mb-20" />
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-4">
            Personal <span className="font-bold">Projects</span>
          </h1>
        </div>

        {myProjectsData.map((project, index) => (
          <div
            key={index}
            className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-8 items-center"
          >
            <div
              className={`flex justify-center ${
                index % 2 === 0 ? "sm:order-1" : "sm:order-2"
              }`}
            >
              {project.icon}
            </div>

            <div
              className={`p-2 ${index % 2 === 0 ? "sm:order-2" : "sm:order-1"}`}
            >
              <h3 className="text-5xl font-bold text-white">
                {project.number}
              </h3>
              <h3 className="text-3xl font-bold text-white mt-4">
                {project.name}
              </h3>
              <p className="text-gray-300 mt-4">{project.description}</p>
              <p className="text-white mt-4">
                <span className="text-gray-300 mt-4">What I learned:</span>{" "}
                {project.experience}
              </p>
              {project.url !== "" && (
                <a
                  href={project.url}
                  title={project.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ArrowOpenLinkIcon className="text-gray-400 w-8 mt-4 hover:text-white hover:scale-110" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
