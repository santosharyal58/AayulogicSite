<template>
  <div>
    <Header></Header>
    <nuxt />
    <!-- <Popup></Popup> -->
    <Footer></Footer>
  </div>
</template>
<script>
import Header from '~/components/Header'
import Footer from '~/components/Footer'
// import Popup from '~/components/Popup'

export default {
  components: {
    Header,
    Footer
    // Popup
  }
}
</script>
<style>
html {
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  scroll-behavior: smooth;
  box-sizing: border-box;
  font-size: 10px;
  overflow-x: hidden;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: 'Poppins', sans-serif;
  overflow-x: hidden;
}
h3 {
  font-size: 1.8rem;
}
h4 {
  font-size: 3.2rem;
  font-weight: 300;
}
p {
  @apply text-1.6;
}
input::placeholder,
textarea::placeholder {
  @apply text-gray-600 text-xl;
}
.container {
  @apply mx-auto;
}
@media (min-width: 1024px) {
  .toggleBtn {
    @apply hidden;
  }
}
@media (max-width: 991px) {
  .footer .container {
    @apply flex-col justify-center;
  }
  .footer-brand figure img {
    @apply mx-auto mb-8;
  }
  .linkslist {
    @apply flex-wrap justify-center mb-8;
  }
  .social-list {
    @apply justify-center;
  }
}
@media (max-width: 639px) {
  /* banner */
  .content-wrap h1,
  .product-developed {
    @apply text-center;
  }
  h2 {
    @apply text-3xl relative;
  }
  h2::before {
    @apply absolute;
    content: '';
  }
  /* about us */
  .aboutus-text h4 {
    @apply pr-0 text-3xl text-left mb-2;
    padding-left: 0 !important;
  }
  .aboutus-text p {
    @apply pr-0 text-left text-2xl;
  }
  /* footer */
  .footer-brand figure {
    @apply mx-auto mb-8;
  }

  /* what we do */
  .feature-text p {
    @apply text-2xl;
  }
  /* career */
  .joinus-banner h4 {
    @apply text-2xl;
  }
  /* contact us */
  .contact-bottom h4 {
    @apply text-4xl;
  }
  /* popup */
  .popup_wrap {
    @apply top-25;
  }
}
</style>
