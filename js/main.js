// Mobile menu toggle
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

mobileMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
});

// Scroll animation observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, observerOptions);

const aboutObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-10");
            entry.target.classList.add("opacity-100", "translate-y-0");
        }
    });
}, observerOptions);

// Observe all fade-in, data-aos elements
document.querySelectorAll(".fade-in").forEach((el) => {
    observer.observe(el);
});
document.querySelectorAll("[data-aos]").forEach((el) => {
    aboutObserver.observe(el);
});

// Header scroll effect
let lastScrollTop = 0;
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && scrollTop > 100) {
        header.style.transform = "translateY(-100%)";
    } else {
        header.style.transform = "translateY(0)";
    }

    lastScrollTop = scrollTop;
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed header
            window.scrollTo({
                top: offsetTop,
                behavior: "smooth",
            });
        }
    });
});

// Counter animation for stats
const animateCounters = () => {
    const counters = document.querySelectorAll("[data-target]");

    counters.forEach((counter) => {
        const target = parseInt(counter.dataset.target);
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                const suffix = counter.textContent.includes("+")
                    ? "+"
                    : counter.textContent.includes("%")
                    ? "%"
                    : "";
                counter.textContent = target + suffix;
                clearInterval(timer);
            } else {
                const suffix = counter.textContent.includes("+")
                    ? "+"
                    : counter.textContent.includes("%")
                    ? "%"
                    : "";
                counter.textContent = Math.floor(current) + suffix;
            }
        }, 16);
    });
};

// Trigger counter animation when stats section is visible
const statsObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                animateCounters();
                statsObserver.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.5 }
);

const statsSection = document.querySelector(".gradient-dark");
if (statsSection) {
    statsObserver.observe(statsSection);
}

// Close mobile menu when clicking on a link
document.querySelectorAll("#mobile-menu a").forEach((link) => {
    link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
    });
});
