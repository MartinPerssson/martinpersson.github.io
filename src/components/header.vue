<template lang="html">
  <nav>
    <img class="navLogo" src="../assets/logo-fff.png" alt="">
  <ul class="navBar">
    <li><a href="#">About</a></li>
    <li><a href="#">Portfolio</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>
</template>

<script>
export default {

}
</script>

<style lang="css">
/* ---Navigation--- */
nav {
  width: 100%;
  height: 62px;
  position: fixed;
  top: 0;
  left: 0;
  background: #2A2A2A;
  opacity: 0.6;
}

nav ul {
  padding: 20px;
  margin: 0 auto;
  list-style: none;
  text-align: center;
}
nav ul li {
  display: inline-block;
  margin-right: 5%;
}
nav ul li a {
  padding: 10px 0;
  text-decoration: none;
  color: #ccc;
  font: 25px/1 Helvetica, Verdana, sans-serif;
  text-transform: uppercase;

  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  transition: all 0.3s ease;
}
nav ul li a:hover {
  color: #000;
  border-bottom: 3px solid #000;
}
a.active {
  font-weight: bold;
  color: #000;
}
.navLogo{
  float: left;
  height: 100%;
}

</style>
