// =========================================
// 0. 공통 함수
// =========================================

// 지금 화면이 PC 너비(769px 이상)인지 확인합니다.
// CSS의 @media (min-width: 769px)와 같은 기준입니다.
function isDesktop() {
  return window.matchMedia('(min-width: 769px)').matches;
}


// =========================================
// 1. 메뉴 데이터
//    page : 클릭하면 화면이 하위 페이지로 바뀜 (내용은 아래 pages에 있음)
//    link : 클릭하면 메인 화면의 해당 구역으로 이동
//    tab  : 문의하기에서 열어 둘 탭 번호 (0 = 연락처, 1 = 메시지)
// =========================================
const headerNavs = [
  {
    title: '웹 프로그래밍',
    items: [
      { title: '웹 프로그래밍이란?', page: 'web-intro' },
      { title: '웹 페이지가 뜨는 과정', page: 'web-flow' },
      { title: '개발 도구', page: 'web-tools' },
      { title: '학습 방식', link: 'about' }
    ]
  },
  {
    title: 'HTML',
    items: [
      { title: 'HTML 소개', link: 'html' },
      { title: '기본 구조', page: 'html-basic' },
      { title: '자주 쓰는 태그', page: 'html-tags' },
      { title: '시맨틱 태그', page: 'html-semantic' }
    ]
  },
  {
    title: 'CSS',
    items: [
      { title: 'CSS 소개', link: 'css' },
      { title: '선택자', page: 'css-selector' },
      { title: '박스 모델', page: 'css-box' },
      { title: 'Flexbox와 Grid', page: 'css-layout' }
    ]
  },
  {
    title: 'JavaScript',
    items: [
      { title: 'JavaScript 소개', link: 'js' },
      { title: '변수와 자료형', page: 'js-var' },
      { title: '조건문과 반복문', page: 'js-control' },
      { title: '함수', page: 'js-func' },
      { title: 'DOM 다루기', page: 'js-dom' },
      { title: '이벤트', page: 'js-event' }
    ]
  },
  {
    title: '커리큘럼',
    items: [
      { title: '전체 과정', link: 'curriculum' },
      { title: '파이널 프로젝트', page: 'final-project' }
    ]
  },
  {
    title: '문의하기',
    items: [
      { title: '연락처', link: 'contact', tab: 0 },
      { title: '메시지 남기기', link: 'contact', tab: 1 }
    ]
  }
];


