document.addEventListener('DOMContentLoaded', () => {
    const cow = document.getElementById('cow');
    const scoreDisplay = document.getElementById('score');
    let moves = 0, cowPos = { top: 0, left: 0 };

    document.addEventListener('keydown', (e) => {
        if (moves >= 5) return;
        if (e.key === 'ArrowUp') cowPos.top -= 10;
        if (e.key === 'ArrowDown') cowPos.top += 10;
        if (e.key === 'ArrowLeft') cowPos.left -= 10;
        if (e.key === 'ArrowRight') cowPos.left += 10;

        cow.style.transform = `translate(${cowPos.left}px, ${cowPos.top}px)`;
        scoreDisplay.textContent = `Moves: ${++moves}`;
        if (moves >= 5) scoreDisplay.textContent = 'You Win! 🎉';
    });

    document.getElementById('reset-btn').onclick = () => {
        cowPos = { top: 0, left: 0 };
        cow.style.transform = 'translate(0, 0)';
        moves = 0;
        scoreDisplay.textContent = 'Moves: 0';
    };
});
