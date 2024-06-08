document.addEventListener("DOMContentLoaded", function() {
    const galleryItems = document.querySelectorAll('.gallery-image');

    galleryItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.filter = 'blur(5px) grayscale(100%)';
        });

        item.addEventListener('mouseout', () => {
            item.style.filter = 'brightness(100%)';
        });
    });
});
