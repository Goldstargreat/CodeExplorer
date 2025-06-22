const headerNavs = [
  {title: '웹 프로그래밍', link: '#about' },
  {title: 'HTML', link: '#html' },
  {title: 'CSS', link: '#css' },
  {title: '커리큘럼', link: '#cirriculum' },
  {title: '문의하기', link: '#contact' }
];
const $headerNavUlv = document.querySelector('.header__nav ul');

for (const nav of headerNavs) {
  const $li = document.createElement('li');
  $li.classList.add('header__nav-item');

  const $a = document.createElement('a');
  $a.textContent = nav.title;
  $a.setAttribute('href', nav.link);

  $li.appendChild($a);
  $headerNavUlv.appendChild($li);

}
const aboutCards = [
  {
    img: './images/about_1.svg',
    title: '스피디한 학습',
    descs: [
      '군더더기 없는 학습으로',
      '효율성을 끌어올린다.'
    ]
  },
  {
    img: './images/about_2.svg',
    title: '교재 및 외부 자료 활용',
    descs: [
      '본 교재 및 외부 자료를 활용해서',
      '보다 심도있게 실습한다.'
    ]
  },
  {
    img: './images/about_2.svg',
    title: '플레이그라운드',
    descs: [
      '사이드 프로젝트를 만들어 재미를 이끌어서',
      '반복학습을 돕는다.'
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

  const $h2 = document.createElement('h2');
  $h2.classList.add('about__title')
  $h2.classList.add('_' + (i + 1));
  $h2.textContent = card.title;

  const $p = document.createElement('p');
  $p.classList.add('about__text');

  for (const desc of card.descs) {
    const $word = document.createElement('div');
    $word.textContent = desc;
    $p.appendChild($word);
  }

  $div.appendChild($img);
  $div.appendChild($h2);
  $div.appendChild($p);

  $aboutDiv.appendChild($div);
}

$currLis = document.querySelectorAll('.curriculum__list > li');

$currProgBar = document.querySelector('.curriculum__progress .bar');

for (let i = 0; i < $currLis.length; i++) {
  const $li = $currLis[i];

  $li.addEventListener('mouseenter', () => {
    $currProgBar.style.width = (200 * i) + 'px';
  });
  $li.addEventListener('mouseleave', () => {
    $currProgBar.style.width = 0;
  });
}

const $contactTabs = document.querySelectorAll('input[name=contact]');
const $contactSlideCon = document.querySelector('.contact__slide-con');

for (let i = 0; i < $contactTabs.length; i++) {
  const $tab = $contactTabs[i];
  const marginLeft = [0, '-100vw'][i];

  $tab.addEventListener('click', () => {
    $contactSlideCon.style.marginLeft = marginLeft;
  });
}

const $menuBtn = document.querySelector('.header__menu-btn');
const $headerNav = document.querySelector('.header__nav');

$menuBtn.addEventListener('click', (e) => {
  $menuBtn.classList.toggle('on');
  $headerNav.classList.toggle('active');

  // 이 요소 아래 레이어에는 클릭 이벤트가 먹히지 않도록
  e.stopPropagation();
});

document
.querySelector('body')
.addEventListener('click', () => {
  $menuBtn.classList.remove('on');
  $headerNav.classList.remove('active');
});