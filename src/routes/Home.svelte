<script lang="ts">
 import apple from "./../assets/store_apple.png";
  import android from "./../assets/store_android.png";
  import landing_0 from "./../assets/img_landing_0.png";
  import landing_1 from "./../assets/img_landing_1.png";
  import landing_2 from "./../assets/img_landing_2.png";
  import landing_2_0 from "./../assets/img_landing_2_0.png";
  import landing_2_1 from "./../assets/img_landing_2_1.png";
  import landing_2_2 from "./../assets/img_landing_2_2.png";
  import landing_2_3 from "./../assets/img_landing_2_3.png";
  import landing_3 from "./../assets/img_landing_3.png";
  import landing_4 from "./../assets/img_landing_4.png";
  import boxes from "./../assets/boxes_big_op.svg";
  import shadow from "./../assets/shadow.svg";
  import bgBoxes from "./../assets/bg-boxes.svg";
  import Header from "../Components/Header.svelte";
import { location } from "svelte-spa-router";
  import Footer from "../Components/Footer.svelte";
</script>

<main class="relative w-screen overflow-hidden">
   
    <section
      class="relative bg-primary p-10 md:p-12 lg:p-12 pb-0 flex justify-center items-center text-center"
    >
      <div
        class="z-10 absolute top-0 w-screen h-20 bg-gradient-to-b from-primary/100 to-primary/0
  "
      ></div>
  
      <img
        class="absolute -bottom-40 min-w-[1200px] w-screen"
        src={boxes}
        alt=""
      />
  
      <div
        class="z-40 flex justify-center flex-col lg:flex-row lg:gap-6 items-center text-center"
      >
        <div class="w-full">
          <h1 class="text m-auto mb-4 max-w-[640px] lg:min-w-[320px]">
            Mood Board creator for interior designers
          </h1>
  
          <h2 class="text m-auto px-4 mb-4 max-w-[640px] lg:min-w-[320px]">
            HomeBoard is the best tool to create mood boards, making it easy to
            design your home.
          </h2>
  
          <div
            class="flex flex-col max-w-[320px] md:flex-row md:justify-center m-auto gap-2 lg:gap-4 w-full mb-6"
          >
            <a
              class="flex items-center justify-center bg-secondary rounded-full text text-mg font-semibold h-10 min-w-[180px]"
              href="#"
            >
              <img class="h-8" src={apple} alt="" />
              <h2 class="mb-0 text opacity-100">Get iOS</h2>
            </a>
  
            <a
              class="flex items-center justify-center p-2 bg-secondary rounded-full text text-mg font-semibold h-10 gap-2 min-w-[180px]"
              href="#"
            >
              <img class="h-4" src={android} alt="" />
              <h2 class="mb-0 text opacity-100">Get Android</h2>
            </a>
          </div>
        </div>
  
        <div class="grid h-80 lg:w-[640px]">
          <img class="w-80 my-2 drop-shadow-lg" src={landing_0} alt="landing-0" />
        </div>
      </div>
    </section>
  
    <section class="mt-32 w-screen flex flex-col md:items-center">
      <div class="flex flex-col md:flex-row md:max-w-[1024px]">
        <div class="max-md:hidden md:visible">
          <img class="max-w-80 md:max-w-96 m-auto" src={landing_1} alt="" />
        </div>
        <div
          class="flex flex-col md:max-w-[350px] md:justify-center md:ml-6 md:mt-20"
        >
          <h1 class="">Remove the backgrounds</h1>
          <h2 class="mb-6">
            Collect your images for visualization and easily erase the backgrounds
          </h2>
        </div>
        <img class="md:hidden max-w-80 m-auto" src={landing_1} alt="" />
      </div>
  
      <div class=" flex flex-col md:flex-row md:max-w-[1024px]">
        <div
          class="flex flex-col md:max-w-[350px] md:justify-center md:mr-6 md:mb-40"
        >
          <h1 class="">Keep organized with folders</h1>
          <h2 class="mb-10 max-w-[480px]">
            Use customizable folders for your projects and ideas, ensuring that
            all your materials are and neatly categorized
          </h2>
        </div>
  
        <div class="relative flex justify-center">
          <img class="max-w-64 drop-shadow-lg" src={landing_2_0} alt="" />
          <img class="absolute max-w-64 drop-shadow-lg" src={landing_2_1} alt="" />
          <img class="absolute max-w-64 drop-shadow-lg" src={landing_2_2} alt="" />
          <img class="absolute max-w-64 object-cover drop-shadow-lg" src={landing_2_3} alt="" />
  
          <img class="absolute -top-10 transform translate-x-2 min-w-[1200px] z-[-1]" src={bgBoxes} alt="" /></div>
        
      </div>
  
      <h1 class="mt-16">
        Add Notes
        <br /> travel choices
      </h1>
      <h2 class=" max-w-[500px]">
        Add notes to your <span class="text-secondary font-bold"
          >items detailing</span
        > material, size, product link, color, and more
      </h2>
  
      <img class="m-auto mb-8 max-w-96" src={landing_3} alt="" />
  
      <h1 class="">Create mood boards easily in no time</h1>
      <h2 class="">
        Add images, shapes, texts from various sources to start designing your
        home
      </h2>
      <div class="relative">
        <img class="drop-shadow-lg max-w-96 m-auto" src={landing_4} alt="" />
      </div>
    </section>
  
    <section class="bg-primary">
      <h1 class="text text-xl">Users said about us</h1>
      <div class="card bg-white mr-14 ml-4 px-4 py-2 mb-4 drop-shadow-lg">
        <h2 class="font-bold">Highly recommended</h2>
        <p>
          I designed my first Airbnb with this help. Very useful! Do not know how
          else could I do it without this app.
        </p>
      </div>
      <div class="card bg-white ml-14 mr-4 px-4 py-2 mb-4 drop-shadow-lg">
        <h2 class="font-bold">Great app!</h2>
        <p>
          I love this app! It’s so easy to create mood boards and imagine how your
          room will look! 5 stars!!!!
        </p>
      </div>
      <div class="card bg-white mr-14 ml-4 px-4 py-2 mb-4 drop-shadow-lg">
        <h2 class="font-bold">Easy to use!</h2>
        <p>
          I am a designer and this app allows me to quickly create mood boards. I
          love it and use it all the time!
        </p>
      </div>
    </section>
  
  </main>