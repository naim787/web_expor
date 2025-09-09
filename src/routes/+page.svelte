<script>
  import Nav from "$lib/components/Nav.svelte";
  import "../app.css"
  import { Button, GradientButton, Avatar} from "flowbite-svelte";

  
</script>

<Nav />

<div class="w-[100vw] h-[100vh] dark:bg-gray-950 text-black p-4 dark:text-white overflow-hidden" bind:this={scrollEl} data-scroll-container>

  <!-- section -->
   <div class="w-[100vw] h-[100vh] flex justify-center items-center">
     <div class="w-120">
       <h1 class="bungee-regular text-5xl">Percepat Transformasi Digital Bisnis Anda dengan Solusi <GradientButton shadow color="red" class="text-3xl">Website</GradientButton> Terjangkau</h1>
       <div class="flex">
         <Avatar src="https://images.nightcafe.studio/jobs/REDfxKehp6X24LqqFDwj/REDfxKehp6X24LqqFDwj--0--kydh4.jpg?tr=w-1600,c-at_max" stacked />
         <Avatar src="https://images.nightcafe.studio/jobs/7wY35HmH7kDK5IWkXM53/7wY35HmH7kDK5IWkXM53--0--x64ol.jpg?tr=w-1600,c-at_max" stacked />
         <Avatar src="https://images.nightcafe.studio/jobs/Hz3hy7nuh0EB0JEdOKG0/Hz3hy7nuh0EB0JEdOKG0--0--79lhe.jpg?tr=w-1600,c-at_max" stacked />
       <Avatar stacked href="/" class="bg-gray-700 text-sm text-white hover:bg-gray-600">+5230</Avatar>
      </div>
     </div>
   </div>

</div>