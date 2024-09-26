<script lang="ts">
  import { link } from "svelte-spa-router";

  import logo from "./../assets/img_logo_homeboard_white.svg";
  import pinterest from "./../assets/pinterest.svg";
  import instagram from "./../assets/instagram.svg";
  import andro from "./../assets/store_android.png";
</script>

<header
  class="sticky w-full flex justify-between items-center py-2 px-4 md:px-8 bg-primary top-0 z-50"
>
  <a href="/#/" class="logo text">
    <img class="h-8" src={logo} alt="logo" />
  </a>

  <nav class="flex gap-2 justify-center items-center">
    <a class="text-white" href="https://hu.pinterest.com/homeboardapp/"> 
      <img class="h-10" src={pinterest} alt="" /></a>
    <a href="https://www.instagram.com/homeboard.app/"> <img class="h-10" src={instagram} alt="" /></a>

    <div class="dropdown dropdown-end dropdown-hover">
      <div tabindex="0" role="button" class="download h-10 outline outline-2 rounded-full text-primary-content px-4 py-2">Download</div>
      <div class="dropdown-content pt-4">
      <ul tabindex="0" class=" menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
        <li>
          <a href="https://apps.apple.com/hu/app/id1612805374">Download for iOS</a></li>
        <li><a href="https://play.google.com/store/apps/details?id=com.vdmnszk.hb">Download for Android</a></li>
      </ul></div>
    </div>
    <!-- <a href="/#/" class="download h-10 outline outline-2 rounded-full text-primary-content px-4 py-2"
      >Download</a
    > -->
  </nav>
</header>
