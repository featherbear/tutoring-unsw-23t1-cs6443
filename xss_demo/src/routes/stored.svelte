<script>
  import { onMount } from "svelte";
  let posts = [];
  let updateFn = async () => {
    posts = await fetch("/storage").then((r) => r.json());
  };
  onMount(() => {
    setInterval(updateFn, 1000);
    updateFn();
  });

  let formData = "";
  function onSubmit() {
    if (!formData) return;
    fetch("/storage", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: formData }),
    })
      .then(updateFn)
      .then(() => {
        formData = "";
      });
  }
</script>

<div>
  <h1>Posts</h1>

  <ul>
    {#each posts as post}
      <li>
        {@html post["text"]}
      </li>
    {/each}
  </ul>
</div>

<hr />

<form on:submit|preventDefault={onSubmit}>
  <input type="text" name="input" bind:value={formData} />
  <button class="submit">Submit post!</button>
</form>
