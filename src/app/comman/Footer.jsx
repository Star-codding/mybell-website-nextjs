import React from 'react'

export default function Footer() {
  return (
    <>
      <footer
        className="mx-auto w-full max-w-[1200px] justify-between pb-10 flex flex-col lg:flex-row"
      >
        <div className="ml-5">
          <img
            className="mt-10 mb-5"
            src="https://tailwind-ecommerce-demo.vercel.app/company-logo.4e8f774b.svg"
            alt="company logo"
          />
          <p className="pl-0">
            Lorem ipsum dolor sit amet consectetur <br />
            adipisicing elit.
          </p>
          <div className="mt-10 flex gap-3">
            <a href="">
              <img
                className="h-5 w-5 cursor-pointer"
                src="https://tailwind-ecommerce-demo.vercel.app/github.a6fc909a.svg"
                alt="github icon"
              />
            </a>
            <a href="https://t.me/b_bulakh">
              <img
                className="h-5 w-5 cursor-pointer"
                src="https://tailwind-ecommerce-demo.vercel.app/telegram.8c11bb1d.svg"
                alt="telegram icon"
              />
            </a>
            <a href="https://www.linkedin.com/in/bogdan-bulakh-393284190/">
              <img
                className="h-5 w-5 cursor-pointer"
                src="https://tailwind-ecommerce-demo.vercel.app/linkedin.48c56177.svg"
                alt="twitter icon"
              />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="mx-5 mt-10">
            <p className="font-medium text-gray-500">FEATURES</p>
            <ul className="text-sm leading-8">
              <li><a href="#">Marketing</a></li>
              <li><a href="#">Commerce</a></li>
              <li><a href="#">Analytics</a></li>
              <li><a href="#">Merchendise</a></li>
            </ul>
          </div>

          <div className="mx-5 mt-10">
            <p className="font-medium text-gray-500">SUPPORT</p>
            <ul className="text-sm leading-8">
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Docs</a></li>
              <li><a href="#">Audition</a></li>
              <li><a href="#">Art Status</a></li>
            </ul>
          </div>

          <div className="mx-5 mt-10">
            <p className="font-medium text-gray-500">DOCUMENTS</p>
            <ul className="text-sm leading-8">
              <li><a href="#">Terms</a></li>
              <li><a href="#">Conditions</a></li>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">License</a></li>
            </ul>
          </div>

          <div className="mx-5 mt-10">
            <p className="font-medium text-gray-500">DELIVERY</p>
            <ul className="text-sm leading-8">
              <li><a href="#">List of countries</a></li>
              <li><a href="#">Special information</a></li>
              <li><a href="#">Restrictions</a></li>
              <li><a href="#">Payment</a></li>
            </ul>
          </div>
        </div>
      </footer>


      <section className="h-11 bg-amber-400">
        <div
          className="mx-auto flex max-w-[1200px] items-center justify-between px-4 pt-2"
        >
          <p>&copy; Bogdan Bulakh, 2023</p>
          <div className="flex items-center space-x-3">
            <img
              className="h-8"
              src="https://cdn-icons-png.flaticon.com/512/5968/5968299.png"
              alt="Visa icon"
            />
            <img
              className="h-8"
              src="https://cdn-icons-png.flaticon.com/512/349/349228.png"
              alt="AE icon"
            />
            <img
              className="h-8"
              src="https://cdn-icons-png.flaticon.com/512/5968/5968144.png"
              alt="Apple pay icon"
            />
          </div>
        </div>
      </section>
    </>
  )
}