// =========================================
// 2. 하위 페이지 내용
//    blocks 안의 type에 따라 화면에 그리는 모양이 다릅니다.
//    p(문단), ul(목록), ol(번호 목록), code(코드), table(표), link(링크), demo(눌러 보는 버튼)
// =========================================
const pages = {
  'web-intro': {
    title: '웹 프로그래밍이란?',
    blocks: [
      { type: 'p', text: '웹 브라우저에서 동작하는 웹 사이트와 웹 애플리케이션을 만드는 일입니다.' },
      { type: 'ul', items: [
        '프론트엔드: 사용자가 보는 화면 — HTML, CSS, JavaScript',
        '백엔드: 데이터를 저장하고 처리하는 서버 — Java(Spring Boot), Node.js 등',
        '이 홈페이지는 프론트엔드만으로 만들었습니다.'
      ] },
      { type: 'p', text: '집에 빗대면 HTML은 뼈대, CSS는 인테리어, JavaScript는 불을 켜고 문을 여는 설비입니다.' }
    ]
  },

  'web-flow': {
    title: '웹 페이지가 뜨는 과정',
    blocks: [
      { type: 'p', text: '주소창에 주소를 입력하고 화면이 보이기까지 이런 순서로 진행됩니다.' },
      { type: 'ol', items: [
        '주소창에 URL을 입력합니다.',
        'DNS가 도메인 이름을 IP 주소로 바꿉니다.',
        '브라우저가 서버에 HTTP 요청을 보냅니다.',
        '서버가 HTML, CSS, JavaScript 파일을 응답으로 보냅니다.',
        '브라우저가 HTML로 화면 구조(DOM)를 만들고 CSS로 모양을 입혀 그립니다.',
        'JavaScript가 실행되어 클릭 같은 동작이 연결됩니다.'
      ] }
    ]
  },

  'web-tools': {
    title: '개발 도구',
    blocks: [
      { type: 'table',
        head: ['도구', '용도'],
        rows: [
          ['VS Code', '코드 작성'],
          ['Live Server', '저장하면 브라우저가 자동으로 새로고침'],
          ['Chrome 개발자 도구 (F12)', '요소 확인, 오류(Console) 확인'],
          ['Git · GitHub', '버전 관리와 코드 공유'],
          ['GitHub Pages', '무료로 웹 사이트 주소 만들기']
        ] }
    ]
  },

  'html-basic': {
    title: 'HTML 기본 구조',
    blocks: [
      { type: 'p', text: '모든 HTML 문서는 같은 뼈대로 시작합니다.' },
      { type: 'code', text:
        '<!DOCTYPE html>\n' +
        '<html lang="ko">\n' +
        '<head>\n' +
        '  <meta charset="UTF-8">\n' +
        '  <title>페이지 제목</title>\n' +
        '</head>\n' +
        '<body>\n' +
        '  화면에 보이는 내용\n' +
        '</body>\n' +
        '</html>' },
      { type: 'ul', items: [
        '<!DOCTYPE html> : HTML5 문서라는 선언',
        '<head> : 제목, 글자 인코딩, CSS 연결처럼 화면에 보이지 않는 정보',
        '<body> : 화면에 보이는 내용',
        '주석은 <!-- 내용 --> 으로 씁니다. // 를 쓰면 글자가 그대로 화면에 나옵니다.'
      ] }
    ]
  },

  'html-tags': {
    title: '자주 쓰는 태그',
    blocks: [
      { type: 'table',
        head: ['태그', '용도'],
        rows: [
          ['<h1> ~ <h6>', '제목 (숫자가 작을수록 큰 제목)'],
          ['<p>', '문단'],
          ['<a href="주소">', '링크'],
          ['<img src="파일" alt="설명">', '이미지'],
          ['<ul>, <ol>, <li>', '목록 (순서 없음 / 순서 있음 / 항목)'],
          ['<div>, <span>', '영역 묶기 (블록 / 인라인)'],
          ['<button>', '버튼'],
          ['<form>, <input>, <textarea>', '입력 양식']
        ] }
    ]
  },

  'html-semantic': {
    title: '시맨틱 태그',
    blocks: [
      { type: 'p', text: '이름에 의미가 담긴 태그를 쓰면 검색엔진과 스크린리더가 페이지 구조를 쉽게 이해합니다.' },
      { type: 'table',
        head: ['태그', '의미'],
        rows: [
          ['<header>', '머리말 (로고, 메뉴)'],
          ['<nav>', '메뉴 링크 묶음'],
          ['<main>', '핵심 내용 (문서에 하나)'],
          ['<section>', '주제별 구역'],
          ['<article>', '따로 떼어도 의미가 통하는 콘텐츠'],
          ['<address>', '연락처 정보'],
          ['<footer>', '꼬리말 (저작권 등)']
        ] },
      { type: 'p', text: '이 홈페이지도 header, nav, main, section, article, address, footer로 구성했습니다.' }
    ]
  },

  'css-selector': {
    title: 'CSS 선택자',
    blocks: [
      { type: 'p', text: '선택자는 "어떤 요소를 꾸밀지" 고르는 부분입니다.' },
      { type: 'code', text:
        'p { color: gray; }                   /* 태그 선택자 */\n' +
        '.about__card { padding: 48px; }      /* 클래스 선택자 */\n' +
        '#contact { background: #FFF5ED; }    /* 아이디 선택자 */\n' +
        '.header__nav li { font-size: 20px; } /* 자손 선택자 */\n' +
        'a:hover { text-decoration: underline; } /* 가상 클래스 */' },
      { type: 'p', text: '여러 규칙이 겹치면 인라인 style > 아이디 > 클래스 > 태그 순서로 우선합니다. 우선순위가 같으면 나중에 쓴 규칙이 적용됩니다.' }
    ]
  },

  'css-box': {
    title: '박스 모델',
    blocks: [
      { type: 'p', text: '모든 요소는 상자이고, 안쪽부터 이 순서로 둘러싸여 있습니다.' },
      { type: 'ol', items: [
        'content : 실제 내용',
        'padding : 내용과 테두리 사이의 안쪽 여백',
        'border : 테두리',
        'margin : 다른 요소와의 바깥 여백'
      ] },
      { type: 'code', text:
        '.box {\n' +
        '  width: 200px;\n' +
        '  padding: 20px;\n' +
        '  border: 4px solid black;\n' +
        '  margin: 16px;\n' +
        '  box-sizing: border-box;\n' +
        '}' },
      { type: 'p', text: 'box-sizing: border-box를 쓰면 width 200px 안에 padding과 border가 포함되어 크기 계산이 쉬워집니다.' }
    ]
  },

  'css-layout': {
    title: 'Flexbox와 Grid',
    blocks: [
      { type: 'ul', items: [
        'Flexbox : 한 방향(가로 또는 세로)으로 늘어놓고 정렬 — 이 홈페이지의 헤더, 소개 카드',
        'Grid : 가로·세로 칸을 나눠 배치 — PC 화면에서 HTML·CSS 구역 2칸 배치'
      ] },
      { type: 'code', text:
        '.header {\n' +
        '  display: flex;\n' +
        '  justify-content: space-between; /* 양 끝으로 */\n' +
        '  align-items: center;            /* 세로 가운데 */\n' +
        '}\n\n' +
        'main {\n' +
        '  display: grid;\n' +
        '  grid-template-columns: 1fr 1fr; /* 같은 너비 2칸 */\n' +
        '}' },
      { type: 'p', text: '@media (max-width: 768px) 미디어쿼리로 모바일에서는 세로 1열로 바꿨습니다.' }
    ]
  },

  'js-var': {
    title: '변수와 자료형',
    blocks: [
      { type: 'p', text: '변수는 값을 담아 두는 이름표입니다. let은 나중에 값을 바꿀 수 있고, const는 바꿀 수 없습니다.' },
      { type: 'code', text:
        "let count = 0;                 // 숫자 (number)\n" +
        "const name = 'goldstargreat';  // 문자열 (string)\n" +
        "let isOpen = false;            // 참·거짓 (boolean)\n" +
        "const menus = ['HTML', 'CSS', 'JavaScript'];   // 배열 (array)\n" +
        "const card = { title: '스피디한 학습', img: './images/about_1.svg' };   // 객체 (object)\n\n" +
        "count = count + 1;     // let은 다시 넣을 수 있음 → 1\n" +
        "// name = 'abc';       // 오류! const는 다시 넣을 수 없음\n\n" +
        "console.log(menus[0]);      // 'HTML'  (배열은 0번부터)\n" +
        "console.log(card.title);    // '스피디한 학습'" },
      { type: 'table',
        head: ['자료형', '예', '설명'],
        rows: [
          ['number', '10, 3.14', '숫자'],
          ['string', "'안녕'", '글자 (따옴표로 감쌈)'],
          ['boolean', 'true, false', '참 / 거짓'],
          ['array', "['a', 'b']", '순서가 있는 여러 값'],
          ['object', "{ title: 'a' }", '이름(키)과 값의 묶음'],
          ['undefined', 'undefined', '아직 값이 없음']
        ] },
      { type: 'p', text: 'var는 예전 방식입니다. 지금은 let과 const를 씁니다. 이 홈페이지의 메뉴와 카드도 배열 안에 객체를 넣어 만들었습니다.' }
    ]
  },

  'js-control': {
    title: '조건문과 반복문',
    blocks: [
      { type: 'p', text: '조건문은 상황에 따라 다른 코드를 실행하고, 반복문은 같은 코드를 여러 번 실행합니다.' },
      { type: 'code', text:
        "// 조건문: 화면 너비에 따라 다르게\n" +
        "if (window.innerWidth > 768) {\n" +
        "  console.log('PC 화면');\n" +
        "} else {\n" +
        "  console.log('모바일 화면');\n" +
        "}\n\n" +
        "// 반복문: 배열의 값을 하나씩 꺼내기\n" +
        "const menus = ['HTML', 'CSS', 'JavaScript'];\n" +
        "for (let i = 0; i < menus.length; i++) {\n" +
        "  console.log((i + 1) + '번째 메뉴: ' + menus[i]);\n" +
        "}" },
      { type: 'table',
        head: ['연산자', '뜻', '예'],
        rows: [
          ['===', '같다 (값과 자료형 모두)', "count === 0"],
          ['!==', '다르다', "name !== ''"],
          ['>, <, >=, <=', '크다, 작다, 이상, 이하', 'i < menus.length'],
          ['&&', '그리고 (둘 다 참)', 'isOpen && isDesktop()'],
          ['||', '또는 (하나라도 참)', "a === 1 || a === 2"],
          ['!', '반대로', '!isOpen']
        ] },
      { type: 'p', text: '== 는 자료형이 달라도 같다고 볼 때가 있어(0 == \'0\' → true) 실수하기 쉽습니다. === 를 쓰는 습관을 들이세요.' }
    ]
  },

  'js-func': {
    title: '함수',
    blocks: [
      { type: 'p', text: '함수는 여러 줄의 코드를 하나로 묶어 이름을 붙인 것입니다. 만들어 두고 필요할 때 이름으로 불러 씁니다.' },
      { type: 'code', text:
        "// 만들기: a, b는 받는 값(매개변수)\n" +
        "function add(a, b) {\n" +
        "  return a + b;   // 결과를 돌려줌\n" +
        "}\n\n" +
        "// 부르기(호출)\n" +
        "const result = add(3, 5);\n" +
        "console.log(result);   // 8\n\n" +
        "// 이 홈페이지에서 실제로 쓰는 함수\n" +
        "function isDesktop() {\n" +
        "  return window.matchMedia('(min-width: 769px)').matches;\n" +
        "}" },
      { type: 'ul', items: [
        '매개변수 : 함수에 넣어 주는 값 (add의 a, b)',
        'return : 함수의 결과를 돌려주고 함수를 끝냄',
        '호출 : 함수 이름 뒤에 ( )를 붙이면 실행됨',
        '같은 코드를 여러 곳에서 쓸 때 함수로 묶으면 고칠 곳이 한 군데로 줄어듭니다.'
      ] }
    ]
  },

  'js-dom': {
    title: 'DOM 다루기',
    blocks: [
      { type: 'p', text: 'DOM은 브라우저가 HTML을 읽어 만든 요소들의 나무 구조입니다. JavaScript로 DOM을 찾고, 만들고, 바꿀 수 있습니다.' },
      { type: 'code', text:
        "// 1. 요소 찾기\n" +
        "const $ul = document.querySelector('.header__nav ul');\n\n" +
        "// 2. 새 요소 만들기\n" +
        "const $li = document.createElement('li');\n" +
        "$li.textContent = 'JavaScript';\n" +
        "$li.classList.add('header__nav-item');\n\n" +
        "// 3. 화면에 붙이기\n" +
        "$ul.appendChild($li);" },
      { type: 'table',
        head: ['문법', '하는 일'],
        rows: [
          ['querySelector()', '요소 1개 찾기'],
          ['querySelectorAll()', '요소 여러 개 찾기'],
          ['createElement() + appendChild()', '새 요소를 만들어 붙이기'],
          ['addEventListener()', '클릭, 마우스 같은 이벤트 연결'],
          ['classList.add / remove / toggle', '클래스 붙이기 / 떼기 / 바꾸기']
        ] },
      { type: 'p', text: '이 홈페이지의 메뉴, 소개 카드, 지금 보고 있는 하위 페이지도 모두 이 방법으로 만들었습니다.' }
    ]
  },

  'js-event': {
    title: '이벤트',
    blocks: [
      { type: 'p', text: '이벤트는 클릭, 마우스 올리기, 입력 같은 사용자의 동작입니다. addEventListener(이벤트 이름, 실행할 함수)로 연결합니다.' },
      { type: 'code', text:
        "const $btn = document.querySelector('.demo-btn');\n" +
        "let count = 0;\n\n" +
        "$btn.addEventListener('click', function () {\n" +
        "  count = count + 1;\n" +
        "  $btn.textContent = '눌러 보세요 (' + count + ')';\n" +
        "});" },
      { type: 'p', text: '위 코드가 실제로 동작하는 버튼입니다. 눌러 보세요.' },
      { type: 'demo' },
      { type: 'table',
        head: ['이벤트', '언제', '이 홈페이지에서'],
        rows: [
          ['click', '클릭했을 때', '메뉴, 탭 버튼'],
          ['mouseenter / mouseleave', '마우스가 들어올 때 / 나갈 때', '소개 카드, 교과과정 막대'],
          ['submit', '폼을 제출할 때', '메시지 남기기'],
          ['resize', '창 크기가 바뀔 때', '문의 탭 글자 길이'],
          ['hashchange', '주소의 #이 바뀔 때', '하위 페이지 전환']
        ] },
      { type: 'ul', items: [
        'e.preventDefault() : 기본 동작 막기 (폼 제출 시 새로고침 막기)',
        'e.stopPropagation() : 부모 요소로 이벤트가 전달되는 것 막기 (메뉴를 눌렀을 때 바로 닫히지 않게)'
      ] }
    ]
  },

  'final-project': {
    title: '파이널 프로젝트',
    blocks: [
      { type: 'p', text: '수업의 마지막 과제로 지금 보고 있는 개인 홈페이지를 만들었습니다.' },
      { type: 'ul', items: [
        'index.html : 화면 구조',
        'style.css : 색상, 글꼴, 배치',
        'script.js : 메뉴, 애니메이션, 탭 전환, 하위 페이지 전환'
      ] },
      { type: 'link', text: 'GitHub에서 코드 보기', href: 'https://github.com/Goldstargreat/CodeExplorer' }
    ]
  }
};


