<template>
  <HomeHeroSection />
  <ServiceDetailSection1 />
  <!-- <ServiceDetailSection2 /> -->
  <!-- <HomePopularDestinationSection /> -->
  <PageServicesSection />
  <!-- <PageStatsSection /> -->

  <!-- <PageTestimonials /> -->
  <!-- <OfferDiscountSection /> -->
  <!-- <PageTourVideoSection /> -->
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
import ServiceDetailSection1 from "../components/ServiceDetailSection1.vue";
import ServiceDetailSection2 from "../components/ServiceDetailSection2.vue";

export default {
  name: "Home",
  components: {
    HomeHeroSection,
    ServiceDetailSection1,
    ServiceDetailSection2,
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
