<script lang="ts">
  import { page } from "$app/state";
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from "flowbite-svelte";
  let activeUrl = $derived(page.url.pathname);
</script>


<Navbar>
  <NavBrand href="/">
    <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">WEBEXPOR</span>
  </NavBrand>
  <NavHamburger />
  <NavUl {activeUrl} class="tex">
    <NavLi href="/">Home</NavLi>
    <NavLi href="/">Navbar</NavLi>
    <NavLi href="/">Accordion</NavLi>
    <NavLi href="/">Alert</NavLi>
    <NavLi href="/">Avatar</NavLi>
  </NavUl>
</Navbar>