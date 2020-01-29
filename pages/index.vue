<template>
  <div class="page-wrapper">
    <Herobanner></Herobanner>
    <About></About>
    <Features></Features>
    <OurExpertise></OurExpertise>
    <Clients></Clients>
    <RecentProject></RecentProject>
    <CareerSection></CareerSection>
    <Contact></Contact>
  </div>
</template>

<script>
import Herobanner from '~/components/Herobanner'
import About from '~/components/Aboutus'
import Features from '~/components/Features'
import Clients from '~/components/OurClients'
import RecentProject from '~/components/RecentProjects'
import Contact from '~/components/ContactUs'
import CareerSection from '~/components/CareerSection'
import OurExpertise from '~/components/OurExpertise'
export default {
  components: {
    Herobanner,
    About,
    Features,
    Clients,
    RecentProject,
    Contact,
    CareerSection,
    OurExpertise
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
