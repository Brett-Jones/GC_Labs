

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
// Close the dropdown menu if the user clicks outside of it
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


document.getElementById('menuButton').addEventListener('click', function() {
  var menu = document.getElementById('menu');
  if (menu.style.display === 'none') {
    menu.style.display = 'block';
  } else {
    menu.style.display = 'none';
  }
});

document.getElementById('link1').addEventListener('click', function(event) {
  event.preventDefault();
  document.getElementById('content1').style.display = 'block';
  document.getElementById('content2').style.display = 'none';
  document.getElementById('menu').style.display = 'none';
});

document.getElementById('link2').addEventListener('click', function(event) {
  event.preventDefault();
  document.getElementById('content1').style.display = 'none';
  document.getElementById('content2').style.display = 'block';
  document.getElementById('menu').style.display = 'none';
});

