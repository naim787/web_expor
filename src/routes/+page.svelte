<script>
  import Nav from "$lib/components/Nav.svelte";
  import "../app.css"
  import { Button, GradientButton, Avatar} from "flowbite-svelte";

  //device
  import { DeviceMockup } from "flowbite-svelte";

  import { onMount, onDestroy } from "svelte";

// skeleton
  import { Skeleton } from "flowbite-svelte";
  let bannerLabel;
  onMount(async() => {
      bannerLabel = await [
       "https://images.nightcafe.studio/jobs/REDfxKehp6X24LqqFDwj/REDfxKehp6X24LqqFDwj--0--kydh4.jpg?tr=w-1600,c-at_max",
       "https://images.nightcafe.studio/jobs/7wY35HmH7kDK5IWkXM53/7wY35HmH7kDK5IWkXM53--0--x64ol.jpg?tr=w-1600,c-at_max",
       "https://images.nightcafe.studio/jobs/Hz3hy7nuh0EB0JEdOKG0/Hz3hy7nuh0EB0JEdOKG0--0--79lhe.jpg?tr=w-1600,c-at_max"
     ];
  });

// transation
  import { fade } from 'svelte/transition';

  let scrollEl;
  let scrollInstance;

  onMount(async () => {
    const LocomotiveScroll = (await import("locomotive-scroll")).default;

    // Tunggu hingga scrollEl siap
    if (scrollEl) {
      scrollInstance = new LocomotiveScroll({
        el: scrollEl,
        smooth: true,
        smoothMobile: false,
        getSpeed: true,
        getDirection: true
      });
    }
  });

  onDestroy(() => {
    // Penting! Hancurkan instance agar tidak crash
    if (scrollInstance) {
      scrollInstance.destroy();
    }
  });
</script>

  <Nav />
  
  <div class="w-[100vw] h-auto dark:bg-gray-950 text-black p-4 dark:text-white overflow-hidden" bind:this={scrollEl} data-scroll-container>
  
    <!-- section -->
     <div class="w-full h-[100vh] flex justify-center items-center flex-col md:flex-row">
       <div class="w-120" transition:fade>
         {#if bannerLabel}
         <h1 class="bungee-regular text-5xl">Percepat Transformasi Digital Bisnis Anda dengan Solusi <GradientButton shadow color="red" class="text-3xl">Website</GradientButton> Terjangkau</h1>
         <div class="flex">
            {#each bannerLabel as banner}
              <Avatar src={banner} stacked />
            {/each}
            <Avatar stacked href="/" class="bg-gray-700 text-sm text-white hover:bg-gray-600">+5230</Avatar>

          </div>
            {:else}
            <Skeleton size="sm" class="my-8" />
          {/if}
        </div>

        <DeviceMockup device="laptop">
          <div class="w-150 h-200 bg-gray-950 relative text-white">
            <!-- nav -->
            <div class="w-full h-8 bg-black flex justify-between items-center p-2 shadow-2xl shadow-white/20">
              <div class="self-center font-bold text-[15px] bungee-regular">WEBEXPOR</div>
              <div class="w-70 text-[10px]">
                <a href="/" class="">Pertanyaan</a>
                <a href="/" class="">Template</a>
                <a href="/" class="">Tutorial</a>
                <a href="/" class="">Tentag Kami</a>
              </div>
            </div>

            <div class="">
              <img src="./tmp0.webp" alt="" class="w-20">
            </div>
          </div>
        </DeviceMockup>
     </div>
  
  </div>