<template>
  <div class="header py-8">
    <div class="container">
      <div class="navbar-brand max-w-quarter">
        <img src="../assets/logo.png" alt="aayulogic" />
      </div>
      <nav>
        <ul class="navmenu text-black flex flex-wrap">
          <li><a href="">Home</a></li>
          <li><a href="">About Us</a></li>
          <li><a href="">Services</a></li>
          <li><a href="">Clients</a></li>
          <li><a href="">Product</a></li>
          <li><a href="">Contact Us</a></li>
          <li><a href="">Career</a></li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style>
.header .container {
  /* margin: 0 auto;
  max-width: 1140px; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
}
.navmenu li {
  @apply ml-4;
}
.navmenu li a {
  @apply inline-block text-1.6 text-textcolor;
  font-family: 'Montserrat', sans-serif;
}
.navbar-brand img {
  @apply block w-full;
}
</style>
