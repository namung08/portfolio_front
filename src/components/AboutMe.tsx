import profileImg from "../assets/img/img.jpg";

const AboutMe = () => {
  return (
    <section className="mb-10">
      <div id="about-me" className="flex-col md:flex-row pb-5 md:items-center">
        <div className="flex">
          <img
            src="https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f9d1-200d-1f4bb.svg"
            alt=""
            className="h-10 align-middle pr-2"
          />
          <h2 className="text-4xl font-bold mb-5">
            노력하는 개발자 이상준입니다.
          </h2>
        </div>
        <div className="border-l border-gray-400 pl-4">
          <p>
            귀사의 신입으로서
            <strong className="font-bold">성실하게 업무를 수행</strong>하며,
            끊임없이 배우고
            <strong className="font-bold">성장하는 개발자</strong>가 되겠습니다.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="max-w-xs md:max-w-sm flex justify-center items-center">
          <img
            src={profileImg}
            alt="내 프로필 사진"
            className="h-auto object-cover p-10"
          />
        </div>
        <div className="pl-0 md:pl-10 flex-1 pt-5 md:pt-10 text-center md:text-left">
          <section>
            <p className="pb-3">🎂 Birth</p>
            <p className="pb-3">2001.03.27</p>
          </section>
          <section>
            <p className="pb-3">✉️ E-Mail</p>
            <p className="pb-3">
              <a
                href="mailto:namung08@gmail.com"
                className="text-gray-400 hover:underline"
              >
                namung08@gmail.com
              </a>
            </p>
          </section>
          <section>
            <p className="pb-3">🐱 Github</p>
            <p className="pb-3">
              <a
                href="https://github.com/namung08"
                className="text-gray-400 hover:underline"
                target="_blank"
              >
                github.com/namung08
              </a>
            </p>
          </section>
          <section>
            <p className="pb-3">💾 Tech Blog</p>
            <p className="pb-3">
              <a
                href="https://namung08.tistory.com/"
                className="text-gray-400 hover:underline"
                target="_blank"
              >
                namung08.tistory.com
              </a>
            </p>
          </section>
        </div>
      </div>
      <div className="mt-10">
        <p className="text-3xl font-bold">🙋‍♂️ About me</p>
        <hr className="border-t border-gray-700 my-3 w-full" />
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Spring Boot</strong>를 사용하여
            <strong>Rest API</strong>를 만들 수 있습니다.
          </li>
          <li>
            개발 과정에서 유지보수를 위해서 코드를 어떻게 짜야할지 생각합니다.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AboutMe;
