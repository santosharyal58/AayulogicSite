<template>
  <div class="page-wrapper">
    <Herobanner></Herobanner>
    <About></About>
  </div>
</template>

<script>
import Herobanner from '~/components/Herobanner'
import About from '~/components/Aboutus'

export default {
  components: {
    Herobanner,
    About
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
