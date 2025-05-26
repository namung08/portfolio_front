import currency_converter from "./assets/project/Currency Converter/first.png";
import check_currency_code from "./assets/project/Currency Converter/currency_code.png";
import selling_buying from "./assets/project/Currency Converter/Selling&Buying.png";

export interface projectProps {
  title: string;
  thumbnail?: string;
  period: string;
  tag: string[];
  one_line_description: string;
  developer: string;
  github_link: string;
  project_link?: string;
  detail: string[];
  intro: {
    title: string;
    thumbnail: string[];
    detail: string[];
  }[];
  role: string[];
  impressions: {
    title: string;
    detail?: string;
  }[];
  troubleshooting: {
    title: string;
    problem: string;
    analysis: string;
    solve: string;
  }[];
  ppt?: string;
}

export const personal_projects: projectProps[] = [
  {
    title: "환율 계산기",
    thumbnail: currency_converter,
    period: "2024.01.08 ~ 2024.01.26",
    tag: ["JAVA", "JFrame", "Open API"],
    one_line_description: "한국수출입은행의 Open API를 사용한 환율 계산기",
    developer: "개인",
    github_link: "github.com/namung08/autoExchanged",
    detail: [
      "일일 환율 조회 : 한국수출입은행의 open API를 사용하여 일일 환율 데이터를 이용해 환율을 계산하는 프로그램입니다.",
      "환율 변환 : 23개국의 환율을 가져와 KRW 를 시작하여 구매와 다른 나라의 돈을 우리나라 돈으로 얼마를 구매 할 수 있는지 확인할 수 있습니다.",
      "간편한 사용자 인터페이스 : JFrame을 활용하여 직관적이고 사용하기 쉬운 인터페이스를 제공합니다.",
    ],
    intro: [
      {
        title: "첫 화면",
        thumbnail: [currency_converter],
        detail: [
          "초기에 보이는 화면",
          "'판매한다', '구매한다', '통화코드 확인'이라는 버튼이 있습니다.",
        ],
      },
      {
        title: "환율 코드 확인",
        thumbnail: [check_currency_code],
        detail: [
          "'통화 코드 확인' 버튼을 누르면 나타나는 화면",
          "해당 화면에서는 통화 코드와 그에 해당하는 국가명을 확인할 수 있습니다.",
          "총 23개 국가의 통화 코드를 확인할 수 있습니다.",
        ],
      },
      {
        title: "판매 & 구매버튼",
        thumbnail: [selling_buying],
        detail: [
          "수수료는 제외된 결과를 확인 할 수 있습니다.",
          "판매 시, 입력된 통화를 KRW으로 판매합니다",
          "구매 시, KRW으로 입력받은 통화를 구매합니다",
        ],
      },
    ],
    role: [
      "JFrame을 사용하여 UI/UX 인터페이스를 생성",
      "한국수출입은행의 Open API를 데이터에 연결하여 실시간 환율 정보 획득",
    ],
    impressions: [
      {
        title: "계획은 언제나 뒤집힐 수 있다.",
        detail:
          "처음 계획은 콘솔 입력을 통한 데이터 통신이었습니다. 하지만 완성된 결과가 사용하기에 조금 어려웠습니다. 그래서 사용자가 더 쉽게 사용할 수 있는 방법을 고민하다가, 대학교에서 잠깐 배웠던 JFrame을 사용하는 것이 어떨까 생각이 들었습니다. 그래서 학교 책을 참고하여 공부하며 만들었습니다.",
      },
      {
        title: "부가 설명을 달아야 한다.",
        detail:
          "JFrame를 사용하여 처음에는 사용하기 쉬울 것이라고 생각했습니다. 하지만 나중에 다시 사용해보니, 판매와 구매가 외화를 판매하는 것인지, 아니면 한국 돈을 판매하는 것인지를 잘 모르겠어서 코드를 다시 확인하고 공부했습니다. 이를 통해 사용자가 이해하기 쉽도록 추가 설명을 제공하는 것이 중요하다는 것을 깨달았습니다.",
      },
      {
        title: "Open API의 사용",
        detail:
          "처음으로 Open API를 사용하여 한국수출입은행의 현재 환율 데이터를 가져오게 되었는데, 사용 방법을 모르는 상황이었다. 그러나 프로젝트를 진행하면서 Open API의 사용 방법을 익혔고, 이 경험이 유익했다.",
      },
    ],
    troubleshooting: [
      {
        title: "JFrame 레이아웃 구성의 어려움",
        problem:
          "JFrame을 처음 사용하면서 컴포넌트 배치와 레이아웃 구성에 어려움을 겪었습니다. 특히 여러 컴포넌트를 효율적으로 배치하는 것이 주요 과제였습니다.",
        analysis:
          "JFrame의 기본 레이아웃 매니저만으로는 복잡한 UI 구성이 어려웠으며, 컴포넌트 간의 간격과 정렬이 일관되지 않았습니다.",
        solve:
          "GridLayout과 BorderLayout을 조합하여 사용함으로써 문제를 해결했습니다. GridLayout으로 전체적인 구조를 잡고, BorderLayout으로 세부 컴포넌트를 배치하여 일관된 UI를 구현했습니다. 또한 레이아웃 설계를 먼저 스케치하여 구현 전에 구조를 명확히 했습니다.",
      },
      {
        title: "Open API 데이터 처리 최적화",
        problem:
          "한국수출입은행 Open API를 통해 받아온 환율 데이터를 효율적으로 처리하고 표시하는 데 어려움이 있었습니다.",
        analysis:
          "API 응답 데이터의 구조가 복잡하고, 실시간으로 데이터를 가져오는 과정에서 성능 이슈가 발생했습니다.",
        solve:
          "데이터를 캐싱하여 불필요한 API 호출을 줄이고, 필요한 데이터만 추출하여 사용자 인터페이스에 표시하도록 최적화했습니다. 또한 에러 처리 로직을 추가하여 API 호출 실패 시에도 안정적인 서비스를 제공할 수 있도록 했습니다.",
      },
    ],
  },
];

export const cooperative_projects = [{}];

export const company_projects = [{}];
