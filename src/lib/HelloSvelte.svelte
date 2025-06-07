<script>
    import Logo from "./Logo.svelte";

    const name = "Svelte"
    const content = "<p>Hello World</p>"
    </script>

<style>
    h1{
        color: red;
    }
</style>

<h1>
    Hello World! {name.toLowerCase()}
</h1>

{@html content} 
<!-- hilangkan @html untuk aman dari xss -->

<Logo/> 