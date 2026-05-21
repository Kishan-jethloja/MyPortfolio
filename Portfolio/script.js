// Your personal information
const projects = [
    
     {
        title: "Tender Management System",
        description: "A blockchain application built using Solidity to ensure transparent and secure bidding through automated smart contracts without intermediaries. Provides tamper-proof, immutable records on the blockchain, ensuring fairness, trust, and complete auditability for all participants.",
        image: "image/tendersystem.png",
        githubLink: "https://github.com/Kishan-jethloja/Blockchain-Based-Tender-Management-System",
        technologies: ["Blockchain", "React", "Solidity", "Smart Contracts", "Metamask"]
    },
     {
        title: "JobSnap",
        description: "A MERN-based application that analyzes user resumes and suggests relevant job opportunities, featuring a premium option to generate ready-to-send email drafts for recruiters. It provides personalized job recommendations by matching skills, experience, and keywords with current openings.",
        image: "image/jobSnap.png",
        githubLink: "https://github.com/Kishan-jethloja/JobSnap",
        technologies: ["React", "Node.js", "Mongodb"]
    },
     {
        title: "HireHub",
        description: "A web-based placement management system built with ASP.NET Core to streamline interactions between students, companies, and administrators. It manages job postings, applications, and recruitment workflows with secure role-based access and efficient data handling.",
        image: "image/hirehub.png",
        githubLink: "https://github.com/Kishan-jethloja/HireHub",
        technologies: ["ASP.NET Core", "MVC"]
    },
     {
        title: "Credify",
        description: " A consent-driven loan verification platform that uses DigiLocker-based document sharing to assess credit eligibility, predict approval probability, and streamline bank loan decisions.",
        image: "image/credify.png",
        githubLink: "https://github.com/Kishan-jethloja/Credify",
        technologies: ["React", "Node.js", "JWT"]
    },
    {
        title: "Splitwise",
        description: "A user-friendly website that helps people track and split shared expenses effortlessly. Ideal for managing group bills, trips, or roommate costs with real-time balance updates and simple settlements.",
        image: "image/splitwise.png",
        githubLink: "https://github.com/Kishan-jethloja/SplitWise",
        technologies: ["Python", "HTML", "CSS", "JavaScript"]
    },
    {
        title: "Online ShoppingCart",
        description: "A Java-based backend system that handles product management, cart operations, and order processing. Fully functional with RESTful APIs, tested using Postman for adding items, updating carts, and placing orders.",
        image: "image/ecommerce.png",
        githubLink: "https://github.com/Kishan-jethloja/ShoppingCart",
        technologies: ["Java", "MySQL"]
    },
    {
        title: "Learning Licence Test",
        description: "This is a Learner's License Test portal that allows users to take an online test for obtaining their learner's license. The application features user authentication, a timed test system, and provides immediate test results.",
        image: "image/lltest.png",
        githubLink: "https://github.com/Kishan-jethloja/Learning-Licence-Test",
        technologies: ["PHP", "HTML", "CSS", "MySQL"]
    }
];

const certificates = [
    {
        title: "Database Management",
        issuer: "Completed the NPTEL-certified Database Management Systems course with a score of 79%, achieving Top 2% Silver Elite status and developing strong knowledge of databases, SQL, ER modeling, normalization, transactions, and query optimization.",
        date: "Jul-Sep 2024",
        image: "image/dbms_cer.png"
    },
    {
        title: "Vocal Discord",
        issuer: "Achieved 3rd position in a debate competition conducted by Samvaad, the college’s communication club, by competing with skilled participants and delivering clear, logical arguments on engaging topics.",
        date: "Sep 2025",
        image: "image/vocaldiscord.png"
    },
    {
        title: "Design And Analysis of Algorithms",
        issuer: "Completed the NPTEL Design and Analysis of Algorithms course, earning certification for understanding key algorithmic concepts and techniques.",
        date: "Jan-Mar 2025",
        image: "image/daa_cer.png"
    },
     {
        title: "A.Idea 2.0 - n8n Automation Competition",
        issuer: "Developed a Telegram bot using n8n to automate doctor appointment bookings, enabling users to schedule visits easily. Focused on creating efficient automation workflows to simplify the booking process and improve user experience.",
        date: "Sep 2025",
        image: "image/n8n.png"
    },
    {
        title: "Programming in Java",
        issuer: "Successfully completed the NPTEL Programming in Java course with a score of 75%, earning a Silver Elite certification. Gained strong knowledge of core Java concepts, object-oriented programming, and problem-solving techniques.",
        date: "Jan-Apr 2025",
        image: "image/java_cer.png"
    },
    
    {
        title: "404: Clue Not Found - Solo Technical Treasure Hunt",
        issuer: "Won 1st place in a solo technical treasure hunt by solving complex computer science–based puzzles and logical challenges. Demonstrated strong problem-solving, analytical thinking, and creativity under competitive conditions.",
        date: "Sep 2025",
        image: "image/404cnf.png"
    },
   
    {
        title: "CodeQuest ICPC: DDU Edition",
        issuer: "We participated in the CodeQuest ICPC: DDU Edition, where we solved challenging coding problems under time constraints. The contest helped us improve our problem-solving skills, logical thinking, and competitive programming abilities.",
        date: "Sep 2025",
        image: "image/codequest.png"
    },
    {
        title: "DUHACKS 5.0 -National Level Hackathon",
        issuer: "Participated in DU Hacks 5.0, where I built Credify, a consent-driven loan verification platform using DigiLocker for secure document sharing, as part of a team of 3 members. Focused on assessing credit eligibility, predicting approval probability, and streamlining the bank loan decision process.",
        date: "Feb 2025",
        image: "image/duhacks5.png"
    },
   
    {
        title: "Sparkathon",
        issuer: "Participated in Sparkathon, where we built a skill-swapping platform as a team of 3 to enable users to exchange skills and learn from each other. Focused on creating a collaborative system that promotes continuous learning and knowledge sharing.",
        date: "Jun 2025",
        image: "image/sparkathon.png"
    },
     {
        title: "DUHACKS 4.0 -National Level Hackathon",
        issuer: "Participated in duhacks4.0 and built an android application in just 36 hours.",
        date: "Feb 2025",
        image: "image/DU_HACKS.png"
    },
   
    
];

