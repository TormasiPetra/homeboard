<script lang="ts">
  import { link } from "svelte-spa-router";
  import imgApp from "./../assets/img_appstore.png"
  import imgGoogleplay from "./../assets/img_googleplay.png"
</script>

<footer class=" left-0 right-0 bottom-0 p-6 text-center z-10">
    
    <div class="p-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
      <a href="https://apps.apple.com/us/app/moodboard-by-homeboard/id1612805374">
      <img class="max-w-[224px]" src={imgApp} alt="appstore"></a>
      <a href="https://play.google.com/store/apps/details?id=com.vdmnszk.hb&hl=en_US">
      <img class="max-w-[224px]" src={imgGoogleplay} alt="googleplay"></a>
    </div>
    <div class="flex flex-col md:flex-row md:max-w-[436px] md:m-auto justify-evenly items-center gap-4">
      <a  href="/#/privacy">Privacy Policy</a>
      <a  href="/#/terms">Term of use</a>
      <a  href="/#/contact">Contact</a>
    </div>
    <h3 class="mt-12">© VDMNSZK Ltd. All rights reserved.</h3>
  </footer>