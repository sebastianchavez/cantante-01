/* ============================================
   LUCAS VEGA - Main JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

    /* ------------------------------------------
       1) Navbar scroll effect
    ------------------------------------------ */
    const navbar = document.getElementById('navbar');
    const handleScroll = () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        // Show/hide scroll-to-top
        const btn = document.getElementById('scroll-top');
        if (btn) {
            if (window.scrollY > 400) {
                btn.classList.remove('opacity-0', 'pointer-events-none');
                btn.classList.add('opacity-100');
            } else {
                btn.classList.add('opacity-0', 'pointer-events-none');
                btn.classList.remove('opacity-100');
            }
        }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    /* ------------------------------------------
       2) Mobile menu toggle
    ------------------------------------------ */
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (menuBtn && mobileMenu) {
        const setMenuOpen = (open) => {
            mobileMenu.classList.toggle('hidden', !open);
            menuBtn.setAttribute('aria-expanded', String(open));
            menuBtn.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
            const icon = menuBtn.querySelector('i');
            icon.classList.toggle('fa-bars', !open);
            icon.classList.toggle('fa-xmark', open);
        };
        menuBtn.setAttribute('aria-controls', 'mobile-menu');
        setMenuOpen(false);
        menuBtn.addEventListener('click', () => {
            setMenuOpen(mobileMenu.classList.contains('hidden'));
        });
        // Close menu when clicking a link
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                setMenuOpen(false);
            });
        });
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
                setMenuOpen(false);
                menuBtn.focus();
            }
        });
        window.matchMedia('(min-width: 1280px)').addEventListener('change', (event) => {
            if (event.matches) setMenuOpen(false);
        });
    }

    /* ------------------------------------------
       3) Scroll-to-top button
    ------------------------------------------ */
    const scrollTopBtn = document.getElementById('scroll-top');
    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    /* ------------------------------------------
       4) Reveal animations on scroll
    ------------------------------------------ */
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
        revealElements.forEach(el => observer.observe(el));
    } else {
        revealElements.forEach(el => el.classList.add('active'));
    }

    /* ------------------------------------------
       5) Counter animation for stats
    ------------------------------------------ */
    const counters = document.querySelectorAll('.counter');
    if ('IntersectionObserver' in window && counters.length > 0) {
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    const target = parseInt(el.dataset.target);
                    const duration = 2000;
                    const startTime = performance.now();
                    const animate = (now) => {
                        const progress = Math.min((now - startTime) / duration, 1);
                        const eased = 1 - Math.pow(1 - progress, 3);
                        const current = Math.floor(eased * target);
                        el.textContent = current.toLocaleString() + (target >= 100 ? '+' : '+');
                        if (progress < 1) requestAnimationFrame(animate);
                    };
                    requestAnimationFrame(animate);
                    counterObserver.unobserve(el);
                }
            });
        }, { threshold: 0.5 });
        counters.forEach(c => counterObserver.observe(c));
    }

    /* ------------------------------------------
       6) Form validation (contact form)
    ------------------------------------------ */
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            let isValid = true;
            const fields = [
                { id: 'nombre', minLength: 3 },
                { id: 'email', pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
                { id: 'telefono', minLength: 8 },
                { id: 'mensaje', minLength: 10 }
            ];
            fields.forEach(field => {
                const input = document.getElementById(field.id);
                const errorMsg = document.getElementById(`error-${field.id}`);
                if (!input) return;
                let valid = true;
                if (input.value.trim() === '') valid = false;
                if (field.minLength && input.value.trim().length < field.minLength) valid = false;
                if (field.pattern && !field.pattern.test(input.value.trim())) valid = false;
                input.classList.remove('error', 'success');
                if (errorMsg) errorMsg.classList.add('hidden');
                if (!valid) {
                    input.classList.add('error');
                    if (errorMsg) errorMsg.classList.remove('hidden');
                    isValid = false;
                } else {
                    input.classList.add('success');
                }
            });
            if (isValid) {
                const successMsg = document.getElementById('form-success');
                if (successMsg) {
                    successMsg.classList.remove('hidden');
                    contactForm.reset();
                    setTimeout(() => successMsg.classList.add('hidden'), 5000);
                }
            }
        });
        // Real-time validation
        contactForm.querySelectorAll('input, textarea, select').forEach(input => {
            input.addEventListener('input', () => {
                input.classList.remove('error');
                const errorMsg = document.getElementById(`error-${input.id}`);
                if (errorMsg) errorMsg.classList.add('hidden');
            });
        });
    }
});
