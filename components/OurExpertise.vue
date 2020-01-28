<template>
  <div class="our-expertise py-40">
    <h2 class="text-center text-titlecolor mb-20">Our Expertise</h2>
    <div class="container">
      <div class="row tech-row tech-rowup flex flex-wrap">
        <div
          class="tech-block  w-full sm:w-1/5 md:w-1/5 lg:w-1/5 xl:w-1/5 px-6"
        >
          <figure class="technology">
            <img src="../assets/python.svg" alt="python" />
          </figure>
        </div>
        <div class="tech-block w-full sm:w-1/5 md:w-1/5 lg:w-1/5 xl:w-1/5 px-6">
          <figure class="technology">
            <img src="../assets/javascript.svg" alt="js" />
          </figure>
        </div>
        <div class="tech-block w-full sm:w-1/5 md:w-1/5 lg:w-1/5 xl:w-1/5 px-6">
          <figure class="technology">
            <img src="../assets/r.svg" alt="R" />
          </figure>
        </div>
        <div class="tech-block w-full sm:w-1/5 md:w-1/5 lg:w-1/5 xl:w-1/5 px-6">
          <figure class="technology">
            <img src="../assets/Ansible.svg" alt="ansible" />
          </figure>
        </div>
        <div class="tech-block w-full sm:w-1/5 md:w-1/5 lg:w-1/5 xl:w-1/5 px-6">
          <figure class="technology">
            <img src="../assets/postgre.svg" alt="postgres" />
          </figure>
        </div>
      </div>
      <div class="row tech-row tech-rowdown flex flex-wrap">
        <div class="tech-block w-full sm:w-1/5 md:w-1/5 lg:w-1/5 xl:w-1/5 px-6">
          <figure class="technology">
            <img src="../assets/flutter.svg" alt="flutter" />
          </figure>
        </div>
        <div class="tech-block w-full sm:w-1/5 md:w-1/5 lg:w-1/5 xl:w-1/5 px-6">
          <figure class="technology">
            <img src="../assets/redis.svg" alt="redis" />
          </figure>
        </div>
        <div class="tech-block w-full sm:w-1/5 md:w-1/5 lg:w-1/5 xl:w-1/5 px-6">
          <figure class="technology">
            <img src="../assets/aws.svg" alt="aws" />
          </figure>
        </div>
        <div class="tech-block w-full sm:w-1/5 md:w-1/5 lg:w-1/5 xl:w-1/5 px-6">
          <figure class="technology">
            <img src="../assets/docker.svg" alt="docker" />
          </figure>
        </div>
        <div class="tech-block w-full sm:w-1/5 md:w-1/5 lg:w-1/5 xl:w-1/5 px-6">
          <figure class="technology">
            <img src="../assets/figma.svg" alt="figma" />
            <!-- <IconBase :path="$options.icons.uniCommentPlus"></IconBase> -->
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { uniCommentPlus } from '@/icons'
// import IconBase from '~/components/IconBase'
export default {
  //   icons: {
  //     uniCommentPlus
  //   },
  name: 'OurExpertise'
}
</script>

<style>
.technology {
  min-height: 100px;
  display: flex;
  align-items: center;
}
.technology img {
  display: block;
  width: 5rem;
  height: 5rem;
  margin: 0 auto;
}
.tech-block {
  /* border-bottom: 1px solid #000; */
  border-right: 1px solid #dbdee5;
}
.tech-row > div:last-child {
  border: none;
}
.tech-rowup {
  border-bottom: 1px solid #dbdee5;
}
</style>
