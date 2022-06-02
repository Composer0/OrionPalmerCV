const open_btn = document.querySelector('.open-btn')
const close_btn = document.querySelector('.close-btn')
const nav = document.querySelectorAll('.nav')
const info = document.querySelectorAll('.info')

open_btn.addEventListener('click', () => {
    nav.forEach(nav_el => nav_el.classList.add('visible'))
});

close_btn.addEventListener('click', () => {
    nav.forEach(nav_el => nav_el.classList.remove('visible'))
});

info.addEventListener = ('click', () => {
    document.getElementById("about").scrollIntoView({behavior: 'smooth'})
});

$("#info").click(function(){   //id of the link which is being clicked
    $('html, body').animate({
           scrollTop: $("#about").offset().top   //id of div to be scrolled
    }, 1000);
});

$("#reach").click(function(){   //id of the link which is being clicked
    $('html, body').animate({
           scrollTop: $("#contact-me").offset().top   //id of div to be scrolled
    }, 1000);
});

$("#the-work").click(function(){   //id of the link which is being clicked
    $('html, body').animate({
           scrollTop: $("#portfolio").offset().top   //id of div to be scrolled
    }, 1000);
});

$("#skills").click(function(){   //id of the link which is being clicked
    $('html, body').animate({
           scrollTop: $("#technology").offset().top   //id of div to be scrolled
    }, 1000);
});

$(".software").hover(function(){
    $('.software').css('color', '#b5c99a');
    $('.software').addClass('pro');
})

const card = document.querySelector(".card-excerpt")
card.addEventListener("hover", (e) => {
    
})
