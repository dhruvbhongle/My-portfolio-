
import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card className="h-full overflow-hidden transition-all hover:shadow-lg">
      <CardHeader className="p-0">
        <div className="h-48 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform hover:scale-105"
          />
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <h3 className="text-xl font-bold mb-2 text-portfolio-darkBlue">
          {project.title}
        </h3>
        <p className="text-gray-600 line-clamp-3">{project.description}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <span className="text-sm text-portfolio-gray">{project.category}</span>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-portfolio-blue hover:underline text-sm"
          >
            View Project →
          </a>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
