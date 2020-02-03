<template>
  <div id="product" class="projects-section py-40">
    <!-- <Title titletext="Most Recent Project"></Title> -->
    <div class="container">
      <div
        itemscope
        itemtype="http://schema.org/Product"
        class="about-hrsoft flex flex-wrap"
      >
        <div
          class="featured-project-l w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1-2 mb-12 px-6"
        >
          <h3 itemprop="offers" class="mb-12 text-left text-white text-2xl">
            Featured Project
          </h3>
          <figure class="product-img max-w-quarter mb-8">
            <img
              itemprop="image"
              src="../assets/realhrsoft-main.svg"
              alt="realhrsoft"
            />
          </figure>
          <p class="xs:text-2xl mb-8">
            <span itemprop="name">RealHRsoft</span> is a result of a continuous
            and iterative process to create the best possible solutions to
            day-to-day problems faced by HR managers. Countless hours have been
            spent on making sure that everything is done the right way
          </p>
          <a
            class="product-btn inline-block text-2xl px-8 cursor-pointer text-white hover:bg-activecolor hover:border-activecolor"
            href="https://realhrsoft.com"
            >Visit Now</a
          >
        </div>
        <div
          class="featured-project-r w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1-2 mb-12 px-6"
        >
          <figure class="product-img">
            <img
              itemprop="image"
              src="../assets/realhrsoft-dashboard.png"
              alt="hrsoft"
            />
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
  background-attachment: fixed;
}
.projects-section .section-title h2 {
  @apply text-white;
}
.about-hrsoft p {
  @apply text-white leading-relaxed;
}
.product-img img {
  @apply block w-full h-auto;
}
.product-btn {
  height: 38px;
  line-height: 36px;
  border: 1px solid #fff;
}
</style>
