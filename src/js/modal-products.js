(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-ice-cream]'),
    closeModalBtn: document.querySelector('[data-modal-close-ice-cream]'),
    modal: document.querySelector('[data-modal-ice-cream]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('modal-open');
    refs.modal.classList.toggle('product__description--is-hidden');
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-ice-coffee]'),
    closeModalBtn: document.querySelector('[data-modal-close-ice-coffee]'),
    modal: document.querySelector('[data-modal-ice-coffee]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('modal-open');
    refs.modal.classList.toggle('product__description--is-hidden');
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-milkshakes]'),
    closeModalBtn: document.querySelector('[data-modal-close-milkshakes]'),
    modal: document.querySelector('[data-modal-milkshakes]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('modal-open');
    refs.modal.classList.toggle('product__description--is-hidden');
  }
})();