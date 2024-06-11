document.getElementById('coinForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const count = +document.getElementById('count').value;
    const coinType = document.getElementById('coinType').value;
    const coinContainer = document.getElementById('coinContainer');
    
    for (let i = 0; i < count; i++) {
      const coin = document.createElement('total-amount');
      coin.className = 'coin';
      coin.textContent = coinType;
      coin.onclick = () => coin.remove();
      coinContainer.appendChild(coin);
    }
  });