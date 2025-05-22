import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex items-center justify-between p-4 bg-gray-800 text-white shadow-md fixed top-0 left-0 w-full z-10">
      {/* 로고 */}
      <div>
        <a href="#" className="text-lg font-bold">
          {" "}
          🖥️ Portfolio
        </a>
      </div>

      {/* 내비게이션 */}
      <nav className="hidden md:flex space-x-6">
        <div className="relative group">
          <a href="#about-me" className="hover:text-gray-300 py-2">
            About
          </a>
          <div className="absolute left-0 mt-0 w-48 bg-gray-800 rounded-lg shadow-lg py-2 hidden group-hover:block">
            <div className="pt-2">
              <a
                href="#about-me"
                className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
              >
                About Me
              </a>
              <a
                href="#activity"
                className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
              >
                Activity
              </a>
            </div>
          </div>
        </div>
        <a
          href="https://www.notion.so/namung08/Hi-I-m-Sang-Jun-aa1b4285642c4c12a34dff895c3f05df?pvs=4#b7696f22d8ef4ecb981cd4ebcb18e6b9"
          className="hover:text-gray-300"
          target="_blank"
        >
          Projects
        </a>
        <a href="#contact-me" className="hover:text-gray-300">
          Contact
        </a>
      </nav>

      {/* 이력서 다운로드 버튼 */}
      <div>
        <a
          href="https://drive.google.com/file/d/1-2YQZQZQZQZQZQZQZQZQZQZQZQZQZQZQ/view?usp=sharing"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          target="_blank"
        >
          Resume
        </a>
      </div>

      {/* 모바일 햄버거 메뉴 */}
      <div className="md:hidden">
        <button
          className="text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      {/* 모바일 메뉴 */}
      {isMenuOpen && (
        <div className="absolute top-16 right-0 w-48 bg-gray-800 rounded-lg shadow-lg py-2 md:hidden">
          <a
            href="#about-me"
            className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
          >
            About Me
          </a>
          <a
            href="#activity"
            className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
          >
            Education
          </a>
          {/* <a
            href="https://www.notion.so/namung08/Hi-I-m-Sang-Jun-aa1b4285642c4c12a34dff895c3f05df?pvs=4#b7696f22d8ef4ecb981cd4ebcb18e6b9"
            className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
            target="_blank"
          >
            Projects
          </a> */}
          <a
            href="#contact-me"
            className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
