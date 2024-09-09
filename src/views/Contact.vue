<template>
  <ContactHeroSection />
  <ContactFormSection />
  <PageTestimonials />
</template>

<script>
import ContactFormSection from "../components/ContactFormSection.vue";
import ContactHeroSection from "../components/ContactHeroSection.vue";
import PageTestimonials from "../components/PageTestimonials.vue";

export default {
  name: "Contact",
  components: {
    ContactHeroSection,
    ContactFormSection,
    PageTestimonials,
  },
};
</script>