// =========================================
// 3. 인트로 - 밑줄(_) 깜빡임
// =========================================
const $underscore = document.querySelector('.intro__type .underscore');

$underscore.animate(
  [
    { opacity: 0 },
    { opacity: 1 }
  ],
  {
    duration: 350,          // 0.35초 동안
    iterations: Infinity,   // 무한 반복
    direction: 'alternate'  // 갔다가 되돌아오기
  }
);


// =========================================
// 4. 헤더 - 메뉴 + 드롭다운 만들기
// =========================================
const $headerNavUl = document.querySelector('.header__nav ul');
const $navItems = [];   // 만든 <li>들을 모아 둠 (드롭다운 닫을 때 사용)

for (let i = 0; i < headerNavs.length; i++) {
  const nav = headerNavs[i];

  // <li class="header__nav-item">
  const $li = document.createElement('li');
  $li.classList.add('header__nav-item');

  // 위쪽 메뉴 버튼 <button>웹 프로그래밍 ▾</button>
  const $btn = document.createElement('button');
  $btn.setAttribute('type', 'button');
  $btn.classList.add('header__nav-btn');
  $btn.textContent = nav.title + ' ▾';

  // 마우스를 올리면 커지는 흰색 밑줄
  const $line = document.createElement('span');
  $line.classList.add('header__nav-line');

  // 드롭다운 목록 <ul class="header__sub">
  const $sub = document.createElement('ul');
  $sub.classList.add('header__sub');

  for (let j = 0; j < nav.items.length; j++) {
    const item = nav.items[j];

    const $subLi = document.createElement('li');
    const $a = document.createElement('a');
    $a.textContent = item.title;

    if (item.page) {
      $a.setAttribute('href', '#' + item.page);
    } else {
      $a.setAttribute('href', '#' + item.link);
    }

    // 하위 항목 클릭 → 해당 화면으로 이동
    $a.addEventListener('click', function (e) {
      e.preventDefault();
      goTo(item);
    });

    $subLi.appendChild($a);
    $sub.appendChild($subLi);
  }

  $li.appendChild($btn);
  $li.appendChild($line);
  $li.appendChild($sub);
  $headerNavUl.appendChild($li);
  $navItems.push($li);

  // 위쪽 메뉴 클릭 → 드롭다운 열기/닫기 (다른 메뉴의 드롭다운은 닫음)
  $btn.addEventListener('click', function (e) {
    const wasOpen = $li.classList.contains('open');
    closeAllDropdowns();
    if (!wasOpen) {
      $li.classList.add('open');
    }
    // body까지 전달되면 아래에서 바로 닫히므로 막습니다.
    e.stopPropagation();
  });

  // PC에서 마우스를 올리면 밑줄이 펴짐
  $li.addEventListener('mouseenter', function () {
    if (!isDesktop()) return;
    $line.style.left = '0';
    $line.style.width = '100%';
  });
  $li.addEventListener('mouseleave', function () {
    $line.style.left = '50%';
    $line.style.width = '0';
  });
}

