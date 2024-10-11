<script lang="ts">
  import { link } from "svelte-spa-router";
  import imgApp from "./../assets/img_appstore.png";
  import imgGoogleplay from "./../assets/img_googleplay.png";
  import logomini from "./../assets/img_logo_mini_homeboard.svg";
</script>

<footer id="footer" class=" left-0 right-0 bottom-0 p-6 text-center z-10">
  <div
    class="px-8 pb-12 flex flex-col sm:flex-row gap-4 justify-center items-center"
  >
    <a href="https://apps.apple.com/us/app/moodboard-by-homeboard/id1612805374">
      <img class="max-w-[200px]" src={imgApp} alt="appstore" /></a
    >
    <a
      href="https://play.google.com/store/apps/details?id=com.vdmnszk.hb&hl=en_US"
    >
      <img class="max-w-[200px]" src={imgGoogleplay} alt="googleplay" /></a
    >
  </div>
  <div class="flex flex-col justify-evenly items-center gap-4">
    <div class="flex flex-col justify-evenly items-center gap-4">
      <a use:link href="/privacy">Privacy Policy</a>
      <a use:link href="/terms">Term of use</a>
      <a href="mailto:homeboard@vdmnszk.com">Contact</a>
    </div>
    <img class="max-w-20" src={logomini} alt="logo" />
  </div>
  <h3 class="mt-12">© VDMNSZK Ltd. All rights reserved.</h3>
</footer>
