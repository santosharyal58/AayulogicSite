<template>
  <div class="section-title text-center mb-16">
    <h2 class="inline-block uppercase mb-8 font-light text-titlecolor">
      {{ titletext }}
    </h2>
    <p>We are good at what we do.</p>
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
