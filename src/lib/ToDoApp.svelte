<script>
  import EditToDo from "./EditToDo.svelte";
  import ToDo from "./ToDo.svelte";

  let data = $state([]);

  let id = 0;

  function remove(id) {
    data = data.filter((todo) => todo.id !== id);
  }

  function add(e) {
    e.preventDefault();

    const input = document.getElementById("todo");
    data.push({
      id: id++,
      // @ts-ignore
      name: input.value,
    });
    // @ts-ignore
    input.value = "";
  }

  function edit(id) {
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === id) {
        data[i] = { ...data[i], edit: true };
      }
    }
  }

  function onEdit(id, name) {
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === id) {
        data[i] = { id, name, edit: false };
      }
    }
  }
</script>

<!-- <button onclick={remove}>Remove</button> -->

<form action="">
  <input type="text" id="todo" />
  <button onclick={add}>Add</button>
</form>

{#each data as todo (todo.id)}
  <li>
    {#if todo.edit}
      <EditToDo id={todo.id} name={todo.name} onedit={onEdit} />
    {:else}
      <ToDo {...todo} />
      <button onclick={() => edit(todo.id)}>Edit</button>
      <button onclick={() => remove(todo.id)}>Remove</button>
    {/if}
  </li>
{/each}
