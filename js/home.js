$(document).ready(function () {
  $.getJSON("js/habitaciones.json", function (data) {
    console.log(data);
    template = ""
    data.map((hab)=>{
        template += `
        <div class="swiper-slide habitaciones">
            <a href="habitaciones.php?category=${hab.slug}" class="link-page">
              <img
                src="img/${hab.img_url}"
                alt=""
                class="img-slider img-slider-hab"
              />
              <div class="descripcion-slider">
                <span class="type-hab">${hab.categoria}</span>
                <div class="servicios-hab">Servicios: </div>
                <span class="precio-hab">S/${hab.precio}.00</span>
              </div>
            </a>
          </div>
        `
    })
    $(".swiper.habitaciones .swiper-wrapper").html(template)
  });
});
