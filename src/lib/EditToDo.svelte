<script>
  const { id, name, onedit } = $props();

  function save() {
    const input = document.getElementById(id);
    // @ts-ignore
    onedit(id, input.value);
  }
</script>

{id} <input type="text" id={id} value={name} />
<button onclick={save}>Save</button>
