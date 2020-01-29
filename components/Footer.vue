<template>
  <div id="footer" class="footer bg-newfooter py-20">
    <div class="container flex flex-wrap items-center">
      <div class="footer-brand w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4">
        <figure>
          <img src="../assets/aayulogic.svg" alt="aayulogic" />
        </figure>
      </div>
      <div class="footer-links w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2">
        <ul class="linkslist flex">
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Client</a></li>
          <li><a href="#">Product</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Career</a></li>
        </ul>
      </div>
      <ul
        class="social-list w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 flex justify-center "
      >
        <li>
          <a href=""
            ><img class="footer-icon" src="../assets/facebook.svg" alt=""
          /></a>
        </li>
        <li>
          <a href=""
            ><img class="footer-icon" src="../assets/twitter.svg" alt=""
          /></a>
        </li>
        <li>
          <a href=""
            ><img class="footer-icon" src="../assets/pintrest.svg" alt=""
          /></a>
        </li>
      </ul>
    </div>
    <div class="copyright mt-12 w-full">
      <p>&copy; 2020 aayulogic Pvt. Ltd., All Rights Reserved.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style>
.social-list li {
  @apply w-12 h-12 bg-activecolor mr-4 p-2 rounded-full;
}
.social-list li a {
  @apply w-full h-full;
}
.footer-icon {
  @apply block w-full h-full;
}
.linkslist li {
  @apply ml-8;
}
.linkslist li a {
  @apply inline-block capitalize text-white text-2xl;
}
.footer-brand figure {
  @apply max-w-fifteen;
}
.footer-brand figure img {
  @block w-full h-full;
}
.copyright {
  @apply text-white;
}
.copyright p {
  @apply text-center;
}
</style>
