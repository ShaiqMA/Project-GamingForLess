document.querySelector('.hamburger-button').addEventListener('click', function(){
    const Nav = document.querySelector('.nav-links')
    if (Nav.style.display === 'none') {
     Nav.style.display = 'block';
    } else {
     Nav.style.display = 'none';
    }
 });