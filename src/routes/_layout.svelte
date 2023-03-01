<script>
  import Nav from "../components/Nav.svelte";
</script>

<Nav />

<main>
  <slot />
</main>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
