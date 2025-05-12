document.querySelectorAll('.faq-entry .question').forEach(question => {
    question.addEventListener('click', toggleAnswer);
    question.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            toggleAnswer.call(this); // Use call to maintain 'this' context
        }
    });
});

function toggleAnswer() {
    const answer = this.nextElementSibling; // Get the sibling .answer element
    answer.classList.toggle('open');

    // Update the indicator
    const indicator = this.querySelector('.indicator');
    indicator.textContent = answer.classList.contains('open') ? '+' : '-';
}