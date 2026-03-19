// AKARI KYOTO SHIJO - Main JavaScript File

// ==========================================
// GLOBAL STATE
// ==========================================
let currentLanguage = 'EN';
let currentHeroImageIndex = 0;
let heroSlideInterval;
let currentGalleryIndex = 0;

// Gallery data structure
const galleryData = {
    bedroom1: [
        'assets/images/bedroom1-1.png',
        'assets/images/bedroom1-2.png',
        'assets/images/bedroom1-3.png',
        'assets/images/bedroom1-4.png'
    ],
    bedroom2: [
        'assets/images/bedroom2-1.png',
        'assets/images/bedroom2-2.png',
        'assets/images/bedroom2-3.png'
    ],
    livingRoom: [
        'assets/images/living-1.png',
        'assets/images/living-2.png',
        'assets/images/living-3.png'
    ],
    bathroom: [
        'assets/images/bathroom-1.png',
        'assets/images/bathroom-2.png',
        'assets/images/bathroom-3.png'
    ],
    view: [
        'assets/images/view-1.png',
        'assets/images/view-2.png',
        'assets/images/view-3.png'
    ]
};

// ==========================================
// LANGUAGE SWITCHING
// ==========================================
function changeLanguage(lang) {
    currentLanguage = lang;
    document.body.setAttribute('data-lang', lang);
    
    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        }
    });
    
    // Update all translatable elements
    updateTranslations();
    
    // Save preference
    localStorage.setItem('preferredLanguage', lang);
}

function updateTranslations() {
    const lang = translations[currentLanguage];
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const keys = element.getAttribute('data-i18n').split('.');
        let translation = lang;
        
        // Navigate through nested object
        for (const key of keys) {
            translation = translation[key];
            if (!translation) break;
        }
        
        if (translation) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translation;
            } else {
                element.innerHTML = translation;
            }
        }
    });
}

// ==========================================
// HERO SLIDESHOW
// ==========================================
function initHeroSlideshow() {
    const heroImages = document.querySelectorAll('.hero-image');
    if (heroImages.length === 0) return;
    
    function showNextSlide() {
        heroImages[currentHeroImageIndex].classList.remove('active');
        currentHeroImageIndex = (currentHeroImageIndex + 1) % heroImages.length;
        heroImages[currentHeroImageIndex].classList.add('active');
    }
    
    // Change image every 1.5 seconds
    heroSlideInterval = setInterval(showNextSlide, 1500);
}

function stopHeroSlideshow() {
    if (heroSlideInterval) {
        clearInterval(heroSlideInterval);
    }
}

// ==========================================
// MOBILE MENU
// ==========================================
function initMobileMenu() {
    const menuToggle = document.getElementById('mobile-menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (!menuToggle || !navMenu) return;
    
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
    
    // Close menu when clicking on a link
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!menuToggle.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove('active');
        }
    });
}

// ==========================================
// GALLERY MODAL
// ==========================================
function initGallery() {
    const galleryModal = document.getElementById('gallery-modal');
    const galleryTitle = document.getElementById('gallery-title');
    const galleryImages = document.getElementById('gallery-images');
    const galleryClose = document.querySelector('.gallery-close');
    const galleryPrev = document.querySelector('.gallery-prev');
    const galleryNext = document.querySelector('.gallery-next');
    
    if (!galleryModal) return;
    
    // Open gallery for space items
    document.querySelectorAll('.space-item').forEach(item => {
        item.addEventListener('click', () => {
            const gallery = item.dataset.gallery;
            openGallery(gallery);
        });
    });
    
    function openGallery(galleryName) {
        const images = galleryData[galleryName];
        if (!images) return;
        
        // Set title
        const titleKey = `space.${galleryName}`;
        const keys = titleKey.split('.');
        let title = translations[currentLanguage];
        for (const key of keys) {
            title = title[key];
        }
        galleryTitle.textContent = title || '';
        
        // Load images
        galleryImages.innerHTML = '';
        currentGalleryIndex = 0;
        
        images.forEach((src, index) => {
            const img = document.createElement('img');
            img.src = src;
            img.alt = title;
            if (index === 0) img.classList.add('active');
            galleryImages.appendChild(img);
        });
        
        galleryModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    function closeGallery() {
        galleryModal.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    function showGalleryImage(index) {
        const images = galleryImages.querySelectorAll('img');
        if (images.length === 0) return;
        
        images[currentGalleryIndex].classList.remove('active');
        currentGalleryIndex = (index + images.length) % images.length;
        images[currentGalleryIndex].classList.add('active');
    }
    
    // Event listeners
    if (galleryClose) {
        galleryClose.addEventListener('click', closeGallery);
    }
    
    if (galleryPrev) {
        galleryPrev.addEventListener('click', () => {
            showGalleryImage(currentGalleryIndex - 1);
        });
    }
    
    if (galleryNext) {
        galleryNext.addEventListener('click', () => {
            showGalleryImage(currentGalleryIndex + 1);
        });
    }
    
    // Close on outside click
    galleryModal.addEventListener('click', (e) => {
        if (e.target === galleryModal) {
            closeGallery();
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!galleryModal.classList.contains('active')) return;
        
        if (e.key === 'Escape') {
            closeGallery();
        } else if (e.key === 'ArrowLeft') {
            showGalleryImage(currentGalleryIndex - 1);
        } else if (e.key === 'ArrowRight') {
            showGalleryImage(currentGalleryIndex + 1);
        }
    });
}

// ==========================================
// SMOOTH SCROLL
// ==========================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#' || href === '') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for fixed nav
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ==========================================
// NAVIGATION SCROLL EFFECT
// ==========================================
function initNavigationScroll() {
    const navigation = document.getElementById('navigation');
    if (!navigation) return;
    
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        // Add shadow when scrolled
        if (currentScroll > 50) {
            navigation.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            navigation.style.boxShadow = 'none';
        }
        
        lastScroll = currentScroll;
    });
}

// ==========================================
// LAZY LOADING IMAGES
// ==========================================
function initLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }
                    observer.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

// ==========================================
// INITIALIZATION
// ==========================================
function init() {
    // Load saved language preference
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage && translations[savedLanguage]) {
        changeLanguage(savedLanguage);
    } else {
        updateTranslations();
    }
    
    // Set up language switcher
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            changeLanguage(btn.dataset.lang);
        });
    });
    
    // Initialize features
    initHeroSlideshow();
    initMobileMenu();
    initGallery();
    initSmoothScroll();
    initNavigationScroll();
    initLazyLoading();
}

// ==========================================
// RUN ON PAGE LOAD
// ==========================================
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Clean up on page unload
window.addEventListener('beforeunload', () => {
    stopHeroSlideshow();
});
