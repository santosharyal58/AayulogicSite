<template>
  <div class="about-us py-40">
    <div class="container">
      <Title></Title>
      <div class="aboutus-wrap flex w-full">
        <div class="aboutus-text xl:w-1/2 ">
          <p>
            We're a team of passionate people who make use of excellent
            technology for the simplification of our client's business needs. We
            provide software solutions including, but not limited to, web
            development, web desigining, web/domain hosting, cms etc.
          </p>
        </div>
        <div class="aboutus-img xl:w-1/2 ">
          <img src="../assets/about-img.png" alt="aayulogic" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Title from './Titleblock'
export default {
  name: 'About',
  components: {
    Title
  }
}
</script>

<style>
.aboutus-img img {
  @apply w-full block object-cover;
}
</style>
