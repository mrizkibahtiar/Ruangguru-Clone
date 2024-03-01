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
    navMobile.classList.toggle('animate-sembunyiAtas');
    navMobile.classList.toggle('animate-munculBawah');

})
if (navMobile.classList.contains('animate-munculBawah')) {
    burgerButton.addEventListener('click', () => {
        navMobile.classList.toggle('animate-munculBawah');
        navMobile.classList.toggle('animate-sembunyiAtas');
        navMobile.classList.toggle('-translate-y-[500px]');
    })
}

// Semua Produk
const buttonSemuaProduk = document.querySelector('#button-semua-produk');
const semuaProduk = document.querySelector('#semua-produk');
const buttonSilang = document.querySelector('#button-silang');
buttonSemuaProduk.addEventListener('click', () => {
    semuaProduk.classList.toggle('translate-y-[500px]');
    // semuaProduk.classList.remove('animate-sembunyi');
    semuaProduk.classList.toggle('animate-sembunyiBawah');
    semuaProduk.classList.toggle('animate-munculAtas');

})
if (semuaProduk.classList.contains('animate-munculAtas')) {
    buttonSemuaProduk.addEventListener('click', () => {
        semuaProduk.classList.toggle('animate-munculAtas');
        semuaProduk.classList.toggle('animate-sembunyiBawah');
        semuaProduk.classList.toggle('translate-y-[500px]');
    });
}

if (semuaProduk.classList.contains('animate-munculAtas')) {
    document.body.addEventListener('click', () => {
        semuaProduk.classList.toggle('animate-munculAtas');
        semuaProduk.classList.toggle('animate-sembunyiBawah');
        semuaProduk.classList.toggle('translate-y-[500px]');
    })
}

buttonSilang.addEventListener('click', () => {

    semuaProduk.classList.toggle('animate-munculAtas');
    semuaProduk.classList.toggle('animate-sembunyiBawah');
    semuaProduk.classList.toggle('translate-y-[500px]');
});