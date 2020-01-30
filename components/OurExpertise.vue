<template>
  <div class="our-expertise pt-40 pb-20 xs:pt-20">
    <h2 class="text-center text-titlecolor md:text-5xl sm:text-4xl mb-20">
      Our Expertise
    </h2>
    <div class="container">
      <div class="row tech-row tech-rowup flex flex-wrap">
        <div
          class="tech-block xs:w-1/2 sm:w-1/5 md:w-1/5 lg:w-1/5 xl:w-1/5 px-6"
        >
          <figure class="technology">
            <img src="../assets/python.svg" alt="python" />
          </figure>
        </div>
        <div
          class="tech-block xs:w-1/2 sm:w-1/5 md:w-1/5 lg:w-1/5 xl:w-1/5 px-6"
        >
          <figure class="technology">
            <img src="../assets/javascript.svg" alt="js" />
          </figure>
        </div>
        <div
          class="tech-block xs:w-1/2 sm:w-1/5 md:w-1/5 lg:w-1/5 xl:w-1/5 px-6"
        >
          <figure class="technology">
            <img src="../assets/r.svg" alt="R" />
          </figure>
        </div>
        <div
          class="tech-block xs:w-1/2 sm:w-1/5 md:w-1/5 lg:w-1/5 xl:w-1/5 px-6"
        >
          <figure class="technology">
            <img src="../assets/Ansible.svg" alt="ansible" />
          </figure>
        </div>
        <div
          class="tech-block xs:w-1/2 sm:w-1/5 md:w-1/5 lg:w-1/5 xl:w-1/5 px-6"
        >
          <figure class="technology">
            <img src="../assets/postgre.svg" alt="postgres" />
          </figure>
        </div>
        <!-- </div> -->
        <!-- <div class="row tech-row tech-rowdown flex flex-wrap"> -->
        <div
          class="tech-block xs:w-1/2 sm:w-1/5 md:w-1/5 lg:w-1/5 xl:w-1/5 px-6"
        >
          <figure class="technology">
            <img src="../assets/flutter.svg" alt="flutter" />
          </figure>
        </div>
        <div
          class="tech-block xs:w-1/2 sm:w-1/5 md:w-1/5 lg:w-1/5 xl:w-1/5 px-6"
        >
          <figure class="technology">
            <img src="../assets/redis.svg" alt="redis" />
          </figure>
        </div>
        <div
          class="tech-block xs:w-1/2 sm:w-1/5 md:w-1/5 lg:w-1/5 xl:w-1/5 px-6"
        >
          <figure class="technology">
            <img src="../assets/aws.svg" alt="aws" />
          </figure>
        </div>
        <div
          class="tech-block w-full xs:w-1/2 sm:w-1/5 md:w-1/5 lg:w-1/5 xl:w-1/5 px-6"
        >
          <figure class="technology">
            <img src="../assets/docker.svg" alt="docker" />
          </figure>
        </div>
        <div
          class="tech-block w-full xs:w-1/2 sm:w-1/5 md:w-1/5 lg:w-1/5 xl:w-1/5 px-6"
        >
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
export default {
  name: 'OurExpertise'
}
</script>

<style>
.technology {
  min-height: 100px;
  @apply flex items-center;
}
.technology img {
  filter: grayscale(100%);
  @apply block w-20 h-20 mx-auto;
}
.tech-block:hover .technology img {
  filter: none;
}
.tech-block {
  border-right: 1px solid #dbdee5;
}
/* .tech-row > div:last-child {
  border: none;
}
.tech-rowup {
  border-bottom: 1px solid #dbdee5;
} */
.tech-row > div:first-child,
.tech-row > div:nth-child(2),
.tech-row > div:nth-child(3),
.tech-row > div:nth-child(4),
.tech-row > div:nth-child(5) {
  border-bottom: 1px solid #dbdee5;
}
.tech-row > div:nth-child(5),
.tech-row > div:last-child {
  border-right: none;
}

@media (max-width: 639px) {
  .tech-row > div {
    border-bottom: 0 !important;
  }
  .tech-block {
    @apply border-0;
  }
}
</style>
