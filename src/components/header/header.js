const PageHeader = function() {
    const navigationMenu = document.querySelectorAll('.js-page-header__nav')[0];
    const hamburgerMenu = document.querySelectorAll('.js-page-header__hamburger')[0];
    const windowWidth = window.innerWidth;

    const navigationVisible = function() {
        navigationMenu.classList.remove('hidden');
        navigationMenu.classList.add('visible');
        hamburgerMenu.classList.remove('visible');
        hamburgerMenu.classList.add('hidden');
    };

    const hamburgerVisible = function() {
        navigationMenu.classList.remove('visible');
        navigationMenu.classList.add('hidden');
        hamburgerMenu.classList.remove('hidden');
        hamburgerMenu.classList.add('visible');
    };

    const onResize = function() {
        const windowWidth = window.innerWidth;
        windowWidth > 760
            ? navigationVisible()
            : hamburgerVisible();
    };

    windowWidth > 760
        ? navigationVisible()
        : hamburgerVisible();

    window.addEventListener('resize', onResize);
};

export default PageHeader;
