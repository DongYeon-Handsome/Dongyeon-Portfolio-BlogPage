import Icons from '../Icons';

const Projects = {
  엄마타이머: {
    img: Icons[0].src,
    title: '엄마타이머',
    fe: 'Java',
    aos: 'https://play.google.com/store/apps/details?id=com.friday.timer',
    desc: '미리 설정된 공부 시간 목표를 달성하지 못하면 어마어마한 벌칙을 주는 안드로이드 애플리케이션, 엄마 타이머 개발에 참여하였습니다. 목표를 달성하지 못하면 미리 설정해 놓은 연락처로 공부 시간을 채우지 못했다는 문자를 보내는 것이 주요 기능입니다. 이 외에도 어제보다 1% 더 공부하기, 공부를 멈추면 명언 보여주기, 공부를 멈추는 버튼이 도망가기 등 다양한 기능이 있습니다.',
    felt: '프로젝트 개발 활동을 하면서 처음으로 개발 완료 후 출시를 한 프로젝트라 의미 있었습니다. UI/UX 설계를 하게 되어 Figma를 사용해볼 수 있었고, 여러 시도를 해보면서 사용자 입장에서의 앱 디자인, 기능을 설계하고 공부하는 경험을 가질 수 있었습니다.',
  },
  텍스티: {
    img: Icons[1].src,
    title: '텍스티',
    git: 'https://github.com/ProjectFRIDAY/Texti',
    fe: 'HTML, JavaScript, CSS',
    be: 'Python, Django',
    desc: "대학교 교양 수업에서 학습한 '좋은 글의 조건'을 바탕으로 글 첨삭 서비스를 제작하였습니다. Django와 HTML, CSS, JS를 이용하여 웹사이트 형태로 제작하였습니다.",
    felt: '기존에 활동하던 Friday 개발 동아리 팀원들끼리 해커톤을 진행해 3일동안 한 공간에서 프로젝트를 진행했습니다. 처음으로 웹 프론트 엔드로 활동하는 프로젝트였고 백 엔드 개발자와 협업하는 과정이 있었고 팀 활동에서 다른 직군과 함께 소통하고 필요한 지식을 함께 공유하며 학습할 수 있었습니다. 또한 기존 앱과 달리 처음 웹 UI/UX를 직접 설계하는 것이였기 때문에 어려움이 있었지만, 그 어려움을 극복하고자 다른 웹서비스의 디자인의 특징을 유사히 관찰해 이 웹서비스의 디자인을 설계했고, CSS를 사용하고 BootStrap를 사용하는 경험을 해볼 수 있었습니다.',
  },
  플랜다이얼: {
    img: Icons[2].src,
    title: '플랜다이얼',
    git: 'https://github.com/ProjectFRIDAY/Plan-Dial-Renewal',
    site: 'https://projectfriday.github.io/Plan-Dial-Website/',
    aos: 'https://play.google.com/store/apps/details?id=com.friday.plan_dial_renewal',
    ios: 'https://apps.apple.com/kr/app/plan-dial/id1624636806',
    fe: 'Java, Dart',
    desc: '규칙적인 생활을 도와주는 어플리케이션입니다. Plan Dial은 규칙적인 일들을 다이얼이라는 이름으로 저장하여 관리합니다. 다이얼은 해당 일을 해야 하는 시간에 알림을 주며, 1시간 전에는 앱 상단 및 위젯에 표시됩니다. 또한, Plan Dial은 <자취생>, <수험생> 등의 강력한 템플릿 기능이 있어 일일이 다이얼을 입력할 필요가 없으며, 규칙적인 생활 습관의 가이드라인을 제공합니다.',
    felt: '직접 기획에 참여한 프로젝트입니다. 처음 안드로이드 Java를 사용해 개발을 하고 스토어에 출시한 다음 사용자들의 피드백을 받아 처음 기획했을 때 구현했던 앱 UI/UX의 투박함, 또한 Main 화면에 있는 이 어플의 핵심이라 생각했던 메인 다이얼이 오히려 불편하다는 피드백을 받아 디자인을 다시 설계하고 안드로이드만 지원한다는 단점을 극복하기 위해 Flutter 기반 Cross-Platform으로 앱을 다시 리뉴얼하는 활동을 했습니다.',
  },
  웹사이트: {
    img: Icons[3].src,
    title: 'FRIDAY 공식 웹사이트',
    git: 'https://github.com/ProjectFRIDAY/FD_Web',
    site: 'https://fridayproject.co.kr/',
    fe: 'React, Recoil, Next.js, JavaScript, Styled-Component',
    deploy: 'AWS EC2 -> Vercel',
    desc: '기존에 운영하던 FRIDAY 프로젝트를 홍보하고 인원을 채용하기 위한 목적으로 운영하는 사이트를 만들기 위해 진행한 프로젝트입니다. FRIDAY의 공식 웹사이트이자, FRIDAY의 방향성, 목표를 보여주는 페이지이고, 지금까지 FRIDAY에서 진행했던 프로젝트와, 진행하고 있는 프로젝트를 확인하실 수 있습니다.',
    felt: 'React와 관련된 라이브러리들 (Recoil, Styled-Component)을 처음 사용해 본 프로젝트입니다. 기존에는 각자 학교 커뮤니티(에브리타임 등)에 홍보글과 노션링크를 공유해 동아리 홍보 및 인원 채용을 할 수 있던 것을 웹사이트를 만들고 더 많고 다양한 분야의 사람들을 채용하고 같이 활동할 수 있었습니다. 고등학교 때 처음 만들고 계속 활동했던 Friday 동아리가 많이 성장했다는 것을 직접 체감할 수 있고 팀 활동에 더욱 동기부여가 되는 프로젝트였습니다.',
    felt2: 'Friday 동아리 원들에게 피드백을 받아 팀원들과 더 많은 소통과 아이디어 공유등의 활동을 할 수 있는 블로그를 만들자는 의견이 나와 만들고, 블로그와 프로젝트 탭의 로딩 속도가 느리다는 피드백을 반영해 Next.js를 도입해 최적화를 하는 활동에도 참여했습니다. 이 활동을 통해 Next.js를 처음 알고 얕게나마 사용해볼 수 있었고, CSR, SSR, SSG, ISR에 대해서 배워볼 수 있는 계기가 되었습니다.',
  },
  comento: {
    img: Icons[4].src,
    title: '코멘토',
    git: 'https://github.com/ProjectFRIDAY/Comento',
    fe: 'React, Recoil, TypeScript, Styled-Component',
    be: 'Node.js, MySQL',
    desc: '코딩을 입문하는 사람이나 코딩 도중에 어려움을 겪는 사람들을 위한 서비스로, 1대 1 질문 답변 채팅 서비스입니다. 코멘토라는 서비스명의 의미는 Comento === Coding + Mento 입니다. 질문자는 언어별로 질문을 작성할 수 있고, 답변자는 질문 목록 중 답변하고자 하는 질문을 선택할 수 있습니다. 질문과 답변은 채팅 형태로 이루어지고, 채팅방 내에서 코드 컴파일러 기능을 제공합니다.',
    felt: '최근 코딩 관련 강의가 대학 필수 교양으로 편성되는 사례가 많아져 많은 사람들이 코딩에 입문하고, 이에 따라 어려움을 겪는 사람들이 많아지는 것을 볼 수 있었습니다. 이러한 것을 보고 코딩에 능숙한 멘토와 함께 온라인으로 쉽게 어려운 문제를 해결할 수 있도록 돕고자하는 서비스를 기획했습니다.',
    felt2: 'TypeScript를 처음 사용해보고 아토믹 (Atomic)컴포넌트 디자인 패턴 시스템을 사용해볼 수 있었습니다. 또한 협업하는 과정에서 Git-flow, Slack등의 새로운 전략과 프로그램을 사용하고 Notion을 통해 프론트와 백이 서로 소통하면서 개발하는 활동을 할 수 있었습니다. 이렇게 많은 기술과 새로운 팀 전략을 경험할 수 있었지만, 팀원간의 소통 부재 및 팀원 이탈 등의 이슈로 프로젝트가 계속 지연되는 경험을 해보면서 팀 활동에서 소통의 중요성을 다시 한번 느낄 수 있던 프로젝트입니다.',
  },
  OOTD: {
    img: Icons[5].src,
    title: 'OOTD',
    git: 'https://github.com/ProjectFRIDAY/OOTD',
    fe: 'React-Native, JavaScript',
    be: 'Spring-Boot, MySQL',
    desc: '오늘의 착장을 저장하고 공유하는 서비스입니다. 내 착장을 간단히 올리기만 하면 옷장 기능을 통해 체계적으로 저장해주며, 다른 사람들의 착장을 보고 옷차림에 대한 아이디어를 얻을 수 있습니다.',
    felt: 'React-Native를 처음 사용해본 프로젝트입니다. 달력, 이미지 업로드 같은 기능을 구현하기 위해 react-native-calendars, react-native-dropdown-picker 등의 라이브러리들을 사용해보고 Spring Boot를 사용하는 백과 소통하는 경험을 했습니다. 하지만 팀원들과 소통, 만남, 팀 활동이 잘 이뤄지지 않아 미완성인 상태라 아쉬움이 많은 프로젝트입니다.',
  }
};

export default Projects;