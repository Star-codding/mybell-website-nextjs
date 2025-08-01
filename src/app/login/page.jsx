import React from 'react'

export default function page() {
  return (
    <div>
       <section class="mx-auto flex-grow w-full mt-10 mb-10 max-w-[1200px] px-5">
        <div class="container mx-auto border px-5 py-5 shadow-sm md:w-1/2">
          <div class="">
            <p class="text-4xl font-bold">LOGIN</p>
            <p>Welcome back, customer!</p>
          </div>

          <form class="mt-6 flex flex-col">
            <label for="email">Email Address</label>
            <input
              class="mb-3 mt-3 border px-4 py-2"
              type="email"
              placeholder="youremail@domain.com"
            />

            <label for="email">Password</label>
            <input
              class="mt-3 border px-4 py-2"
              type="password"
              placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
            />
          </form>

          <div class="mt-4 flex justify-between">
            <form class="flex gap-2">
              <input type="checkbox" />
              <label for="checkbox">Remember me</label>
            </form>
            <a href="#" class="text-violet-900">Forgot password</a>
          </div>

          <button class="my-5 w-full bg-violet-900 py-2 text-white">
            LOGIN
          </button>

          <p class="text-center text-gray-500">OR LOGIN WITH</p>

          <div class="my-5 flex gap-2">
            <button class="w-1/2 bg-blue-800 py-2 text-white">FACEBOOK</button>
            <button class="w-1/2 bg-orange-500 py-2 text-white">GOOGLE</button>
          </div>

          <p class="text-center">
            Don`t have account?
            <a href="sign-up.html" class="text-violet-900">Register now</a>
          </p>
        </div>
      </section>
    </div>
  )
}
