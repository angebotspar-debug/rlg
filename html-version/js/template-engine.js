// ===== TEMPLATE ENGINE =====

class TemplateEngine {
    constructor() {
        this.content = null;
        this.currentLanguage = 'tr';
        this.loadContent();
    }

    async loadContent() {
        try {
            const response = await fetch('/data/content.json');
            this.content = await response.json();
        } catch (error) {
            console.error('Content loading error:', error);
            // Fallback content
            this.content = this.getFallbackContent();
        }
    }

    getFallbackContent() {
        return {
            site: {
                name: "İslam Rehberi",
                subtitle: "Islamic Guidance"
            },
            languages: {
                tr: { name: "Türkçe", flag: "🇹🇷", code: "tr" },
                en: { name: "English", flag: "🇺🇸", code: "en" },
                de: { name: "Deutsch", flag: "🇩🇪", code: "de" }
            }
        };
    }

    setLanguage(lang) {
        this.currentLanguage = lang;
    }

    getContent(path) {
        if (!this.content) return null;
        
        const keys = path.split('.');
        let result = this.content;
        
        for (const key of keys) {
            if (result && typeof result === 'object' && key in result) {
                result = result[key];
            } else {
                return null;
            }
        }
        
        return result;
    }

    getLocalizedContent(path) {
        const fullPath = `${path}.${this.currentLanguage}`;
        return this.getContent(fullPath);
    }

    renderNavigation(language = this.currentLanguage) {
        const navItems = this.getContent(`navigation.${language}`);
        if (!navItems) return '';

        return navItems.map(item => `
            <a href="${item.url}" class="nav-link">
                ${item.title}
            </a>
        `).join('');
    }

    renderMobileNavigation(language = this.currentLanguage) {
        const navItems = this.getContent(`navigation.${language}`);
        if (!navItems) return '';

        return navItems.map(item => `
            <a href="${item.url}" class="mobile-nav-link">
                ${item.title}
            </a>
        `).join('');
    }

    renderLanguageOptions() {
        const languages = this.getContent('languages');
        if (!languages) return '';

        return Object.entries(languages).map(([code, lang]) => `
            <a href="/${code}/" class="language-option" data-lang="${code}">
                <span class="flag">${lang.flag}</span>
                <span>${lang.name}</span>
            </a>
        `).join('');
    }

    renderHero(language = this.currentLanguage) {
        const hero = this.getContent(`pages.home.${language}.hero`);
        if (!hero) return '';

        const trustItems = hero.trustItems.map(item => `
            <div class="trust-item">
                <svg class="trust-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    ${this.getIconSVG(item.icon)}
                </svg>
                <span>${item.text}</span>
            </div>
        `).join('');

        return `
            <div class="hero-badge">
                <span class="badge-text">${hero.badge}</span>
            </div>
            
            <h1 class="hero-title">
                <span class="title-line1">${hero.title.split(' ')[0]}</span>
                <span class="title-line2 gradient-text">${hero.title.split(' ').slice(1).join(' ')}</span>
            </h1>
            
            <p class="hero-subtitle">${hero.subtitle}</p>
            <p class="hero-description">${hero.description}</p>
            
            <div class="hero-buttons">
                <a href="#" class="btn-primary">${hero.primaryButton}</a>
                <a href="#" class="btn-secondary">${hero.secondaryButton}</a>
            </div>
            
            <div class="hero-trust">
                ${trustItems}
            </div>
        `;
    }

    renderFeatures(language = this.currentLanguage) {
        const features = this.getContent(`pages.home.${language}.features`);
        if (!features) return '';

        return features.map(feature => `
            <div class="feature-card">
                <div class="feature-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        ${this.getIconSVG(feature.icon)}
                    </svg>
                </div>
                <h3 class="feature-title">${feature.title}</h3>
                <p class="feature-description">${feature.description}</p>
            </div>
        `).join('');
    }

    renderArticles(language = this.currentLanguage) {
        const articles = this.getContent(`pages.home.${language}.articles`);
        if (!articles) return '';

        const articleItems = articles.items.map(article => `
            <article class="article-card">
                <div class="article-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        ${this.getIconSVG('heart')}
                    </svg>
                </div>
                <div class="article-category ${article.categoryClass}">${article.category}</div>
                <h3 class="article-title">${article.title}</h3>
                <p class="article-excerpt">${article.excerpt}</p>
                <div class="article-meta">
                    <span class="read-time">${article.readTime}</span>
                    <span class="difficulty ${article.difficultyClass}">${article.difficulty}</span>
                </div>
            </article>
        `).join('');

        return `
            <div class="articles-header">
                <h2 class="section-title">
                    ${articles.title.split(' ')[0]} <span class="text-accent">${articles.title.split(' ').slice(1).join(' ')}</span>
                </h2>
                <p class="section-description">${articles.description}</p>
            </div>
            <div class="articles-grid">
                ${articleItems}
            </div>
        `;
    }

