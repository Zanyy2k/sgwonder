<template>
  <ElementHeroSection />
  <div class="untree_co-section">
    <div class="container my-5">
      <ElementCarouselSection />
      <PageTeam />
    </div>
  </div>
</template>

<script>
import ElementCarouselSection from "../components/ElementCarouselSection.vue";
import ElementHeroSection from "../components/ElementHeroSection.vue";
import PageTeam from "../components/PageTeam.vue";

export default {
  name: "Element",
  components: {
    ElementHeroSection,
    ElementCarouselSection,
    PageTeam,
  },
};
</script>
