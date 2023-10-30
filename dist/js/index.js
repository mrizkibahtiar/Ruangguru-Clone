// event listener FAQ
const faq = document.querySelectorAll('.faq');
faq.forEach((item, index) => {
    item.addEventListener('click', function () {
        console.log(index);
        document.querySelector(`.answer${index}`).classList.toggle('hidden');
        document.querySelector(`.down${index}`).classList.toggle('rotate-180');
    })
})