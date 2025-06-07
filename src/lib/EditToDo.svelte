<script>
  let { id, name, onedit } = $props();

  //   function save() {
  //     const input = document.getElementById(id);
  //     // @ts-ignore
  //     onedit(id, input.value);
  //   }

  function save() {
    onedit(id, name);
  }
</script>

{id} <input type="text" {id} bind:value={name} />
<button class="button" onclick={save}>Save</button>

