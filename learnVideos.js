document.addEventListener('DOMContentLoaded', function() {
    const videos = JSON.parse(localStorage.getItem('videos')) || [];
    const videosContainer = document.getElementById('videosContainer');
    
    videos.forEach(video => {
        const videoElement = document.createElement('video');
        videoElement.src = video.url;
        videoElement.controls = true;
        videosContainer.appendChild(videoElement);
    });
});
