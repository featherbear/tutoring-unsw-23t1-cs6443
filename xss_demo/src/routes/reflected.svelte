<script>
  let queries;
  import { onMount } from "svelte";
  onMount(() => {
    queries = new URLSearchParams(window.location.search);
  });
</script>

{#if queries?.get("q")}
  <div>
    No results found for {@html decodeURIComponent(queries?.get("q") || "")}
  </div>
{:else}
  <div class="error">Enter something to search for...</div>
{/if}

<form>
  <input name="q" placeholder="Search for something here" />
  <button type="submit">Search!</button>
</form>

<style lang="scss">
  input[name="q"] {
    padding: 5px;
    border-radius: 5px;
    width: 300px;
  }
  button[type="submit"] {
    padding: 5px;
    border-radius: 5px;

    &:hover {
      filter: brightness(0.9);
    }
  }
</style>
