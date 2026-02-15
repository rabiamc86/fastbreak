// Basketball Brothers - JavaScript

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }

        // Update active nav link
        document.querySelectorAll('nav a').forEach(link => link.classList.remove('active'));
        this.classList.add('active');
    });
});

// Photo filter functionality
const filterButtons = document.querySelectorAll('.filter-btn');
const photoItems = document.querySelectorAll('.photo-item');

filterButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');

        const filter = this.getAttribute('data-filter');

        // Filter photos
        photoItems.forEach(item => {
            if (filter === 'all' || item.getAttribute('data-category') === filter) {
                item.style.display = 'block';
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'scale(1)';
                }, 10);
            } else {
                item.style.opacity = '0';
                item.style.transform = 'scale(0.8)';
                setTimeout(() => {
                    item.style.display = 'none';
                }, 300);
            }
        });
    });
});

// Lightbox functionality
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');
const closeLightbox = document.querySelector('.close-lightbox');

// Add click event to all photo items
photoItems.forEach(item => {
    item.addEventListener('click', function() {
        const img = this.querySelector('img');
        const overlay = this.querySelector('.photo-overlay');

        lightbox.classList.add('active');
        lightboxImg.src = img.src;

        if (overlay) {
            const title = overlay.querySelector('h3').textContent;
            const desc = overlay.querySelector('p').textContent;
            lightboxCaption.innerHTML = `<strong>${title}</strong><br>${desc}`;
        }
    });
});

// Close lightbox
closeLightbox.addEventListener('click', function() {
    lightbox.classList.remove('active');
});

lightbox.addEventListener('click', function(e) {
    if (e.target === lightbox) {
        lightbox.classList.remove('active');
    }
});

// Close lightbox with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        lightbox.classList.remove('active');
    }
});

// Photo upload preview
const photoUpload = document.getElementById('photo-upload');
const photoPreview = document.getElementById('photo-preview');

photoUpload.addEventListener('change', function(e) {
    photoPreview.innerHTML = '';
    const files = e.target.files;

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (file.type.startsWith('image/')) {
            const reader = new FileReader();

            reader.onload = function(e) {
                const img = document.createElement('img');
                img.src = e.target.result;
                img.style.maxWidth = '100%';
                img.style.marginBottom = '10px';
                img.style.borderRadius = '5px';
                photoPreview.appendChild(img);
            };

            reader.readAsDataURL(file);
        }
    }
});

// Video upload preview
const videoUpload = document.getElementById('video-upload');
const videoPreview = document.getElementById('video-preview');

videoUpload.addEventListener('change', function(e) {
    videoPreview.innerHTML = '';
    const file = e.target.files[0];

    if (file && file.type.startsWith('video/')) {
        const reader = new FileReader();

        reader.onload = function(e) {
            const video = document.createElement('video');
            video.src = e.target.result;
            video.controls = true;
            video.style.maxWidth = '100%';
            video.style.borderRadius = '5px';
            videoPreview.appendChild(video);
        };

        reader.readAsDataURL(file);
    }
});

// Add photo to gallery
function addPhoto() {
    const photoUpload = document.getElementById('photo-upload');
    const photoTitle = document.getElementById('photo-title');
    const photoCategory = document.getElementById('photo-category');
    const photoGallery = document.getElementById('photo-gallery');

    if (!photoUpload.files.length) {
        alert('Please select at least one photo to upload.');
        return;
    }

    const title = photoTitle.value || 'Untitled Photo';
    const category = photoCategory.value;
    const files = photoUpload.files;

    for (let i = 0; i < files.length; i++) {
        const file = files[i];

        if (file.type.startsWith('image/')) {
            const reader = new FileReader();

            reader.onload = function(e) {
                const photoItem = document.createElement('div');
                photoItem.className = 'photo-item';
                photoItem.setAttribute('data-category', category);

                photoItem.innerHTML = `
                    <img src="${e.target.result}" alt="${title}">
                    <div class="photo-overlay">
                        <h3>${title}</h3>
                        <p>${category.charAt(0).toUpperCase() + category.slice(1)}</p>
                    </div>
                `;

                // Add click event for lightbox
                photoItem.addEventListener('click', function() {
                    const img = this.querySelector('img');
                    const overlay = this.querySelector('.photo-overlay');

                    lightbox.classList.add('active');
                    lightboxImg.src = img.src;

                    if (overlay) {
                        const title = overlay.querySelector('h3').textContent;
                        const desc = overlay.querySelector('p').textContent;
                        lightboxCaption.innerHTML = `<strong>${title}</strong><br>${desc}`;
                    }
                });

                photoGallery.appendChild(photoItem);

                // Animate the new photo
                setTimeout(() => {
                    photoItem.style.opacity = '1';
                    photoItem.style.transform = 'scale(1)';
                }, 10);
            };

            reader.readAsDataURL(file);
        }
    }

    // Clear the form
    photoUpload.value = '';
    photoTitle.value = '';
    photoPreview.innerHTML = '';

    // Show success message
    showMessage('Photo(s) added successfully! 📷');

    // Scroll to photo gallery
    document.getElementById('photos').scrollIntoView({ behavior: 'smooth' });
}

