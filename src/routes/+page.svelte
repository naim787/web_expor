<script>
  import "../app.css"
  import Nav from "$lib/components/Nav.svelte";
  import { page } from "$app/state";
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from "flowbite-svelte";
  let activeUrl = $derived(page.url.pathname);
</script>

<Nav />