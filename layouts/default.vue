<template>
  <div>
    <Header></Header>
    <nuxt />
    <Footer></Footer>
  </div>
</template>
<script>
import Header from '~/components/Header'
import Footer from '~/components/Footer'

export default {
  components: {
    Header,
    Footer
  }
}
</script>
<style>
html {
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
  @apply font-sans overflow-x-hidden;
}
h2 {
  @apply relative;
}
h2:before {
  @apply absolute bg-activecolor block;
  content: '';
  left: 50%;
  transform: translateX(-50%);
  bottom: -2rem;
  width: 50%;
  height: 1px;
}
h4 {
  @apply text-5xl;
}
p {
  @apply text-1.6;
}
input::placeholder,
textarea::placeholder {
  @apply text-gray-600 text-2xl;
}
.container {
  @apply mx-auto;
}
/* featured proj animation */
.feature {
  transition: all 0.5s ease-in-out;
}
.feature:hover {
  transform: scale(1.1);
}
.featured-project-r:hover,
.scrolled {
  animation-name: example-right;
  animation-duration: 0.4s;
  animation-iteration-count: 1;
}
@keyframes example-right {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-80px);
  }
  100% {
    transform: translateY(0px);
  }
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
  .copyright p {
    text-align: center;
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
  .aboutus-img::before {
    width: 0 !important;
  }
  .aboutus-text p {
    @apply pr-0 text-left text-2xl;
  }
  /* footer */
  .footer-brand figure {
    @apply mx-auto mb-8;
  }
  .product-btn {
    @apply mx-auto;
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
