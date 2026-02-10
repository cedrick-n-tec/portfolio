// Smooth Scrolling
document.querySelectorAll('a[href^="#"], a[href$=".html"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        if (this.getAttribute("href").startsWith("#")) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


// Navbar Active Link Highlight
const navLinks = document.querySelectorAll("nav ul li a");

function setActiveLink() {
    const currentPage = window.location.pathname.split("/").pop();
    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === currentPage ||
            (currentPage === "" && link.getAttribute("href") === "index.html")) {
            link.classList.add("active");
        }
    });
}

setActiveLink();


// Small Scroll Animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll("section, .skill-card, .project-card").forEach(el => {
    el.classList.add("hidden");
    observer.observe(el);
});