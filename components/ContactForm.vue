<template>
  <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1-2 mb-12 px-6">
    <h4>Drop us a Line</h4>
    <form class="bg-white px-8 pt-6 pb-8 mb-4 max-w-half">
      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="username">
          Username
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-6 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Username"
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="email">
          Email
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-6 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="email"
          placeholder="Email"
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="email">
          Phone
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-6 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="number"
          placeholder="Phone Number"
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="email">
          Phone
        </label>
        <textarea
          class="shadow appearance-none border rounded w-full py-6 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          name=""
          cols="30"
          rows="10"
        ></textarea>
      </div>
      <div class="flex items-center justify-between">
        <button
          class="bg-green-500 hover:bg-green-600 text-white font-bold py-4 text-2xl px-6 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Sign In
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
</style>
