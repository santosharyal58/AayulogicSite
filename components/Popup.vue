<template>
  <transition name="slide-fade">
    <div class="popup_box p-8">
      <div class="popup_wrap">
        <button class="close hover:bg-blue-700" @click="$emit('close')">
          Close
        </button>
        <div class="popup_content">
          <h2 class="text-4xl text-center mb-8">About Working Here</h2>
          <p class="text-2xl mb-8">
            We like to find solutions to hard problems. We like a world where
            the good guys win. We are looking for creative, collaborative,
            passionate people interested in making enterprise network security
            better.
          </p>
          <div class="row flex flex-wrap">
            <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4">
              <div class="benefit-block">
                <figure>
                  <img src="../assets/icon1.png" alt="benefits" />
                </figure>
                <h5>WORKING CULTURE</h5>
                <p>
                  We believe that productivity is a result of work mixed with
                  the love for the work.
                </p>
              </div>
            </div>
            <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4">
              <div class="benefit-block">
                <figure>
                  <img src="../assets/icon2.png" alt="benefits" />
                </figure>
                <h5>BENEFIT PACKAGES</h5>
                <p>
                  We treasure our employees and value their contribution in the
                  achievement of overall company objectives.
                </p>
              </div>
            </div>
            <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4">
              <div class="benefit-block">
                <figure>
                  <img src="../assets/icon3.png" alt="benefits" />
                </figure>
                <h5>HEALTH BENEFITS</h5>
                <p>
                  We treasure our employees and value their contribution in the
                  achievement of overall company objectives.
                </p>
              </div>
            </div>
            <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4">
              <div class="benefit-block">
                <figure>
                  <img src="../assets/icon4.png" alt="benefits" />
                </figure>
                <h5>REWARDS & RECOGNITION</h5>
                <p>
                  Each employee contributes to the strengthening & progress of
                  the organization and deserves to be rewarded.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Popup'
}
</script>

<style>
.close {
  @apply block absolute top-0 right-0 bg-activecolor text-white text-2xl p-2;
}
.popup_box {
  @apply fixed inset-0 flex justify-center items-center overflow-auto z-30;
  background: rgba(0, 0, 0, 0.5);
}
.popup_wrap {
  @apply relative w-full bg-bgsecondary px-8 py-16 rounded-lg;
  max-width: 960px;
}
.benefit-block figure {
  @apply bg-activecolor mx-auto mb-8 flex justify-center items-center;
  width: 70px;
  height: 70px;
  border-radius: 50%;
}
.benefit-block figure img {
  @apply max-w-3r;
}
.benefit-block p {
  @apply text-xl text-center;
}
.benefit-block h5 {
  @apply text-2xl mb-10 text-center;
}
.slide-fade-enter-active {
  transition: all 0.6s ease;
}
.slide-fade-leave-active {
  transition: all 0.6s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(500px);
  opacity: 0;
}
</style>
