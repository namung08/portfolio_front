import type { projectProps } from "../data/project";

interface ProjectModalProps {
  project: projectProps;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* 배경 오버레이 */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      />

      {/* 모달 컨테이너 */}
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="relative w-full max-w-4xl bg-gray-800 rounded-xl shadow-xl">
          {/* 닫기 버튼 */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-200"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* 모달 내용 */}
          <div className="p-8">
            <div className="flex flex-col md:flex-row gap-8 mb-8">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full md:w-[300px] h-[300px] object-cover rounded-lg shadow-md"
              />
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-gray-100 mb-4">
                  {project.title}
                </h2>
                <p className="text-gray-300 mb-4">{project.period}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tag.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-700 px-3 py-1 rounded-full text-sm text-gray-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-base text-gray-300 mb-4 leading-relaxed">
                  {project.one_line_description}
                </p>
                <div className="flex gap-4">
                  <a
                    href={project.github_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-gray-700 text-gray-100 rounded-lg font-medium hover:bg-gray-600 transition-colors"
                  >
                    GitHub
                  </a>
                  {project.project_link && (
                    <a
                      href={project.project_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-500 transition-colors"
                    >
                      프로젝트 보기
                    </a>
                  )}
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-100 mb-4">
                주요 기능
              </h3>
              <ul className="space-y-2">
                {project.detail.map((detail, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span className="text-gray-300">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              {project.intro.map((section, index) => (
                <div key={index} className="mb-8">
                  <h3 className="text-2xl font-semibold text-gray-100 mb-4">
                    {section.title}
                  </h3>
                  <div className="flex flex-col md:flex-row gap-4 mb-4 overflow-x-auto">
                    {section.thumbnail.map((img, imgIndex) => (
                      <img
                        key={imgIndex}
                        src={img}
                        alt={`${section.title} ${imgIndex + 1}`}
                        className="max-w-[300px] rounded-lg shadow-md"
                      />
                    ))}
                  </div>
                  <ul className="space-y-2">
                    {section.detail.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        <span className="text-gray-300">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-100 mb-4">
                역할
              </h3>
              <ul className="space-y-2">
                {project.role.map((role, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span className="text-gray-300">{role}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-100 mb-4">
                프로젝트 소감
              </h3>
              {project.impressions.map((impression, index) => (
                <div
                  key={index}
                  className="bg-gray-700 p-6 rounded-lg mb-4 shadow-sm"
                >
                  <h4 className="text-xl font-semibold text-blue-400 mb-3">
                    {impression.title}
                  </h4>
                  <p className="text-gray-200 leading-relaxed">
                    {impression.detail}
                  </p>
                </div>
              ))}
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-100 mb-4">
                트러블슈팅
              </h3>
              {project.troubleshooting.map((trouble, index) => (
                <div
                  key={index}
                  className="bg-gray-700 p-6 rounded-lg mb-4 shadow-sm"
                >
                  <h4 className="text-xl font-semibold text-blue-400 mb-3">
                    {trouble.title}
                  </h4>
                  <div className="space-y-2">
                    <p className="text-gray-200">
                      <span className="font-semibold text-gray-100">문제:</span>{" "}
                      {trouble.problem}
                    </p>
                    <p className="text-gray-200">
                      <span className="font-semibold text-gray-100">분석:</span>{" "}
                      {trouble.analysis}
                    </p>
                    <p className="text-gray-200">
                      <span className="font-semibold text-gray-100">해결:</span>{" "}
                      {trouble.solve}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
