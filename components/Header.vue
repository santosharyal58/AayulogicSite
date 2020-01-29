<template>
  <div id="home" class="header fixed w-full z-30 py-8">
    <div class="container w-full">
      <div class="navbar-brand max-w-fifteen">
        <img src="../assets/aayulogic-main.svg" alt="aayulogic" />
      </div>
      <button class="toggleBtn cursor-pointer" @click="isOpen = !isOpen">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="bars"
          class="svg-inline--fa fa-bars fa-w-14"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            fill="currentColor"
            d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
          ></path>
        </svg>
      </button>
      <nav class="header-nav">
        <ul
          :class="isOpen ? 'block' : 'hidden'"
          class="navmenu text-black flex flex-wrap"
        >
          <li><a href="#home">Home</a></li>
          <li><a href="#aboutus">About Us</a></li>
          <li><a href="#features">Services</a></li>
          <li><a href="#clients">Clients</a></li>
          <li><a href="#product">Product</a></li>
          <li><a href="#contactus">Contact Us</a></li>
          <li><a href="#career">Career</a></li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
// for sticky header

// end
export default {
  name: 'Header',
  data() {
    return {
      isOpen: true
    }
  },
  mounted() {
    window.onscroll = () => {
      const header = document.querySelector('#home')
      if (this.scrollY <= 100) header.className = ''
      else header.classList.add('scrolled')
    }
  }
}
</script>

<style>
.header {
  transition: all 0.4s ease-in-out;
}
.header .container {
  /* margin: 0 auto;
  max-width: 1140px; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  flex-wrap: wrap;
}
.scrolled {
  @apply bg-white;
}
.scrolled .navbar-brand svg {
  @apply text-activecolor;
}
.scrolled .navmenu li a {
  @apply text-titlecolor;
}
.navmenu li {
  @apply ml-4;
}
.navmenu li a {
  @apply inline-block text-1.6 text-white;
  font-family: 'Poppins', sans-serif;
}
.navbar-brand img {
  @apply block w-full;
}
.toggleBtn {
  @apply w-12 h-12;
}
@media (max-width: 63.9rem) {
  .container {
    @apply px-4 w-full;
  }
  .header-nav {
    @apply w-full relative z-10;
  }
  .header-nav ul li {
    @apply w-full bg-activecolor text-white py-4;
  }
  .header-nav ul {
    @apply absolute inset-0;
  }
  .header-nav ul li a {
    @apply text-white text-4xl;
  }
  h1 {
    @apply text-5xl;
  }
}
</style>
