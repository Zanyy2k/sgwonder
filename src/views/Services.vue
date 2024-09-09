<template>
  <ServiceHeroSection />
  <ServiceDetailSection1 />
  <ServiceDetailSection2 />
  <PageServicesSection />
</template>

<script>
import PageServicesSection from "../components/PageServicesSection.vue";
import ServiceDetailSection1 from "../components/ServiceDetailSection1.vue";
import ServiceDetailSection2 from "../components/ServiceDetailSection2.vue";
import ServiceHeroSection from "../components/ServiceHeroSection.vue";

export default {
  name: "Services",
  components: {
    ServiceHeroSection,
    ServiceDetailSection1,
    ServiceDetailSection2,
    PageServicesSection,
  },
};
</script>
