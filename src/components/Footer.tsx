import Icon from "./common/icons/Icon";
import {
  GMAIL_PATH,
  GITHUB_PATH,
  TISTORY_PATH,
} from "./common/icons/iconPaths";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center">
        {/* 소셜 미디어/연락처 링크 */}
        <div className="flex space-x-6" id="contact-me">
          <a
            href="mailto:namung08@gmail.com"
            className="hover:text-white transition-colors duration-200"
            target="_blank"
            aria-label="Gmail"
          >
            <Icon path={GMAIL_PATH} />
          </a>
          <a
            href="https://github.com/namung08"
            className="hover:text-white transition-colors duration-200"
            target="_blank"
            aria-label="GitHub"
          >
            <Icon path={GITHUB_PATH} />
          </a>
          <a
            href="https://namung08.tistory.com/"
            className="hover:text-white transition-colors duration-200"
            target="_blank"
            aria-label="Tech Blog"
          >
            <Icon path={TISTORY_PATH} viewBox="0 0 459 459" />
          </a>
        </div>
      </div>

      {/* 저작권 정보 */}
      <div className="mt-8 text-center text-gray-500 text-sm">
        &copy; 2023 이상준. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
