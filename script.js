document.addEventListener('DOMContentLoaded', function() {
    const games = document.querySelectorAll('.game');
    const searchInput = document.getElementById('searchInput');

    games.forEach(game => {
        game.addEventListener('click', function() {
            game.classList.toggle('expanded');
            updateAmountPossible(game);
        });

        updateAmountPossible(game);
    });

    searchInput.addEventListener('input', function() {
        const filter = searchInput.value.toLowerCase();
        games.forEach(game => {
            const gameName = game.querySelector('.gameName').textContent.toLowerCase();
            if (gameName.includes(filter)) {
                game.style.display = '';
            } else {
                game.style.display = 'none';
            }
        });
    });
});

function updateAmountPossible(game) {
    const extraInfo = game.querySelector('.extraInfo');
    const taskContents = extraInfo.querySelectorAll('.taskContent .amountPossible');
    let total = 0;

    taskContents.forEach(task => {
        const amountText = task.textContent.replace(' R$', '').trim();
        const amount = parseFloat(amountText);
        if (!isNaN(amount)) {
            total += amount;
        }
    });

    const amountPossibleElement = game.querySelector('.primaryInfo .apBox .amountPossible');
    amountPossibleElement.textContent = total.toFixed(2) + ' R$';
}

function toggleMenu() {
    const menu = document.querySelector('.dropdownMenu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}
