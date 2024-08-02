<script>
  import { goto } from "$app/navigation";
  const aboutUsButton = () => {
    goto("/about-us");
  };
</script>

<h1>Welcome to SvelteKit</h1>
<p>
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>
<div class="">
  <button
    on:click={aboutUsButton}
    class="bg-red-500 px-6 py-4 rounded-xl text-w">Hello world</button
  >
</div>

testing...

<style>
  .text-w {
    color: white;
  }
</style>
