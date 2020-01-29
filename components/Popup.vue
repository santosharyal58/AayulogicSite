<template>
  <div class="popup_box p-8">
    <div class="popup_wrap">
      <button class="close">X</button>
      <div class="popup_content">
        <h2 class="text-4xl text-center mb-8">About Working Here</h2>
        <p class="text-2xl mb-8">
          We like to find solutions to hard problems. We like a world where the
          good guys win. We are looking for creative, collaborative, passionate
          people interested in making enterprise network security better.
        </p>
        <div class="row flex flex-wrap">
          <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4">
            <div class="benefit-block">
              <figure>
                <img src="../assets/icon1.png" alt="benefits" />
              </figure>
              <h5>WORKING CULTURE</h5>
              <p>
                We believe that productivity is a result of work mixed with the
                love for the work.
              </p>
            </div>
          </div>
          <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4">
            <div class="benefit-block">
              <figure>
                <img src="../assets/icon2.png" alt="benefits" />
              </figure>
              <h5>WORKING CULTURE</h5>
              <p>
                We believe that productivity is a result of work mixed with the
                love for the work.
              </p>
            </div>
          </div>
          <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4">
            <div class="benefit-block">
              <figure>
                <img src="../assets/icon3.png" alt="benefits" />
              </figure>
              <h5>WORKING CULTURE</h5>
              <p>
                We believe that productivity is a result of work mixed with the
                love for the work.
              </p>
            </div>
          </div>
          <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4">
            <div class="benefit-block">
              <figure>
                <img src="../assets/icon4.png" alt="benefits" />
              </figure>
              <h5>WORKING CULTURE</h5>
              <p>
                We believe that productivity is a result of work mixed with the
                love for the work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Popup'
}
</script>

<style>
.close {
  @apply block bg-activecolor text-white;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  position: absolute;
  top: -10px;
  right: -10px;
}
.popup_box {
  @apply fixed inset-0 flex justify-center items-center;
  background: rgba(0, 0, 0, 0.5);
}
.popup_wrap {
  padding: 2rem;
  max-width: 960px;
  width: 100%;
  background: #ebebeb;
  position: relative;
}
.benefit-block figure {
  width: 70px;
  height: 70px;
  margin: 0 auto;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
}
.benefit-block figure {
  background: #045cb6;
}
.benefit-block p {
  @apply text-xl text-center;
}
.benefit-block h5 {
  @apply text-3xl mb-10 text-center;
}
</style>
