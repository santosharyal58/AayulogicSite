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
      <nav class="header-nav" :class="isOpen ? 'show-nav' : 'collapsed-nav'">
        <ul
          class="navmenu text-black flex flex-wrap"
          :class="isOpen ? 'block' : 'hidden'"
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
      isOpen: false
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
.header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  flex-wrap: wrap;
}
.header {
  @apply bg-white;
}
.collapsed-nav .navmenu {
  @apply flex;
}
.navmenu li {
  @apply ml-4;
}
.navmenu li a {
  @apply inline-block text-1.6 text-titlecolor;
  font-family: 'Poppins', sans-serif;
}
.navmenu li a:hover {
  @apply text-activecolor;
}
.navbar-brand img {
  @apply block w-full;
}
.toggleBtn {
  @apply w-8 h-8 -mt-3;
}
.toggleBtn svg {
  @apply text-activecolor;
}
@media (max-width: 63.9rem) {
  .container {
    @apply px-4 w-full;
  }
  .header-nav {
    @apply w-full z-10;
    transition: all 0.4s ease-in-out;
  }
  .header-nav ul li {
    @apply w-full bg-bgsecondary  py-4 m-0;
  }
  .header-nav ul {
    @apply absolute left-0 right-0 w-full h-auto;
    top: 7rem;
  }
  .header-nav ul li a {
    @apply text-titlecolor text-2xl;
  }
  .collapsed-nav .navmenu {
    display: none;
  }
  h1 {
    @apply text-5xl;
  }
  .aboutus-text h4 {
    @apply pl-0;
  }
  .icons-holder a {
    @apply pb-6;
  }
}
</style>
