<template>
  <div>
    <section class="hero">
      <div class="container text-center">
        <div class="row">
          <div class="col-md-12">
            <!-- <a class="hero-brand" href="index.html" title="Home"><img alt="Bell Logo" src="img/logo.png"></a> -->
          </div>
        </div>
        <div class="col-md-12">
          <h1>
              Irim
          </h1>
          <p class="tagline">
            Cualquier opinion puede ser intersante
          </p>
          <a class="btn btn-full" href="#/SignIn">Log-in</a>
          <a class="btn btn-full" href="#/register">Registrarse</a>
        </div>
    </div>
    </section>
    <header id="header">
      <div class="container">
        <nav class="nav social-nav pull-right d-none d-lg-inline">
          <a href="#"><i class="fa fa-twitter"></i></a> <a href="#"><i class="fa fa-facebook"></i></a> <a href="#"><i class="fa fa-linkedin"></i></a> <a href="#"><i class="fa fa-envelope"></i></a>
        </nav>
      </div>
    </header>
    <section class="about" id="about">
      <div class="container text-center">
        <h2>
            Sobre Irim
          </h2>
        <p>
          Voluptua scripserit per ad, laudem viderer sit ex. Ex alia corrumpit voluptatibus usu, sed unum convenire id. Ut cum nisl moderatius, per nihil dicant commodo an. Eum tacimates erroribus ad. Atqui feugiat euripidis ea pri, sed veniam tacimates ex. Menandri
          temporibus an duo.
        </p>
      </div>
    </section>
    <footer class="site-footer">
      <div class="bottom">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-xs-12 text-lg-left text-center">
              <p class="copyright-text">
                © IRIM inc
              </p>
              <div class="credits">
                <a href="https://bootstrapmade.com/">Bootstrap Templates</a> by BootstrapMade
              </div>
            </div>
            <div class="col-lg-6 col-xs-12 text-lg-right text-center">
              <ul class="list-inline">

              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <a class="scrolltop" href="#"><span class="fa fa-angle-up"></span></a>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Bienvenido a IRIM'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2, h3, h4, h5, h6 {
  font-family: "Raleway", Helvetica, Arial, sans-serif;
}

p {
  line-height: 1.55;
  color: #333;
  font-size: 400;
  font-family: "Raleway", Helvetica, Arial, sans-serif;
}

h1 {
  font-size: 62px;
}

h2 {
  font-size: 30px;
  margin-bottom: 65px;
}

h3 {
  font-size: 24px;
}

h4 {
  font-size: 18px;
}

/* ==================================================
  General
  ================================================== */
a {
  -webkit-transition: 0.5s;
  -o-transition: 0.5s;
  transition: 0.5s;
}

/* ==================================================
  Elements
  ================================================== */
.btn {
  background-color: rgb(236, 93, 11);
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  font-weight: 800;
  color: #fff;
  padding: 15px 45px;
  border-radius: 50px;
}

.btn:hover {
  background-color: #E04F00;
  color: #fff;
}

.btn:focus {
  color: #fff;
}

.btn-ghost {
  border: 3px solid #fff;
  background-color: transparent;
}

.btn-ghost:hover {
  background-color: #fff;
  color: rgb(0, 0, 0);
}

section {
  padding: 85px 0;
}

.card {
  position: relative;
  padding: 0;
  border: 0;
  border-radius: 0;
  margin: 0;
  overflow: hidden;
}

a:hover {
  text-decoration: none !important;
}

.scrolltop {
  display: none;
  position: fixed;
  bottom: 15px;
  right: 15px;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: rgb(1, 0, 5);
  color: #fff;
  text-align: center;
  font-size: 24px;
}

.scrolltop:hover, .scrolltop:active, .scrolltop:focus {
  color: #fff !important;
  opacity: .75;
}

/* ==================================================
  Hero Styling
================================================== */
.hero {
  display: table;
  position: relative;
  background-image: url(../img/cover.jpg);
  background-size: cover;
  padding: 150px 0;
  color: #fff;
  width: 100%;
  height: 100vh;
}

.hero:after {
  content: '';
  z-index: 0;
  position: absolute;
  background: rgba(0, 0, 0, 0.65);
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}

.hero .container {
  position: relative;
  z-index: 1;
  text-align: center;
  display: table-cell;
  vertical-align: middle;
  width: 100%;
}

.hero-brand {
  margin-bottom: 75px;
  display: inline-block;
}

.hero-brand:hover {
  opacity: .75;
}

.tagline {
  font-family: "Raleway", Helvetica, Arial, sans-serif;
  font-size: 26px;
  margin: 45px 0 75px 0;
  color: #fff;
}

/* ==================================================
  Header Styling
================================================== */
#header {
  background: rgb(0, 0, 0);
  height: 70px;
}

#header #logo {
  margin: 14px 25px 0 0;
}

