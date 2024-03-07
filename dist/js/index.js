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

buttonSilang.addEventListener('click', () => {

    semuaProduk.classList.toggle('animate-munculAtas');
    semuaProduk.classList.toggle('animate-sembunyiBawah');
    semuaProduk.classList.toggle('translate-y-[500px]');
});


// tingkat sekolah
const buttonSekolah = document.querySelector('#button-sekolah');
const menuSekolah = document.querySelector('#menu-sekolah');
const buttonSilangSekolah = document.querySelector('#button-silang-sekolah');
buttonSekolah.addEventListener('click', () => {
    menuSekolah.classList.toggle('translate-y-[500px]');
    // menuSekolah.classList.remove('animate-sembunyi');
    menuSekolah.classList.toggle('animate-sembunyiBawah');
    menuSekolah.classList.toggle('animate-munculAtas');

})
if (menuSekolah.classList.contains('animate-munculAtas')) {
    buttonSekolah.addEventListener('click', () => {
        menuSekolah.classList.toggle('animate-munculAtas');
        menuSekolah.classList.toggle('animate-sembunyiBawah');
        menuSekolah.classList.toggle('translate-y-[500px]');
    });
}

buttonSilangSekolah.addEventListener('click', () => {

    menuSekolah.classList.toggle('animate-munculAtas');
    menuSekolah.classList.toggle('animate-sembunyiBawah');
    menuSekolah.classList.toggle('translate-y-[500px]');
});

// button layanan
const navbarLayanan = document.querySelector('#navbar-layanan');
const tigaLayanan = document.querySelector('#tiga-layanan');

navbarLayanan.addEventListener('click', () => {
    tigaLayanan.classList.toggle('hidden');
})


// Semua Produk
const buttonPromo = document.querySelector('#button-promo');
const menuPromo = document.querySelector('#menu-promo');
const buttonSilangPromo = document.querySelector('#button-silang-promo');
buttonPromo.addEventListener('click', () => {
    menuPromo.classList.toggle('translate-y-[500px]');
    // semuaProduk.classList.remove('animate-sembunyi');
    menuPromo.classList.toggle('animate-sembunyiBawah');
    menuPromo.classList.toggle('animate-munculAtas');

})
if (menuPromo.classList.contains('animate-munculAtas')) {
    buttonPromo.addEventListener('click', () => {
        menuPromo.classList.toggle('animate-munculAtas');
        menuPromo.classList.toggle('animate-sembunyiBawah');
        menuPromo.classList.toggle('translate-y-[500px]');
    });
}

buttonSilangPromo.addEventListener('click', () => {

    menuPromo.classList.toggle('animate-munculAtas');
    menuPromo.classList.toggle('animate-sembunyiBawah');
    menuPromo.classList.toggle('translate-y-[500px]');
});