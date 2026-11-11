// =========================================
// 0. 공통 함수
// =========================================

// 지금 화면이 PC 너비(769px 이상)인지 확인합니다.
// CSS의 @media (min-width: 769px)와 같은 기준입니다.
function isDesktop() {
  return window.matchMedia('(min-width: 769px)').matches;
}


// =========================================
// 1. 인트로 - 밑줄(_) 깜빡임
// =========================================
const $underscore = document.querySelector('.intro__type .underscore');

// animate(변화 목록, 옵션) : 자바스크립트로 애니메이션을 만듭니다.
$underscore.animate(
  [
    { opacity: 0 },   // 시작: 안 보임
    { opacity: 1 }    // 끝: 보임
  ],
  {
    duration: 350,          // 0.35초 동안
    iterations: Infinity,   // 무한 반복
    direction: 'alternate'  // 갔다가 되돌아오기
  }
);


// =========================================
// 2. 헤더 - 메뉴 만들기 + 밑줄 효과 + 모바일 메뉴 버튼
// =========================================
const headerNavs = [
  { title: '웹 프로그래밍', link: '#about' },
  { title: 'HTML', link: '#html' },
  { title: 'CSS', link: '#css' },
  { title: '커리큘럼', link: '#curriculum' },
  { title: '문의하기', link: '#contact' }
];

const $headerNavUl = document.querySelector('.header__nav ul');

for (let i = 0; i < headerNavs.length; i++) {
  const nav = headerNavs[i];

  // <li class="header__nav-item">
  const $li = document.createElement('li');
  $li.classList.add('header__nav-item');

  // <a href="#about">웹 프로그래밍</a>
  const $a = document.createElement('a');
  $a.textContent = nav.title;
  $a.setAttribute('href', nav.link);

  // 마우스를 올리면 커지는 흰색 밑줄 <span class="header__nav-line">
  const $line = document.createElement('span');
  $line.classList.add('header__nav-line');

  $li.appendChild($a);
  $li.appendChild($line);
  $headerNavUl.appendChild($li);

  // 마우스를 올리면: 가운데에서 양옆으로 밑줄이 펴짐
  $li.addEventListener('mouseenter', function () {
    if (!isDesktop()) return;
    $line.style.left = '0';
    $line.style.width = '100%';
  });

  // 마우스가 나가면: 다시 가운데로 접힘
  $li.addEventListener('mouseleave', function () {
    $line.style.left = '50%';
    $line.style.width = '0';
  });
}

// 모바일 메뉴 버튼(≡)
const $menuBtn = document.querySelector('.header__menu-btn');
const $headerNav = document.querySelector('.header__nav');

$menuBtn.addEventListener('click', function (e) {
  $menuBtn.classList.toggle('on');
  $headerNav.classList.toggle('active');

  // 클릭이 body까지 전달되면 아래 코드가 메뉴를 바로 닫아버리므로 막습니다.
  e.stopPropagation();
});

// 화면의 다른 곳(메뉴 항목 포함)을 누르면 메뉴를 닫습니다.
document.body.addEventListener('click', function () {
  $menuBtn.classList.remove('on');
  $headerNav.classList.remove('active');
});


// =========================================
// 3. 소개(about) - 카드 만들기 + 마우스 효과
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

  // <div class="about__card">
  const $div = document.createElement('div');
  $div.classList.add('about__card');

  // <img class="about__icon">
  const $img = document.createElement('img');
  $img.classList.add('about__icon');
  $img.setAttribute('src', card.img);
  $img.setAttribute('alt', '');

  // <h2 class="about__title _1">
  const $h2 = document.createElement('h2');
  $h2.classList.add('about__title');
  $h2.classList.add('_' + (i + 1));
  $h2.textContent = card.title;

  // <div class="about__text"> 안에 설명 줄을 하나씩 넣습니다.
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

