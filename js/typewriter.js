var app = document.querySelector('.effect-header-1');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Frontend developer')
    .pauseFor(1500)
    .deleteAll()
    .typeString('Creative designer')
    .pauseFor(1500)
    .deleteAll()
    .typeString('Borde få MVG')
    .pauseFor(2000)
    .start();