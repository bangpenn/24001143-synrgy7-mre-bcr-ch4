const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(accordionHeader => {
    accordionHeader.addEventListener('click', () => {
        const accordionBody = accordionHeader.nextElementSibling;
        accordionHeader.classList.toggle('active');
        if (accordionHeader.classList.contains('active')) {
            accordionBody.style.maxHeight = accordionBody.scrollHeight + 'px';
        } else {
            accordionBody.style.maxHeight = '0';
        }
    });
});
