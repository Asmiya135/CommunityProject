document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const videoTopic = document.getElementById('videoTopic').value;
    const videoFile = document.getElementById('videoFile').files[0];
    
    // For simplicity, we'll store the video information (not the actual file) using localStorage
    const videos = JSON.parse(localStorage.getItem('videos')) || [];
    const videoURL = URL.createObjectURL(videoFile);
    videos.push({ topic: videoTopic, url: videoURL });
    localStorage.setItem('videos', JSON.stringify(videos));
    
    const videoPreview = document.getElementById('preview');
    videoPreview.src = videoURL;
    videoPreview.style.display = 'block';
    
    alert(`Video titled "${videoTopic}" uploaded successfully!`);
    location.href = 'index.html';
});
