<script lang="ts">
  import { logout__VULN, store as AuthStore } from "./AuthProvider";
</script>

<div class="navbar bg-base-100">
  <div class="navbar-start">
    <a class="btn btn-ghost normal-case text-xl"
      >Broken Session Management Demo</a
    >
  </div>
  <div class="navbar-center lg:flex" />
  <div class="navbar-end text-right">
    {#if $AuthStore}
      <button class="btn" on:click={logout__VULN}>Log out</button>
    {/if}
  </div>
</div>
