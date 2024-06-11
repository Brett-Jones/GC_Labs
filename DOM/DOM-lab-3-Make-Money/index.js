document.getElementById('coinForm').addEventListener('makeMoney', function(event) {
    event.preventDefault();
    
    const count = +document.getElementById('howMany').value;
    const coinType = document.getElementById('coinType').value;
    const coinContainer = document.getElementById('coins-Container');
    
    for (let i = 0; i < count; i++) {
      const coin = document.createElement('total-amount');
      coin.className = 'coins';
      coin.textContent = coinType;
      coin.onclick = () => coin.remove();
      coinContainer.appendChild(coin);
    }
  });





// const container = document.getElementById("container")

// function displayCoins() {
//     const showCoins = document.getElementById("coins-container");
//     if (showCoins.style.display === "block") {
//         showCoins.style.display = "none";
//     } else {
//         showCoins.style.display = "block";
//     }
//   }




// document.getElementById('Make Money').addEventListener('click', function() {
//     var menu = document.getElementById('Make Money');
//     if (MakeMoney.style.display === 'none') {
//         MakeMoney.style.display = 'block';
//     } else {
//         MakeMoney.style.display = 'none';
//     }
//   });

// document.getElementById('penny').addEventListener()



