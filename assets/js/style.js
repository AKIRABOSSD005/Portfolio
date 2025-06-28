// Function for reloading the page
function reloadPage() {
    window.location.reload();
}

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