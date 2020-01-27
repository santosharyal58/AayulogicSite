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
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  scroll-behavior: smooth;
  box-sizing: border-box;
  font-size: 10px;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
body {
  font-family: 'Poppins', sans-serif;
}
h2 {
  font-size: 4.2rem;
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
input::placeholder {
  @apply text-titlecolor text-2xl;
}
.container {
  @apply mx-auto;
}
@media (min-width: 1024px) {
  .toggleBtn {
    display: none;
  }
}
</style>
