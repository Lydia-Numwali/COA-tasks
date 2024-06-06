document.addEventListener("DOMContentLoaded", function() {
    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.filter = 'brightness(0%)';
        });

        item.addEventListener('mouseout', () => {
            item.style.filter = 'brightness(100%)';
        });
    });
});
