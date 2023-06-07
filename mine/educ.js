(() => {
    const mobileMenu = document.querySelector('.js-menu-container');
    const openMenuBtn = document.querySelector('.js-open-menu');
    const closeMenuBtn = document.querySelector('.js-close-menu');
    const links = document.querySelectorAll('.js-link');
    const toggleMenu = () => {
        const isMenuOpen =
            openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
        openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
        mobileMenu.classList.toggle('is-open');
        const scrollLockMethod = !isMenuOpen
            ? 'disableBodyScroll'
            : 'enableBodyScroll';
        bodyScrollLock[scrollLockMethod](document.body);
    };
    openMenuBtn.addEventListener('click', toggleMenu);
    closeMenuBtn.addEventListener('click', toggleMenu);
    if (document.documentElement.scrollWidth <= 767) {
        links.forEach(function (link) {
            link.addEventListener('click', toggleMenu);
        });
    }
    // Close the mobile menu on wider screens if the device orientation changes
    window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
        if (!e.matches) return;
        mobileMenu.classList.remove('is-open');
        openMenuBtn.setAttribute('aria-expanded', false);
        bodyScrollLock.enableBodyScroll(document.body);
    });
})();

// __________________________________________________________________________________
const MODAL_ACTIVE_CLASS_NAME = 'active';
const thankModal = document.querySelector('.modal-thank-you');
const form = document.querySelector('.thank-form');
const backdrop = document.querySelector('.overlay');
const openModalBtn = document.querySelector('.contacts-button');
const closeBtns = document.querySelectorAll('.close-btn');
const input = document.querySelector('.feedback-email');
const openSuccessModal = () => {
    thankModal.classList.add(MODAL_ACTIVE_CLASS_NAME);
    backdrop.classList.add(MODAL_ACTIVE_CLASS_NAME);
    console.log('first');
};
const closeSuccessModal = () => {
    thankModal.classList.remove(MODAL_ACTIVE_CLASS_NAME);
    backdrop.classList.remove(MODAL_ACTIVE_CLASS_NAME);
    input.value = '';
};
closeBtns.forEach(btn => {
    btn.addEventListener('click', e => {
        e.stopPropagation();
        closeSuccessModal();
    });
});
form.addEventListener('submit', e => {
    e.preventDefault();
    setTimeout(openSuccessModal, 300);
    setTimeout(closeSuccessModal, 2400);
});