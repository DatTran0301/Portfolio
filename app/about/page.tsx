"use client";

import BgAvatar from "../../public/image/bg_avatar.svg";

export default function AboutPage() {
  return (
    <div className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-28">
        <div className="order-1 lg:order-2 flex items-center justify-center animate-float mb-8">
          <div className="sm:w-1/4 xl:w-full md:w-1/2 flex justify-center">
            <BgAvatar />
          </div>
        </div>
        <div className="order-2 lg:order-1">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-black mb-4">
            About <span className="font-bold">Me</span>
          </h1>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Hi, I'm Dat.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mt-4">
            I'm a developer who enjoys building things that people can interact
            with. Most of my professional experience comes from Unity
            development, where I've worked on multiplayer games, AR
            applications, and mobile products published on Google Play and the
            App Store.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mt-4">
            As my curiosity grew, I expanded into frontend development and
            started building business systems, e-commerce platforms, and mobile
            applications with React, Next.js, and React Native.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mt-4">
            Outside of work, I enjoy exploring new technologies, creating
            personal projects, and continuously improving my skills. I believe
            great software comes from understanding both technology and the
            people who use it.
          </p>
        </div>
      </div>
    </div>
  );
}
