(() => {
  const menuBtnRef = document.querySelector("[data-nav-btn]");
  const buyBtn = document.querySelector("[data-buy-btn]");
  const mobileMenuRef = document.querySelector("[data-nav]");
  const page = document.querySelector("[data-nav-page]");

  menuBtnRef.addEventListener("click", () => {
    const expanded = menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.classList.toggle("site-nav-btn--is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);

    buyBtn.classList.toggle("buy-btn--nav-open");

    mobileMenuRef.classList.toggle("backdrop--is-open");
    page.classList.toggle("page--nav-open");
  });
})();