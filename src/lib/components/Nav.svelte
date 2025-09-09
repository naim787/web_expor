<script>
    import { page } from "$app/state";
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from "flowbite-svelte";
    import { DarkMode } from "flowbite-svelte";
    let activeUrl = $derived(page.url.pathname);
</script>

<Navbar class="backdrop-blur-2xl border-b-1 border-gray-200 fixed shadow-2xl shadow-white">
  <NavBrand href="/">
    <span class="self-center whitespace-nowrap dark:text-white font-bold text-2xl bungee-regular">WEBEXPOR</span>
  </NavBrand>
  <NavHamburger />
  <NavUl {activeUrl}>
    <NavLi href="/" class="text-black bg-white dark:bg-transparent">Pertannyaan</NavLi>
    <NavLi href="/" class="text-black bg-white dark:bg-transparent">Template</NavLi>
    <NavLi href="/" class="text-black bg-white dark:bg-transparent">Tutorial</NavLi>
    <NavLi href="/" class="text-black bg-white dark:bg-transparent">Tentag Kami</NavLi>
    <DarkMode />
  </NavUl>
</Navbar>