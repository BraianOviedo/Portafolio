document.addEventListener('DOMContentLoaded', function () {
    const previewButtons = document.querySelectorAll('.preview');
    const modalSlider = document.getElementById('modal-slider');
    const closeSlider = document.querySelector('.close-slider');
    const slideImg = document.querySelector('.slide-img');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    let currentProject = '';
    let currentSlideIndex = 0;
    let projectImages = {
        gardeningWeb: [
            'img/gardeningWeb1.jpg',
            'img/gardeningWeb2.jpg',
            'img/gardeningWeb3.jpg'
        ],
        gardeningApp: [
            'img/gardeningApp1.jpg',
            'img/gardeningApp2.jpg',
            'img/gardeningApp3.jpg'
        ],
        artMaster: [
            'img/artMaster1.jpg',
            'img/artMaster2.jpg',
            'img/artMaster3.jpg'
        ],
        odinAI: [
            'img/odinAI1.jpg',
            'img/odinAI2.jpg'
        ],
    };

    // Abrir modal de slider al hacer clic en un botón de Preview
    previewButtons.forEach(button => {
        button.addEventListener('click', function () {
            currentProject = button.getAttribute('data-project');
            currentSlideIndex = 0;
            loadSlide();
            modalSlider.style.display = 'block';
        });
    });

    // Cerrar modal de slider
    closeSlider.addEventListener('click', function () {
        modalSlider.style.display = 'none';
    });

    // Cargar la imagen actual
    function loadSlide() {
        if (projectImages[currentProject]) {
            slideImg.src = projectImages[currentProject][currentSlideIndex];
        }
    }

    // Navegar a la imagen anterior
    prevButton.addEventListener('click', function () {
        if (currentSlideIndex > 0) {
            currentSlideIndex--;
            loadSlide();
        } else {
            currentSlideIndex = projectImages[currentProject].length - 1;
            loadSlide();
        }
    });

    // Navegar a la siguiente imagen
    nextButton.addEventListener('click', function () {
        if (currentSlideIndex < projectImages[currentProject].length - 1) {
            currentSlideIndex++;
            loadSlide();
        } else {
            currentSlideIndex = 0;
            loadSlide();
        }
    });

    // Cerrar modal si se hace clic fuera del contenido del modal
    window.addEventListener('click', function (e) {
        if (e.target == modalSlider) {
            modalSlider.style.display = 'none';
        }
    });
});