function closeAllDropdowns() {
  for (let i = 0; i < $navItems.length; i++) {
    $navItems[i].classList.remove('open');
  }
}

// 모바일 메뉴 버튼(≡)
const $menuBtn = document.querySelector('.header__menu-btn');
const $headerNav = document.querySelector('.header__nav');

$menuBtn.addEventListener('click', function (e) {
  $menuBtn.classList.toggle('on');
  $headerNav.classList.toggle('active');
  e.stopPropagation();
});

// 화면의 다른 곳을 누르면 메뉴와 드롭다운을 닫습니다.
document.body.addEventListener('click', function () {
  $menuBtn.classList.remove('on');
  $headerNav.classList.remove('active');
  closeAllDropdowns();
});


// =========================================
// 5. 소개(about) - 카드 만들기 + 마우스 효과
// =========================================
const aboutCards = [
  {
    img: './images/about_1.svg',
    title: '스피디한 학습',
    descs: [
      '군더더기 없는 진행으로',
      '효율성을 끌어올린다.'
    ]
  },
  {
    img: './images/about_2.svg',
    title: '교재 및 외부 자료 활용',
    descs: [
      '본 교재 및 외부 자료를 활용해서',
      '보다 심도 있게 실습한다.'
    ]
  },
  {
    img: './images/about_3.svg',
    title: '플레이그라운드',
    descs: [
      '사이드 프로젝트로 재미를 이끌어서',
      '반복 학습을 돕는다.'
    ]
  }
];

