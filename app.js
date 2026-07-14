/**
 * ==========================================================================
 * CREATIVE MEDIA & DESIGN 101 - INTERACTIVE PORTFOLIO FILTERS
 * ==========================================================================
 * This script controls the gallery filters, allowing visitors to filter
 * submissions by Project 1, Project 2, or Project 3.
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {

    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove 'active' class from all buttons and add to the clicked one
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            galleryItems.forEach(item => {
                const category = item.getAttribute('data-category');

                // If filter is 'all' or matches the item's category, show it. Otherwise hide it.
                if (filterValue === 'all' || category === filterValue) {
                    item.classList.remove('hidden');
                } else {
                    item.classList.add('hidden');
                }
            });
        });
    });

});