#header #logo h1 {
  font-size: 36px;
  margin: 0;
  padding: 2px 0;
  line-height: 1;
  font-family: "Raleway", Helvetica, Arial, sans-serif;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
}

#header #logo h1 a, #header #logo h1 a:hover {
  color: #fff;
}

#header #logo img {
  padding: 0;
  margin: 0;
  max-height: 40px;
}

@media (max-width: 768px) {
  #header {
    height: 50px;
  }
  #header #logo {
    margin: 10px 0 0 0;
  }
  #header #logo h1 {
    padding: 2px 0;
    font-size: 26px;
  }
  #header #logo img {
    max-height: 30px;
  }
}

#header .social-nav {
  margin-top: 15px;
}

#header .social-nav a {
  font-size: 24px;
  margin-left: 15px;
  color: #fff;
}

#header .social-nav a:hover {
  color: rgba(255, 255, 255, 0.75);
}

/*--------------------------------------------------------------
# Navigation Menu
--------------------------------------------------------------*/
/* Nav Menu Essentials */
.nav-menu, .nav-menu * {
  margin: 0;
  padding: 0;
  list-style: none;
}

.nav-menu ul {
  position: absolute;
  display: none;
  top: 100%;
  left: 0;
  z-index: 99;
}

.nav-menu li {
  position: relative;
  white-space: nowrap;
}

.nav-menu > li {
  float: left;
}

.nav-menu li:hover > ul,
.nav-menu li.sfHover > ul {
  display: block;
}

.nav-menu ul ul {
  top: 0;
  left: 100%;
}

.nav-menu ul li {
  min-width: 180px;
}

/* Nav Menu Arrows */
.sf-arrows .sf-with-ul {
  padding-right: 30px;
}

.sf-arrows .sf-with-ul:after {
  content: "\f107";
  position: absolute;
  right: 15px;
  font-family: FontAwesome;
  font-style: normal;
  font-weight: normal;
}

.sf-arrows ul .sf-with-ul:after {
  content: "\f105";
}

/* Nav Meu Container */
#nav-menu-container {
  margin: 0;
}

@media (max-width: 768px) {
  #nav-menu-container {
    display: none;
  }
}

/* Nav Meu Styling */
.nav-menu a {
  padding: 22px 15px 18px 15px;
  text-decoration: none;
  display: inline-block;
  color: #fff;
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  font-weight: 300;
  font-size: 15px;
  outline: none;
}

.nav-menu a:hover, .nav-menu li:hover > a, .nav-menu .menu-active > a {
  color: rgba(255, 255, 255, 0.75);
}

.nav-menu ul {
  margin: 4px 0 0 15px;
  -webkit-box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.08);
  box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.08);
}

.nav-menu ul li {
  background: #fff;
  border-top: 1px solid #f4f4f4;
}

.nav-menu ul li:first-child {
  border-top: 0;
}

.nav-menu ul li:hover {
  background: rgb(2, 25, 29);
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
}

.nav-menu ul li a {
  color: #333;
  -webkit-transition: none;
  -o-transition: none;
  transition: none;
  padding: 10px 15px;
}

.nav-menu ul li a:hover {
  color: #fff;
}

.nav-menu ul ul {
  margin: 0;
}

/* Mobile Nav Toggle */
#mobile-nav-toggle {
  position: fixed;
  right: 0;
  top: 0;
  z-index: 999;
  margin: 8px 10px 0 0;
  border: 0;
  background: none;
  font-size: 24px;
  display: none;
  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  transition: all 0.4s;
  outline: none;
  cursor: pointer;
}

#mobile-nav-toggle i {
  color: #fff;
}

@media (max-width: 768px) {
  #mobile-nav-toggle {
    display: inline;
  }
}

/* Mobile Nav Styling */
#mobile-nav {
  position: fixed;
  top: 0;
  padding-top: 18px;
  bottom: 0;
  z-index: 998;
  background: rgba(0, 0, 0, 0.9);
  left: -260px;
  width: 260px;
  overflow-y: auto;
  -webkit-transition: 0.4s;
  -o-transition: 0.4s;
  transition: 0.4s;
}

#mobile-nav ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

#mobile-nav ul li {
  position: relative;
}

#mobile-nav ul li a {
  color: #fff;
  font-size: 16px;
  overflow: hidden;
  padding: 10px 22px 10px 15px;
  position: relative;
  text-decoration: none;
  width: 100%;
  display: block;
  outline: none;
}

#mobile-nav ul li a:hover {
  color: #fff;
}

#mobile-nav ul li li {
  padding-left: 30px;
}

#mobile-nav ul .menu-has-children i {
  position: absolute;
  right: 0;
  z-index: 99;
  padding: 15px;
  cursor: pointer;
  color: #fff;
}

#mobile-nav ul .menu-has-children i.fa-chevron-up {
  color: rgb(1, 17, 20);
}

#mobile-nav ul .menu-item-active {
  color: rgb(2, 18, 20);
}

