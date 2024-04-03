// arrays of images
const images = [
    'img1.jpg',
    'img2.jpg',
    'img3.jpg',
    'img4.jpg',
    'img5.jpg',
    'img6.jpg',
    'img7.jpg',
    'img8.jpg',
    'img9.jpg',
    'img10.jpg',
    'img11.jpg',
    'img12.jpg',
    'img13.jpg',
    'img14.jpg',
    'img15.jpg'
];

// variable initialize next and previous slide
let currentIndex = 0;

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const thumbnailsContainer = document.getElementById('thumbnails');

// function for openlightbox
function openLightbox(imageSrc) {
    lightboxImg.src = imageSrc;
    lightbox.classList.add('show');
    document.body.style.overflow = 'hidden'; 
    displayThumbnails(imageSrc);
    updateNavArrows();
}

// function for closelightbox
function closeLightbox() {
    lightbox.classList.remove('show');
    document.body.style.overflow = ''; 
}

// function for previous image of lightbox
function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    lightboxImg.src = images[currentIndex];
    updateImageWithEffect();
    updateNavArrows();
}

// function for next image of lightbox
function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    lightboxImg.src = images[currentIndex];
    updateImageWithEffect();
    updateNavArrows();
}

// function for update arrows
function updateNavArrows() {
    const leftArrow = document.querySelector('.nav-arrows.left');
    const rightArrow = document.querySelector('.nav-arrows.right');
    leftArrow.style.display = currentIndex === 0 ? 'none' : 'block';
    rightArrow.style.display = currentIndex === images.length - 1 ? 'none' : 'block';
}

// function for update animations and transitions
function updateImageWithEffect() {
    lightboxImg.style.opacity = 0;
    lightboxImg.style.transition = 'opacity 0.3s ease-in-out';
    lightboxImg.style.animation = 'slideInImage 2s ease-in-out 2';
    setTimeout(() => {
        lightboxImg.src = images[currentIndex];
        lightboxImg.style.opacity = 1;
    }, 300); // Adjust the delay time as needed
}

// function for display iamges in preview box
function displayThumbnails(currentImageSrc) {
    thumbnailsContainer.innerHTML = '';
    images.forEach(image => {
        if (image !== currentImageSrc) {
            const thumbnail = document.createElement('div');
            thumbnail.classList.add('thumbnail');
            thumbnail.innerHTML = `<img src="${image}" alt="Thumbnail">`;
            thumbnail.onclick = () => openLightbox(image);
            thumbnailsContainer.appendChild(thumbnail);
        }
    });
}

// Initialize gallery whose values are stored in array
const imageContainer = document.querySelector('.image-container');
images.forEach(image => {
    const div = document.createElement('div');
    div.classList.add('image');
    div.innerHTML = `<img src="${image}" alt="Flower" onclick="openLightbox('${image}')">`;
    imageContainer.appendChild(div);
});