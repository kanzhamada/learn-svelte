<script>
  import EditToDo from "./EditToDo.svelte";
  import ToDo from "./ToDo.svelte";
  import { fly } from "svelte/transition";

  let data = $state([]);
  let name = $state("");

  let id = 0;

  function remove(id) {
    data = data.filter((todo) => todo.id !== id);
  }

  function add(e) {
    e.preventDefault();

    data.push({
      id: id++,
      // @ts-ignore
      name: name,
    });
    // @ts-ignore
    name = "";
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

{#snippet todoRow(todo)}
  <li
    in:fly={{ y: -200, duration: 2000 }}
    out:fly={{ y: 200, duration: 2000 }}
    onintrostart={() => console.log("intro start")}
    onintroend={() => console.log("intro end")}
    onoutrostart={() => console.log("outro start")}
    onoutroend={() => console.log("outro end")}
  >
    {#if todo.edit}
      <EditToDo id={todo.id} name={todo.name} onedit={onEdit} />
    {:else}
      <ToDo {...todo} />
      <button onclick={() => edit(todo.id)}>Edit</button>
      <button onclick={() => remove(todo.id)}>Remove</button>
    {/if}
  </li>
{/snippet}

<!-- <button onclick={remove}>Remove</button> -->

<form action="">
  <input type="text" id="todo" bind:value={name} />
  <button onclick={add}>Add</button>
</form>

{#each data as todo (todo.id)}
  {@render todoRow(todo)}
{/each}

<style>
  :global {
    button {
      background-color: #4caf50;
      color: white;
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }

    button:hover {
      background-color: #45a049;
    }
  }
</style>
