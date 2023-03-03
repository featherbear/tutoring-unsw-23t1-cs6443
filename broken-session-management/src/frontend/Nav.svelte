<script lang="ts">
  import { logout, logout__VULN, store as AuthStore } from "./AuthProvider";

  function clickSessionToken() {
    let token = prompt("Enter session token")
    sessionStorage.setItem("session", token)
    location.reload()
  }
</script>

<div class="navbar bg-base-100">
  <div class="navbar-start">
    <span class="btn btn-ghost normal-case text-xl">Broken Session Management Demo</span>
  </div>
  <div class="navbar-center lg:flex" />
  <div class="navbar-end text-right">
    {#if $AuthStore}
      <button class="btn btn-outline btn-warning" on:click={logout__VULN}>Log out (bad)</button>
      <button class="btn btn-outline btn-warning" on:click={logout}>Log out (good)</button>
    {/if}
    <button class="btn btn-outline btn-info" on:click={clickSessionToken}>Set session token</button>
  </div>
</div>
