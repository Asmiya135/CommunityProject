document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const quizTopic = document.getElementById('quizTopic').value;
    const quizURL = document.getElementById('quizURL').value;
    
    // Store quiz information (for example, using localStorage for simplicity)
    const quizzes = JSON.parse(localStorage.getItem('quizzes')) || [];
    quizzes.push({ topic: quizTopic, url: quizURL });
    localStorage.setItem('quizzes', JSON.stringify(quizzes));
    
    alert('Quiz submitted successfully!');
    location.href = 'index.html';
});
