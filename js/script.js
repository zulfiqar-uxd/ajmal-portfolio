window.addEventListener("load", () => {
    const scrollContainer = document.querySelector('.scroll-container');
    
    scrollContainer.addEventListener('wheel', (event) => {
        if (window.innerWidth > 768) {
            event.preventDefault();
            scrollContainer.scrollLeft += event.deltaY;
        }
    });
});
