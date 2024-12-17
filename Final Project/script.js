document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");
    const filterDropdown = document.getElementById("filter-era");

    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? "block" : "none";
        });
    }

    showSlide(currentIndex);

    prevButton.addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    });

    nextButton.addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    });

    filterDropdown.addEventListener("change", function () {
        const selectedEra = this.value;
        currentIndex = 0; // 
        slides.forEach(slide => {
            if (selectedEra === "all" || slide.getAttribute("data-era") === selectedEra) {
                slide.style.display = "block";
            } else {
                slide.style.display = "none";
            }
        });
    });
});