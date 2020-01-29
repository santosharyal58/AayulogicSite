<template>
  <div class="feature-wrap">
    <figure>
      <IconBase classProp="w-full h-full" :path="icon"></IconBase>
    </figure>
    <div class="feature-text ">
      <h3 class="xs:text-3xl text-textcolor font-medium mb-2">{{ title }}</h3>
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
.feature-wrap:hover h3,
.feature-wrap:hover figure svg {
  @apply text-activecolor;
}
.feature-wrap figure {
  @apply text-titlecolor max-w-4r w-full h-full;
}
.feature-wrap figure svg {
  @apply w-full h-full w-full object-cover;
}
</style>