// DOM Elements
const projectsGrid = document.querySelector('.projects-grid');
const certificatesGrid = document.querySelector('.certificates-grid');

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
    loadCertificates();
    setupAnimations();
    setupSmoothScrolling();
    typeWriterAnimation();
});

// Load projects dynamically
function loadProjects() {
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card animate';
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="project-image">
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="technologies">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <a href="${project.githubLink}" target="_blank" class="github-link">
                    <i class="fab fa-github"></i> View on GitHub
                </a>
            </div>
        `;
        projectsGrid.appendChild(projectCard);
    });
}

// Load certificates dynamically
function loadCertificates() {
    certificates.forEach(cert => {
        const certCard = document.createElement('div');
        certCard.className = 'certificate-card animate';
        certCard.innerHTML = `
            <img src="${cert.image}" alt="${cert.title}" class="certificate-image">
            <div class="certificate-info">
                <h3>${cert.title}</h3>
                <p>${cert.issuer}</p>
                <p class="date">${cert.date}</p>
            </div>
        `;
        certificatesGrid.appendChild(certCard);

        // Add click event to open modal
        certCard.addEventListener('click', () => {
            openCertificateModal(cert.image, cert.title);
        });
    });
}

// Certificate Modal Functions
function openCertificateModal(imageSrc, title) {
    const modal = document.querySelector('.certificate-modal');
    const modalImg = modal.querySelector('img');
    modalImg.src = imageSrc;
    modalImg.alt = title;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
}

function closeCertificateModal() {
    const modal = document.querySelector('.certificate-modal');
    modal.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
}

// Add event listeners for modal
document.addEventListener('DOMContentLoaded', () => {
    const closeBtn = document.querySelector('.close-modal');
    const modal = document.querySelector('.certificate-modal');

    closeBtn.addEventListener('click', closeCertificateModal);
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeCertificateModal();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeCertificateModal();
        }
    });
});

// Setup animations
function setupAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.project-card, .certificate-card').forEach(el => {
        observer.observe(el);
    });
}

// Setup smooth scrolling
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Form submission handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();

        // Validate form
        if (!name || !email || !subject || !message) {
            alert('Please fill in all fields');
            return;
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }

        const formData = {
            from_name: name,
            from_email: email,
            subject: subject,
            message: message,
            to_email: "jethlojakishan0@gmail.com"
        };

        // Show loading state
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.innerHTML;
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitButton.disabled = true;

        try {
            const response = await emailjs.send(
                "service_yv05bjn",  // Replace with your EmailJS service ID
                "template_cgi84id", // Replace with your EmailJS template ID
                formData
            );
            
            if (response.status === 200) {
                alert('Message sent successfully!');
                contactForm.reset();
            } else {
                throw new Error('Failed to send email');
            }
        } catch (error) {
            console.error('EmailJS Error:', error);
            alert('Failed to send message. Please try again later.');
        } finally {
            // Reset button state
            submitButton.innerHTML = originalButtonText;
            submitButton.disabled = false;
        }
    });
}

// Add scroll-based navbar styling
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(44, 62, 80, 0.95)';
    } else {
        navbar.style.backgroundColor = 'var(--primary-color)';
    }
});

// Typing Animation
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Initialize typing animations
function typeWriterAnimation() {
    const typingText = document.querySelector('.typing-text');
    const typingSubtext = document.querySelector('.typing-subtext');
    
    if (typingText) {
        const name = typingText.querySelector('.highlight').textContent;
        typingText.querySelector('.highlight').textContent = '';
        setTimeout(() => {
            typeWriter(typingText.querySelector('.highlight'), name);
        }, 500);
    }
    
    if (typingSubtext) {
        const subtext = typingSubtext.textContent;
        typingSubtext.textContent = '';
        setTimeout(() => {
            typeWriter(typingSubtext, subtext);
        }, 1500);
    }

    // Highlight animation
    const highlight = document.querySelector('.highlight');
    if (highlight) {
        setTimeout(() => {
            highlight.classList.add('animate-highlight');
        }, 2000);
    }
}

// Add highlight animation class
const style = document.createElement('style');
style.textContent = `
    .highlight.animate-highlight::after {
        transform: scaleX(1);
        transform-origin: left;
    }
`;
document.head.appendChild(style);

// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links a');

    // Toggle mobile menu
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });

    // Close mobile menu when clicking on a link
    navLinksItems.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navLinks.contains(event.target);
        const isClickOnHamburger = hamburger.contains(event.target);
        
        if (!isClickInsideNav && !isClickOnHamburger && navLinks.classList.contains('active')) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Handle scroll events
    let lastScroll = 0;
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll <= 0) {
            navbar.classList.remove('scroll-up');
            return;
        }

        if (currentScroll > lastScroll && !navbar.classList.contains('scroll-down')) {
            // Scroll down
            navbar.classList.remove('scroll-up');
            navbar.classList.add('scroll-down');
        } else if (currentScroll < lastScroll && navbar.classList.contains('scroll-down')) {
            // Scroll up
            navbar.classList.remove('scroll-down');
            navbar.classList.add('scroll-up');
        }
        lastScroll = currentScroll;
    });
}); 