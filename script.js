document.addEventListener('DOMContentLoaded', function () {

    document.body.addEventListener('click', function(event) {
        if (event.target && event.target.id === 'toggleButton') {
            var toggleButton = event.target;
            var navLinks = document.querySelectorAll('.nav-link-item');

            navLinks.forEach(function(link, index) {
                if (link.classList.contains('d-none')) {
                    setTimeout(function() {
                        link.classList.remove('d-none', 'animated-navbar-out');
                        link.classList.add('animated-navbar-in');
                    }, (navLinks.length - index - 1) * 100);
                } else {
                    link.classList.add('animated-navbar-out');

                    link.addEventListener('animationend', function() {
                        link.classList.add('d-none');
                        link.classList.remove('animated-navbar-in', 'animated-navbar-out');
                    }, { once: true });
                }
            });

            toggleButton.classList.toggle('rotate');
        }
    });

});

document.addEventListener('DOMContentLoaded', function() {
    fetch('webcomponent/navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-placeholder').innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading navbar:', error);
        });
});

document.addEventListener('DOMContentLoaded', function() {
    fetch('webcomponent/indexfooterbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('indexfooterbar-placeholder').innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading navbar:', error);
        });
});

document.addEventListener('DOMContentLoaded', function() {
    fetch('webcomponent/footerbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footerbar-placeholder').innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading navbar:', error);
        });
});