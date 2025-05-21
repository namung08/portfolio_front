interface EducationInfoProps {
  period: string;
  whether: string;
  link: string;
  institution: string;
  course: string;
}

const EducationInfo = ({
  period,
  whether,
  link,
  institution,
  course,
}: EducationInfoProps) => {
  return (
    <div className="bg-gray-800 rounded-lg p-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
        <div className="text-sm text-gray-400">{period}</div>
        <div className="text-sm text-gray-400">{whether}</div>
      </div>
      <div className="mb-2">
        <a
          href={link}
          className="text-lg font-medium hover:underline"
          target="_blank"
        >
          {institution}
        </a>
      </div>
      <div className="text-gray-300">{course}</div>
    </div>
  );
};

const Education = () => {
  return (
    <section className="mb-5" id="education">
      <p className="text-3xl font-bold">📖 education</p>
      <hr className="border-t border-gray-700 my-3 w-full" />
      <div className="grid grid-cols-1 gap-4">
        <EducationInfo
          period="2020.03 ~ 2024.02"
          whether="졸업"
          link="https://info.ansan.ac.kr/info"
          institution="안산대학교"
          course="컴퓨터정보학과"
        />
        <EducationInfo
          period="2023.12 ~ 2024.06"
          whether="수료"
          link="https://blog.naver.com/it-edu"
          institution="KIC 캠퍼스"
          course="[AWS 클라우드 기반] 자바 & 스프링 활용 풀스택 개발"
        />
        <EducationInfo
          period="2024.04 ~ 2025.11"
          whether="학습중"
          link="https://sesac.seoul.kr/common/greeting.do"
          institution="SeSAC 청년취업사관학교"
          course="AWS 클라우드를 활용한 MSA 기반 자바 개발자 양성 과정"
        />
      </div>
    </section>
  );
};

export default Education;
