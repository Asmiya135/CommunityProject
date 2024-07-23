document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const videoTopic = document.getElementById('videoTopic').value;
    const videoFile = document.getElementById('videoFile').files[0];
    
    if (videoFile) {
        const reader = new FileReader();
        
        reader.onload = function() {
            const videos = JSON.parse(localStorage.getItem('videos')) || [];
            const videoData = {
                topic: videoTopic,
                url: reader.result
            };
            
            videos.push(videoData);
            localStorage.setItem('videos', JSON.stringify(videos));
            
            const videoPreview = document.getElementById('preview');
            videoPreview.src = reader.result;
            videoPreview.style.display = 'block';
            
            alert(`Video titled "${videoTopic}" uploaded successfully!`);
            location.href = 'index.html';
        };
        
        reader.readAsDataURL(videoFile);
    } else {
        alert('Please select a video file to upload.');
    }
});
