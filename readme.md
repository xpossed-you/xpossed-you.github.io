<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    
    <link rel="stylesheet" href="style.css">
    <title>xpossed-you</title>
</head>
<body>
    <div class="video-container">
    <video autoplay muted loop id="backgroundVideo">
        <source src="video.mp4" type="video/mp4">
    </video>
    <div class="text-box">
        <h3 class="x">&lt;x-y&gt;</h3>
        <p>this is xpossed</p>
    </div>
</div>

<!-- GASKEN KODING AJGGGGGGGGGGGGGGGGGGGGG -->
<!-- INI NAVBARR -->
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">
            <img src="logo.png" alt="xpossed-you Logo" height="28" class="align-center">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item d-none nav-link-item">
                    <a class="nav-link" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item d-none nav-link-item">
                    <a class="nav-link" href="#showOff">Collection</a>
                </li>
                <li class="nav-item d-none nav-link-item">
                    <a class="nav-link" href="#media">Social</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" id="toggleButton"><></a>
                </li>
            </ul>
        </div>
    </div>
</nav>

<!-- INI CAROUSEL -->
<div class="container">
<img id="backscene" src="scene.jpg" alt="...">
<div class="text-box2">
    
<div id="carouselShowOff" class="carousel slide carousel-fade showoff">
    <p>mini-collection</p>
    <div class="carousel-inner">
        <div id="showOff"></div>
      <div class="carousel-item active">
        <img id="slidecarousel-img" src="carousel\slide1.png" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block">
            <p class="caption-carousel"><span class="caption-text">aku suka buat ini</span></p>
        </div>
      </div>
      <div class="carousel-item">
        <img id="slidecarousel-img" src="carousel\slide2.png" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block">
            <p class="caption-carousel"><span class="caption-text">sama buat ini</span></p>
        </div>
      </div>
      <div class="carousel-item">
        <img id="slidecarousel-img" src="carousel\slide3.png" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block">
            <p class="caption-carousel"><span class="caption-text">ini juga</span></p>
        </div>
      </div>
      <div class="carousel-item">
        <img id="slidecarousel-img" src="carousel\slide4.png" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block">
            <p class="caption-carousel"><span class="caption-text">suka banget</span></p>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselShowOff" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselShowOff" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
    </div>
    </div>
</div>

<!-- BAGIAN SOCIAL CARD -->
<div class="container-card">
    
    <div id="media" class="text-box3">
        <div class="card">
            <img src="ytcard.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Youtube</h5>
              <a href="https://www.youtube.com/xpossed" class="btn btn-primary"></a>
            </div>
          </div>

        <div class="card">
            <img src="igcard.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Instagram</h5>
              <a href="https://www.instagram.com/fik.prod" class="btn btn-primary"></a>
            </div>
          </div>

          <div class="card">
            <img src="ghcard.png" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Github</h5>
              <a href="#" class="btn btn-primary"></a>
            </div>
          </div>
          
    </div>
</div>


<!-- INI FOOTER -->
<nav class="navbar2 fixed-bottom bg-body-tertiary bg-dark border-bottom border-body" data-bs-theme="dark">
    <div class="container-fluid">
            <p class="footer">xpossed-you</p>
            <ul class="navbar-nav ms-auto">
                <li class="nav-item d-none nav-link-item">
                    <a class="nav-link active">Home</a>
                </li>
            </ul>
    </div>
</nav>

<div class="text-box4">
    <h3 class="xv">&lt;x-y&gt;</h3>
    <p class="xsombong">this is the end of your journey, not mine lmao</p>
</div>


<!-- HTML BRENTI DISINIII -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
<script>
    document.addEventListener('DOMContentLoaded', function () {
        var toggleButton = document.getElementById('toggleButton');

        toggleButton.addEventListener('click', function() {
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
        });
    });
</script>
</body>
</html>