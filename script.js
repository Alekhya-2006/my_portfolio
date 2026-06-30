// =========================
// Theme Toggle
// =========================

const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {

        localStorage.setItem("theme", "dark");
        themeToggle.innerHTML =
            '<i class="fa-solid fa-sun"></i>';

    } else {

        localStorage.setItem("theme", "light");
        themeToggle.innerHTML =
            '<i class="fa-solid fa-moon"></i>';

    }

});

// =========================
// Load Saved Theme
// =========================

window.addEventListener("DOMContentLoaded", () => {

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {

        document.body.classList.add("dark-mode");

        themeToggle.innerHTML =
            '<i class="fa-solid fa-sun"></i>';

    }

});

// =========================
// Navbar Shadow on Scroll
// =========================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 20) {

        navbar.style.boxShadow =
            "0 8px 20px rgba(0,0,0,0.08)";

    } else {

        navbar.style.boxShadow =
            "0 3px 15px rgba(0,0,0,0.05)";

    }

});

// =========================
// Back To Top Button
// =========================

const backToTop =
    document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 350) {

        backToTop.style.display = "block";

    } else {

        backToTop.style.display = "none";

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// =========================
// Scroll Reveal Animation
// =========================

const revealElements = document.querySelectorAll(
    ".section, .highlight-card, .skill-box, .project-card, .timeline-item, .goal-card, .contact-card"
);

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {

        threshold: 0.15

    }

);

revealElements.forEach((element) => {

    element.classList.add("hidden");

    observer.observe(element);

});

// =========================
// Active Navigation Link
// =========================

const navLinks =
    document.querySelectorAll(".nav-links a");

const sections =
    document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop - 140;

        const sectionHeight =
            section.offsetHeight;

        if (

            window.scrollY >= sectionTop &&
            window.scrollY <
            sectionTop + sectionHeight

        ) {

            current =
                section.getAttribute("id");

        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (

            link.getAttribute("href") ===
            `#${current}`

        ) {

            link.classList.add("active");

        }

    });

});

// =========================
// Button Hover Effect
// =========================

const buttons =
    document.querySelectorAll(".btn");

buttons.forEach((button) => {

    button.addEventListener("mouseenter", () => {

        button.style.transform =
            "translateY(-3px)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform =
            "translateY(0)";

    });

});

// =========================
// Project Card Hover
// =========================

const cards =
    document.querySelectorAll(".project-card");

cards.forEach((card) => {

    card.addEventListener("mouseenter", () => {

        card.style.transition =
            "0.3s ease";

    });

});

// =========================
// Console Signature
// =========================

console.log(
    "%cPortfolio Designed & Developed by Alekhya Nimmala",
    "color:#2563eb;font-size:15px;font-weight:bold;"
);