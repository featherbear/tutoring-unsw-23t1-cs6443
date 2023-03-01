<script lang="ts">
  import { login } from "../frontend/AuthProvider";

  let loginData: { username?: string; password?: string } = {};

  let isLoginProcess = false;
  let wasLoginFail = false;

  async function doLogin() {
    isLoginProcess = true;
    await login(loginData.username, loginData.password).catch(
      () => (wasLoginFail = true)
    );
    setTimeout(() => {
      isLoginProcess = false;
    }, 1000);
  }
</script>

<div class="content-center">
  <div class="form-control w-full max-w-xs">
    <label class="label">
      <span class="label-text">Username</span>
    </label>
    <input
      type="text"
      placeholder="Enter username"
      class:input-error={wasLoginFail}
      class="input input-bordered w-full max-w-xs"
      bind:value={loginData.username}
    />
  </div>
  <div class="form-control w-full max-w-xs">
    <label class="label">
      <span class="label-text">Password</span>
    </label>
    <input
      type="password"
      placeholder="Enter password"
      class:input-error={wasLoginFail}
      class="input input-bordered w-full max-w-xs"
      bind:value={loginData.password}
    />
  </div>
  <div class="form-control max-w-xs">
    <button
      class="btn btn-accent"
      class:loading={isLoginProcess}
      on:click={doLogin}>Login</button
    >
  </div>
</div>
