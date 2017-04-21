<template>
  <nav>

  </nav>
  <section>
    <div class="fullscreen-bg">
    <video loop muted autoplay poster="img/videoframe.jpg" class="background-video">
      <source src="src/assets/Tree.mp4" type="video">
    </video>
</div>
  </section>
</template>

export default {

}
<style media="screen">
.fullscreen-bg {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  z-index: -100;
}

.background-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
