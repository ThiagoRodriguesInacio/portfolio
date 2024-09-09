const menuBtn = document.querySelector('.menu-btn');
console.log(menuBtn)
const mobileNav = document.querySelector('.mobile-nav');

menuBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
});

document.addEventListener('click', (e) => {
    if (!mobileNav.contains(e.target) && !menuBtn.contains(e.target)) {
        mobileNav.classList.remove('active');
    }
});