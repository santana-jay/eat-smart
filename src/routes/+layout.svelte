<script>
  import "../app.css";
  import TopNav from "./navigation/home-page/components/TopNav.svelte";
  import Footer from "./navigation/home-page/components/Footer.svelte";
</script>

<svelte:head>
  <title>Eat Smart</title>
  <meta name="description" content="Barcode scanner for ingredients" />
</svelte:head>

<TopNav />
<slot />
<Footer />
