document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('nav ul li a');
    const underline = document.getElementById('underline');
    const activeItem = document.querySelector('nav ul li a.active');

    // NIEUW: Set initial position and width of the underline
    if (activeItem) {
        underline.style.width = `${activeItem.offsetWidth}px`;
        underline.style.left = `${activeItem.offsetLeft}px`;
    }

    menuItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            // NIEUW: Update underline position and width on hover
            underline.style.width = `${this.offsetWidth}px`;
            underline.style.left = `${this.offsetLeft}px`;
        });
    });

    // NIEUW: Reset underline to active item on mouse leave
    document.querySelector('nav').addEventListener('mouseleave', function() {
        if (activeItem) {
            underline.style.width = `${activeItem.offsetWidth}px`;
            underline.style.left = `${activeItem.offsetLeft}px`;
        }
    });
});