#mobile-body-overly {
  width: 100%;
  height: 100%;
  z-index: 997;
  top: 0;
  left: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.6);
  display: none;
}

/* Mobile Nav body classes */
body.mobile-nav-active {
  overflow: hidden;
}

body.mobile-nav-active #mobile-nav {
  left: 0;
}

body.mobile-nav-active #mobile-nav-toggle {
  color: #fff;
}

/* ==================================================
  Stats Styling
================================================== */
.stats-row {
  margin-top: 65px;
}

.stats-col .circle {
  display: inline-block;
  width: 160px;
  height: 160px;
  font-family: "Raleway", Helvetica, Arial, sans-serif;
  font-weight: 500;
  color: #666;
  border: 6px solid #199EB8;
  border-radius: 50%;
  padding: 55px 25px 0 25px;
  position: relative;
}

.stats-col .circle .stats-no {
  color: #fff;
  width: 70px;
  height: 70px;
  line-height: 70px;
  top: -25px;
  right: -15px;
  font-family: "Raleway", Helvetica, Arial, sans-serif;
  font-size: 18px;
  background-color: #E04F00;
  position: absolute;
  border-radius: 50%;
  font-weight: 700;
}


/* ==================================================
  Features Styling
  ================================================== */
.features {
  padding-bottom: 45px;
}

.features h2 {
  color: #199EB8;
}

.feature-col {
  display: table;
  padding-bottom: 45px;
}

.feature-col > div > div {
  display: table-cell;
  vertical-align: middle;
}

.feature-col > div > div:last-child {
  padding-left: 20px;
}

.feature-col .feature-icon {
  width: 70px;
  height: 70px;
  margin-bottom: 15px;
  background: rgb(0, 0, 0);
  color: #fff;
  font-size: 24px;
  text-align: center;
  line-height: 70px;
  border-radius: 50%;
  display: inline-block;
}

.feature-col h3 {
  color: rgb(1, 12, 14);
}

.feature-col p {
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #999;
}

/* ==================================================
  Call-to-action Styling
  ================================================== */
.cta {
  background-color: rgb(0, 0, 0);
  padding: 25px 0;
}

.cta h2 {
  margin-bottom: 5px;
}

.cta h2,
.cta p {
  color: #fff;
}

.cta p {
  margin-bottom: 0;
  opacity: .75;
}

.cta .btn-ghost {
  position: relative;
  top: 13px;
}

/* ==================================================
  Footer Styling
  ================================================== */
.site-footer {
  background-color: #111;
  padding: 0;
}

.site-footer h2, .site-footer p {
  color: #fff;
}

.site-footer p {
  opacity: .75;
  line-height: 2.0925;
}

.site-footer h2,
.site-footer .btn {
  margin-bottom: 25px;
}

.site-footer .social-nav a {
  color: #fff;
  opacity: .25;
}

.site-footer .social-nav a:hover {
  opacity: 1;
}

.site-footer .bottom {
  background-color: #000;
  padding: 20px 0;
}

.site-footer .bottom .list-inline, .site-footer .bottom p {
  margin: 0;
}

.site-footer .bottom .list-inline {
  position: relative;
  top: 5px;
}

.site-footer .bottom .list-inline a {
  color: #fff;
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  margin-right: 15px;
}

.site-footer .bottom .list-inline a:hover {
  color: #199EB8;
}

.site-footer .credits {
  color: #ddd;
}

.site-footer .credits a {
  color: #199EB8;
}

/* ==================================================
  Responsive Styling
  ================================================== */
@media (max-width: 61.9em) {
  section,
  .block,
  .cta {
    padding: 35px 0;
  }
  .features {
    padding-bottom: 5px;
  }
  p,
  .block p {
    margin: 0;
  }
  .hero-brand {
    margin-bottom: 35px;
  }
  .tagline {
    margin: 35px 0;
  }
  h1 {
    font-size: 32px;
    margin: 0;
  }
  h2,
  .tagline {
    font-size: 24px;
  }
  h2 {
    margin-bottom: 25px;
  }
  h3 {
    font-size: 14px;
  }
  .hero {
    padding: 75px 0;
  }
  .stats-col {
    margin-bottom: 25px;
  }
  .block {
    height: auto;
  }
  .feature-col {
    padding-bottom: 30px;
  }
  .portfolio-grid .card h3.card-title {
    font-size: 18px !important;
  }
  .portfolio-grid .card .card-text {
    font-size: 13px;
  }
  .team .team-over {
    padding-top: 20px;
  }
  .team .card .social-nav {
    margin-bottom: 15px;
    padding: 0;
  }
  .site-footer .social-nav {
    margin-bottom: 35px;
  }
  .site-footer .list-inline {
    text-align: center;
    padding-bottom: 15px;
  }
  .site-footer .list-inline li {
    display: inline-block;
  }
}

@media (max-width: 767px) {
  .block {
    padding-left: 30px;
    padding-right: 30px;
  }
}
</style>
