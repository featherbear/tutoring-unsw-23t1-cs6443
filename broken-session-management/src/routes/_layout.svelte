<script>
  import Nav from "../frontend/Nav.svelte";
</script>

<Nav />

<main>
  <slot />
</main>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  #app > main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
