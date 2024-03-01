// event listener FAQ
const faq = document.querySelectorAll('.faq');
faq.forEach((item, index) => {
    item.addEventListener('click', function () {
        console.log(index);
        document.querySelector(`.answer${index}`).classList.toggle('hidden');
        document.querySelector(`.down${index}`).classList.toggle('rotate-180');
    })
})


// navbar-mobile
const burgerButton = document.querySelector('#burger-button');
const navMobile = document.querySelector('#navbar-mobile');
burgerButton.addEventListener('click', () => {
    navMobile.classList.toggle('-translate-y-[500px]');
    // navMobile.classList.remove('animate-sembunyi');
    navMobile.classList.toggle('animate-sembunyi');
    navMobile.classList.toggle('animate-muncul');

})
if (navMobile.classList.contains('animate-muncul')) {
    burgerButton.addEventListener('click', () => {
        navMobile.classList.toggle('animate-muncul');
        navMobile.classList.toggle('animate-sembunyi');
        navMobile.classList.toggle('-translate-y-[500px]');
    })
}