<script>
  import Nav from "$lib/components/Nav.svelte";
  import "../app.css"
   import { Button, GradientButton } from "flowbite-svelte";
</script>

<Nav />

<div class="w-[100vw] h-[100vh] dark:bg-gray-950 text-black p-4 dark:text-white">

  <!-- section -->
  <div class="pt-25 w-120">
    <h1 class="bungee-regular text-3xl">Percepat Transformasi Digital Bisnis Anda dengan Solusi <GradientButton shadow color="red" class="text-3xl">Website</GradientButton> Terjangkau</h1>
    <div class="flex">
  <Avatar src="/images/profile-picture-1.webp" stacked />
  <Avatar src="/images/profile-picture-2.webp" stacked />
  <Avatar src="/images/profile-picture-3.webp" stacked />
  <Avatar stacked href="/" class="bg-gray-700 text-sm text-white hover:bg-gray-600">+99</Avatar>
</div>
  </div>

</div>