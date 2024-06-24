
document.getElementById('coin-form')
    .addEventListener('submit', function(event) {
    event.preventDefault();
    });

function displayCoins() {
    const count = document.getElementById('coin-count').value;
    const coinType = document.getElementById('coin-type').value;
    const coinContainer = document.getElementById('coins-container');
    for (let i = 0; i < count; i++) {
        
        const coin = document.createElement('coin');
        // decided to use string interpolation vs if statements
        // to be concise
        coin.className = `${coinType}-container`;  
        const textSpan = document.createElement('coinText');
        textSpan.className = `${coinType}-style`;
        textSpan.textContent = coinType;
        coin.appendChild(textSpan);
        coin.onclick = () => coin.remove();
        coinContainer.appendChild(coin);
    }
}

