<template>
  <div class="slider-wrapper">
    <hooper :settings="hooperSettings">
      <slide>
        <div class="banner-image w-full h-full">
          <img src="../assets/banner_3.jpg" alt="aayulogic" />
        </div>
      </slide>
      <slide>
        <div class="banner-image w-full h-full">
          <img src="../assets/banner_4.jpg" alt="aayulogic" />
        </div>
      </slide>
      <slide>
        <div class="banner-image w-full h-full">
          <img src="../assets/banner_5.jpg" alt="aayulogic" />
        </div>
      </slide>
      <hooper-pagination slot="hooper-addons"></hooper-pagination>
    </hooper>
  </div>
</template>

<script>
import { Hooper, Slide } from 'hooper'
import 'hooper/dist/hooper.css'
import { Pagination as HooperPagination } from 'hooper'
export default {
  name: 'Slider',
  components: {
    Hooper,
    Slide,
    HooperPagination
  },
  data() {
    return {
      hooperSettings: {
        infiniteScroll: true,
        centerMode: true,
        // autoPlay: true,
        playSpeed: 3500,
        breakpoints: {
          2400: {
            itemsToShow: 1
          },
          1800: {
            itemsToShow: 1
          },
          1500: {
            itemsToShow: 1
          },
          1100: {
            itemsToShow: 1
          }
        }
      }
    }
  }
}
</script>

<style>
.hooper {
  height: auto;
}
.hooper-list {
  @apply pt-32;
}
</style>
