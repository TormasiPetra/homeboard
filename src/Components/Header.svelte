<script lang="ts">
  import { link } from "svelte-spa-router";
  import logo from "./../assets/img_logo_homeboard_white.svg";


</script>



<header
  class="sticky w-full flex justify-between items-center py-2 px-4 md:px-8 bg-primary  top-0 z-50"
>
  <a href="/#/" class="logo text">
    <img class="h-8" src={logo} alt="logo" />
  </a>

  <nav class="flex gap-2">
    <a
    use:link
      href="/privacy"
      class="blog btn border-none btn-accent bg-opacity-80 text-primary-content"
      >Privacy</a
    >
    <a use:link href="/terms" class="download btn text-primary-content btn-outline">Terms</a
    >
  </nav>
</header>

