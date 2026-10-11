/* ============================================
   LUCAS VEGA - Gallery (Lightbox + Filters)
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

    /* ------------------------------------------
       Gallery Filters
    ------------------------------------------ */
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button
            filterBtns.forEach(b => {
                b.classList.remove('bg-gold-500', 'text-dark-900');
                b.classList.add('bg-dark-800');
            });
            btn.classList.add('bg-gold-500', 'text-dark-900');
            btn.classList.remove('bg-dark-800');

            const filter = btn.dataset.filter;
            galleryItems.forEach(item => {
                if (filter === 'all' || item.dataset.category === filter) {
                    item.style.display = 'block';
                    item.style.animation = 'fadeIn 0.4s ease';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    /* ------------------------------------------
       Lightbox
    ------------------------------------------ */
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCounter = document.getElementById('lightbox-counter');
    let currentIndex = 0;
    const visibleItems = () => Array.from(galleryItems).filter(i => i.style.display !== 'none');

    const openLightbox = (index) => {
        const items = visibleItems();
        if (items.length === 0) return;
        currentIndex = index;
        const item = items[currentIndex];
        const img = item.querySelector('img');
        lightboxImg.src = img.src.replace('w=600', 'w=1600');
        lightboxImg.alt = img.alt;
        lightboxCounter.textContent = `${currentIndex + 1} / ${items.length}`;
        lightbox.classList.remove('hidden');
        lightbox.classList.add('flex');
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        lightbox.classList.add('hidden');
        lightbox.classList.remove('flex');
        document.body.style.overflow = '';
    };

    const navigate = (direction) => {
        const items = visibleItems();
        if (items.length === 0) return;
        currentIndex = (currentIndex + direction + items.length) % items.length;
        const img = items[currentIndex].querySelector('img');
        lightboxImg.src = img.src.replace('w=600', 'w=1600');
        lightboxCounter.textContent = `${currentIndex + 1} / ${items.length}`;
    };

    // Click on gallery item to open
    galleryItems.forEach((item, idx) => {
        item.addEventListener('click', () => {
            const items = visibleItems();
            const visibleIndex = items.indexOf(item);
            if (visibleIndex !== -1) openLightbox(visibleIndex);
        });
    });

    // Lightbox controls
    document.getElementById('lightbox-close').addEventListener('click', closeLightbox);
    document.getElementById('lightbox-prev').addEventListener('click', () => navigate(-1));
    document.getElementById('lightbox-next').addEventListener('click', () => navigate(1));

    // Close on background click
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (lightbox.classList.contains('hidden')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') navigate(-1);
        if (e.key === 'ArrowRight') navigate(1);
    });
});
