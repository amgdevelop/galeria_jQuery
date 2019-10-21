var articulo = $('.row article');

articulo.on('click', cargarModal);


function cargarModal(event) {

    var url = $(this).find('img').attr('src');
    var tituloh4 = $(this).find('h4').text();
    var tituloh3 = $(this).find('h3').text();
    var altoBoton = $(this).offset().top;
    var top = $(window).scrollTop() + 60;
    $('body').append(
        `<div class="modal">

    <div class="manto">
        <div class="contenedor">
            <img src="${url}" alt="">
            <h4>${tituloh4}</h4>
            <h3>${tituloh3}</h3>
            <div class="cerrar">
                <i class="fas fa-times-circle"></i>
            </div>
        </div>

    </div>

</div>`
    );

    $('.modal').fadeIn(400);
    $('.modal .contenedor').animate({ 'top': top + "px" }, 400);
    $('.modal .manto').css('height', document.body.clientHeight);
    $('.modal .cerrar').on('click', borrarModal);
    $(document).on('keydown', borrarModal);
}



function borrarModal(event) {
    if (event.keyCode == 27 || event.type == 'click') {

        $('.modal').fadeOut(400, function () {

            $('.modal').remove();
        });
    }
}