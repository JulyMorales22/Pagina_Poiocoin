const footer = ` <footer class="pie-pagina">
<div class="grupo-1">
    <div class="box">
        <figure>
            <a href="#">
                <img src="./assets/img/coin.png"alt="Logo de SLee Dw">
            </a>
        </figure>
    </div>
    <div class="box">
        <h2>SOBRE NOSOTROS</h2>
        <p>Direccion: Bogota av 5 cll 65 b.</p>
        <p>Celular: 31153456733 - 320179031</p>
        <p>Correo Electronico: atencionalcliente@poiocoin.com - quejasyreclamos@poiocoin.com</p>
    </div>
</div>
<div class="grupo-2">
<div class="box">
<h6>SIGUENOS</h6>
<div class="red-social">
    <a href="#" class="fa fa-facebook"></a>
    <a href="#" class="fa fa-instagram"></a>
    <a href="#" class="fa fa-twitter"></a>
    <a href="#" class="fa fa-youtube"></a>
</div>
</div>
    <small>&copy; 2022 <b>PoioCoin</b> - Todos los Derechos Reservados.</small>
</div>
</footer>`;



const divFooter = document.getElementById("footer");
divFooter.innerHTML = footer;
