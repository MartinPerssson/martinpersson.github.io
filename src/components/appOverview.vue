<template>
  <!-- <header-nav></header-nav> -->
  <section>
    <div class="fullscreen-bg">
      <video loop muted autoplay class="background-video">
        <source src="../static/Tree.mp4" type="video/mp4">
      </video>
    </div>
  </section>
</template>
<script>
export default {
}
</script>

<style media="screen">
section{
  width: 100%;
  height: 100%;
}
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
