import { useState, useEffect, useRef } from "react";
import { personal_projects } from "../data/project";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

const ProjectList = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<
    (typeof personal_projects)[0] | null
  >(null);
  const directionRef = useRef<"next" | "prev">("next");

  const nextSlide = () => {
    directionRef.current = "next";
    setCurrentIndex((prevIndex) =>
      prevIndex === personal_projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    directionRef.current = "prev";
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? personal_projects.length - 1 : prevIndex - 1
    );
  };

  // 자동 슬라이드
  useEffect(() => {
    const timer = setInterval(() => {
      if (directionRef.current === "next") {
        nextSlide();
      } else {
        prevSlide();
      }
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="mb-5" id="project">
      <p className="text-3xl font-bold">👨‍💻 프로젝트</p>
      <hr className="border-t border-gray-700 my-3 w-full" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <p className="text-2xl font-bold mb-8">📝 개인 프로젝트</p>
        <div className="relative">
          {/* 이전 버튼 */}
          <button
            onClick={prevSlide}
            className="absolute -left-12 top-1/2 -translate-y-1/2 z-10 bg-white/50 text-gray-600 p-2 rounded-full hover:bg-white/70 transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* 프로젝트 카드 */}
          <div className="overflow-hidden h-[500px]">
            <div
              className="flex transition-transform duration-500 ease-in-out h-full"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {personal_projects.map((project, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4 h-full">
                  <div className="h-full max-w-3xl mx-auto">
                    <ProjectCard
                      project={project}
                      onOpenModal={() => setSelectedProject(project)}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 다음 버튼 */}
          <button
            onClick={nextSlide}
            className="absolute -right-12 top-1/2 -translate-y-1/2 z-10 bg-white/50 text-gray-600 p-2 rounded-full hover:bg-white/70 transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* 인디케이터 */}
          <div className="flex justify-center gap-2 mt-4">
            {personal_projects.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  directionRef.current = index > currentIndex ? "next" : "prev";
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-colors ${
                  currentIndex === index ? "bg-blue-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={true}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default ProjectList;
