
function myFunction() {
    document.getElementById("menu").classList.toggle("show");
  }
  

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }


document.getElementById('dropbtn').addEventListener('click', function() {
  var menu = document.getElementById('menu');
  if (menu.style.display === 'none') {
    menu.style.display = 'block';
  } else {
    menu.style.display = 'none';
  }
});

document.getElementById('link1').addEventListener('click', function(event) {
  event.preventDefault();
  document.getElementById('letters').style.display = 'block';
  document.getElementById('numbers').style.display = 'none';
  document.getElementById('menu').style.display = 'none';
  
});

document.getElementById('link2').addEventListener('click', function(event) {
  event.preventDefault();
  document.getElementById('letters').style.display = 'none';
  document.getElementById('numbers').style.display = 'block';
  document.getElementById('menu').style.display = 'none';
});





