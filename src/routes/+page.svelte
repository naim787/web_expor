<script>
  import Nav from "$lib/components/Nav.svelte";
  import { onMount } from "svelte";
  import "../app.css";
  import { Gallery , Label, Input} from "flowbite-svelte";
  import { SearchOutline } from "flowbite-svelte-icons";
  //  <SearchOutline class="shrink-0 h-6 w-6" />

  const images = [
    { alt: "shoes", src: "./tmp0.webp" },
    { alt: "small bag", src: "./tmp1.webp" },
    { alt: "plants", src: "./tmp1.webp" },
    { alt: "watch", src: "./tmp0.webp" }
  ];
  
  let Domain = "";

  async function searchDomain() {
    const res = await fetch(`/?domain=naimabdullah.my.id${}`);
    const data = await res.json();
  }
  
  onMount( async() => {
    await searchDomain();
  });
  
</script>

<Nav />

<div class="dark:bg-gray-950 dark:text-white w-[100vw] h-[100vh] p-2">

  <div class="w-full justify-evenly items-center flex pt-[15vh]">
    <!-- // jusudul -->
    <div class="w-100">
       <h1 class="text-5xl font-bold bungee-regular">Mulailah Deggan Lagkah <span class="text-orange-500">Besar</span> Tanpa Biaya Besar</h1>
       <Input id="text" type="text" placeholder="Cari Domain" class="pl-8" bind:value={Domain}>
        {#snippet left()}
        <SearchOutline class="shrink-0 h-6 w-6" />
        {/snippet}
      </Input>
      <h1 class="text-red-500 text-2xl">{Domain}</h1>
    </div>
  
    <!-- tremplate gerak -->
     <!-- <div class="w-200 h-60 border">
      <img src="./tmp0.webp" alt="" class="w-60">
     </div> -->
    <Gallery class="grid-cols-2 gap-2 w-100" items={images} />
  </div>
</div>
