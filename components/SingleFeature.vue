<template>
  <div class="feature-wrap">
    <figure>
      <img src="../assets/globe.png" alt="what we do" />
    </figure>
    <div class="feature-text">
      <h3>{{ fprop.title }}</h3>
      <p>
        {{ fprop.content }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SingleFeature',
  props: {
    fprop: String
  }
}
</script>

<style></style>
