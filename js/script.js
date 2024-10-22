window.addEventListener("load", () => {
    const scrollContainer = document.querySelector('.scroll-container');

    scrollContainer.addEventListener('wheel', (event) => {
        if (window.innerWidth > 768) {
            event.preventDefault();
            scrollContainer.scrollLeft += event.deltaY;
        }
    });
});

window.addEventListener("load", () => {
    const scrollContainer = document.querySelector('.scroll-container');
    
    const stepWidth = window.innerWidth * 0.5;
    let currentStep = 0;

    scrollContainer.addEventListener('wheel', (event) => {
        if (window.innerWidth > 768) {
            event.preventDefault();
            
            const maxSteps = Math.floor(scrollContainer.scrollWidth / stepWidth);

            if (event.deltaY > 0) {
                currentStep = Math.min(currentStep + 1, maxSteps);
            } 
            else if (event.deltaY < 0) {
                currentStep = Math.max(currentStep - 1, 0);
            }

            const newScrollLeft = currentStep * stepWidth;

            scrollContainer.scrollTo({
                left: newScrollLeft,
                behavior: 'smooth'
            });
        }
    });
});

window.addEventListener("load", () => {
    const imgElement = document.querySelector('.resume-button img');
    const originalSrc = "/assets/images/demography.svg";
    const hoverSrc = "/assets/images/demography-white.svg";

    // Change image src on hover
    document.querySelector('.resume-button').addEventListener('mouseenter', () => {
        imgElement.src = hoverSrc; // Change to hover image
    });

    // Change image src back when hover ends
    document.querySelector('.resume-button').addEventListener('mouseleave', () => {
        imgElement.src = originalSrc; // Change back to original image
    });
});
