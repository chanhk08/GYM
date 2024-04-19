window.addEventListener('scroll', function() {
    var element = document.getElementById('MainBodySubject');
    var range = 400;

    if (window.scrollY <= range) {
        element.style.fontSize = '80px';
    } else {
        element.style.fontSize = '40px';
    }
});


window.onbeforeunload = function() {
    document.body.scrollTop = 0;
}

window.onload = function() {
    setTimeout(function() {
        document.body.style.overflow = 'auto';
    }, 3000);
};


window.addEventListener('scroll', function() {
    var element = document.getElementById('arrow.png');
    var range = 400;

    if (window.scrollY >= range) {
        element.style.display = 'none';
    } else {
        element.style.display = 'block';
    }
});