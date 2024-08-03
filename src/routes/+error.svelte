<script>
    import { page } from "$app/stores";
    import { goto } from "$app/navigation";

    // Function to navigate to the home page
    function navigateHome() {
        goto("/");
    }
</script>

<main class="relative isolate min-h-full">
    <img
        src="https://images.unsplash.com/photo-1545972154-9bb223aac798?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3050&q=80&exp=8&con=-15&sat=-75"
        alt=""
        class="absolute inset-0 -z-10 h-full w-full object-cover object-top"
    />
    <div class="overlay flex justify-center items-center h-full">
        <div class="text-center px-6 py-32 sm:py-40 lg:px-8">
            <p class="text-base font-semibold leading-8 error-message">
                {$page.status}
            </p>
            <h1
                class="mt-4 text-3xl font-bold tracking-tight error-message sm:text-5xl"
            >
                {$page.error.message}
            </h1>
            <p class="mt-4 text-base error-message sm:mt-6">
                Sorry, we couldn’t find the page you’re looking for.
            </p>
            <div class="mt-10">
                <button
                    on:click={navigateHome}
                    class="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md shadow-lg transform transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 inline-block mr-2 -ml-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M11 17l-5-5m0 0l5-5m-5 5h12"
                        />
                    </svg>
                    Back to home
                </button>
            </div>
        </div>
    </div>
</main>

<style>
    .overlay {
        background-color: rgba(
            0,
            0,
            0,
            0.5
        ); /* Dark overlay for text contrast */
    }

    .error-message {
        color: #fff;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7); /* Text shadow for readability */
    }

    @media (max-width: 768px) {
        .error-message {
            font-size: smaller; /* Adjust font size on smaller screens */
        }
    }

    /* Set your main container to at least the full height of the viewport */
    main {
        min-height: 100vh; /* Full viewport height */
        position: relative; /* For absolute positioning of the image */
        display: flex; /* To center the content */
        justify-content: center; /* Center horizontally */
        align-items: center; /* Center vertically */
        overflow: hidden; /* Hide overflow to avoid scrollbars */
    }

    /* CSS for the image */
    img {
        position: absolute; /* Absolute position to make it fill the main container */
        top: 0;
        left: 0;
        width: 100%; /* Full width */
        height: 100%; /* Full height */
        object-fit: cover; /* Cover the container without losing aspect ratio */
        object-position: center; /* Center the image within the element */
        z-index: -10; /* Keep the image behind the content */
    }
</style>
