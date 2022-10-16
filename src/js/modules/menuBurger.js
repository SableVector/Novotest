const menuBurger = () => {

    const menuBtn = document.querySelector('.icon-menu');
    const htmlTag = document.querySelector('html');
    const bodyTag = document.querySelector('body');

    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            document.documentElement.classList.toggle('menu-open');
            menuBtn.classList.toggle('menu-open');

            if (document.documentElement.classList.contains('catalog-open')) {
                document.documentElement.classList.remove('catalog-open');
            }
            if (document.documentElement.classList.contains('sub-menu-open')) {
                document.documentElement.classList.remove('sub-menu-open');
            }

            // if (htmlTag.classList.contains('menu-open')) {
            //     htmlTag.style.position = 'fixed';
            //     htmlTag.style.width = '100%';
            // } else {
            //     htmlTag.style.position = '';
            //     htmlTag.style.width = '';
            // }

        });
    }

};

export default menuBurger;