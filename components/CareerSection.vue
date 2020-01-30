<template>
  <div class="career-sec pb-20">
    <div class="joinus-banner bg-bgsecondary py-20">
      <div class="container joinus-text text-center">
        <div class=" text-center mb-16">
          <h2
            class="inline-block capitalize mb-8 font-light text-titlecolor md:text-5xl sm:text-4xl"
          >
            Join Our Team
          </h2>
        </div>
        <h4 class="text-textcolor text-3xl">
          Interested in becoming part of the team? Contact us at
          <a class="hover:underline" href="tel:9802075560">9802075560</a>
        </h4>
        <h5
          class="text-2xl leading-loose text-activecolor font-semibold hover:underline"
        >
          <a @click="showModal = true" class="btn-knowmore cursor-pointer"
            >Learn more about working here</a
          >
        </h5>
      </div>
    </div>
    <Popup v-if="showModal" @close="showModal = !showModal"></Popup>
  </div>
</template>

<script>
import Popup from '~/components/Popup'
export default {
  name: 'CareerSection',
  components: {
    Popup
  },
  data() {
    return {
      showModal: false
    }
  }
}
</script>

<style></style>
