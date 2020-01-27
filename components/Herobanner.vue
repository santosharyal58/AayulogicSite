<template>
  <div class="hero-banner relative min-h-screen overflow-hidden">
    <div class="banner-image absolute w-full h-full">
      <img src="../assets/flex.gif" alt="aayulogic" />
    </div>
    <div class="banner-content absolute inset-0 flex jusify-end items-center">
      <div class="container">
        <div class="content-wrap w-full ml-auto text-white max-w-5">
          <h1 class="md:text-7xl">
            CREATE<br />AWESOME THINGS<br />FOR BETTER WEB
          </h1>
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
  @apply absolute w-full h-full block object-cover;
}
.btn-hero {
  @apply bg-transparent uppercase border-solid border text-white  text-3xl cursor-pointer;
  line-height: 5rem;
}
</style>
