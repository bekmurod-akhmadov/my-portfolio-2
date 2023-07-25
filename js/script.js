window.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header')
        header.classList.toggle('sticky', window.scrollY > 0)

    })

    const menuBtn = document.querySelector('.menu_btn');
    const navigation = document.querySelector('.navigation');
    const navigationItems = document.querySelectorAll('.navigation a');



    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('active');
        navigation.classList.toggle('active');
    })

    navigationItems.forEach(navItem => {
        navItem.addEventListener('click', function() {
            menuBtn.classList.remove('active')
            navigation.classList.remove('active')
        })
    })

    const tuTopBtn = document.querySelector('.to_top');
    window.addEventListener('scroll', () => {
        tuTopBtn.classList.toggle('active', window.scrollY > 500)
    })
    tuTopBtn.addEventListener('click', function() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    })

    window.addEventListener('scroll', () => {
        let reveals = document.querySelectorAll('.reveal');
        for (let i = 0; i < reveals.length; i++) {
            let windowHeight = window.innerHeight;
            let revealTop = reveals[i].getBoundingClientRect().top;
            let revealPoint = 50;

            if (revealTop < windowHeight - revealPoint) {
                reveals[i].classList.add('active')
            } else {
                reveals[i].classList.add('top')
            }
        }
    })
})