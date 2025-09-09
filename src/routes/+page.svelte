<script>
  import Nav from "$lib/components/Nav.svelte";
  import { onMount } from "svelte";
  import "../app.css";
  import { Gallery, Label, Input } from "flowbite-svelte";
  import { SearchOutline } from "flowbite-svelte-icons";

  const images = [
    { alt: "shoes", src: "./tmp0.webp" },
    { alt: "small bag", src: "./tmp1.webp" },
    { alt: "plants", src: "./tmp1.webp" },
    { alt: "watch", src: "./tmp0.webp" }
  ];

  let Domain = "";

  onMount(async () => {
    const res = await fetch("/?domain=webexpor.com");
    const data = await res.json();
    console.log(JSON.stringify(data)); // Tampilkan data sebagai string JSON
    console.table(data); // Tampilkan data dalam format tabel
  });
</script>

<Nav />

<div class="dark:bg-gray-950 dark:text-white w-[100vw] h-[100vh] p-2">
  <div class="w-full justify-evenly items-center flex pt-[15vh]">
    <div class="w-100">
      <h1 class="text-5xl font-bold bungee-regular">Mulailah Deggan Lagkah <span class="text-orange-500">Besar</span> Tanpa Biaya Besar</h1>
      <Input id="text" type="text" placeholder="Cari Domain" class="pl-8" bind:value={Domain} />
    </div>
    <Gallery class="grid-cols-2 gap-2 w-100" items={images} />
  </div>
</div>