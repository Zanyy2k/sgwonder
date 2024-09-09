<template>
  <HomeHeroSection />
  <HomePopularDestinationSection />
  <PageServicesSection />
  <PageStatsSection />

  <PageTestimonials />
  <!-- <OfferDiscountSection /> -->
  <PageTourVideoSection />
  <PageContactBanner />
</template>

<script>
import HomeHeroSection from "../components/HomeHeroSection.vue";
import PageServicesSection from "../components/PageServicesSection.vue";
import PageStatsSection from "../components/PageStatsSection.vue";
import HomePopularDestinationSection from "../components/HomePopularDestinationSection.vue";
import PageTestimonials from "../components/PageTestimonials.vue";
import OfferDiscountSection from "../components/OfferDiscountSection.vue";
import PageTourVideoSection from "../components/PageTourVideoSection.vue";
import PageContactBanner from "../components/PageContactBanner.vue";

export default {
  name: "Home",
  components: {
    HomeHeroSection,
    PageServicesSection,
    PageStatsSection,
    HomePopularDestinationSection,
    PageTestimonials,
    OfferDiscountSection,
    PageTourVideoSection,
    PageContactBanner,
  },
};
</script>
