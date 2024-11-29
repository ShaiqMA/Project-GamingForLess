document.querySelector('.hamburger-button').addEventListener('click', function(){
    const Navm = document.querySelector('.nav-links')
    if (Navm.style.display === 'none') {
     Navm.style.display = 'block';
    } else {
     Navm.style.display = 'none';
    };
});

function toggleMenu(){
    const menu = document.getElementById('menu');
    menu.classList.toggle('active')
};



