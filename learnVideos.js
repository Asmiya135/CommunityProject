document.addEventListener('DOMContentLoaded', function() {
    const videos = JSON.parse(localStorage.getItem('videos')) || [];
    const videosContainer = document.getElementById('videosContainer');

    videos.forEach((video, index) => {
        const videoItem = document.createElement('div');
        videoItem.className = 'video-item';

        const videoElement = document.createElement('video');
        videoElement.src = video.url;
        videoElement.controls = true;

        const videoTitle = document.createElement('div');
        videoTitle.className = 'video-title';
        videoTitle.textContent = video.topic;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            deleteVideo(index);
        });

        videoItem.appendChild(videoElement);
        videoItem.appendChild(videoTitle);
        videoItem.appendChild(deleteButton);

        videosContainer.appendChild(videoItem);
    });
});

function deleteVideo(index) {
    const videos = JSON.parse(localStorage.getItem('videos')) || [];
    videos.splice(index, 1);
    localStorage.setItem('videos', JSON.stringify(videos));
    window.location.reload(); // Reload to reflect changes
}
