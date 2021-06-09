(() => {
  const refs = {
    openModalBtnMobile: document.querySelector('[data-modal-open-mobile-delivery]'),
    openModalBtn: document.querySelector('[data-modal-open-delivery]'),
    closeModalBtn: document.querySelector('[data-modal-close-delivery]'),
    modal: document.querySelector('[data-modal-delivery]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.openModalBtnMobile.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('page__modal-open');
    refs.modal.classList.toggle('backdrop-delivery--is-hidden');
  }
})();