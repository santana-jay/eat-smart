<script>
    import { activeDashboardPage } from "$lib/firebase";

    // Reactive variables to handle the menu state
    let mobileMenuOpen = false;
    let userMenuOpen = false;
    let activePage = {$activeDashboardPage}; // Track the active page

    $: console.log($activeDashboardPage);

    // Toggle the mobile menu
    function toggleMobileMenu() {
        mobileMenuOpen = !mobileMenuOpen;
    }

    // Toggle the user profile dropdown menu
    function toggleUserMenu() {
        userMenuOpen = !userMenuOpen;
    }

    // Function to set active page
    function setActivePage(page) {
        activePage = page;
        mobileMenuOpen = false; // Close the mobile menu when a selection is made
        activeDashboardPage.set(page);
    }
</script>

<!-- {activePage} -->
<nav class="bg-gray-800">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-16 items-center justify-between">
            <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <!-- Mobile menu button -->
                <button
                    type="button"
                    class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    aria-controls="mobile-menu"
                    aria-expanded={mobileMenuOpen}
                    on:click={toggleMobileMenu}
                >
                    <span class="absolute -inset-0.5"></span>
                    <span class="sr-only">Open main menu</span>
                    <!-- Icon when menu is closed. -->
                    <svg
                        class={mobileMenuOpen ? "hidden" : "block h-6 w-6"}
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
                    <!-- Icon when menu is open. -->
                    <svg
                        class={mobileMenuOpen ? "block h-6 w-6" : "hidden"}
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
            <div
                class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"
            >
                <div class="flex flex-shrink-0 items-center">
                    <a href="/">
                        <img
                            class="h-8 w-auto"
                            src="/logos/light-logo-text.png"
                            alt="Eat Smart"
                        />
                    </a>
                </div>
                <div class="hidden sm:ml-6 sm:block">
                    <div class="flex space-x-4">
                        <!-- Desktop navigation links -->
                        <a
                            href="#"
                            class={`rounded-md px-3 py-2 text-sm font-medium ${
                                activePage === "scan-item"
                                    ? "bg-gray-900 text-white"
                                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                            }`}
                            aria-current={activePage === "scan-item"
                                ? "page"
                                : undefined}
                            on:click={() => setActivePage("scan-item")}
                            >Scan Item</a
                        >
                        <a
                            href="#"
                            class={`rounded-md px-3 py-2 text-sm font-medium ${
                                activePage === "history"
                                    ? "bg-gray-900 text-white"
                                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                            }`}
                            on:click={() => setActivePage("history")}>History</a
                        >
                    </div>
                </div>
            </div>
            <div
                class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
            >
                <button
                    type="button"
                    class="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                    <span class="absolute -inset-1.5"></span>
                    <span class="sr-only">View notifications</span>
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
                            d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                        />
                    </svg>
                </button>

                <!-- Profile dropdown -->
                <div class="relative ml-3">
                    <div>
                        <button
                            type="button"
                            class="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                            id="user-menu-button"
                            aria-expanded={userMenuOpen}
                            aria-haspopup="true"
                            on:click={toggleUserMenu}
                        >
                            <span class="absolute -inset-1.5"></span>
                            <span class="sr-only">Open user menu</span>
                            <img
                                class="h-8 w-8 rounded-full"
                                src="https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg"
                                alt=""
                            />
                        </button>
                    </div>

                    <!-- Dropdown menu -->
                    {#if userMenuOpen}
                        <div
                            class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="user-menu-button"
                            tabindex="-1"
                        >
                            <!-- Active: "bg-gray-100", Not Active: "" -->
                            <a
                                href="#"
                                class="block px-4 py-2 text-sm text-gray-700"
                                role="menuitem"
                                tabindex="-1"
                                id="user-menu-item-0">Your Profile</a
                            >
                            <a
                                href="#"
                                class="block px-4 py-2 text-sm text-gray-700"
                                role="menuitem"
                                tabindex="-1"
                                id="user-menu-item-1">Settings</a
                            >
                            <a
                                href="#"
                                class="block px-4 py-2 text-sm text-gray-700"
                                role="menuitem"
                                tabindex="-1"
                                id="user-menu-item-2">Sign out</a
                            >
                        </div>
                    {/if}
                </div>
            </div>
        </div>
    </div>

    <!-- Mobile menu -->
    {#if mobileMenuOpen}
        <div class="sm:hidden" id="mobile-menu">
            <div class="space-y-1 px-2 pb-3 pt-2">
                <!-- Mobile navigation links -->
                <a
                    href="#"
                    class={`block rounded-md px-3 py-2 text-base font-medium ${
                        activePage === "Dashboard"
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white"
                    }`}
                    aria-current={activePage === "Dashboard"
                        ? "page"
                        : undefined}
                    on:click={() => setActivePage("Dashboard")}>Dashboard</a
                >
                <a
                    href="#"
                    class={`block rounded-md px-3 py-2 text-base font-medium ${
                        activePage === "Team"
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white"
                    }`}
                    on:click={() => setActivePage("Team")}>Team</a
                >
                <a
                    href="#"
                    class={`block rounded-md px-3 py-2 text-base font-medium ${
                        activePage === "Projects"
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white"
                    }`}
                    on:click={() => setActivePage("Projects")}>Projects</a
                >
                <a
                    href="#"
                    class={`block rounded-md px-3 py-2 text-base font-medium ${
                        activePage === "Calendar"
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white"
                    }`}
                    on:click={() => setActivePage("Calendar")}>Calendar</a
                >
            </div>
        </div>
    {/if}
</nav>
