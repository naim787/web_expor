<script lang="ts">
  import { page } from "$app/state";
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from "flowbite-svelte";
  let activeUrl = $derived(page.url.pathname);
</script>


<Navbar>
  <NavBrand href="/">
    <span class="self-center text-xl whitespace-nowrap dark:text-white font-bold">WEBEXPOR</span>
  </NavBrand>
  <NavHamburger />
  <NavUl {activeUrl} >
    <NavLi href="/" class="text-black bg-white">Home</NavLi>
    <NavLi href="/" class="text-black bg-white">Navbar</NavLi>
    <NavLi href="/" class="text-black bg-white">Accordion</NavLi>
    <NavLi href="/" class="text-black bg-white">Alert</NavLi>
    <NavLi href="/" class="text-black bg-white">Avatar</NavLi>
  </NavUl>
</Navbar>

<style>
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap');
</style>