<template>
  <div id="features" class="features-section bg-bgsecondary py-40 xs:py-20">
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
            'Awesome user experience and analytical overview of your business data'
        },
        {
          icon: this.$options.icons.uniChartLine,
          title: 'Enterprise Solutions',
          content:
            'Build customized CMS and dashboard applications tailored to fit your business'
        },
        {
          icon: this.$options.icons.uniGlobe,
          title: 'Web Applications',
          content:
            'Python, PHP, Node.js, on the back-end and Vue, Angular, jQuery and HTML5'
        },
        {
          icon: this.$options.icons.uniMobileAndroid,
          title: 'Mobile Applications',
          content:
            'Build customized native and hybrid apps for iOS, and Android'
        },
        {
          icon: this.$options.icons.uniPalette,
          title: 'UI/UX',
          content:
            'Creating seamless user experience and visually appealing user interface'
        },
        {
          icon: this.$options.icons.uniDocumentLayoutLeft,
          title: 'CMS',
          content:
            'Build customized CMS but not limited with WordPress, Drupal and Joomla'
        },
        {
          icon: this.$options.icons.uniShoppingTrolley,
          title: 'E-Commerce',
          content:
            'Magento, X-Cart, OpenCart, Shopify and custom e-commerce software'
        },
        {
          icon: this.$options.icons.uniApps,
          title: 'Management Systems',
          content:
            'HRIS, Attendance, Payroll, CRM, Analytical data at your fingertips'
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
  @apply flex items-start;
}
.feature-text {
  @apply px-6;
}
.feature-text p {
  @apply text-2xl	text-textcolor leading-relaxed;
}
</style>