const $aboutDiv = document.querySelector('.about');

for (let i = 0; i < aboutCards.length; i++) {
  const card = aboutCards[i];

  const $div = document.createElement('div');
  $div.classList.add('about__card');

  const $img = document.createElement('img');
  $img.classList.add('about__icon');
  $img.setAttribute('src', card.img);
  $img.setAttribute('alt', '');

  const $h2 = document.createElement('h2');
  $h2.classList.add('about__title');
  $h2.classList.add('_' + (i + 1));
  $h2.textContent = card.title;

  const $text = document.createElement('div');
  $text.classList.add('about__text');

  for (let j = 0; j < card.descs.length; j++) {
    const $line = document.createElement('div');
    $line.textContent = card.descs[j];
    $text.appendChild($line);
  }

  $div.appendChild($img);
  $div.appendChild($h2);
  $div.appendChild($text);
  $aboutDiv.appendChild($div);
}

// 올린 카드는 커지고, 나머지는 작아지면서 흐려짐
const $aboutCardList = document.querySelectorAll('.about__card');

for (let i = 0; i < $aboutCardList.length; i++) {
  $aboutCardList[i].addEventListener('mouseenter', function () {
    if (!isDesktop()) return;

    for (let j = 0; j < $aboutCardList.length; j++) {
      const $card = $aboutCardList[j];
      const $icon = $card.querySelector('.about__icon');

      if (j === i) {
        $card.style.transform = 'scale(1.04)';
        $card.style.filter = 'none';
        $icon.style.opacity = '1';
      } else {
        $card.style.transform = 'scale(0.9)';
        $card.style.filter = 'blur(2px)';
        $icon.style.opacity = '';
      }
    }
  });
}

