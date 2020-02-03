<template>
  <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1-2 mb-12 px-6">
    <h4>Drop us a Line</h4>
    <form
      action="https://formspree.io/mqkpnrda"
      method="POST"
      class="bg-white pt-6 pb-8 mb-4 max-w-half"
    >
      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="username">
          Full Name
        </label>
        <input
          class="appearance-none border rounded w-full py-6 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name="name"
          placeholder="Full Name"
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="email">
          Email
        </label>
        <input
          class="appearance-none border rounded w-full py-6 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="email"
          name="replyto"
          placeholder="Email"
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="email">
          Phone Number
        </label>
        <input
          class="appearance-none border rounded w-full py-6 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="tel"
          name="contactno"
          placeholder="Phone Number"
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="email">
          Message
        </label>
        <textarea
          class="appearance-none border rounded w-full py-6 px-3 leading-tight focus:outline-none focus:shadow-outline"
          name="message"
          placeholder="Message"
          cols="30"
          rows="10"
        ></textarea>
      </div>
      <div class="flex items-center justify-between">
        <button
          class="bg-activecolor text-white py-4 text-2xl px-6 hover:bg-blue-700 focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Send Now
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ContactForm'
}
</script>

<style>
label {
  @apply text-2xl;
}
input,
textarea {
  @apply text-2xl;
}
</style>
