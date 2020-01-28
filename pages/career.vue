<template>
  <div class="page-wrapper career-page">
    <div class="container slider-container">
      <Slider></Slider>
    </div>
    <div class="applynow-part text-center bg-textcolor py-16">
      <h3 class="text-white">
        Interested in becoming part of the team?
        <a class="btn" href="">Apply Now</a>or contact us at <br />9802075560
      </h3>
    </div>
    <WorkingHere></WorkingHere>
  </div>
</template>

<script>
import Slider from '~/components/Slider'
import WorkingHere from '~/components/WorkingHere'
export default {
  components: {
    Slider,
    WorkingHere
  }
}
</script>

<style scoped>
.career-page .slider-container {
  @apply max-w-full;
}
.working-here .section-title h2 {
  @apply text-titlecolor;
}
</style>
