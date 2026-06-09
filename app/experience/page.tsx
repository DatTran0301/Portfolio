"use client";

import { Image } from "antd";

interface Experience {
  id: number;
  icon: React.ReactNode;
  name: string;
  years: string;
  description: string;
  project: string;
}

const experiencesData: Experience[] = [
  {
    id: 1,
    icon: (
      <Image
        src="https://blisshub.com/_next/image?url=%2Fimages%2Flogo_bliss.png&w=1920&q=75"
        alt="Bliss Hub"
        className="w-12 h-auto"
      />
    ),
    name: "Bliss Hub -  Unity Developer",
    years: "2025 - 2026",
    description: `BLISS HUB⁠ is a pioneering Social Game Studio focused on developing highly engaging games that not only entertain players, but also help them connect with one another in a natural and meaningful way.
      
    - Developed game logic, UI systems, and gameplay mechanics using Unity and C#.
- Built reusable UI components and optimized user experience across different screen sizes.
- Integrated third-party SDKs, APIs, advertisements, and analytics services.
- Participated in feature planning, technical design, and code reviews.
- Optimized performance and resolved issues for Android and iOS builds.
      `,
    project: "Match 3 Arena",
  },
  {
    id: 2,
    icon: (
      <Image
        src="https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsiZGF0YSI6ODIzMTQ0LCJwdXIiOiJibG9iX2lkIn19--50f8ca2e29e01dfbec6f9b212bf114be530ce66c/eyJfcmFpbHMiOnsiZGF0YSI6eyJmb3JtYXQiOiJ3ZWJwIiwicmVzaXplX3RvX2ZpdCI6WzE3MCxudWxsXX0sInB1ciI6InZhcmlhdGlvbiJ9fQ==--ce5706a9b5356bfcb66e4bb8a05142ce3cfc09ea/fds-software-logo.png"
        alt="FDS Soft"
        className="w-12 h-auto"
      />
    ),
    name: "FDS Soft - Unity Developer",
    years: "2024 - 2025",
    description: `Outsourcing Company Specializing in Web, App, and Software Development.

      - Developed AR mobile applications using Unity and AR technologies to enable interactive real-world experiences.
- Implemented and optimized UI/UX across multiple mobile devices, ensuring consistency with design specifications and responsive user experiences.
- Integrated AR features including image tracking, object placement, and real-world interaction mechanics.
- Integrated AppsFlyer SDK for attribution tracking, analytics, and campaign performance monitoring.
- Collaborated with backend developers to consume APIs, synchronize application data, and manage user interactions.
- Maintained, optimized, and enhanced application performance for Android and iOS platforms`,
    project: "Talentive",
  },
  {
    id: 3,
    icon: (
      <Image
        src="https://newstarpaper.vn/wp-content/uploads/elementor/thumbs/Logo-Chim-Hac-Final-01-scaled-e1731376847445-qwxevwoppcy3lb0wy66xegc8l7ifsy3sgkr1j33ngo.jpg"
        alt="New Star Paper"
        className="w-12 h-auto"
      />
    ),
    name: "New Star Paper - Front-end Developer",
    years: "2021 - 2024",
    description: `Develop and implement software solutions to streamline company management and sales processes for paper products.

                - Developed and maintained front-end features for ERP web and mobile applications.
                - Built responsive and user-friendly interfaces following UI/UX best practices.
                - Collaborated with stakeholders to refine requirements and improve user experience.
                - Integrated APIs and optimized application performance across multiple devices.
                `,
    project: "New Star Paper ERP",
  },
  {
    id: 4,
    icon: (
      <Image
        src="https://khuonviet.vn/wp-content/uploads/2025/08/logo-KV-color-Horizontal-e1755748925980.jpg"
        alt="Khuon Viet"
        className="w-12 h-auto"
      />
    ),
    name: "Khuon Viet - Unity Developer Intern",
    years: "2018 - 2021",
    description: `A company specializing in assembling arcade systems and produce arcade gameswith a top-down perspective.

- Developed and maintained gameplay systems for 2D fish shooting arcade games using Unity.
- Implemented new game features, mechanics, and content updates based on project requirements.
- Optimized performance, memory usage, and rendering to ensure smooth operation on embedded Linux hardware with limited resources.
- Collaborated with designers and team members to improve gameplay experience and game balance.
- Troubleshot and resolved technical issues across different arcade machine configurations.`,
    project: "Space King",
  },
];

export default function ExperiencePage() {
  console.log(JSON.stringify(experiencesData[2].description));
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Experience Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-4">
            My <span className="font-bold">Experience</span>
          </h1>
        </div>

        {experiencesData.map((experience, index) => (
          <div
            key={experience.id}
            className="w-full flex flex-col sm:flex-row items-start sm:items-center mb-8"
          >
            {/* Icon */}

            {/* Content */}
            <div className=" w-full bg-black border-2 border-white rounded-lg p-6 sm:p-8 shadow-md">
              <div className="w-full flex items-end justify-between mb-4">
                <div className="flex items-end justify-end">
                  <div className="bg-white w-14 h-14 rounded-xl p-2 mr-4 flex items-center justify-center">
                    {experience.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-white">
                    {experience.name}
                  </h3>
                </div>
                <p className="text-white text-xl">{experience.years}</p>
              </div>
              <div
                className="text-gray-400 mt-4"
                style={{ whiteSpace: "pre-line" }}
              >
                {experience.description}
              </div>
              <div className="text-gray-400 mt-4">
                <span className="font-bold">Project: </span>
                <span className="text-white">{experience.project}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
