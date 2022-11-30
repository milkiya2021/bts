//메뉴버튼 누를 시 해당위치로 스크롤 이동하는 연출보여주기  ㅋㅋㅋ

const button = document.querySelectorAll("button");
const sectionbox = document.querySelectorAll(".section_box");

const firstTop = sectionbox[0].offsetTop;
const secondTop = sectionbox[1].offsetTop;
const thirdTop = sectionbox[2].offsetTop;
const fourthTop = sectionbox[3].offsetTop;
const fifthTop = sectionbox[4].offsetTop;

button[0].onclick = function () {
  window.scroll({ top: firstTop, behavior: "smooth" });
};

button[1].onclick = function () {
  window.scroll({ top: secondTop, behavior: "smooth" });
};

button[2].onclick = function () {
  window.scroll({ top: thirdTop, behavior: "smooth" });
};

button[3].onclick = function () {
  window.scroll({ top: fourthTop, behavior: "smooth" });
};

button[4].onclick = function () {
  window.scroll({ top: fifthTop, behavior: "smooth" });
};

//버거 버튼을 눌렀을때 메뉴가 나오게 하기
const burgerBtn = document.querySelector(".burger");
const menu = document.querySelector(".section_navi");

burgerBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
});