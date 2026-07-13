// ============================================================
// HIFSA UMER - PORTFOLIO DATA
// ============================================================

// ============================================================
// SKILLS DATA
// ============================================================

const skillsData = [
    { icon: '🐍', name: 'Python' },
    { icon: '💻', name: 'C#' },
    { icon: '🌐', name: 'ASP.NET MVC' },
    { icon: '⚛️', name: 'React' },
    { icon: '🟦', name: 'NestJS' },
    { icon: '📘', name: 'TypeScript' },
    { icon: '🟨', name: 'JavaScript' },
    { icon: '🤖', name: 'Machine Learning' },
    { icon: '🧠', name: 'NLP' },
    { icon: '🐘', name: 'PostgreSQL' },
    { icon: '🗄️', name: 'SQL' },
    { icon: '🍃', name: 'MongoDB' },
    { icon: '🐙', name: 'Git & GitHub' },
    { icon: '🐧', name: 'Linux' },
    { icon: '📊', name: 'Data Analysis' },
    { icon: '📈', name: 'Power BI' },
    { icon: '🧪', name: 'Playwright' },
    { icon: '🔄', name: 'Cypress' },
    { icon: '📮', name: 'Postman' },
    { icon: '📋', name: 'Jira' },
    { icon: '✅', name: 'Testing & QA' },
    { icon: '🌐', name: 'Cisco Networking' },
    { icon: '🔒', name: 'Network Security' },
    { icon: '☁️', name: 'Docker' },
    { icon: '🔄', name: 'CI/CD' },
];

// ============================================================
// PROJECTS DATA - All Projects Included
// ============================================================

const projectsData = [{
    icon: '🏢',
    title: 'VenueOS — AI-Powered Event Venue Platform',
    subtitle: 'Web Tech Project | July 2026',
    tags: ['React', 'Node.js', 'MongoDB', 'OpenAI', 'Docker'],
    description: 'Full-stack AI platform for multi-space venues. Led backend & AI integration with secure OpenAI proxy for event brief interpretation, contract generation, and setup checklists. Implemented 3D conflict detection for spaces, equipment, and vendors.',
    link: 'https://github.com/HifsaUmer/VenueOS'
}, {
    icon: '📰',
    title: 'TruthGuard AI — Fake News Detection System',
    subtitle: 'AI/ML Project | 2026',
    tags: ['Python', 'Flask', 'MongoDB', 'Scikit-learn', 'NLTK'],
    description: 'AI-powered system achieving 92.34% accuracy in detecting fake news using Logistic Regression and TF-IDF vectorization. Built full-stack web application with real-time predictions, confidence scores, and interactive dashboard. Trained on 72,000+ news articles.',
    link: 'https://github.com/HifsaUmer/fake-news-detector'
}, {
    icon: '🏛️',
    title: 'SZABIST Campus Network Design & Implementation',
    subtitle: 'CNDC Project | 2024',
    tags: ['Cisco', 'VLSM', 'VLAN', 'OSPF', 'NAT', 'ACL'],
    description: 'Designed and deployed a scalable, multi-building campus network for SZABIST Karachi using Cisco Packet Tracer. Implemented VLSM, VLANs, inter-VLAN routing, DHCP, OSPF, NAT, ACLs, port security, and remote management across 7 buildings.',
    link: '#'
}, {
    icon: '🗳️',
    title: 'Online Voting System',
    subtitle: 'Academic Project | 2024',
    tags: ['ASP.NET MVC', 'C#', 'SQL Server'],
    description: 'Developed a secure online voting system with authentication, authorization, and automated vote counting logic. Implemented secure voting workflow with team collaboration.',
    link: '#'
}, {
    icon: '📚',
    title: 'Academic Records System',
    subtitle: 'Academic Project | 2024',
    tags: ['PostgreSQL', 'Express.js', 'Alpine.js'],
    description: 'Full-stack system with hierarchical navigation, automated GPA/CGPA calculations, and optimized SQL queries reducing retrieval time by 70%.',
    link: '#'
}, {
    icon: '☕',
    title: 'Cafe Management System',
    subtitle: 'Academic Project | 2023',
    tags: ['Java', 'Data Structures', 'Queues'],
    description: 'Java-based desktop application for inventory and billing management using queues and heap sort. Improved runtime efficiency with optimized code.',
    link: '#'
}];

