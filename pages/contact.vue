<template>
  <div class="container text-start ">
    <div class="row">
      <div class="col contact mt-5 ">
        <h1>Contact</h1>
        <div class="line my-4"></div>
        <h2>Anna Boiko</h2>
        <a href="mailto:annaboiko1@icloud.com" class="h2 violet ">annaboiko1@icloud.com</a>
        <h2 class="mt-2">Based in Montreal, QC Canada</h2>
        <CalendarReservation />

        <div class=" m-3">
          <div class="findme">Find me on</div>
          <div class="icons">
            <div class="d-flex justify-content-center me-5">
              <a href="https://github.com/AnnaBoiko1" target="_blank" class="icon">
                <FontAwesomeIcon :icon="['fab', 'github']" />
              </a>
              <a href="https://www.linkedin.com/in/anna-boiko1//" target="_blank" class="icon">
                <FontAwesomeIcon :icon="['fab', 'linkedin']" />
              </a>
            </div>
          </div>
        </div>

      </div>
      <div class="col form">
        <ContactForm />
      </div>
    </div>
  </div>
  <HireMe />
</template>
<script setup>
import ContactForm from "@/components/ContactForm.vue";
import HireMe from "@/components/HireMe.vue";
// eslint-disable-next-line no-unused-vars
import CalendarReservation from "@/components/CalendarReservation.vue";
</script>
<style lang="scss">
@import "@/assets/styles/main.scss";

// .contact{
//  // background-color: $primary-color; // Приклад використання SCSS-змінної
// }
</style>