$aboutDiv.addEventListener('mouseleave', function () {
  for (let i = 0; i < $aboutCardList.length; i++) {
    const $card = $aboutCardList[i];
    $card.style.transform = '';
    $card.style.filter = '';
    $card.querySelector('.about__icon').style.opacity = '';
  }
});


// =========================================
// 6. HTML·CSS 로고 - 둥둥 떠다니는 효과
// =========================================
const $logos = document.querySelectorAll('.html-css__logo');
const $shadows = document.querySelectorAll('.html-css__shadow');

const floatOption = {
  duration: 800,
  easing: 'ease-in-out',
  iterations: Infinity,
  direction: 'alternate'
};

for (let i = 0; i < $logos.length; i++) {
  $logos[i].animate(
    [
      { transform: 'translateY(0)' },
      { transform: 'translateY(10px)' }
    ],
    floatOption
  );

  $shadows[i].animate(
    [
      { opacity: 0.08 },
      { opacity: 0.24 }
    ],
    floatOption
  );
}


// =========================================
// 7. 교과과정 - 진행 막대
// =========================================
const $currLis = document.querySelectorAll('.curriculum__list > li');
const $currProgBar = document.querySelector('.curriculum__progress .bar');

for (let i = 0; i < $currLis.length; i++) {
  const $li = $currLis[i];

  $li.addEventListener('mouseenter', function () {
    if (!isDesktop()) return;
    $li.classList.add('on');
    $currProgBar.style.width = (200 * i) + 'px';
  });

  $li.addEventListener('mouseleave', function () {
    $li.classList.remove('on');
    $currProgBar.style.width = '0';
  });
}


