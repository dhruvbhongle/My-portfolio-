
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ProfileSection: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-10">
      <div className="w-full md:w-1/3 flex justify-center">
        <div className="relative w-64 h-64">
          <img
            src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=450"
            alt="Profile"
            className="profile-image w-full h-full"
          />
          <div className="absolute inset-0 rounded-full border-4 border-portfolio-blue opacity-20"></div>
        </div>
      </div>

      <div className="w-full md:w-2/3 text-center md:text-left">
        <h1 className="text-4xl font-bold mb-2">John Doe</h1>
        <h2 className="text-xl text-portfolio-blue mb-4">Frontend Developer</h2>
        <p className="text-gray-600 mb-6">
          I'm a passionate frontend developer with expertise in React, TypeScript, and modern web development. With a strong focus on creating beautiful, user-friendly interfaces, I bring designs to life with clean, efficient code. I enjoy solving complex problems and continually learning new technologies.
        </p>

        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <Button asChild>
            <Link to="/projects">View My Projects</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/contact">Contact Me</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
