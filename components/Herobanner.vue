<template>
  <div id="top" class="hero-banner relative min-h-screen overflow-hidden">
    <div class="banner-image absolute w-full h-full">
      <img src="../assets/aayulogic-banner.png" alt="aayulogic" />
    </div>
    <div class="banner-content absolute inset-0 flex jusify-start items-center">
      <div class="container">
        <div class="content-wrap w-full text-white max-w-7">
          <h1 class="md:text-6xl capitalize mb-32">
            <span class="text-activecolor md:text-6xl font-semibold"
              >Create Awesome Things</span
            >
            <br />For Better Web
          </h1>
          <div class="product-developed">
            <h6 class="text-2xl">Our Recent Projects</h6>
            <div class="icons-holder mt-8">
              <a href="https://realhrsoft.com/"
                ><img
                  class="w-64"
                  src="../assets/realhrsoft.svg"
                  alt="realhrsoft"
              /></a>
              <a href="https://rojgari.com/"
                ><img class="w-64" src="../assets/rojgari.svg" alt="rojgari"
              /></a>
              <a href="https://merojob.com/"
                ><img class="w-64" src="../assets/merojob.svg" alt="merojob"
              /></a>
            </div>
          </div>
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
.icons-holder a {
  @apply inline-block;
}
.icons-holder img {
  @apply w-64 mr-8;
}
</style>