// ============================================================
// TYPING PHRASES
// ============================================================

const typingPhrases = [
    'AI Enthusiast',
    'Full Stack Developer',
    'QA & Testing Specialist',
    'Machine Learning Engineer',
    'Network Designer',
    'Tech Innovator'
];

// ============================================================
// PRELOADER
// ============================================================

window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        setTimeout(function() {
            preloader.classList.add('hide');
        }, 800);
    }
});

// ============================================================
// PARTICLES
// ============================================================

function createParticles() {
    const container = document.getElementById('particles');
    if (!container) return;
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.width = (Math.random() * 4 + 2) + 'px';
        particle.style.height = particle.style.width;
        particle.style.animationDuration = (Math.random() * 20 + 15) + 's';
        particle.style.animationDelay = (Math.random() * 20) + 's';
        particle.style.opacity = Math.random() * 0.3 + 0.1;
        container.appendChild(particle);
    }
}

// ============================================================
// TYPING EFFECT
// ============================================================

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedEl = document.getElementById('typed');

function typeEffect() {
    if (!typedEl) return;
    
    const current = typingPhrases[phraseIndex];
    if (isDeleting) {
        typedEl.textContent = current.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typedEl.textContent = current.substring(0, charIndex + 1);
        charIndex++;
    }

    let speed = isDeleting ? 60 : 120;

    if (!isDeleting && charIndex === current.length) {
        speed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % typingPhrases.length;
        speed = 500;
    }

    setTimeout(typeEffect, speed);
}

// ============================================================
// RENDER SKILLS
// ============================================================

function renderSkills() {
    const skillsGrid = document.getElementById('skillsGrid');
    if (!skillsGrid) return;
    
    skillsGrid.innerHTML = '';
    skillsData.forEach(skill => {
        const div = document.createElement('div');
        div.className = 'skill-item';
        div.innerHTML = `
            <span class="icon">${skill.icon}</span>
            <span class="name">${skill.name}</span>
        `;
        skillsGrid.appendChild(div);
    });
}

// ============================================================
// RENDER PROJECTS
// ============================================================

function renderProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    if (!projectsGrid) return;
    
    projectsGrid.innerHTML = '';
    projectsData.forEach(proj => {
        const div = document.createElement('div');
        div.className = 'project-card';
        div.innerHTML = `
            <div class="icon">${proj.icon}</div>
            <h3>${proj.title}</h3>
            <div class="sub">${proj.subtitle}</div>
            <div class="tags">
                ${proj.tags.map(t => `<span>${t}</span>`).join('')}
            </div>
            <p>${proj.description}</p>
            <a href="${proj.link}" target="_blank" class="project-link">Learn More <i class="fas fa-arrow-right"></i></a>
        `;
        projectsGrid.appendChild(div);
    });
}

// ============================================================
// HAMBURGER MENU
// ============================================================

function setupHamburger() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('open');
        });

        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('open');
            });
        });
    }
}

// ============================================================
// NAVBAR SCROLL EFFECT
// ============================================================

function setupNavbar() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// ============================================================
// CONTACT FORM
// ============================================================

function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('🚀 Thank you for reaching out! I\'ll get back to you soon.');
            this.reset();
        });
    }
}

// ============================================================
// SMOOTH SCROLL
// ============================================================

function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

// ============================================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ============================================================

function setupAnimations() {
    const cards = document.querySelectorAll('.project-card, .skill-item, .education-card, .stat-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    }, { threshold: 0.1 });
    
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// ============================================================
// INITIALIZE EVERYTHING
// ============================================================

document.addEventListener('DOMContentLoaded', function() {
    createParticles();
    renderSkills();
    renderProjects();
    setupHamburger();
    setupNavbar();
    setupContactForm();
    setupSmoothScroll();
    setupAnimations();
    
    // Start typing effect
    setTimeout(typeEffect, 500);
});

// ============================================================
// CONSOLE LOG
// ============================================================

console.log('🚀 Hifsa Umer Portfolio loaded successfully!');
console.log('📊 Projects Loaded:', projectsData.length);
console.log('🛠️ Skills Loaded:', skillsData.length);
console.log('✨ Portfolio by Hifsa Umer');
