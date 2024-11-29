// DOM Elements
const socialIcons = document.querySelectorAll('.iico');
const featuredCards = document.querySelectorAll('.card');
const profileImage = document.querySelector('#dpic img');
const cardContainer = document.querySelector('#featured-talks .row');

// Helper Function for Hover Effects
function applyHoverEffect(element, transformStyle, filterStyle = 'none') {
    element.addEventListener('mouseover', () => {
        element.style.transform = transformStyle;
        element.style.filter = filterStyle;
    });

    element.addEventListener('mouseout', () => {
        element.style.transform = 'none';
        element.style.filter = 'none';
    });
}

// Apply Hover Effects to Social Icons
socialIcons.forEach(icon => {
    applyHoverEffect(icon, 'scale(1.1)', 'brightness(1.2)');
});

// Apply Hover Effects to Featured Cards
featuredCards.forEach(card => {
    applyHoverEffect(card, 'translateY(-5px)');
});

// Smooth Section Reveal on Scroll
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');

    // Set Initial Transition Styles
    sections.forEach(section => {
        section.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
        section.style.opacity = 0;
        section.style.transform = 'translateY(50px)';
    });

    const revealSections = () => {
        sections.forEach(section => {
            if (section.getBoundingClientRect().top < window.innerHeight * 0.8) {
                section.style.opacity = 1;
                section.style.transform = 'translateY(0)';
            }
        });
    };

    window.addEventListener('scroll', revealSections);
    revealSections(); // Trigger on initial load
});

// Interactive Profile Image Click Effect
profileImage.addEventListener('click', () => {
    alert('Profile image clicked! Stay curious.');
});

// Dynamically Add New Featured Cards
function addFeaturedCard(title, imgUrl, description) {
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
        <div class="ccimg">
            <img src="${imgUrl}" alt="${title}" />
        </div>
        <h3 class="card-title">${title}</h3>
        <div class="cdesc">${description}</div>
    `;

    applyHoverEffect(card, 'translateY(-5px)');
    cardContainer.appendChild(card);
}

// Example: Add a New Featured Card
addFeaturedCard(
    'JavaScript Advanced Techniques',
    'https://via.placeholder.com/350x200',
    'Learn advanced JavaScript techniques for better performance and usability.'
);
