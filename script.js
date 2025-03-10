// Main banner functionality
const banner = document.querySelector('.banner');
const images = [
    'url("1.png")',
    'url("2.png")',
    'url("3.png")',
    'url("4.png")'
];
let index = 0;

function changeMainBannerImage() {
    if (!banner) return;

    // Fade or slide transition
    banner.classList.add('fade-out'); // Use 'slide-out' for slide effect
    setTimeout(() => {
        index = (index + 1) % images.length;
        banner.style.backgroundImage = images[index];
        banner.classList.remove('fade-out'); // Use 'slide-out' for slide effect
    }, 1000); // Match CSS transition duration
}

setInterval(changeMainBannerImage, 3000);
changeMainBannerImage();


// Reward banner functionality
const r_banner = document.querySelector('.rewardbanner');
const r_images = [
    'url("1.png")',
    'url("2.png")',
    'url("3.png")',
    'url("4.png")'
];

let r_index = 0;

function changeRewardBannerImage() {
    if (!r_banner) return;

    // Fade or slide transition
    r_banner.classList.add('fade-out'); // Use 'slide-out' for slide effect
    setTimeout(() => {
        r_index = (r_index + 1) % r_images.length;
        r_banner.style.backgroundImage = r_images[r_index];
        r_banner.classList.remove('fade-out'); // Use 'slide-out' for slide effect
    }, 1000); // Match CSS transition duration
}

setInterval(changeRewardBannerImage, 3000);
changeRewardBannerImage();

document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menu-icon");
    const menuList = document.querySelector(".menu ul");

    menuIcon.addEventListener("click", function () {
        menuList.classList.toggle("active");
    });
});
