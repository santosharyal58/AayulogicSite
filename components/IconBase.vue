<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :class="classProp"
    viewBox="0 0 22 22"
    :aria-labelledby="iconName"
    role="presentation"
  >
    <title :id="iconName" lang="en">{{ iconName }}</title>
    <g :fill="iconColor" v-html="path"></g>
  </svg>
</template>
<script>
export default {
  props: {
    iconName: {
      type: String,
      default: ''
    },
    classProp: {
      type: String,
      default: 'w-full'
    },
    iconColor: {
      type: String,
      default: 'currentColor'
    },
    path: {
      type: String,
      default: ''
    }
  }
}
</script>
<style scoped>
/* svg {
 display: inline-block;
 vertical-align: baseline;
 margin-bottom: 2px;
} */
</style>
