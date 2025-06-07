<script>
  const time = (node, interval) => {
    const text = node.textContent;

    $effect(() => {
      const id = setInterval(() => {
        node.textContent = text + " " + new Date().toLocaleTimeString();
      }, interval);
      return () => clearInterval(id);
    });
  };
</script>

<h1 use:time={10000}>Title</h1>

<p use:time={1000}>Hello World</p>
