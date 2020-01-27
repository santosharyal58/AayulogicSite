<template>
  <div id="features" class="features-section bg-gray-bgg py-40">
    <Title titletext="What We Do"></Title>
    <div class="container">
      <div class="row flex flex-wrap">
        <div
          class="feature w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 mb-12 px-6"
          v-for="item in features"
          :key="item.id"
        >
          <SingleFeature :fprop="item"></SingleFeature>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Title from './Titleblock'
import SingleFeature from './SingleFeature'
export default {
  name: 'Features',
  components: {
    Title,
    SingleFeature
  },
  data() {
    return {
      features: [
        {
          id: 1,
          title: 'Business Applications',
          content:
            'Awesome user experience and analytical overview of your business data to make excellent decisions.'
        },
        {
          id: 2,
          title: 'Enterprise Solutions',
          content:
            'Build customized CMS and dashboard applications tailored to fit your business.'
        },
        {
          id: 3,
          title: 'Enterprise Solutions',
          content:
            'Build customized CMS and dashboard applications tailored to fit your business.'
        },
        {
          id: 4,
          title: 'Enterprise Solutions',
          content:
            'Build customized CMS and dashboard applications tailored to fit your business.'
        },
        {
          id: 5,
          title: 'Enterprise Solutions',
          content:
            'Build customized CMS and dashboard applications tailored to fit your business.'
        },
        {
          id: 6,
          title: 'Enterprise Solutions',
          content:
            'Build customized CMS and dashboard applications tailored to fit your business.'
        },
        {
          id: 7,
          title: 'Enterprise Solutions',
          content:
            'Build customized CMS and dashboard applications tailored to fit your business.'
        },
        {
          id: 8,
          title: 'Enterprise Solutions',
          content:
            'Build customized CMS and dashboard applications tailored to fit your business.'
        },
        {
          id: 9,
          title: 'Enterprise Solutions',
          content:
            'Build customized CMS and dashboard applications tailored to fit your business.'
        }
      ]
    }
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
