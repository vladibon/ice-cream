(() => {
  const navBtnRef = document.querySelector("[data-nav-btn]");

  const navLinkHomeRef = document.querySelector("[data-nav-link-home]");
  const navLinkAdvantagesRef = document.querySelector("[data-nav-link-advantages]");
  const navLinkAboutRef = document.querySelector("[data-nav-link-about]");
  const navLinkProductsRef = document.querySelector("[data-nav-link-products]");
  const navLinkLocationsRef = document.querySelector("[data-nav-link-locations]");
  
  const buyBtn = document.querySelector("[data-buy-btn]");
  const buyBtnMob = document.querySelector("[data-buy-btn-mob]");
  
  const page = document.querySelector("[data-nav-page]");
  const siteNavRef = document.querySelector("[data-nav]");

  navBtnRef.addEventListener("click", () => {
    const expanded = navBtnRef.getAttribute("aria-expanded") === "true" || false;

    navBtnRef.classList.toggle("is-active");
    navBtnRef.setAttribute("aria-expanded", !expanded);

    buyBtn.classList.toggle("btn-buy--nav-open");
    buyBtnMob.classList.toggle("btn-buy-mob--nav-open");

    page.classList.toggle("page--nav-open");
    siteNavRef.classList.toggle("site-nav-backdrop--is-open");
  });

  navLinkHomeRef.addEventListener("click", () => {
    const expanded = navBtnRef.getAttribute("aria-expanded") === "true" || false;

    navBtnRef.classList.toggle("is-active");
    navBtnRef.setAttribute("aria-expanded", !expanded);

    buyBtn.classList.toggle("btn-buy--nav-open");
    buyBtnMob.classList.toggle("btn-buy-mob--nav-open");

    page.classList.toggle("page--nav-open");
    siteNavRef.classList.toggle("site-nav-backdrop--is-open");
  });

  navLinkAdvantagesRef.addEventListener("click", () => {
    const expanded = navBtnRef.getAttribute("aria-expanded") === "true" || false;

    navBtnRef.classList.toggle("is-active");
    navBtnRef.setAttribute("aria-expanded", !expanded);

    buyBtn.classList.toggle("btn-buy--nav-open");
    buyBtnMob.classList.toggle("btn-buy-mob--nav-open");

    page.classList.toggle("page--nav-open");
    siteNavRef.classList.toggle("site-nav-backdrop--is-open");
  });

  navLinkAboutRef.addEventListener("click", () => {
    const expanded = navBtnRef.getAttribute("aria-expanded") === "true" || false;

    navBtnRef.classList.toggle("is-active");
    navBtnRef.setAttribute("aria-expanded", !expanded);

    buyBtn.classList.toggle("btn-buy--nav-open");
    buyBtnMob.classList.toggle("btn-buy-mob--nav-open");

    page.classList.toggle("page--nav-open");
    siteNavRef.classList.toggle("site-nav-backdrop--is-open");
  });

  navLinkProductsRef.addEventListener("click", () => {
    const expanded = navBtnRef.getAttribute("aria-expanded") === "true" || false;

    navBtnRef.classList.toggle("is-active");
    navBtnRef.setAttribute("aria-expanded", !expanded);

    buyBtn.classList.toggle("btn-buy--nav-open");
    buyBtnMob.classList.toggle("btn-buy-mob--nav-open");

    page.classList.toggle("page--nav-open");
    siteNavRef.classList.toggle("site-nav-backdrop--is-open");
  });

  navLinkLocationsRef.addEventListener("click", () => {
    const expanded = navBtnRef.getAttribute("aria-expanded") === "true" || false;

    navBtnRef.classList.toggle("is-active");
    navBtnRef.setAttribute("aria-expanded", !expanded);

    buyBtn.classList.toggle("btn-buy--nav-open");
    buyBtnMob.classList.toggle("btn-buy-mob--nav-open");

    page.classList.toggle("page--nav-open");
    siteNavRef.classList.toggle("site-nav-backdrop--is-open");
  });
})();

(() => {
  var topButton = document.getElementById('myBtn');

  window.onscroll = function () {
    scrollFunction();
  };

  topButton.addEventListener('click', topFunction);

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      topButton.style.display = 'flex';
    } else {
      topButton.style.display = 'none';
    }
  }

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
})();