<template>
  <div id="product" class="projects-section py-40">
    <!-- <Title titletext="Most Recent Project"></Title> -->
    <div class="container">
      <div class="about-hrsoft flex flex-wrap">
        <div
          class="feature w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1-2 mb-12 px-6"
        >
          <figure class="product-img max-w-quarter mb-8">
            <img src="../assets/realhr.png" alt="hrsoft" />
          </figure>
          <p>
            Real HR Soft is a result of a continuous and iterative process to
            create the best possible solutions to day-to-day problems faced by
            HR managers. Countless hours have been spent on making sure that
            everything is done the right way
          </p>
        </div>
        <div
          class="feature w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1-2 mb-12 px-6"
        >
          <figure class="product-img">
            <img src="../assets/Group 4.png" alt="hrsoft" />
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Title from './Titleblock'
export default {
  name: 'RecentProject',
  components: {
    // Title
  }
}
</script>

<style>
.projects-section {
  background: url('../assets/newbanner.png');
  background-size: cover;
  background-repeat: no-repeat;
}
.projects-section .section-title h2 {
  @apply text-white;
}
.about-hrsoft p {
  @apply text-white leading-loose;
}
.product-img img {
  @apply block w-full h-auto;
}
</style>
