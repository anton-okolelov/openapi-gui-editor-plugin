// Consent Management System
class ConsentManager {
    constructor() {
        this.consent = {
            analytics: false,
            marketing: false,
            necessary: true
        };
        this.init();
    }

    init() {
        // Load saved consent from localStorage
        const savedConsent = localStorage.getItem('userConsent');
        if (savedConsent) {
            this.consent = JSON.parse(savedConsent);
        }
        
        // Show consent banner if consent not given
        if (!this.hasConsent()) {
            this.showConsentBanner();
        } else {
            this.applyConsent();
        }
    }

    hasConsent() {
        return localStorage.getItem('userConsent') !== null;
    }

    showConsentBanner() {
        // Remove existing banner if present
        const existingBanner = document.getElementById('consent-banner');
        if (existingBanner) {
            existingBanner.remove();
        }
        
        const banner = document.createElement('div');
        banner.id = 'consent-banner';
        banner.innerHTML = `
            <div class="consent-content">
                <div class="consent-header">
                    <h3>🍪 We use cookies</h3>
                    <p>We use cookies and similar technologies to improve website functionality, analyze traffic, and personalize content.</p>
                </div>
                <div class="consent-options">
                    <label>
                        <input type="checkbox" id="consent-analytics" checked>
                        <span>Analytics (Google Analytics)</span>
                    </label>
                    <label>
                        <input type="checkbox" id="consent-marketing" checked>
                        <span>Marketing and Advertising</span>
                    </label>
                </div>
                <div class="consent-buttons">
                    <button id="accept-all" class="btn-primary">Accept All</button>
                    <button id="accept-selected" class="btn-secondary">Accept Selected</button>
                    <button id="reject-all" class="btn-secondary">Reject All</button>
                </div>
            </div>
        `;
        document.body.appendChild(banner);
        
        this.bindEvents();
    }

    bindEvents() {
        document.getElementById('accept-all').addEventListener('click', () => {
            this.consent.analytics = true;
            this.consent.marketing = true;
            this.saveAndApply();
        });

        document.getElementById('accept-selected').addEventListener('click', () => {
            this.consent.analytics = document.getElementById('consent-analytics').checked;
            this.consent.marketing = document.getElementById('consent-marketing').checked;
            this.saveAndApply();
        });

        document.getElementById('reject-all').addEventListener('click', () => {
            this.consent.analytics = false;
            this.consent.marketing = false;
            this.saveAndApply();
        });
    }

    saveAndApply() {
        localStorage.setItem('userConsent', JSON.stringify(this.consent));
        this.hideConsentBanner();
        this.applyConsent();
        
        // Track consent update event
        if (window.gtag) {
            gtag('event', 'consent_update', {
                'event_category': 'Consent',
                'event_label': 'User updated consent settings',
                'analytics_consent': this.consent.analytics,
                'marketing_consent': this.consent.marketing
            });
        }
    }

    hideConsentBanner() {
        const banner = document.getElementById('consent-banner');
        if (banner) {
            banner.style.display = 'none';
        }
    }

    applyConsent() {
        // Apply consent to Google Analytics
        if (window.gtag && this.consent.analytics) {
            gtag('consent', 'update', {
                'analytics_storage': 'granted',
                'ad_storage': this.consent.marketing ? 'granted' : 'denied'
            });
        } else if (window.gtag) {
            gtag('consent', 'update', {
                'analytics_storage': 'denied',
                'ad_storage': 'denied'
            });
        }
    }

    updateConsent(newConsent) {
        this.consent = { ...this.consent, ...newConsent };
        localStorage.setItem('userConsent', JSON.stringify(this.consent));
        this.applyConsent();
    }

    getConsent() {
        return this.consent;
    }
}

// Initialize consent manager after DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    window.consentManager = new ConsentManager();
});

// Modal functionality
const modal = document.getElementById('myModal');
const modalImage = document.getElementById('modalImage');
const closeBtn = document.querySelector('.modal .close');

// When the user clicks on the image, open the modal
document.querySelectorAll('.screenshot-container').forEach(container => {
    container.addEventListener('click', function() {
        const bigImageSrc = this.getAttribute('data-big-image');
        modalImage.src = bigImageSrc || this.querySelector('.plugin-screenshot').src;
        modal.classList.add('show');
    });
});

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function() {
    modal.classList.remove('show');
    modalImage.src = ''; // Clear image source
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.classList.remove('show');
        modalImage.src = ''; // Clear image source
    }
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.problem-card, .benefit-card, .testimonial-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.8s ease-out';
    observer.observe(el);
});

// Track all CTA clicks
document.querySelectorAll('.cta-primary').forEach(button => {
    button.addEventListener('click', function() {
        // Additional tracking can be added here
        console.log('CTA clicked:', this.textContent);
    });
});

// Add consent settings button after DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    const consentButton = document.createElement('button');
    consentButton.innerHTML = '🍪 Cookie Settings';
    consentButton.style.cssText = `
        position: fixed;
        bottom: 15px;
        right: 15px;
        background: rgba(255, 255, 255, 0.1);
        color: rgba(255, 255, 255, 0.6);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 20px;
        padding: 8px 12px;
        font-size: 0.75rem;
        cursor: pointer;
        z-index: 9999;
        backdrop-filter: blur(5px);
        transition: all 0.3s ease;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        opacity: 0.7;
    `;
    
    consentButton.addEventListener('mouseenter', () => {
        consentButton.style.opacity = '1';
        consentButton.style.color = 'rgba(255, 255, 255, 0.9)';
        consentButton.style.background = 'rgba(255, 255, 255, 0.15)';
        consentButton.style.transform = 'translateY(-1px)';
    });
    
    consentButton.addEventListener('mouseleave', () => {
        consentButton.style.opacity = '0.7';
        consentButton.style.color = 'rgba(255, 255, 255, 0.6)';
        consentButton.style.background = 'rgba(255, 255, 255, 0.1)';
        consentButton.style.transform = 'translateY(0)';
    });
    
    consentButton.addEventListener('click', () => {
        // Show consent banner again
        if (window.consentManager) {
            window.consentManager.showConsentBanner();
        }
    });
    
    document.body.appendChild(consentButton);
    
    // Add reset function to global scope for debugging
    window.resetConsent = function() {
        localStorage.removeItem('userConsent');
        if (window.consentManager) {
            window.consentManager.consent = {
                analytics: false,
                marketing: false,
                necessary: true
            };
            window.consentManager.showConsentBanner();
        }
        console.log('Consent settings reset. Banner should appear.');
    };
    
    // Add debug info
    console.log('Consent Mode initialized. Use resetConsent() to reset settings.');
}); 