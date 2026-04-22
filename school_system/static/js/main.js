// Select all navigation links and their target sections.
const navLinks = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll("#home, #features, #contact");

// Set active class immediately on click for fast visual feedback.
navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.forEach((item) => item.classList.remove("active"));
        link.classList.add("active");
    });
});

// Update active link while scrolling through sections.
window.addEventListener("scroll", () => {
    let activeId = "home";

    // Pick the last section that has crossed the top threshold.
    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 130;
        if (window.scrollY >= sectionTop) {
            activeId = section.id;
        }
    });

    // Match each nav link by href (e.g. #features) to active section id.
    navLinks.forEach((link) => {
        const isActive = link.getAttribute("href") === "#" + activeId;
        link.classList.toggle("active", isActive);
    });
});