    renderFooter(language = this.currentLanguage) {
        const footer = this.getContent(`footer.${language}`);
        const site = this.getContent('site');
        const languages = this.getContent('languages');
        
        if (!footer || !site) return '';

        const quickLinks = footer.quickLinks.links.map(link => `
            <li><a href="${link.url}" class="footer-link">${link.title}</a></li>
        `).join('');

        const learningPaths = footer.learningPaths.links.map(link => `
            <li><a href="${link.url}" class="footer-link">${link.title}</a></li>
        `).join('');

        const languageLinks = Object.entries(languages).map(([code, lang]) => `
            <li>
                <a href="/${code}/" class="footer-link language-link">
                    <span class="flag">${lang.flag}</span>
                    <span>${lang.name}</span>
                </a>
            </li>
        `).join('');

        const policies = footer.policies.map(policy => `
            <a href="${policy.url}" class="policy-link">${policy.title}</a>
        `).join('');

        return `
            <div class="footer-content">
                <!-- Brand -->
                <div class="footer-brand">
                    <div class="footer-logo">
                        <div class="logo-icon">
                            <span>IG</span>
                        </div>
                        <div class="logo-text">
                            <span class="logo-main">${site.name}</span>
                            <span class="logo-sub">${site.subtitle}</span>
                        </div>
                    </div>
                    <p class="footer-description">${footer.description}</p>
                    <div class="footer-trust">
                        <div class="trust-item">
                            <svg class="trust-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                ${this.getIconSVG('globe')}
                            </svg>
                            <span>3 ${footer.languages.title}</span>
                        </div>
                        <div class="trust-item">
                            <svg class="trust-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                ${this.getIconSVG('heart')}
                            </svg>
                            <span>Güvenilir İçerik</span>
                        </div>
                    </div>
                </div>

                <!-- Quick Links -->
                <div class="footer-section">
                    <h3 class="footer-title">${footer.quickLinks.title}</h3>
                    <ul class="footer-links">
                        ${quickLinks}
                    </ul>
                </div>

                <!-- Learning Paths -->
                <div class="footer-section">
                    <h3 class="footer-title">${footer.learningPaths.title}</h3>
                    <ul class="footer-links">
                        ${learningPaths}
                    </ul>
                </div>

                <!-- Languages & Contact -->
                <div class="footer-section">
                    <h3 class="footer-title">${footer.languages.title}</h3>
                    <ul class="footer-links">
                        ${languageLinks}
                    </ul>

                    <div class="footer-contact">
                        <div class="contact-item">
                            <svg class="contact-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                ${this.getIconSVG('mail')}
                            </svg>
                            <span>${footer.contact.email}</span>
                        </div>
                        <div class="contact-item">
                            <svg class="contact-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                ${this.getIconSVG('globe')}
                            </svg>
                            <span>${footer.contact.website}</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Bottom Bar -->
            <div class="footer-bottom">
                <div class="footer-bottom-content">
                    <div class="copyright">
                        <span>${footer.copyright}</span>
                        <svg class="heart-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            ${this.getIconSVG('heart')}
                        </svg>
                        <span>${footer.madeWith}</span>
                    </div>
                    
                    <div class="footer-policies">
                        ${policies}
                    </div>
                </div>
            </div>
        `;
    }

    getIconSVG(iconName) {
        const icons = {
            heart: '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7z"></path>',
            star: '<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>',
            'check-circle': '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22,4 12,14.01 9,11.01"></polyline>',
            globe: '<circle cx="12" cy="12" r="10"></circle><path d="M2 12h20"></path><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>',
            zap: '<path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>',
            clock: '<circle cx="12" cy="12" r="10"></circle><polyline points="12,6 12,12 16,14"></polyline>',
            mail: '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>',
            package: '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27,6.96 12,12.01 20.73,6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',
            settings: '<circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>',
            book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>'
        };
        
        return icons[iconName] || icons.heart;
    }

    // Page generation methods
    generateHomePage(language = 'tr') {
        this.setLanguage(language);
        const pageData = this.getContent(`pages.home.${language}`);
        
        if (!pageData) {
            console.error(`No page data found for language: ${language}`);
            return null;
        }

        return {
            title: pageData.title,
            description: pageData.description,
            language: language,
            navigation: this.renderNavigation(language),
            mobileNavigation: this.renderMobileNavigation(language),
            languageOptions: this.renderLanguageOptions(),
            hero: this.renderHero(language),
            features: this.renderFeatures(language),
            articles: this.renderArticles(language),
            footer: this.renderFooter(language)
        };
    }

    // Utility method to detect language from URL
    detectLanguageFromURL() {
        const path = window.location.pathname;
        const langMatch = path.match(/^\/([a-z]{2})\//);
        return langMatch ? langMatch[1] : 'tr';
    }

    // Initialize page rendering
    async initializePage() {
        await this.loadContent();
        const language = this.detectLanguageFromURL();
        const pageData = this.generateHomePage(language);
        
        if (pageData) {
            this.renderPageContent(pageData);
        }
    }

    renderPageContent(pageData) {
        // Update page title and meta
        document.title = pageData.title;
        document.querySelector('meta[name="description"]')?.setAttribute('content', pageData.description);
        document.documentElement.lang = pageData.language;

        // Update navigation
        const navLinks = document.querySelector('.nav-links');
        if (navLinks) navLinks.innerHTML = pageData.navigation;

        const mobileNavContent = document.querySelector('.mobile-menu-content');
        if (mobileNavContent) mobileNavContent.innerHTML = pageData.mobileNavigation;

        const languageDropdown = document.querySelector('.language-dropdown');
        if (languageDropdown) languageDropdown.innerHTML = pageData.languageOptions;

        // Update hero content
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) heroContent.innerHTML = pageData.hero;

        // Update features
        const featuresGrid = document.querySelector('.features-grid');
        if (featuresGrid) featuresGrid.innerHTML = pageData.features;

        // Update articles
        const articlesContainer = document.querySelector('.articles .container');
        if (articlesContainer) articlesContainer.innerHTML = pageData.articles;

        // Update footer
        const footerContainer = document.querySelector('.footer .container');
        if (footerContainer) footerContainer.innerHTML = pageData.footer;
    }
}

// Global template engine instance
window.templateEngine = new TemplateEngine();

// Auto-initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.templateEngine.initializePage();
});