// =========================================
// 8. 문의하기 - 탭 전환 + 메시지 폼
// =========================================
const $contactTabs = document.querySelectorAll('.contact__tab-btn');
const $contactSlideCon = document.querySelector('.contact__slide-con');

const tabTexts = [
  { long: '연락처 보기', short: '연락처' },
  { long: '메시지 남기기', short: '메시지' }
];

function updateTabTexts() {
  for (let i = 0; i < $contactTabs.length; i++) {
    if (isDesktop()) {
      $contactTabs[i].textContent = tabTexts[i].long;
    } else {
      $contactTabs[i].textContent = tabTexts[i].short;
    }
  }
}

updateTabTexts();
window.addEventListener('resize', updateTabTexts);

// index번 탭을 열기 (메뉴의 "연락처 / 메시지 남기기"에서도 사용)
function selectContactTab(index) {
  $contactSlideCon.style.marginLeft = (index * -100) + 'vw';

  for (let j = 0; j < $contactTabs.length; j++) {
    $contactTabs[j].classList.remove('on');
  }
  $contactTabs[index].classList.add('on');
}

for (let i = 0; i < $contactTabs.length; i++) {
  $contactTabs[i].addEventListener('click', function () {
    selectContactTab(i);
  });
}

// 메시지 폼: 아직 받을 서버가 없으므로 페이지 이동을 막고 안내만 합니다.
const $contactForm = document.querySelector('.contact__leave').parentElement;
const $submitBtn = $contactForm.querySelector('button[type=submit]');

$contactForm.addEventListener('submit', function (e) {
  e.preventDefault();
  $submitBtn.textContent = '준비 중이에요';
  setTimeout(function () {
    $submitBtn.textContent = '남기기';
  }, 2000);
});


// =========================================
// 9. 화면 전환 (메인 화면 ↔ 하위 페이지)
//    주소 끝의 #이름(해시)을 보고 어떤 화면을 보여줄지 정합니다.
//    #html-basic → 하위 페이지,  #contact → 메인 화면의 문의하기
// =========================================
const $intro = document.querySelector('.intro');
const $main = document.querySelector('main');
const $page = document.querySelector('#page');

// 메뉴 항목을 눌렀을 때
function goTo(item) {
  let target = '#' + item.link;
  if (item.page) {
    target = '#' + item.page;
  }

  if (location.hash === target) {
    render();                 // 같은 주소면 hashchange가 안 생기므로 직접 그림
  } else {
    location.hash = target;   // 주소가 바뀌면 아래 hashchange에서 render() 실행
  }

  if (item.tab !== undefined) {
    selectContactTab(item.tab);
  }
}

// 지금 주소에 맞는 화면 보여주기
function render() {
  const id = location.hash.slice(1);   // '#html-basic' → 'html-basic'

  if (pages[id]) {
    showPage(id);
  } else {
    showHome(id);
  }
}

// 메인 화면 보여주기 (id가 있으면 그 구역으로 스크롤)
function showHome(id) {
  $intro.hidden = false;
  $main.hidden = false;
  $page.hidden = true;

  const $target = id ? document.getElementById(id) : null;
  if ($target) {
    $target.scrollIntoView();
  } else {
    window.scrollTo(0, 0);
  }
}

