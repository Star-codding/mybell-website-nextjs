import React from 'react'

export default function page() {
  return (
    <div>
      <section class="mx-auto mt-10 w-full flex-grow mb-10 max-w-[1200px] px-5">
        <div class="container mx-auto border px-5 py-5 shadow-sm md:w-1/2">
          <div class="">
            <p class="text-4xl font-bold">CREATE AN ACCOUNT</p>
            <p>Register for new customer</p>
          </div>

          <form class="mt-6 flex flex-col">
            <label for="name">Full Name</label>
            <input
              class="mb-3 mt-3 border px-4 py-2"
              type="text"
              placeholder="Bogdan Bulakh"
            />

            <label class="mt-3" for="email">Email Address</label>
            <input
              class="mt-3 border px-4 py-2"
              type="email"
              placeholder="user@mail.com"
            />

            <label class="mt-5" for="email">Password</label>
            <input
              class="mt-3 border px-4 py-2"
              type="password"
              placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
            />

            <label class="mt-5" for="email">Confirm password</label>
            <input
              class="mt-3 border px-4 py-2"
              type="password"
              placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
            />
          </form>

          <div class="mt-4 flex justify-between">
            <form class="flex gap-2">
              <input type="checkbox" />
              <label for="checkbox">
                I have read and agree with
                <a href="#" class="text-violet-900">terms &amp; conditions</a>
              </label>
            </form>
          </div>

          <button class="my-5 w-full bg-violet-900 py-2 text-white">
            CREATE ACCOUNT
          </button>

          <p class="text-center text-gray-500">OR SIGN UP WITH</p>

          <div class="my-5 flex gap-2">
            <button class="w-1/2 bg-blue-800 py-2 text-white">FACEBOOK</button>
            <button class="w-1/2 bg-orange-500 py-2 text-white">GOOGLE</button>
          </div>

          <p class="text-center">
            Already have an account?
            <a href="login.html" class="text-violet-900">Login now</a>
          </p>
        </div>
      </section>
    </div>
  )
}
