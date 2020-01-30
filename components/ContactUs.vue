<template>
  <div id="contactus" class="contact-us">
    <div class="contact-bottom">
      <div class="contact-title">
        <Title titletext="Contact Us"></Title>
      </div>
      <div class="container flex flex-wrap">
        <ContactForm></ContactForm>
        <div
          class="address-part w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1-2 mb-12 px-6"
        >
          <h4>Visit Us</h4>
          <div
            itemscope
            itemtype="http://schema.org/Organization"
            class="location-details mt-5"
          >
            <h3 itemprop="name">Aayulogic Pvt. Ltd.</h3>
            <div
              itemprop="address"
              itemscope
              itemtype="http://schema.org/PostalAddress"
              class="text-textcolor text-2xl"
            >
              <span itemprop="streetAddress"
                >4th Floor, Ganapati Bhawan, Min Bhawan Main Road,</span
              ><br />
              <span>P.O. Box: 13845,</span>
              <span itemprop="addressLocality"
                >New Baneshwor, Kathmandu, Nepal</span
              ><br />
              <span itemprop="telephone"
                >Phone:
                <a href="tel:014106706">+977-1-4106706, 4106708</a></span
              ><br />
              <span itemprop="email"
                >Email:
                <a href="mailto:info@aayulogic.com">info@aayulogic.com</a></span
              >
            </div>
            <div class="mapwrapper mt-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.9930743107807!2d85.33963765015291!3d27.68660893292651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1993b3b115f1%3A0x8c29359972012a2b!2sReal%20Solutions%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1579861922203!5m2!1sen!2snp"
                width="100%"
                height="300"
                frameborder="0"
                style="border:0;"
                allowfullscreen=""
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Title from './Titleblock'
import ContactForm from './ContactForm'
export default {
  name: 'Contact',
  components: {
    Title,
    ContactForm
  }
}
</script>

<style>
.contact-toppart .section-title h2 {
  @apply text-white;
}
</style>