// 카드 마우스 효과: 올린 카드는 커지고, 나머지는 작아지면서 흐려짐
const $aboutCardList = document.querySelectorAll('.about__card');

for (let i = 0; i < $aboutCardList.length; i++) {
  $aboutCardList[i].addEventListener('mouseenter', function () {
    if (!isDesktop()) return;

    for (let j = 0; j < $aboutCardList.length; j++) {
      const $card = $aboutCardList[j];
      const $icon = $card.querySelector('.about__icon');

      if (j === i) {
        // 마우스를 올린 카드
        $card.style.transform = 'scale(1.04)';
        $card.style.filter = 'none';
        $icon.style.opacity = '1';
      } else {
        // 나머지 카드
        $card.style.transform = 'scale(0.9)';
        $card.style.filter = 'blur(2px)';
        $icon.style.opacity = '';
      }
    }
  });
}

// 카드 영역 밖으로 나가면 모두 원래대로
$aboutDiv.addEventListener('mouseleave', function () {
  for (let i = 0; i < $aboutCardList.length; i++) {
    const $card = $aboutCardList[i];
    $card.style.transform = '';
    $card.style.filter = '';
    $card.querySelector('.about__icon').style.opacity = '';
  }
});


// =========================================
// 4. HTML·CSS 로고 - 둥둥 떠다니는 효과
// =========================================
const $logos = document.querySelectorAll('.html-css__logo');
const $shadows = document.querySelectorAll('.html-css__shadow');

// 두 애니메이션에 같은 옵션을 씁니다.
const floatOption = {
  duration: 800,
  easing: 'ease-in-out',
  iterations: Infinity,
  direction: 'alternate'
};

for (let i = 0; i < $logos.length; i++) {
  // 로고: 위아래로 10px 움직임
  $logos[i].animate(
    [
      { transform: 'translateY(0)' },
      { transform: 'translateY(10px)' }
    ],
    floatOption
  );

  // 그림자: 로고가 내려올수록 진해짐
  $shadows[i].animate(
    [
      { opacity: 0.08 },
      { opacity: 0.24 }
    ],
    floatOption
  );
}


// =========================================
// 5. 교과과정 - 진행 막대
// =========================================
const $currLis = document.querySelectorAll('.curriculum__list > li');
const $currProgBar = document.querySelector('.curriculum__progress .bar');

for (let i = 0; i < $currLis.length; i++) {
  const $li = $currLis[i];

  $li.addEventListener('mouseenter', function () {
    if (!isDesktop()) return;
    $li.classList.add('on');                       // 동그라미 초록색 + 글자 진하게
    $currProgBar.style.width = (200 * i) + 'px';   // i번째 항목까지 막대 채우기
  });

  $li.addEventListener('mouseleave', function () {
    $li.classList.remove('on');
    $currProgBar.style.width = '0';
  });
}


// =========================================
// 6. 문의하기 - 탭 전환
// =========================================
const $contactTabs = document.querySelectorAll('.contact__tab-btn');
const $contactSlideCon = document.querySelector('.contact__slide-con');

// 탭 글자: PC에서는 길게, 모바일에서는 짧게
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

updateTabTexts();                                    // 처음 열 때 한 번
window.addEventListener('resize', updateTabTexts);   // 창 크기가 바뀔 때마다

for (let i = 0; i < $contactTabs.length; i++) {
  $contactTabs[i].addEventListener('click', function () {
    // 0번 탭이면 0, 1번 탭이면 화면 한 칸만큼 왼쪽으로 밀기
    $contactSlideCon.style.marginLeft = (i * -100) + 'vw';

    // 누른 탭만 'on' (주황색)
    for (let j = 0; j < $contactTabs.length; j++) {
      $contactTabs[j].classList.remove('on');
    }
    $contactTabs[i].classList.add('on');
  });
}


// =========================================
// 7. 푸터 - 올해 연도 자동 표시
// =========================================
document.querySelector('.footer__year').textContent = new Date().getFullYear();