// 뱃지 요소가 스크롤하다가 일정값이 넘어가면 스르륵 사라지는 기능!
const badgeEl = document.querySelector("header .badges");
// window는 브라우저 탭 하나라고 이해하면 됌
window.addEventListener(
  "scroll",
  _.throttle(function () {
    //   scrollY는 몇 픽셀 아래에 있느냐 얼마나 스크롤 했냐 값
    console.log(window.scrollY);
    if (window.scrollY > 500) {
      // 배지 숨기기
      //   이건 css처럼 하는거임
      //   badgeEl.style.display = "none";
      // 이건 gsap에서 to라는 기능을 사용해서 애니매이션 추가
      //   gsap.to(요소, 지속시간, 옵션);
      //   그리고 옵션으로 대부분 객체데이터를 사용함
      gsap.to(badgeEl, 0.6, {
        opacity: 0,
        // 그러나 시각적으로 사라지게만 하는게 아니라 실제로 사라지게 해야함
        // 그래야 다른 요소들이랑 overlap 되지 않으니까...
        display: "none",
      });
      // 마지막 scroll to 버튼 보이기
      gsap.to("#to-top", 0.2, {
        x: 0,
      });
    } else {
      //   badgeEl.style.display = "block";
      // 배지 보이기
      gsap.to(badgeEl, 0.6, {
        opacity: 1,
        display: "block",
      });
      // 마지막 scroll to 버튼 숨기기
      gsap.to("#to-top", 0.2, {
        x: 100,
      });
    }
  }, 300)
);

// 이건 0.3초임
// throttle은 함수가 우르르 실행되는거 방지 --> .throttle(함수, 시간)

const toTopEl = document.querySelector("#to-top");
toTopEl.addEventListener("click", function () {
  gsap.to(window, 0.7, {
    // 화면을 0픽셀로 옮겨주겟다
    scrollTo: 0,
  });
});

const fadeEls = document.querySelectorAll(".visual .fade-in");
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    // 순차적으로 하나씩
    delay: (index + 1) * 0.7,
    // 0.7 후에 1.4, 2.1 후에...
    opacity: 1,
  });
});

// 이건 js의 생성자
// new Swiper (선택자, 옵션)
new Swiper(".notice-line .swiper-container", {
  // 어느방향으로 작동하는지
  direction: "vertical",
  // 자동재생 여부
  autoplay: true,
  // 반복재생 여부
  loop: true,
});

new Swiper(".promotion .swiper-container", {
  // 그러나 이건 기본값
  // direction: 'horizontal'
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  autoplay: {
    // 5초
    delay: 5000,
  },
  pagination: {
    el: ".promotion .swiper-pagination",
    // 페이지 번호 요소 선택자
  },
  clickable: true,
  // 사용자가 눌러서 제어할 수 있는지
  navigation: {
    prevEl: ".promotion .swiper-prev",
    nextEl: ".promotion .swiper-next",
  },
});

new Swiper(".awards .swiper-container", {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: ".awards .swiper-prev",
    nextEl: ".awards .swiper-next",
  },
});

// 아... 그리고 class 값에 '-active' 붙는건
// 그냥 현재 활성화된 걸 보여주는 거였군아
// 난 그 click_at_time.py만들때 그냥 이름인줄...

const promotionEl = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".toggle-promotion");
// 언젠가는 다른 값이 할당될 수 있게
let isHidePromotion = false;
promotionToggleBtn.addEventListener("click", function () {
  // 반대가 되게 만들기
  isHidePromotion = !isHidePromotion;
  if (isHidePromotion) {
    // 숨김처리 해야함
    promotionEl.classList.add("hide");
  } else {
    promotionEl.classList.remove("hide");
  }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

function floatingObject(selector, delay, size) {
  // gsap.to(요소, 시간, 옵션)
  gsap.to(
    selector,
    // 애니매이션 동작 시간
    random(1.5, 2.5),
    {
      y: size,
      // -1은 무한반복
      repeat: -1,
      // 다시 뒤로 재생해서...
      yoyo: true,
      ease: Power1.easeInOut,
      // 몇초 뒤에 애니매이션 실행
      delay: random(0, delay),
    }
  );
}

floatingObject(".floating1", 1, 15);
floatingObject(".floating2", 0.5, 15);
floatingObject(".floating3", 1.5, 20);

const spyEls = document.querySelectorAll("section.scroll-spy");
spyEls.forEach(function (spyEl) {
  // 생성자 함수
  new ScrollMagic.Scene({
    // 보여짐 여부를 감시
    triggerElement: spyEl,
    // 0.8이라는 viewport지점에 걸리면 실행이 되는거
    triggerHook: 0.8,
  })
    .setClassToggle(spyEl, "show")
    .addTo(new ScrollMagic.Controller());
});

// 오... 개발자 도구 열어서 확인하면 scroll-spy뒤에 show가 나타났다 안 나타났다 하넹
