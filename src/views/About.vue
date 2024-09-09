<template>
  <AboutHeroSection />
  <AboutDetailSection />
  <PageTeam />
  <PageTestimonials />
  <!-- <PageTourVideoSection /> -->
  <PageContactBanner />
</template>

<script>
import AboutDetailSection from "../components/AboutDetailSection.vue";
import AboutHeroSection from "../components/AboutHeroSection.vue";
import PageContactBanner from "../components/PageContactBanner.vue";
import PageTeam from "../components/PageTeam.vue";
import PageTestimonials from "../components/PageTestimonials.vue";
import PageTourVideoSection from "../components/PageTourVideoSection.vue";

export default {
  name: "About",
  components: {
    AboutHeroSection,
    AboutDetailSection,
    PageTeam,
    PageTestimonials,
    PageTourVideoSection,
    PageContactBanner,
  },
};
</script>