// Add video to gallery
function addVideo() {
    const videoUpload = document.getElementById('video-upload');
    const videoUrl = document.getElementById('video-url');
    const videoTitle = document.getElementById('video-title');
    const videoGallery = document.querySelector('.video-grid');

    const title = videoTitle.value || 'Untitled Video';

    // Check if it's a file upload or URL
    if (videoUpload.files.length > 0) {
        const file = videoUpload.files[0];

        if (file.type.startsWith('video/')) {
            const reader = new FileReader();

            reader.onload = function(e) {
                const videoItem = document.createElement('div');
                videoItem.className = 'video-item';

                videoItem.innerHTML = `
                    <video controls>
                        <source src="${e.target.result}" type="${file.type}">
                        Your browser does not support the video tag.
                    </video>
                    <h3>${title}</h3>
                `;

                videoGallery.appendChild(videoItem);
            };

            reader.readAsDataURL(file);
        }
    } else if (videoUrl.value.trim() !== '') {
        const url = videoUrl.value.trim();
        let embedUrl = url;

        // Convert YouTube URL to embed format
        if (url.includes('youtube.com') || url.includes('youtu.be')) {
            let videoId = '';
            if (url.includes('youtube.com')) {
                const urlParams = new URLSearchParams(new URL(url).search);
                videoId = urlParams.get('v');
            } else if (url.includes('youtu.be')) {
                videoId = url.split('/').pop().split('?')[0];
            }
            embedUrl = `https://www.youtube.com/embed/${videoId}`;
        }

        const videoItem = document.createElement('div');
        videoItem.className = 'video-item';

        videoItem.innerHTML = `
            <iframe src="${embedUrl}" allowfullscreen></iframe>
            <h3>${title}</h3>
        `;

        videoGallery.appendChild(videoItem);
    } else {
        alert('Please select a video file or enter a video URL.');
        return;
    }

    // Clear the form
    videoUpload.value = '';
    videoUrl.value = '';
    videoTitle.value = '';
    videoPreview.innerHTML = '';

    // Show success message
    showMessage('Video added successfully! 🎥');

    // Scroll to video gallery
    document.getElementById('videos').scrollIntoView({ behavior: 'smooth' });
}

// Show success message
function showMessage(message) {
    const messageDiv = document.createElement('div');
    messageDiv.style.cssText = `
        position: fixed;
        top: 100px;
        left: 50%;
        transform: translateX(-50%);
        background: #4CAF50;
        color: white;
        padding: 1rem 2rem;
        border-radius: 5px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.2);
        z-index: 1001;
        animation: slideDown 0.3s ease;
    `;
    messageDiv.textContent = message;

    document.body.appendChild(messageDiv);

    setTimeout(() => {
        messageDiv.style.animation = 'slideUp 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(messageDiv);
        }, 300);
    }, 3000);
}

// Add CSS animations for messages
const style = document.createElement('style');
style.textContent = `
    @keyframes slideDown {
        from {
            top: -100px;
            opacity: 0;
        }
        to {
            top: 100px;
            opacity: 1;
        }
    }

    @keyframes slideUp {
        from {
            top: 100px;
            opacity: 1;
        }
        to {
            top: -100px;
            opacity: 0;
        }
    }

    .photo-item,
    .video-item {
        opacity: 0;
        transform: scale(0.8);
        transition: all 0.3s ease;
    }

    .photo-item,
    .video-item {
        opacity: 1;
        transform: scale(1);
    }
`;
document.head.appendChild(style);

// Initialize: Show all photos on load
document.addEventListener('DOMContentLoaded', function() {
    photoItems.forEach(item => {
        item.style.opacity = '1';
        item.style.transform = 'scale(1)';
    });
});