// 하위 페이지 보여주기
function showPage(id) {
  const page = pages[id];

  $intro.hidden = true;
  $main.hidden = true;
  $page.hidden = false;
  $page.innerHTML = '';   // 이전 내용 지우기

  // 이 페이지가 속한 메뉴 찾기 (예: 'html-basic' → HTML 메뉴)
  let menu = null;
  for (let i = 0; i < headerNavs.length; i++) {
    for (let j = 0; j < headerNavs[i].items.length; j++) {
      if (headerNavs[i].items[j].page === id) {
        menu = headerNavs[i];
      }
    }
  }

  // 위치 표시: "HTML › 기본 구조"
  const $crumb = document.createElement('p');
  $crumb.classList.add('page__crumb');
  $crumb.textContent = menu.title + ' › ' + page.title;
  $page.appendChild($crumb);

  // 제목
  const $title = document.createElement('h1');
  $title.classList.add('page__title');
  $title.textContent = page.title;
  $page.appendChild($title);

  // 본문 블록들
  for (let i = 0; i < page.blocks.length; i++) {
    $page.appendChild(makeBlock(page.blocks[i]));
  }

  // 같은 메뉴의 다른 항목으로 가는 버튼들
  const $siblings = document.createElement('div');
  $siblings.classList.add('page__siblings');

  for (let i = 0; i < menu.items.length; i++) {
    const item = menu.items[i];
    const $a = document.createElement('a');
    $a.textContent = item.title;
    $a.setAttribute('href', '#' + (item.page || item.link));
    if (item.page === id) {
      $a.classList.add('on');   // 지금 보고 있는 페이지
    }
    $a.addEventListener('click', function (e) {
      e.preventDefault();
      goTo(item);
    });
    $siblings.appendChild($a);
  }
  $page.appendChild($siblings);

  // 홈으로 버튼
  const $home = document.createElement('a');
  $home.classList.add('page__home');
  $home.setAttribute('href', '#');
  $home.textContent = '← 홈으로';
  $page.appendChild($home);

  window.scrollTo(0, 0);
}

// 블록 하나를 type에 맞는 HTML 요소로 만들기
// (textContent만 써서 <태그> 글자도 코드가 아닌 글자 그대로 보입니다)
function makeBlock(block) {
  if (block.type === 'p') {
    const $p = document.createElement('p');
    $p.textContent = block.text;
    return $p;
  }

  if (block.type === 'ul' || block.type === 'ol') {
    const $list = document.createElement(block.type);
    for (let i = 0; i < block.items.length; i++) {
      const $li = document.createElement('li');
      $li.textContent = block.items[i];
      $list.appendChild($li);
    }
    return $list;
  }

  if (block.type === 'code') {
    const $pre = document.createElement('pre');
    const $code = document.createElement('code');
    $code.textContent = block.text;
    $pre.appendChild($code);
    return $pre;
  }

  if (block.type === 'table') {
    const $table = document.createElement('table');

    const $headRow = document.createElement('tr');
    for (let i = 0; i < block.head.length; i++) {
      const $th = document.createElement('th');
      $th.textContent = block.head[i];
      $headRow.appendChild($th);
    }
    $table.appendChild($headRow);

    for (let i = 0; i < block.rows.length; i++) {
      const $tr = document.createElement('tr');
      for (let j = 0; j < block.rows[i].length; j++) {
        const $td = document.createElement('td');
        $td.textContent = block.rows[i][j];
        $tr.appendChild($td);
      }
      $table.appendChild($tr);
    }
    return $table;
  }

  if (block.type === 'link') {
    const $p = document.createElement('p');
    const $a = document.createElement('a');
    $a.textContent = block.text + ' →';
    $a.setAttribute('href', block.href);
    $a.setAttribute('target', '_blank');
    $a.setAttribute('rel', 'noopener');
    $a.classList.add('page__link');
    $p.appendChild($a);
    return $p;
  }

  // 직접 눌러 보는 버튼 (이벤트 페이지의 예제와 같은 코드)
  if (block.type === 'demo') {
    const $btn = document.createElement('button');
    $btn.setAttribute('type', 'button');
    $btn.classList.add('demo-btn');
    $btn.textContent = '눌러 보세요 (0)';

    let count = 0;
    $btn.addEventListener('click', function () {
      count = count + 1;
      $btn.textContent = '눌러 보세요 (' + count + ')';
    });
    return $btn;
  }

  return document.createElement('div');
}

// 주소의 #이 바뀔 때마다(뒤로 가기 포함) 화면을 다시 그립니다.
window.addEventListener('hashchange', render);

// 처음 열 때도 한 번 (예: 주소가 #html-basic로 열린 경우)
if (pages[location.hash.slice(1)]) {
  render();
}


// =========================================
// 10. 푸터 - 올해 연도 자동 표시
// =========================================
document.querySelector('.footer__year').textContent = new Date().getFullYear();