import type { projectProps } from "../data/project";

interface ProjectCardProps {
  project: projectProps;
  onOpenModal: () => void;
}

const ProjectCard = ({ project, onOpenModal }: ProjectCardProps) => {
  return (
    <div
      className="bg-white rounded-xl shadow-md hover:-translate-y-1 transition-transform duration-300 overflow-hidden cursor-pointer h-full"
      onClick={onOpenModal}
    >
      <div className="h-full flex flex-col">
        {/* 썸네일 이미지 */}
        <div className="relative h-64">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* 프로젝트 정보 */}
        <div className="p-6 flex-1 flex flex-col">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            {project.title}
          </h2>
          <p className="text-gray-600 mb-3">{project.period}</p>

          {/* 태그 */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tag.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700"
              >
                {tag}
              </span>
            ))}
            {project.tag.length > 3 && (
              <span className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">
                ...
              </span>
            )}
          </div>

          {/* 한 줄 설명 */}
          <p className="text-gray-700 line-clamp-3">
            {project.one_line_description}
          </p>

          {/* 버튼 */}
          <div className="flex gap-4 mt-auto">
            <a
              href={project.github_link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
              onClick={(e) => e.stopPropagation()}
            >
              GitHub
            </a>
            {project.project_link && (
              <a
                href={project.project_link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
                onClick={(e) => e.stopPropagation()}
              >
                프로젝트 보기
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
