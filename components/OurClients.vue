<template>
  <div class="top-clients py-40">
    <Title titletext="Top Clients"></Title>
    <div class="clients-wrap">
      <div class="row">
        <div
          class="feature w-full sm:w-full md:w-full lg:w-full xl:w-full mb-12 px-6"
        >
          <img src="../assets/clients.png" alt="aayulogic clients" />
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

<style></style>
