<template>
  <div class="feature-wrap">
    <figure>
      <IconBase :path="icon"></IconBase>
    </figure>
    <div class="feature-text">
      <h3>{{ title }}</h3>
      <p>
        {{ content }}
      </p>
    </div>
  </div>
</template>

<script>
import IconBase from '~/components/IconBase'
export default {
  name: 'SingleFeature',
  props: {
    icon: {
      type: String,
      default: 'xyz'
    },
    title: {
      type: String,
      default: 'xyz'
    },
    content: {
      type: String,
      default: 'xyz'
    }
  },
  components: {
    IconBase
  }
}
</script>

<style>
.feature-wrap figure svg {
  width: 36px;
  height: 36px;
  @apply text-activecolor;
}
</style>
