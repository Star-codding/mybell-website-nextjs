import React from 'react'

export default function page() {
    return (
        <>
            <section
                x-show="desktopMenuOpen"
                //   @click.outside="desktopMenuOpen = false"
                class="absolute left-0 right-0 z-10 w-full border-b border-r border-l bg-white hidden"
            // style="display: none"
            >
                <div class="mx-auto flex max-w-[1200px] py-10">
                    <div class="w-[300px] border-r">
                        <ul class="px-5">
                            <li
                                class="active:blue-900 flex items-center gap-2 bg-amber-400 py-2 px-3 active:bg-amber-400"
                            >
                                <img
                                    width="15px"
                                    height="15px"
                                    src="./assets/images/bed.svg"
                                    alt="Bedroom icon"
                                />
                                Bedroom
                                <span class="ml-auto"
                                ><svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="h-4 w-4"
                                >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                        />
                                    </svg>
                                </span>
                            </li>

                            <li
                                class="active:blue-900 flex items-center gap-2 py-2 px-3 hover:bg-neutral-100 active:bg-amber-400"
                            >
                                <img
                                    width="15px"
                                    height="15px"
                                    src="./assets/images/sleep.svg"
                                    alt="bedroom icon"
                                />
                                Matrass
                                <span class="ml-auto"
                                ><svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="h-4 w-4"
                                >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                        />
                                    </svg>
                                </span>
                            </li>

                            <li
                                class="active:blue-900 flex items-center gap-2 py-2 px-3 hover:bg-neutral-100 active:bg-amber-400"
                            >
                                <img
                                    width="15px"
                                    height="15px"
                                    src="./assets/images/outdoor.svg"
                                    alt="bedroom icon"
                                />
                                Outdoor
                                <span class="ml-auto"
                                ><svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="h-4 w-4"
                                >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                        />
                                    </svg>
                                </span>
                            </li>

                            <li
                                class="active:blue-900 flex items-center gap-2 py-2 px-3 hover:bg-neutral-100 active:bg-amber-400"
                            >
                                <img
                                    width="15px"
                                    height="15px"
                                    src="./assets/images/sofa.svg"
                                    alt="bedroom icon"
                                />
                                Sofa
                                <span class="ml-auto"
                                ><svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="h-4 w-4"
                                >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                        />
                                    </svg>
                                </span>
                            </li>

                            <li
                                class="active:blue-900 flex items-center gap-2 py-2 px-3 hover:bg-neutral-100 active:bg-amber-400"
                            >
                                <img
                                    width="15px"
                                    height="15px"
                                    src="./assets/images/kitchen.svg"
                                    alt="bedroom icon"
                                />
                                Kitchen
                                <span class="ml-auto"
                                ><svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="h-4 w-4"
                                >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                        />
                                    </svg>
                                </span>
                            </li>

                            <li
                                class="active:blue-900 flex items-center gap-2 py-2 px-3 hover:bg-neutral-100 active:bg-amber-400"
                            >
                                <img
                                    width="15px"
                                    height="15px"
                                    src="./assets/images/food.svg"
                                    alt="Food icon"
                                />
                                Living room
                                <span class="ml-auto"
                                ><svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="h-4 w-4"
                                >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                        />
                                    </svg>
                                </span>
                            </li>
                        </ul>
                    </div>

                    <div class="flex w-full justify-between">
                        <div class="flex gap-6">
                            <div class="mx-5">
                                <p class="font-medium text-gray-500">BEDS</p>
                                <ul class="text-sm leading-8">
                                    <li><a href="product-overview.html">Italian bed</a></li>
                                    <li><a href="product-overview.html">Queen-size bed</a></li>
                                    <li>
                                        <a href="product-overview.html">Wooden craft bed</a>
                                    </li>
                                    <li><a href="product-overview.html">King-size bed</a></li>
                                </ul>
                            </div>

                            <div class="mx-5">
                                <p class="font-medium text-gray-500">LAMPS</p>
                                <ul class="text-sm leading-8">
                                    <li>
                                        <a href="product-overview.html">Italian Purple Lamp</a>
                                    </li>
                                    <li><a href="product-overview.html">APEX Lamp</a></li>
                                    <li><a href="product-overview.html">PIXAR lamp</a></li>
                                    <li>
                                        <a href="product-overview.html">Ambient Nightlamp</a>
                                    </li>
                                </ul>
                            </div>

                            <div class="mx-5">
                                <p class="font-medium text-gray-500">BEDSIDE TABLES</p>
                                <ul class="text-sm leading-8">
                                    <li><a href="product-overview.html">Purple Table</a></li>
                                    <li><a href="product-overview.html">Easy Bedside</a></li>
                                    <li><a href="product-overview.html">Soft Table</a></li>
                                    <li><a href="product-overview.html">Craft Table</a></li>
                                </ul>
                            </div>

                            <div class="mx-5">
                                <p class="font-medium text-gray-500">SPECIAL</p>
                                <ul class="text-sm leading-8">
                                    <li><a href="product-overview.html">Humidifier</a></li>
                                    <li><a href="product-overview.html">Bed Cleaner</a></li>
                                    <li><a href="product-overview.html">Vacuum Cleaner</a></li>
                                    <li><a href="product-overview.html">Pillow</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section >


            <section
                class="container mx-auto flex-grow max-w-[1200px] border-b py-5 lg:flex lg:flex-row lg:py-10"
            >

                <section class="hidden w-[300px] flex-shrink-0 px-4 lg:block">
                    <div class="flex border-b pb-5">
                        <div class="w-full">
                            <p class="mb-3 font-medium">CATEGORIES</p>

                            <div class="flex w-full justify-between">
                                <div class="flex justify-center items-center">
                                    <input type="checkbox" />
                                    <p class="ml-4">Bedroom</p>
                                </div>
                                <div>
                                    <p class="text-gray-500">(12)</p>
                                </div>
                            </div>

                            <div class="flex w-full justify-between">
                                <div class="flex justify-center items-center">
                                    <input type="checkbox" />
                                    <p class="ml-4">Sofa</p>
                                </div>
                                <div>
                                    <p class="text-gray-500">(15)</p>
                                </div>
                            </div>

                            <div class="flex w-full justify-between">
                                <div class="flex justify-center items-center">
                                    <input type="checkbox" />
                                    <p class="ml-4">Office</p>
                                </div>
                                <div>
                                    <p class="text-gray-500">(14)</p>
                                </div>
                            </div>

                            <div class="flex w-full justify-between">
                                <div class="flex justify-center items-center">
                                    <input type="checkbox" />
                                    <p class="ml-4">Outdoor</p>
                                </div>
                                <div>
                                    <p class="text-gray-500">(124)</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="flex border-b py-5">
                        <div class="w-full">
                            <p class="mb-3 font-medium">BRANDS</p>

                            <div class="flex w-full justify-between">
                                <div class="flex justify-center items-center">
                                    <input type="checkbox" />
                                    <p class="ml-4">APEX</p>
                                </div>
                                <div>
                                    <p class="text-gray-500">(12)</p>
                                </div>
                            </div>

                            <div class="flex w-full justify-between">
                                <div class="flex justify-center items-center">
                                    <input type="checkbox" />
                                    <p class="ml-4">Call of SOFA</p>
                                </div>
                                <div>
                                    <p class="text-gray-500">(15)</p>
                                </div>
                            </div>

                            <div class="flex w-full justify-between">
                                <div class="flex justify-center items-center">
                                    <input type="checkbox" />
                                    <p class="ml-4">Puff B&G</p>
                                </div>
                                <div>
                                    <p class="text-gray-500">(14)</p>
                                </div>
                            </div>

                            <div class="flex w-full justify-between">
                                <div class="flex justify-center items-center">
                                    <input type="checkbox" />
                                    <p class="ml-4">Fornighte</p>
                                </div>
                                <div>
                                    <p class="text-gray-500">(124)</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="flex border-b py-5">
                        <div class="w-full">
                            <p class="mb-3 font-medium">PRICE</p>

                            <div class="flex w-full">
                                <div class="flex justify-between">
                                    <input
                                        x-mask="99999"
                                        min="50"
                                        type="number"
                                        class="h-8 w-[90px] border pl-2"
                                        placeholder="50"
                                    />
                                    <span class="px-3">-</span>
                                    <input
                                        x-mask="999999"
                                        type="number"
                                        max="999999"
                                        class="h-8 w-[90px] border pl-2"
                                        placeholder="99999"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="flex border-b py-5">
                        <div class="w-full">
                            <p class="mb-3 font-medium">SIZE</p>

                            <div class="flex gap-2">
                                <div
                                    class="flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500"
                                >
                                    XS
                                </div>
                                <div
                                    class="flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500"
                                >
                                    S
                                </div>
                                <div
                                    class="flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500"
                                >
                                    M
                                </div>

                                <div
                                    class="flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500"
                                >
                                    L
                                </div>

                                <div
                                    class="flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500"
                                >
                                    XL
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="flex py-5">
                        <div class="w-full">
                            <p class="mb-3 font-medium">COLOR</p>

                            <div class="flex gap-2">
                                <div
                                    class="h-8 w-8 cursor-pointer border border-white bg-gray-600 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500"
                                ></div>
                                <div
                                    class="h-8 w-8 cursor-pointer border border-white bg-violet-900 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500"
                                ></div>
                                <div
                                    class="h-8 w-8 cursor-pointer border border-white bg-red-900 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500"
                                ></div>
                            </div>
                        </div>
                    </div>
                </section>

                <div>
                    <div class="mb-5 flex items-center justify-between px-5">
                        <div class="flex gap-3">
                            <button class="flex items-center justify-center border px-6 py-2">
                                Sort by
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="mx-2 h-4 w-4"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                    />
                                </svg>
                            </button>

                            <button
                                class="flex items-center justify-center border px-6 py-2 md:hidden"
                            >
                                Filters
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="mx-2 h-4 w-4"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                    />
                                </svg>
                            </button>
                        </div>

                        <div class="hidden gap-3 lg:flex">
                            <button class="border bg-amber-400 py-2 px-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="h-5 w-5"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                                    />
                                </svg>
                            </button>

                            <button class="border py-2 px-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="h-5 w-5"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <section
                        class="mx-auto grid max-w-[1200px] grid-cols-2 gap-3 px-5 pb-10 lg:grid-cols-3"
                    >
                        <div class="flex flex-col">
                            <div class="relative flex">
                                <img
                                    class=""
                                    src="https://tailwind-ecommerce-demo.vercel.app/product-chair.43cea4c5.png"
                                    alt="sofa image"
                                />
                                <div
                                    class="absolute flex h-full w-full items-center justify-center gap-3 opacity-0 duration-150 hover:opacity-100"
                                >
                                    <a
                                        href="product-overview.html"
                                        class="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-amber-400"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            class="h-4 w-4"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                                            />
                                        </svg>
                                    </a>
                                    <span
                                        class="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-amber-400"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            class="h-4 w-4"
                                        >
                                            <path
                                                d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"
                                            />
                                        </svg>
                                    </span>
                                </div>

                                <div
                                    class="absolute right-1 mt-3 flex items-center justify-center bg-amber-400"
                                >
                                    <p class="px-2 py-2 text-sm">&minus; 25&percnt; OFF</p>
                                </div>
                            </div>

                            <div>
                                <p class="mt-2">CHAIR</p>
                                <p class="font-medium text-violet-900">
                                    $45.00
                                    <span class="text-sm text-gray-500 line-through"
                                    >$500.00</span
                                    >
                                </p>

                                <div class="flex items-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        class="h-4 w-4 text-yellow-400"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        class="h-4 w-4 text-yellow-400"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        class="h-4 w-4 text-yellow-400"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        class="h-4 w-4 text-yellow-400"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        class="h-4 w-4 text-gray-200"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                    <p class="text-sm text-gray-400">(38)</p>
                                </div>

                                <div>
                                    <button class="my-5 h-10 w-full bg-violet-900 text-white">
                                        Add to cart
                                    </button>
                                </div>
                            </div>
                        </div>



                        <div class="flex flex-col">
                            <div class="relative flex">
                                <img
                                    class=""
                                    src="https://tailwind-ecommerce-demo.vercel.app/product-chair.43cea4c5.png"
                                    alt="sofa image"
                                />

                                <div
                                    class="absolute flex h-full w-full items-center justify-center gap-3 opacity-0 duration-150 hover:opacity-100"
                                >
                                    <a
                                        href="product-overview.html"
                                        class="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-amber-400"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            class="h-4 w-4"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                                            />
                                        </svg>
                                    </a>
                                    <span
                                        class="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-amber-400"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            class="h-4 w-4"
                                        >
                                            <path
                                                d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"
                                            />
                                        </svg>
                                    </span>
                                </div>

                                <div
                                    class="absolute right-1 mt-3 flex items-center justify-center bg-amber-400"
                                >
                                    <p class="px-2 py-2 text-sm">&minus; 25&percnt; OFF</p>
                                </div>
                            </div>

                            <div>
                                <p class="mt-2">SOFA</p>
                                <p class="font-medium text-violet-900">
                                    $45.00
                                    <span class="text-sm text-gray-500 line-through"
                                    >$500.00</span
                                    >
                                </p>

                                <div class="flex items-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        class="h-4 w-4 text-yellow-400"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        class="h-4 w-4 text-yellow-400"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        class="h-4 w-4 text-yellow-400"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        class="h-4 w-4 text-yellow-400"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        class="h-4 w-4 text-gray-200"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                    <p class="text-sm text-gray-400">(38)</p>
                                </div>

                                <div>
                                    <button class="my-5 h-10 w-full bg-violet-900 text-white">
                                        Add to cart
                                    </button>
                                </div>
                            </div>
                        </div>



                        <div class="flex flex-col">
                            <div class="relative flex">
                                <img
                                    class=""
                                    src="https://tailwind-ecommerce-demo.vercel.app/product-chair.43cea4c5.png"
                                    alt="kitchen image"
                                />
                                <div
                                    class="absolute flex h-full w-full items-center justify-center gap-3 opacity-0 duration-150 hover:opacity-100"
                                >
                                    <a
                                        href="product-overview.html"
                                        class="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-amber-400"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            class="h-4 w-4"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                                            />
                                        </svg>
                                    </a>
                                    <span
                                        class="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-amber-400"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            class="h-4 w-4"
                                        >
                                            <path
                                                d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"
                                            />
                                        </svg>
                                    </span>
                                </div>

                                <div
                                    class="absolute right-1 mt-3 flex items-center justify-center bg-amber-400"
                                >
                                    <p class="px-2 py-2 text-sm">&minus; 25&percnt; OFF</p>
                                </div>
                            </div>

                            <div>
                                <p class="mt-2">GUYER KITCHEN</p>
                                <p class="font-medium text-violet-900">
                                    $45.00
                                    <span class="text-sm text-gray-500 line-through"
                                    >$500.00</span
                                    >
                                </p>

                                <div class="flex items-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        class="h-4 w-4 text-yellow-400"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        class="h-4 w-4 text-yellow-400"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        class="h-4 w-4 text-yellow-400"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        class="h-4 w-4 text-yellow-400"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        class="h-4 w-4 text-gray-200"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                    <p class="text-sm text-gray-400">(38)</p>
                                </div>

                                <div>
                                    <button class="my-5 h-10 w-full bg-violet-900 text-white">
                                        Add to cart
                                    </button>
                                </div>
                            </div>
                        </div>



                        <div class="flex flex-col">
                            <div class="relative flex">
                                <img
                                    class=""
                                    src="https://tailwind-ecommerce-demo.vercel.app/product-chair.43cea4c5.png"
                                    alt="living room image"
                                />
                                <div
                                    class="absolute flex h-full w-full items-center justify-center gap-3 opacity-0 duration-150 hover:opacity-100"
                                >
                                    <a
                                        href="product-overview.html"
                                        class="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-amber-400"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            class="h-4 w-4"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                                            />
                                        </svg>
                                    </a>
                                    <span
                                        class="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-amber-400"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            class="h-4 w-4"
                                        >
                                            <path
                                                d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"
                                            />
                                        </svg>
                                    </span>
                                </div>

                                <div
                                    class="absolute right-1 mt-3 flex items-center justify-center bg-amber-400"
                                >
                                    <p class="px-2 py-2 text-sm">&minus; 25&percnt; OFF</p>
                                </div>
                            </div>

                            <div>
                                <p class="mt-2">GUYER ROOM</p>
                                <p class="font-medium text-violet-900">
                                    $45.00
                                    <span class="text-sm text-gray-500 line-through"
                                    >$500.00</span
                                    >
                                </p>

                                <div class="flex items-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        class="h-4 w-4 text-yellow-400"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        class="h-4 w-4 text-yellow-400"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        class="h-4 w-4 text-yellow-400"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        class="h-4 w-4 text-yellow-400"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        class="h-4 w-4 text-gray-200"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                    <p class="text-sm text-gray-400">(38)</p>
                                </div>

                                <div>
                                    <button class="my-5 h-10 w-full bg-violet-900 text-white">
                                        Add to cart
                                    </button>
                                </div>
                            </div>
                        </div>



                        <div class="flex flex-col">
                            <div class="relative flex">
                                <img
                                    class=""
                                    src="https://tailwind-ecommerce-demo.vercel.app/product-chair.43cea4c5.png"
                                    alt="Bedroom image"
                                />
                                <div
                                    class="absolute flex h-full w-full items-center justify-center gap-3 opacity-0 duration-150 hover:opacity-100"
                                >
                                    <a
                                        href="product-overview.html"
                                        class="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-amber-400"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            class="h-4 w-4"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                                            />
                                        </svg>
                                    </a>
                                    <span
                                        class="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-amber-400"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            class="h-4 w-4"
                                        >
                                            <path
                                                d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"
                                            />
                                        </svg>
                                    </span>
                                </div>

                                <div
                                    class="absolute right-1 mt-3 flex items-center justify-center bg-amber-400"
                                >
                                    <p class="px-2 py-2 text-sm">&minus; 25&percnt; OFF</p>
                                </div>
                            </div>

                            <div>
                                <p class="mt-2">BEDROOM</p>
                                <p class="font-medium text-violet-900">
                                    $45.00
                                    <span class="text-sm text-gray-500 line-through"
                                    >$500.00</span
                                    >
                                </p>

                                <div class="flex items-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        class="h-4 w-4 text-yellow-400"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        class="h-4 w-4 text-yellow-400"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        class="h-4 w-4 text-yellow-400"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        class="h-4 w-4 text-yellow-400"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        class="h-4 w-4 text-gray-200"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                    <p class="text-sm text-gray-400">(38)</p>
                                </div>

                                <div>
                                    <button class="my-5 h-10 w-full bg-violet-900 text-white">
                                        Add to cart
                                    </button>
                                </div>
                            </div>
                        </div>



                        <div class="flex flex-col">
                            <div class="relative flex">
                                <img
                                    class=""
                                    src="https://tailwind-ecommerce-demo.vercel.app/product-chair.43cea4c5.png"
                                    alt="living room image"
                                />
                                <div
                                    class="absolute flex h-full w-full items-center justify-center gap-3 opacity-0 duration-150 hover:opacity-100"
                                >
                                    <a
                                        href="product-overview.html"
                                        class="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-amber-400"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            class="h-4 w-4"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                                            />
                                        </svg>
                                    </a>
                                    <span
                                        class="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-amber-400"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            class="h-4 w-4"
                                        >
                                            <path
                                                d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"
                                            />
                                        </svg>
                                    </span>
                                </div>

                                <div
                                    class="absolute right-1 mt-3 flex items-center justify-center bg-amber-400"
                                >
                                    <p class="px-2 py-2 text-sm">&minus; 25&percnt; OFF</p>
                                </div>
                            </div>

                            <div>
                                <p class="mt-2">LIVING GUYER</p>
                                <p class="font-medium text-violet-900">
                                    $45.00
                                    <span class="text-sm text-gray-500 line-through"
                                    >$500.00</span
                                    >
                                </p>

                                <div class="flex items-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        class="h-4 w-4 text-yellow-400"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        class="h-4 w-4 text-yellow-400"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        class="h-4 w-4 text-yellow-400"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        class="h-4 w-4 text-yellow-400"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        class="h-4 w-4 text-gray-200"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                    <p class="text-sm text-gray-400">(38)</p>
                                </div>

                                <div>
                                    <button class="my-5 h-10 w-full bg-violet-900 text-white">
                                        Add to cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </section>

        </>
    )
}
