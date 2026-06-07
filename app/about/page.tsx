"use client";

import BgAvatar from "../../public/image/bg_avatar.svg";

export default function AboutPage() {
  return (
    <div className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-28">
        <div className="order-1 lg:order-2 flex items-center justify-center animate-float mb-8">
          <div>
            <BgAvatar className="w-full h-full" />
          </div>
        </div>
        <div className="order-2 lg:order-1">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-black mb-4">
            About <span className="font-bold">Me</span>
          </h1>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            I am a passionate Unity Developer with over 4 years of experience in
            creating engaging mobile games, multiplayer games, arcade games, and
            AR applications. My expertise lies in Unity, C#, multiplayer
            architecture, Firebase, SDK integrations, Android/iOS deployment,
            and cross-functional collaboration. I have successfully delivered
            commercial products from development to production release on Google
            Play and App Store.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mt-4">
            I am dedicated to continuous learning and staying updated with the
            latest industry trends. I thrive in collaborative environments and
            enjoy working with cross-functional teams to bring innovative ideas
            to life. My goal is to create immersive gaming experiences that
            captivate players and push the boundaries of interactive
            entertainment.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mt-4">
            If you're interested in learning more about my work or want to
            connect, feel free to reach out. I'm always open to new
            opportunities and collaborations in the gaming industry.
          </p>
        </div>
      </div>
    </div>
  );
}
