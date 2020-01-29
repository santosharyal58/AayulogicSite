<template>
  <div class="section-title text-center mb-16">
    <h2
      class="inline-block capitalize mb-8 font-light text-titlecolor md:text-5xl sm:text-4xl"
    >
      {{ titletext }}
    </h2>
    <!-- <p>We are good at what we do.</p> -->
  </div>
</template>

<script>
export default {
  name: 'Title',
  props: ['titletext']
}
</script>

<style>
.section-title p {
  @apply text-3xl text-textcolor;
}
</style>
