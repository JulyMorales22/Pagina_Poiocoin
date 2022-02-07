const header = `<header class="row justify-content-around" id="page">
<div class="col-md-2 text-center icon">
  <img class="headerImage" src="./assets/img/icon.svg" alt="" />
</div>
<div class="col-md-10 text-center mt-3">
  <div class="text ">
    <p>
    
      <span class="poin">Poio</span><span class="coin">Coin</span> es
    </p>
    <p>
      <span class="word wisteria">firme</span>
      <span class="word belize">fiel</span>
      <span class="word pomegranate">adaptable</span>
      <span class="word green">sencillo</span>
      <span class="word midnight">accesible</span>
    </p>
  </div>
</div>
<div class="col-2 col-md-2 text-center">
  <div class="container-btn-mode">
      <div id="id-sun" class="btn-mode sun active">
         <i class="fas fa-sun"></i>
      </div>
      <div id="id-moon" class="btn-mode moon">
         <i class="fas fa-moon"></i>
      </div>
   </div>
</div>
<nav class="navbar navbar-expand-md navbar-dark navBar" id="navNight">
  <div class="container-fluid">
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="./index.html">Inicio</a>
        </li>
        <li class="nav-item">
                        <a class="nav-link" href="./information.html">Ventajas</a>
                      </li>
                      <li class="nav-item">
                      <a class="nav-link" href="./calculator.html">Calculadora</a>
                    </li>
        <li class="nav-item dropdown ">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarScrollingDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Cursos
          </a>
          <ul
            class="dropdown-menu dropMenu "
            aria-labelledby="navbarScrollingDropdown"
          >
            <li><a class="dropdown-item text-white liDropMenu" href="https://www.youtube.com/playlist?list=PLlEKrQbZtTv66WqocSVUJ6qFKRtudgHOX" target="_blank" >Trading de Criptomonedas</a></li>
            <li><a class="dropdown-item text-white liDropMenu" href="https://www.youtube.com/watch?v=VsGl6Ek3SKA&list=PLCeSt7rbotL-DHZfkGE6L2qohhKVGm7ss" target="_blank" >Bitcoin y criptomonedas</a></li>
            <!-- <li><hr class="dropdown-divider"></li> -->
            <li><a class="dropdown-item text-white liDropMenu" href="https://www.youtube.com/watch?v=WReq1YyJdp8&list=PLLFi-jdtkJHy6ruGsp9HNsSU2M8HKqyUG" target="_blank" >Curso de criptomonedas</a></li>
            <li><a href="https://www.youtube.com/watch?v=7COXXgiHE2o" target="_blank" class="dropdown-item text-white liDropMenu">Conoce las criptomonedas</a></li>
            <li><a href="https://www.youtube.com/watch?v=95ar59o0MaM&list=PLpqH14VJKFWNTfpIM9ziJ--HspTEKbqnV" target="_blank"  class="dropdown-item text-white liDropMenu">Trading de Criptomonedas</a></li>
            <li><a href="https://www.youtube.com/watch?v=0R9R4U0ZHy4&list=PLpqH14VJKFWPoDABjgFiRzbL46LV8hedM" target="_blank"  class="dropdown-item text-white liDropMenu">Grafico, soporte y otros</a></li>
            <li><a href="https://www.youtube.com/watch?v=yh4GuSO2VWg" class="dropdown-item text-white liDropMenu" target="_blank" >Apalancamiento, margen y otros</a></li>
            <li><a href="https://www.youtube.com/watch?v=mtZl8E4u41E" target="_blank"  class="dropdown-item text-white liDropMenu">Estrategias</a></li>
            <li><a href="https://www.youtube.com/watch?v=cLi_VN7THY4&list=PLpqH14VJKFWOZPuqUYZm0Fqml-TeuwhcY" target="_blank" class="dropdown-item text-white liDropMenu">Gestion del dinero</a></li>
            <!-- <li><a href="" class="dropdown-item text-white liDropMenu">Curso #7</a></li> -->
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="./question.html">Preguntas Frecuentes</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</header>`;

const divHeader = document.getElementById("header");
divHeader.innerHTML=header;
