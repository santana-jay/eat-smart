<script>
  import { page } from '$app/stores';
  import "../app.css";
  import TopNav from "./navigation/home-page/components/TopNav.svelte";
  import Footer from "./navigation/home-page/components/Footer.svelte";
</script>

<svelte:head>
  <title>Eat Smart</title>
  <meta name="description" content="Barcode scanner for ingredients" />
</svelte:head>

{#if !($page.url.pathname.startsWith('/dashboard'))}
  <TopNav />
{/if}

<slot />

{#if !($page.url.pathname.startsWith('/dashboard'))}
  <Footer />
{/if}
