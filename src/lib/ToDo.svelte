<!-- <script>
  const { id, name, done } = $props();


  const emojis = {
    "1": "😅",
    "2": "❤️",
    "3": "🕐",
    "4": "🖼️",
  };

  const emoji = emojis[id];
  console.log(emoji);
</script>

{emoji}

{#if done}
  <strike style="color: green;">{id} - {name}</strike>
{:else}
  {id} - {name}
{/if} -->

<script>
  const { id, name } = $props();
</script>

{id} - {name}
