<script>
    import { onMount } from "svelte";
    import { page } from "$app/stores";

    let isMobileMenuOpen = false;
    let isProductMenuOpen = false;

    // Toggles the mobile menu
    const toggleMobileMenu = () => {
        isMobileMenuOpen = !isMobileMenuOpen;
    };

    // Toggles the product submenu
    const toggleProductMenu = () => {
        isProductMenuOpen = !isProductMenuOpen;
    };

</script>

<header class="bg-white">
    <nav
        class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
    >
        <div class="flex lg:flex-1">
            <a href="/" class="-m-1.5 p-1.5">
                <span class="sr-only">Eat Smart</span>
                <img
                    class="h-12 w-auto"
                    src="/logos/logo-text-1.png"
                    alt=""
                />
            </a>
        </div>
        <div class="flex lg:hidden">
            <button
                type="button"
                class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                on:click={toggleMobileMenu}
            >
                <span class="sr-only">Open main menu</span>
                <svg
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                </svg>
            </button>
        </div>
        <div class="hidden lg:flex lg:gap-x-12">
            <div class="relative">
                <button
                    type="button"
                    class="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900"
                    aria-expanded={isProductMenuOpen ? "true" : "false"}
                    on:click={toggleProductMenu}
                >
                    Product
                    <svg
                        class="h-5 w-5 flex-none text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                            clip-rule="evenodd"
                        />
                    </svg>
                </button>

                {#if isProductMenuOpen}
                    <div
                        class="absolute -left-8 top-full z-20 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5"
                    >
                        <div class="p-4">
                            <div
                                class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                            >
                                <div
                                    class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white"
                                >
                                    <svg
                                        class="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
                                        />
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
                                        />
                                    </svg>
                                </div>
                                <div class="flex-auto">
                                    <a
                                        href="#"
                                        class="block font-semibold text-gray-900"
                                    >
                                        Dashboard
                                        <span class="absolute inset-0"></span>
                                    </a>
                                    <p class="mt-1 text-gray-600">
                                        View Dashboard
                                    </p>
                                </div>
                            </div>
                            <!-- Add other items similarly -->
                        </div>
                        <div
                            class="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50"
                        >
                            <a
                                href="#"
                                class="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                            >
                                <svg
                                    class="h-5 w-5 flex-none text-gray-400"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm6.39-2.908a.75.75 0 01.766.027l3.5 2.25a.75.75 0 010 1.262l-3.5 2.25A.75.75 0 018 12.25v-4.5a.75.75 0 01.39-.658z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                                Watch demo
                            </a>
                            <a
                                href="#"
                                class="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                            >
                                <svg
                                    class="h-5 w-5 flex-none text-gray-400"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                                Contact Us
                            </a>
                        </div>
                    </div>
                {/if}
            </div>

            <a
                href="/features"
                class="text-sm font-semibold leading-6 text-gray-900"
                >Features</a
            >
            <a
                href="/dashboard"
                class="text-sm font-semibold leading-6 text-gray-900"
                >Dashboard</a
            >
            <a
                href="/about-us"
                class="text-sm font-semibold leading-6 text-gray-900">About Us</a
            >
        </div>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
                href="/login"
                class="text-sm font-semibold leading-6 text-gray-900"
                >Log in <span aria-hidden="true">&rarr;</span></a
            >
        </div>
    </nav>

    <!-- Mobile menu -->
    {#if isMobileMenuOpen}
        <div class="lg:hidden" role="dialog" aria-modal="true">
            <div class="fixed inset-0"></div>
            <div
                class="fixed inset-y-0 right-0 z-20 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
            >
                <div class="flex items-center justify-between">
                    <a href="/" class="-m-1.5 p-1.5">
                        <span class="sr-only">Eat Smart</span>
                        <img
                            class="h-24 w-auto"
                            src="/logos/logo-darker.png"
                            alt=""
                        />
                    </a>
                    <button
                        type="button"
                        class="-m-2.5 rounded-md p-2.5 text-gray-700"
                        on:click={toggleMobileMenu}
                    >
                        <span class="sr-only">Close menu</span>
                        <svg
                            class="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
                <div class="mt-6 flow-root">
                    <div class="-my-6 divide-y divide-gray-500/10">
                        <div class="space-y-2 py-6">
                            <div class="-mx-3">
                                <button
                                    type="button"
                                    class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    aria-controls="disclosure-1"
                                    aria-expanded={isProductMenuOpen
                                        ? "true"
                                        : "false"}
                                    on:click={toggleProductMenu}
                                >
                                    Product
                                    <svg
                                        class="h-5 w-5 flex-none"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                </button>
                                {#if isProductMenuOpen}
                                    <div
                                        class="mt-2 space-y-2"
                                        id="disclosure-1"
                                    >
                                        <a
                                            href="#"
                                            class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                            >Dashboard</a
                                        >
                                        <a
                                            href="#"
                                            class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                            >Contact Us</a
                                        >
                                    </div>
                                {/if}
                            </div>
                            <a
                                href="/features"
                                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >Features</a
                            >
                            <a
                                href="/dashboard"
                                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >Dashboard</a
                            >
                            <a
                                href="/about-us"
                                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >About Us</a
                            >
                        </div>
                        <div class="py-6">
                            <a
                                href="/login"
                                class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >Log in</a
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    {/if}
</header>
