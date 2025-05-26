import currency_converter from "../assets/project/Currency Converter/first.png";
import check_currency_code from "../assets/project/Currency Converter/currency_code.png";
import selling_buying from "../assets/project/Currency Converter/Selling&Buying.png";
import todo_main from "../assets/project/todo list/main.png";
import todo_main_cookie from "../assets/project/todo list/maincookie.png";
import todo_add from "../assets/project/todo list/add.png";
import todo_add_cookie from "../assets/project/todo list/cookie.png";
import memo_main from "../assets/project/memo/main.png";
import memo_write from "../assets/project/memo/write.png";
import memo_edit from "../assets/project/memo/edit.png";

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
  {
    title: "todo-list",
    thumbnail: todo_main,
    period: "2025.04.25",
    tag: ["React", "TypeScript", "Vite"],
    one_line_description: "쿠키를 사용하여 Todo List를 생성하는 웹 페이지",
    developer: "개인",
    github_link: "github.com/namung08/todo_list",
    project_link: "https://todo-list-git-main-namung08s-projects.vercel.app",
    detail: [
      "React와 TypeScript를 활용한 현대적인 Todo List 애플리케이션",
      "React Cookie를 활용한 데이터 영구 저장 기능 구현",
      "할 일 추가, 수정, 삭제 기능 구현",
      "반응형 디자인으로 모든 디바이스에서 최적화된 사용자 경험 제공",
    ],
    intro: [
      {
        title: "메인 화면",
        thumbnail: [todo_main],
        detail: [
          "초기 웹 화면에서 ListNumber를 통해 추가되는 내용의 seq 값을 관리",
          "전체 삭제 버튼을 통한 모든 할 일 목록 삭제 기능",
        ],
      },
      {
        title: "할 일 추가",
        thumbnail: [todo_add],
        detail: [
          "Input 박스를 통해 새로운 할 일 추가",
          "각 할 일마다 고유한 seq 값 부여",
          "개별 삭제 버튼을 통한 선택적 삭제 기능",
        ],
      },
      {
        title: "쿠키 데이터 관리",
        thumbnail: [todo_main_cookie, todo_add_cookie],
        detail: [
          "React Cookie를 활용한 데이터 영구 저장",
          "ListNumber를 통한 seq 값 자동 증가 및 관리",
          "페이지 새로고침 시에도 데이터 유지",
        ],
      },
    ],
    role: [
      "React와 TypeScript를 활용한 프론트엔드 개발",
      "React Cookie를 활용한 데이터 관리 구현",
    ],
    impressions: [
      {
        title: "첫 프론트엔드 프로젝트",
        detail:
          "학원에서 진행한 첫 프로젝트이자 프론트엔드 지식을 활용할 수 있는 좋은 기회였습니다. React와 TypeScript의 기본 개념을 실제 프로젝트에 적용하며 실력을 향상시킬 수 있었습니다.",
      },
      {
        title: "데이터 저장 방식의 선택",
        detail:
          "처음에는 Local Storage나 Session Storage를 고려했지만, Cookie를 활용한 데이터 관리 방법을 학습하고자 Cookie를 선택했습니다. 이를 통해 웹 스토리지의 다양한 방식을 이해할 수 있었습니다.",
      },
    ],
    troubleshooting: [
      {
        title: "쿠키 데이터 관리 최적화",
        problem:
          "쿠키에 데이터를 저장하고 관리하는 과정에서 성능 이슈가 발생했습니다.",
        analysis:
          "불필요한 쿠키 접근과 데이터 갱신으로 인한 성능 저하가 있었습니다.",
        solve:
          "쿠키 접근을 최소화하고, 필요한 데이터만 선택적으로 업데이트하도록 로직을 개선했습니다. 또한 데이터 구조를 최적화하여 쿠키 사용을 효율화했습니다.",
      },
      {
        title: "TypeScript 타입 정의",
        problem: "Todo 항목의 타입 정의와 상태 관리에 어려움이 있었습니다.",
        analysis: "TypeScript의 타입 시스템을 효과적으로 활용하지 못했습니다.",
        solve:
          "인터페이스를 정의하고 제네릭을 활용하여 타입 안정성을 높였습니다. 이를 통해 개발 시 발생할 수 있는 타입 관련 오류를 사전에 방지할 수 있었습니다.",
      },
    ],
  },
  {
    title: "메모 웹 애플리케이션",
    thumbnail: memo_main,
    period: "2025.05.13 - 2025.05.19",
    tag: ["Spring Boot", "React", "TypeScript", "MariaDB", "Docker"],
    one_line_description: "Spring Boot와 React를 활용한 메모 웹 애플리케이션",
    developer: "개인",
    github_link: "github.com/namung08/memo_web_application",
    project_link: "https://memo-web-application.vercel.app",
    detail: [
      "Spring Boot와 React(Vite + TypeScript)를 사용한 메모 웹 애플리케이션",
      "MariaDB를 활용한 데이터 영구 저장 기능 구현",
      "Docker Compose를 통한 개발 및 배포 환경 컨테이너화",
      "메모 CRUD 기능 구현 및 사용자 편의성 고려한 UI 설계",
    ],
    intro: [
      {
        title: "메인 페이지",
        thumbnail: [memo_main],
        detail: [
          "메모 목록 확인 기능",
          "새 메모 작성 버튼을 통한 메모 추가 기능",
          "간단하고 직관적인 UI/UX 설계",
        ],
      },
      {
        title: "메모 작성 및 수정",
        thumbnail: [memo_write, memo_edit],
        detail: [
          "제목과 내용을 입력하여 메모 작성",
          "기존 메모 수정 기능",
          "사용자 친화적인 입력 폼 구현",
        ],
      },
    ],
    role: [
      "Spring Boot와 React를 사용한 프론트엔드/백엔드 연동",
      "Docker Compose를 활용한 개발 및 배포 환경 구성",
      "Cursor를 통한 프론트엔드 페이지 및 Docker 설정",
    ],
    impressions: [
      {
        title: "풀스택 개발 경험",
        detail:
          "Spring Boot와 React를 사용한 웹 애플리케이션 개발 경험을 쌓았습니다. 프론트엔드와 백엔드 간의 통신 문제 해결 과정에서 다양한 기술적 문제를 진단하고 해결하는 능력을 향상시켰습니다.",
      },
      {
        title: "컨테이너화와 배포 경험",
        detail:
          "Docker Compose를 활용한 컨테이너화 환경에서의 개발 및 배포 경험을 얻었습니다. 초기 Nginx 배포 시도 및 CORS 문제 해결 과정을 통해 실제 운영 환경에서 발생할 수 있는 문제를 해결하는 능력을 향상시켰습니다.",
      },
    ],
    troubleshooting: [
      {
        title: "CORS 문제 해결",
        problem:
          "초기 Nginx를 통한 프론트엔드 배포 시 CORS 오류가 발생했습니다.",
        analysis:
          "프론트엔드와 백엔드의 도메인이 다르면서 발생한 CORS 정책 문제였습니다.",
        solve:
          "React 페이지를 정적 파일로 빌드하여 Spring Boot 애플리케이션에서 서빙하도록 변경했습니다. 이를 통해 CORS 문제를 해결하고 배포 구조를 단순화했습니다.",
      },
      {
        title: "Docker 환경 구성",
        problem:
          "개발 환경과 배포 환경의 일관성을 유지하는 데 어려움이 있었습니다.",
        analysis:
          "로컬 개발 환경과 서버 환경의 차이로 인한 문제가 발생했습니다.",
        solve:
          "Docker Compose를 활용하여 개발 및 배포 환경을 컨테이너화했습니다. 이를 통해 환경 차이로 인한 문제를 해결하고 일관된 개발/배포 환경을 구축했습니다.",
      },
    ],
  },
];

export const cooperative_projects = [{}];

export const company_projects = [{}];
