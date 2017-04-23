<template lang="html">
  <nav>
  <ul class="navBar">
    <li><a href="#">Home</a></li>
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
/* Navigation */

nav {
  width: 100%;
  height: 62px;
  position: fixed;
  top: 0;
  background: #999;
}

nav ul {
  padding: 20px;
  margin: 0 auto;
  list-style: none;
  text-align: center;
}
nav ul li {
  display: inline-block;
  margin: 0 10px;
}
nav ul li a {
  padding: 10px 0;
  text-decoration: none;
  color: #ccc;
  font: 25px/1 Helvetica, Verdana, sans-serif;
  text-transform: uppercase;

  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  -ms-transition: all 0.5s ease;
  transition: all 0.5s ease;
}
nav ul li a:hover {
  color: #666;
  border-bottom: 3px solid #666;
}
a.active {
  font-weight: bold;
  color: #333;
}

</style>
