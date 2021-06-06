(() => {
  const menuBtnRef = document.querySelector("[data-nav-btn]");
  const buyBtn = document.querySelector("[data-buy-btn]");
  const page = document.querySelector("[data-nav-page]");
  const mobileMenuRef = document.querySelector("[data-nav]");

  menuBtnRef.addEventListener("click", () => {
    const expanded = menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.classList.toggle("site-nav-btn--nav-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);

    buyBtn.classList.toggle("page-header__btn--nav-open");

    page.classList.toggle("page--nav-open");
    mobileMenuRef.classList.toggle("backdrop--is-open");
  });
})();