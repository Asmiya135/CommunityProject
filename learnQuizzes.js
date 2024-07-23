document.addEventListener('DOMContentLoaded', function() {
    const quizzes = JSON.parse(localStorage.getItem('quizzes')) || [];
    const quizzesContainer = document.getElementById('quizzesContainer');
    
    quizzes.forEach(quiz => {
        const quizLink = document.createElement('a');
        quizLink.href = quiz.url;
        quizLink.target = '_blank';
        quizLink.textContent = quiz.topic;
        quizzesContainer.appendChild(quizLink);
    });
});
