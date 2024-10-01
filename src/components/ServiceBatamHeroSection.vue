<template>
  <!-- <div class="hero hero-inner"> -->
  <div class="hero hero-inner" :style="heroStyle">
    <!-- <div class="container">
      <div class="row align-items-center"></div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "ServiceHeroSection",
  props: {
    backgroundImage: {
      type: String,
      default: "", // Allow override
    },
  },
  computed: {
    heroStyle() {
      // Fallback to default about section image if no prop is passed
      const defaultImage = "public/images/batam_hero.png";
      return {
        background: `url(${
          this.backgroundImage || defaultImage
        }) no-repeat center center/cover`,
        padding: "9rem 0 7rem 0",
      };
    },
  },
};
</script>
