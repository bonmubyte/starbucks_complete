// 로그인 페이지에서도 공통으로 사용되는 거
// main.js에서 공통적으로 사용되는거 이관

// 여기서 document 는 html을 의미한다고 생각하면 됌
const searchEL = document.querySelector(".search");
const searchInputEl = searchEL.querySelector("input");

searchEL.addEventListener("click", function () {
  //클릭되면 어떤 logic을 처리할것인지 적어줌
  searchInputEl.focus();
});

searchInputEl.addEventListener("focus", function () {
  searchEL.classList.add("focused");
  //   set = 지정. html 속성은 attribute.
  searchInputEl.setAttribute("placeholder", "통합검색");
});

searchInputEl.addEventListener("blur", function () {
  searchEL.classList.remove("focused");
  //   set = 지정. html 속성은 attribute.
  searchInputEl.setAttribute("placeholder", "");
});

const thisYear = document.querySelector(".this-year");
// python에 datetime인갑네..
// textcontent는 글자 내용 지정 혹은 찾아내는거
thisYear.textContent = new Date().getFullYear();
