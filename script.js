const hello = document.querySelector('h1');
hello.addEventListener('click', function() {
    alert('How are you?');
}); 

const fun = document.querySelector('td#click');
fun.addEventListener('click', function() {
    alert('Cool stuff eh?');
});

const hover = document.getElementById('hover');
hover.addEventListener('mouseenter', function() {
    alert("You're a helicopter!");
});

document.addEventListener('keydown', function(e) {
    if (e.key === "ArrowUp") {
        alert('Yup!');
    }
});

document.addEventListener('keydown', function(e) {
    if (e.key === "ArrowDown") {
        alert(':(');
    }
});

document.addEventListener('keydown', function(e) {
    if (e.key === "ArrowRight") {
        alert('<(*-*)^');
    }
});

document.addEventListener('keydown', function(e) {
    if (e.key === "ArrowLeft") {
        alert('Chef?');
    }
});

const homepage = document.querySelector('li#home');
homepage.addEventListener('click', function() {
    alert('HOME-cooking!')
});

const aboutpage = document.querySelector('li#about');
aboutpage.addEventListener('click', function() {
    alert('ABOUT time yet?')
});

const healthpage = document.querySelector('li#health');
healthpage.addEventListener('click', function() {
    alert('HEALTH is wealth.')
});

const contactpage = document.querySelector('li#contact');
contactpage.addEventListener('click', function() {
    alert('Drop me a line.')
});


