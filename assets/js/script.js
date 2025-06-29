
// Highlight the active page in the navbar
document.addEventListener("DOMContentLoaded", function () {
    const currentPage = window.location.pathname.split("/").pop();
    const navItems = document.querySelectorAll(".nav-item");

    navItems.forEach(item => {
        const link = item.querySelector("a");
        if (link && link.getAttribute("href") === currentPage) {
            item.classList.add("active");
        }
    });
});

//Toggle Theme Mode
const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Optional: Update icon
    if (document.body.classList.contains("dark-mode")) {
        toggleBtn.textContent = "☀️";
    } else {
        toggleBtn.textContent = "🌙";
    }
});

//Circles Random Animation
function randomPastelColor() {
    const hue = Math.floor(Math.random() * 360);
    return `hsl(${hue}, 70%, 85%)`;
}

const hero = document.querySelector('.hero-section');

// Responsive safe zones
let safeZoneLeft, safeZoneRight;
if (window.innerWidth < 768) { // Mobile
    safeZoneLeft = 0;
    safeZoneRight = 100;
} else if (window.innerWidth < 992) { // Tablet
    safeZoneLeft = 20;
    safeZoneRight = 80;
} else { // Desktop
    safeZoneLeft = 30;
    safeZoneRight = 70;
}

for (let i = 0; i < 20; i++) {
    const circle = document.createElement('span');
    circle.className = 'bg-circle';
    const size = Math.random() * 60 + 40; // 40px to 100px
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.background = randomPastelColor();
    circle.style.top = `${Math.random() * 80}%`;

    let left;
    if (window.innerWidth < 768) {
        if (Math.random() < 0.5) {
            left = Math.random() * 10;
        } else {
            left = Math.random() * 10 + 90;
        }
    } else {
        if (Math.random() < 0.5) {
            left = Math.random() * safeZoneLeft;
        } else {
            left = Math.random() * (100 - safeZoneRight) + safeZoneRight;
        }
    }
    circle.style.left = `${left}%`;

    circle.style.pointerEvents = 'none';
    hero.appendChild(circle);
}

// Parallax hover effect
const circles = document.querySelectorAll('.bg-circle');
hero.addEventListener('mousemove', function (e) {
    const rect = hero.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    circles.forEach((circle, i) => {
        // Each circle moves a different amount for a layered effect
        const moveX = x * (10 + i * 2);
        const moveY = y * (10 + i * 2);
        circle.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
});
hero.addEventListener('mouseleave', function () {
    circles.forEach(circle => {
        circle.style.transform = '';
    });
});


// Add Project Modal Image Preview
document.getElementById('projectImageInput').addEventListener('change', function (e) {
    const [file] = e.target.files;
    if (file) {
        document.getElementById('projectImagePreview').src = URL.createObjectURL(file);
    }
});
document.querySelector('label[for="projectImageInput"] button').onclick = function () {
    document.getElementById('projectImageInput').click();
};
document.addEventListener('keydown', function (e) {
    // Ctrl + Alt + E
    if (e.ctrlKey && e.altKey && (e.key === 'e' || e.key === 'E')) {
        e.preventDefault();
        var modal = new bootstrap.Modal(document.getElementById('addProjectModal'));
        modal.show();
    }
    // Num5 (Numpad 5)
    if (e.code === 'Numpad5') {
        var modal = new bootstrap.Modal(document.getElementById('addProjectModal'));
        modal.show();
    }
});

// Image preview logic for Add Project Modal
document.getElementById('projectImageInput').addEventListener('change', function (e) {
    const [file] = e.target.files;
    if (file) {
        document.getElementById('projectImagePreview').src = URL.createObjectURL(file);
    }
});
document.querySelector('label[for="projectImageInput"] button').onclick = function () {
    document.getElementById('projectImageInput').click();
};



// Example project data array
const projects = [
    {
        title: "Portfolio Website",
        description: "A personal portfolio website built to showcase my work and skills.",
        image: "assets/pictures/portfolio.svg",
        tags: ["HTML", "CSS", "JavaScript"],
        live: "https://akirabossd005.github.io/Portfolio/",
        github: "https://github.com/AKIRABOSSD005/Portfolio"
    },
    {
        title: "CLiMS: Cooperative Loan Management System for BASCPCC",
        description: "A capstone project for BASCPCC, a web-based system for managing cooperative loans.",
        image: "assets/pictures/clims.svg",
        tags: ["HTML", "CSS", "JavaScript", "PHP", "AJAX", "MySQL", "Bootstrap"],
        live: "https://bascpcc.com",
        github: "https://github.com/AKIRABOSSD005/CLiMS"
    },
    {
        title: "HRTS: Human Resources Ticketing System",
        description: "A web-based ticketing system for managing HR requests and issues for Metro North Medical Center and Hospital Inc.",
        image: "assets/pictures/hrts.svg",
        tags: ["HTML", "CSS", "JavaScript", "PHP", "AJAX", "MySQL"],
        live: "https://mnmch.com/hrts/",
        github: "https://github.com/AKIRABOSSD005/HRTS"
    },
    {
        title: "Portfolio Website",
        description: "A personal portfolio website built to showcase my work.",
        image: "assets/pictures/project1.jpg",
        tags: ["HTML", "CSS", "JavaScript"],
        live: "#",
        github: "#"
    },
    {
        title: "Portfolio Website",
        description: "A personal portfolio website built to showcase my work.",
        image: "assets/pictures/project1.jpg",
        tags: ["HTML", "CSS", "JavaScript"],
        live: "#",
        github: "#"
    },
    {
        title: "Portfolio Website",
        description: "A personal portfolio website built to showcase my work.",
        image: "assets/pictures/project1.jpg",
        tags: ["HTML", "CSS", "JavaScript"],
        live: "#",
        github: "#"
    }
];

// Render projects
document.addEventListener("DOMContentLoaded", function () {
    const projectsGrid = document.getElementById('projectsGrid');
    if (!projectsGrid) return;

    projects.forEach(project => {
        const tagsHtml = project.tags.map(tag =>
            `<span class="badge bg-light text-dark border me-1 mb-1">${tag}</span>`
        ).join('');
        const card = `
            <div class="col-12 col-md-6 col-lg-4">
                <div class="card h-100 border-0 rounded-4">
                    <img src="${project.image}" class="card-img-top rounded-top-4"
                        alt="Project Screenshot" style="background:#e0e0e0; height:140px; object-fit:cover;">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title fw-bold mb-1">${project.title}</h5>
                        <p class="card-text mb-2 text-muted" style="font-size:1rem;">
                            ${project.description}
                        </p>
                        <div class="mb-3">${tagsHtml}</div>
                        <div class="mt-auto d-flex gap-2">
                            <a href="${project.live}" class="btn btn-danger px-4 fw-semibold rounded-pill" target="_blank">Live</a>
                            <a href="${project.github}" class="btn btn-outline-dark px-4 fw-semibold rounded-pill" target="_blank">GitHub</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
        projectsGrid.insertAdjacentHTML('beforeend', card);
    });
});


// Show/hide Back to Top button based on scroll position
const backToTopBtn = document.getElementById('backToTopBtn');
window.addEventListener('scroll', function () {
    // Show if scrolled down 200px and navbar is not visible
    const navbar = document.querySelector('.navbar');
    const navbarBottom = navbar.getBoundingClientRect().bottom;
    if (window.scrollY > 200 && navbarBottom <= 0) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
});

// Scroll to top on button click
backToTopBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});