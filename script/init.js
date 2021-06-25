function openSideNav() {
    let sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('show');
    let overlay = document.createElement('div');
    overlay.setAttribute('class', 'sidebar-overlay');
    overlay.addEventListener('click', closeSideNav)
    document.querySelector('body').append(overlay);
    document.querySelector('body').classList.toggle('no-scroll');
}

function closeSideNav() {
    let sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('show');
    let overlay = document.querySelector('.sidebar-overlay');
    document.querySelector('body').removeChild(overlay);
    document.querySelector('body').classList.toggle('no-scroll');

}

let navBtn = document.querySelector('.sidenav-button');
let closeBtn = document.querySelector('.close-button');
let cartBtn = document.querySelector('.cart-button')
navBtn.addEventListener('click', openSideNav);
closeBtn.addEventListener('click', closeSideNav);

document.querySelector('.collapsible').addEventListener('click', function(){
    document.querySelector('.collapsible-content').classList.toggle('collapsible-active');
});

document.querySelector('#contact-form button').addEventListener('click', function(e){
    alert("Thank you, we will reply your message as soon as possible");
});