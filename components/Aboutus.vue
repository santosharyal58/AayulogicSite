<template>
  <div id="aboutus" class="about-us py-20">
    <div class="container">
      <!-- <Title titletext="About Us"></Title> -->
      <div class="aboutus-wrap flex justify-center flex-wrap w-full">
        <div
          class="aboutus-text text-right px-4 sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2"
        >
          <h2 class="pr-40 text-right text-textcolor text-2xl">
            About Us
          </h2>
          <h4 class="mt-6 pr-40 text-titlecolor">
            We are good at what we do.
          </h4>
        </div>
        <div class="aboutus-img sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/2">
          <!-- <img src="../assets/about-img.png" alt="aayulogic" /> -->
          <p class="max-w-half text-titlecolor">
            We're a team of passionate people who make use of excellent
            technology for the simplification of our client's business needs. We
            provide software solutions including, but not limited to, web
            development, web desigining, web/domain hosting, cms etc.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Title from './Titleblock'
export default {
  name: 'About',
  components: {
    // Title
  }
}
</script>

<style>
.aboutus-img img {
  @apply w-full block object-cover;
}
.aboutus-text p {
  @apply leading-relaxed text-textcolor mb-8;
}
.aboutus-text h4 {
  padding-left: 30%;
}
.aboutus-img {
  position: relative;
}
.aboutus-img:before {
  content: '';
  display: block;
  background: #828282;
  position: absolute;
  height: 100%;
  width: 1px;
  top: 0;
  left: -40px;
  bottom: 0;
}
</style>
