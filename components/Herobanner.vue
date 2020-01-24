<template>
  <div class="hero-banner relative max-h-screen overflow-hidden">
    <div class="banner-image w-full h-auto">
      <img src="../assets/flex.gif" alt="hero banner" />
    </div>
    <div class="banner-content absolute inset-0 flex jusify-end items-center">
      <div class="container">
        <div class="content-wrap w-full ml-auto text-white max-w-5">
          <h1>CREATE<br />AWESOME THINGS<br />FOR BETTER WEB</h1>
          <a href="#" class="btn btn-hero inline-block px-4 mt-10 h-20 rounded"
            >Contact Us</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Herobanner'
}
</script>

<style>
.banner-image img {
  @apply w-full block object-cover;
}
.btn-hero {
  @apply bg-transparent uppercase border-solid border text-white  text-3xl cursor-pointer;
  line-height: 5rem;
}
</style>
