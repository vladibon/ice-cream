(() => {
  const navBtnRef = document.querySelector("[data-nav-btn]");
  const buyBtn = document.querySelector("[data-buy-btn]");
  const buyBtnMob = document.querySelector("[data-buy-btn-mob]");
  
  const page = document.querySelector("[data-nav-page]");
  const siteNavRef = document.querySelector("[data-nav]");

  navBtnRef.addEventListener("click", () => {
    const expanded = navBtnRef.getAttribute("aria-expanded") === "true" || false;

    navBtnRef.classList.toggle("is-active");
    navBtnRef.setAttribute("aria-expanded", !expanded);

    buyBtn.classList.toggle("page-header__btn--nav-open");
    buyBtnMob.classList.toggle("page-header__btn-mob--nav-open");

    page.classList.toggle("page--nav-open");
    siteNavRef.classList.toggle("site-nav-backdrop--is-open");
  });
})();