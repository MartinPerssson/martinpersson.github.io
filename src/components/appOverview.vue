<template>
  <section>
    <!-- <div class="logoBox">
        <img src="../assets/LogoMP.png" alt="">
    </div> -->
    <div class="fullscreen-bg">
      <video loop muted autoplay playsinline="true" class="background-video">
        <source src="static/Tree.mp4" type="video/mp4">
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
  position: fixed;
  left: 55%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -100;
  transform: translateX(-50%) translateY(-50%);
  transition: 1s opacity;
}
.logoBox{
  /*margin-top: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;*/
}
</style>
