import { Image } from "antd";
import { ArrowOpenLinkIcon } from "../components/SvgIcon";

const projectsData = [
  {
    name: "Match 3 Arena",
    icon: (
      <Image
        src="https://play-lh.googleusercontent.com/wPeSz9Pk79jQXOCZ1P42ZDUF_n8u7VOCbxfQK59Uh2gOVQKnle--4GO9n0Qj-m-fDw=w240-h480-rw"
        alt="Project One"
        className="w-16 h-16 rounded-lg"
      />
    ),
    description: "A mobile game developed using Unity and C#.",
    experience:
      "Published on Google Play with over 100,000 downloads and a 4.5-star rating.",
    url: "https://play.google.com/store/apps/details?id=com.match3arena.puzzleforge&hl=vi",
  },
  {
    name: "Talentive",
    icon: (
      <Image
        src="https://images.squarespace-cdn.com/content/v1/6364dbaadbe66f463c1b21d1/376abc61-1ca4-4077-9f1e-0d9af8491b46/LOGO+TALENTIVE.png?format=1500w"
        alt="Project Two"
        className="w-16 h-16 rounded-lg"
      />
    ),
    description: "A mobile app developed using Flutter and Dart.",
    experience:
      "Currently in development with a focus on providing a seamless user experience.",
    url: "https://www.talentiveapp.com/",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-4">
            My <span className="font-bold">Projects</span>
          </h1>
        </div>
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 items-center"
          >
            <div
              className={`flex justify-center ${
                index % 2 === 0 ? "sm:order-1" : "sm:order-2"
              }`}
            >
              <div className="p-2">{project.icon}</div>
            </div>

            <div
              className={`p-2 ${index % 2 === 0 ? "sm:order-2" : "sm:order-1"}`}
            >
              <h3 className="text-xl font-bold text-white">{project.name}</h3>
              <p className="text-gray-300 mt-4">{project.description}</p>
              <p className="text-white mt-4">{project.experience}</p>
              <ArrowOpenLinkIcon className="color-white w-10 mt-4" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
