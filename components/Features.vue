<template>
  <div class="features-section bg-gray-bgg py-40">
    <Title titletext="What We Do"></Title>
    <div class="container">
      <div class="row flex flex-wrap">
        <div
          class="feature w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 mb-12 px-6"
        >
          <div class="feature-wrap">
            <figure>
              <img src="../assets/globe.png" alt="what we do" />
            </figure>
            <div class="feature-text">
              <h3>Business Applications</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                corrupti animi laudantium necessitatibus, tempora exercitationem
                non veniam fugit excepturi, sunt saepe quisquam ad quam facere
                laboriosam, fuga quia aliquid sint?
              </p>
            </div>
          </div>
        </div>
        <div
          class="feature w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 mb-12 px-6"
        >
          <div class="feature-wrap">
            <figure>
              <img src="../assets/globe.png" alt="what we do" />
            </figure>
            <div class="feature-text ">
              <h3>Business Applications</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                corrupti animi laudantium necessitatibus, tempora exercitationem
                non veniam fugit excepturi, sunt saepe quisquam ad quam facere
                laboriosam, fuga quia aliquid sint?
              </p>
            </div>
          </div>
        </div>
        <div
          class="feature w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 mb-12 px-6"
        >
          <div class="feature-wrap">
            <figure>
              <img src="../assets/globe.png" alt="what we do" />
            </figure>
            <div class="feature-text">
              <h3>Business Applications</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                corrupti animi laudantium necessitatibus, tempora exercitationem
                non veniam fugit excepturi, sunt saepe quisquam ad quam facere
                laboriosam, fuga quia aliquid sint?
              </p>
            </div>
          </div>
        </div>
        <div
          class="feature w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 mb-12 px-6"
        >
          <div class="feature-wrap">
            <figure>
              <img src="../assets/globe.png" alt="what we do" />
            </figure>
            <div class="feature-text">
              <h3>Business Applications</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                corrupti animi laudantium necessitatibus, tempora exercitationem
                non veniam fugit excepturi, sunt saepe quisquam ad quam facere
                laboriosam, fuga quia aliquid sint?
              </p>
            </div>
          </div>
        </div>
        <div
          class="feature w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 mb-12 px-6"
        >
          <div class="feature-wrap">
            <figure>
              <img src="../assets/globe.png" alt="what we do" />
            </figure>
            <div class="feature-text">
              <h3>Business Applications</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                corrupti animi laudantium necessitatibus, tempora exercitationem
                non veniam fugit excepturi, sunt saepe quisquam ad quam facere
                laboriosam, fuga quia aliquid sint?
              </p>
            </div>
          </div>
        </div>
        <div
          class="feature w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 mb-12 px-6"
        >
          <div class="feature-wrap">
            <figure>
              <img src="../assets/globe.png" alt="what we do" />
            </figure>
            <div class="feature-text">
              <h3>Business Applications</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                corrupti animi laudantium necessitatibus, tempora exercitationem
                non veniam fugit excepturi, sunt saepe quisquam ad quam facere
                laboriosam, fuga quia aliquid sint?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Title from './Titleblock'
export default {
  name: 'Features',
  components: {
    Title
  }
}
</script>

<style>
.feature-wrap {
  @apply flex;
}
.feature-wrap figure {
  @apply max-w-8 w-full;
}
.feature-text {
  @apply pl-4;
}
.feature-text h3 {
  @apply text-titlecolor;
}
.feature-text p {
  @apply text-textcolor leading-loose;
}
</style>
