<script>
  let specifiers = ["innerHTML", "innerText", "textContent"];
  import { html as beautify } from "js-beautify";
</script>

<div>
  {#each specifiers as specifier}
    <form
      entry
      type={specifier}
      on:submit|preventDefault={() => {
        document.getElementById(`elem_${specifier}`)[specifier] +=
          document.getElementById(`input_${specifier}`).value;
        document.getElementById(`input_${specifier}`).value = "";
        document.getElementById(`code_${specifier}`).innerText = beautify(
          document.getElementById(`elem_${specifier}`).innerHTML
        );
      }}
    >
      <label for="input_{specifier}">&lt;element&gt;.{specifier}</label>
      <input id="input_{specifier}" type="text" placeholder="Enter content" />
      <button type="Submit">Add</button>
      <div id="elem_{specifier}" />
      <code id="code_{specifier}" />
    </form>
  {/each}
</div>

<style lang="scss">
  form[entry] {
    label {
      display: block;
    }

    &[type="innerHTML"] label {
      color: rgb(243, 130, 130);
      &::after {
        content: " (vulnerable)";
      }
    }

    padding: 5px;
    margin-bottom: 5px;

    transition: background-color 0.3s;
    &:hover {
      cursor: pointer;
      background-color: rgba(0, 0, 0, 0.03);
    }

    code {
      display: block;
      margin-top: 5px;
      white-space: pre;
      &:empty::before {
        content: "No HTML content inside element";
      }
    }
  }
</style>
