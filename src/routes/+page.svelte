<script lang="ts">
  import { page } from "$app/state";
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from "flowbite-svelte";
  let activeUrl = $derived(page.url.pathname);
</script>


<Navbar class=>
  <NavBrand href="/">
    <span class="self-center whitespace-nowrap dark:text-white font-bold text-2xl bungee-regular">WEBEXPOR</span>
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
