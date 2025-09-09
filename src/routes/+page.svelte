<script>
  import Nav from "$lib/components/Nav.svelte";
  import "../app.css"
  import { Button, GradientButton, Avatar} from "flowbite-svelte";

  import { onMount, onDestroy } from "svelte";

  // Skeleton
  import { Skeleton } from "flowbite-svelte";

  // Transition
  import { fade } from 'svelte/transition';

  let scrollEl;
  let scrollInstance;

  onMount(async () => {
    const LocomotiveScroll = (await import("locomotive-scroll")).default;

    // Wait until scrollEl is ready
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
    // Important! Destroy the instance to prevent crashes
    if (scrollInstance) {
      scrollInstance.destroy();
    }
  });
</script>

<Nav />

<div class="w-[100vw] h-auto dark:bg-gray-950 text-black p-4 dark:text-white overflow-hidden" bind:this={scrollEl} data-scroll-container>
  <!-- section -->
  <div class="w-full h-[100vh] flex justify-center items-center">
    <div class="w-120" transition:fade>
      <Skeleton size="h1" class="mb-4" />
      <div class="flex">
        <Skeleton size="avatar" class="mr-2" />
        <Skeleton size="avatar" class="mr-2" />
        <Skeleton size="avatar" class="mr-2" />
        <Skeleton size="avatar" class="mr-2" />
      </div>
      <Skeleton size="sm" class="my-8" />
    </div>
  </div>
</div>