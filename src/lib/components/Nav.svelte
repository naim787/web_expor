<script>
    import { page } from "$app/state";
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from "flowbite-svelte";
    import { DarkMode } from "flowbite-svelte";
    let activeUrl = $derived(page.url.pathname);
</script>

<Navbar class="backdrop-blur- border-b-1 border-gray-200 fixed z-10">
  <NavBrand href="/">
    <span class="self-center whitespace-nowrap dark:text-white font-bold text-2xl bungee-regular">WEBEXPOR</span>
  </NavBrand>
  <NavHamburger />
  <NavUl {activeUrl}>
    <NavLi href="/" class="text-black bg-white dark:bg-transparent">Home</NavLi>
    <NavLi href="/" class="text-black bg-white dark:bg-transparent">Navbar</NavLi>
    <NavLi href="/" class="text-black bg-white dark:bg-transparent">Accordion</NavLi>
    <NavLi href="/" class="text-black bg-white dark:bg-transparent">Alert</NavLi>
    <NavLi href="/" class="text-black bg-white dark:bg-transparent">Avatar</NavLi>
    <DarkMode />
  </NavUl>
</Navbar>