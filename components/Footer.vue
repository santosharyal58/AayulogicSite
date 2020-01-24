<template>
  <div class="footer bg-footercolor py-40">
    <ul class="social-list flex justify-center">
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
    <p class="text-white text-center mt-4">
      © 2020 <span class="text-activecolor">aayulogic Pvt. Ltd.</span>, All
      Rights Reserved.
    </p>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style>
.social-list li {
  @apply w-16 h-16 bg-activecolor mr-4 p-4 rounded-full;
}
.social-list li a {
  @apply w-full h-full;
}
.footer-icon {
  @apply block w-full h-full;
}
</style>
