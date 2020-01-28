<template>
  <div id="features" class="features-section bg-gray-bgg py-40">
    <Title titletext="What We Do"></Title>
    <div class="container">
      <div class="row flex flex-wrap">
        <div
          v-for="(item, index) in features"
          :key="index"
          class="feature w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 mb-12 px-6"
        >
          <SingleFeature
            :icon="item.icon"
            :title="item.title"
            :content="item.content"
          ></SingleFeature>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Title from './Titleblock'
import SingleFeature from './SingleFeature'
import {
  uniCommentAltPlus,
  uniChartPieAlt,
  uniChartLine,
  uniGlobe,
  uniMobileAndroid,
  uniPalette,
  uniDocumentLayoutLeft,
  uniShoppingTrolley,
  uniApps,
  uniServerConnection
} from '@/icons'
export default {
  icons: {
    uniCommentAltPlus,
    uniChartPieAlt,
    uniChartLine,
    uniGlobe,
    uniMobileAndroid,
    uniPalette,
    uniDocumentLayoutLeft,
    uniShoppingTrolley,
    uniApps,
    uniServerConnection
  },
  name: 'Features',
  components: {
    Title,
    SingleFeature
  },
  data() {
    return {
      features: [
        {
          icon: this.$options.icons.uniChartPieAlt,
          title: 'Business Applications',
          content:
            'Awesome user experience and analytical overview of your business data to make excellent decisions.'
        },
        {
          icon: this.$options.icons.uniChartLine,
          title: 'Enterprise Solutions',
          content:
            'Build customized CMS and dashboard applications tailored to fit your business.'
        },
        {
          icon: this.$options.icons.uniGlobe,
          title: 'Web Applications',
          content:
            'We enjoy working with Python, PHP, Node.js, on the back-end and AngularJS, jQuery, HTML5 on the front-end.'
        },
        {
          icon: this.$options.icons.uniMobileAndroid,
          title: 'Mobile Applications',
          content:
            'Build customized Development of both native and hybrid apps for iOS, and Android with intuitive and easy-to-use UI/UX. and dashboard applications tailored to fit your business.'
        },
        {
          icon: this.$options.icons.uniPalette,
          title: 'UI/UX',
          content:
            'We believe in creating seamless user experience and visually appealing user interface.'
        },
        {
          icon: this.$options.icons.uniDocumentLayoutLeft,
          title: 'CMS',
          content:
            'Build customized CMS Including, but not limited to Wordpress, Drupal,Joomla and custom solutions for special requirements. dashboard applications tailored to fit your business.'
        },
        {
          icon: this.$options.icons.uniShoppingTrolley,
          title: 'E-Commerce',
          content:
            "Magento, X-Cart, Opencart, Shopify and custom e-commerce sotware. You focus on sale, we'll take care of the technology."
        },
        {
          icon: this.$options.icons.uniApps,
          title: 'Management Systems',
          content:
            'HRIS, Attendance, Payroll, CRM.Analytical data at your fingertips to help you make the best decision.'
        },
        {
          icon: this.$options.icons.uniServerConnection,
          title: 'Web Hosting',
          content:
            'Cloud hosting, dedicated VPS hosting, container hosting, shared hosting etc.'
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
