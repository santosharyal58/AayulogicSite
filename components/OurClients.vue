<template>
  <div id="clients" class="clients-sec bg-bgsecondary pt-20 pb-40">
    <Title titletext="Top Clients"></Title>
    <div class="container clients-wrap">
      <div class="row flex flex-wrap">
        <div
          class="top-clients w-full xs:w-1/2 sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 flex items-center"
        >
          <figure>
            <img src="../assets/realsolutions.png" alt="realsolutions" />
          </figure>
        </div>
        <div
          class="top-clients w-full xs:w-1/2 sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 flex items-center"
        >
          <figure>
            <img src="../assets/rojgari.png" alt="rojgari" />
          </figure>
        </div>
        <div
          class="top-clients w-full xs:w-1/2 sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 flex items-center"
        >
          <figure>
            <img src="../assets/merojob.png" alt="merojob" />
          </figure>
        </div>
        <!-- jjj -->
        <div
          class="top-clients w-full xs:w-1/2 sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 flex items-center"
        >
          <figure>
            <img src="../assets/ebbema.png" alt="ebeema" />
          </figure>
        </div>
        <div
          class="top-clients w-full xs:w-1/2 sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 flex items-center"
        >
          <figure>
            <img src="../assets/hgi.png" alt="hgi" />
          </figure>
        </div>
        <div
          class="top-clients w-full xs:w-1/2 sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 flex items-center"
        >
          <figure>
            <img src="../assets/gni.png" alt="gni" />
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Title from './Titleblock'
export default {
  name: 'Clients',
  components: {
    Title
  }
}
</script>

<style>
.top-clients {
  @apply mb-16;
}
.top-clients figure {
  @apply max-w-quarter mx-auto;
  max-height: 150px;
}
.top-clients figure img {
  @apply block w-full h-full;
}
</style>
