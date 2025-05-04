// script.js

// Mobile Navigation Toggle
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

if (burger && navLinks) {
    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        burger.classList.toggle('toggle');
    });
}

// "Like" Button Functionality (on post.html)
const likeButton = document.querySelector('.like-button');
let likeCount = 0;

if (likeButton) {
    likeButton.addEventListener('click', () => {
        likeCount++;
        likeButton.textContent = `Like (${likeCount})`;
        // You could also add visual feedback like a small animation here
    });
}