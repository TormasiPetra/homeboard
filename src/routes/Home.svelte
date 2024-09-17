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
  import bgBoxes from "./../assets/bg-boxes.svg";

  import { onMount } from "svelte";

  let scrollY = 0;

  // Function to update scroll position
  function handleScroll() {
    scrollY = window.scrollY;
  }

  // Add event listener when component mounts
  onMount(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
</script>

<main class="relative overflow-x-hidden">
  <section
    class="relative bg-primary p-10 md:p-12 lg:p-12 lg:pb-24 lg:pt-28 pb-0 flex justify-center items-center text-center xl:pt-32 xl:pb-22"
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
      class="z-40 flex justify-center flex-col lg:flex-row lg:gap-6 lg:justify-evenly items-center text-center"
    >
      <div class="w-full">
        <h1 class="text m-auto mb-4 max-w-[640px] lg:min-w-[320px] xl:text-5xl">
          Mood Board creator for interior designers
        </h1>

        <h2
          class="text m-auto px-4 mb-4 xl:mb-8 max-w-[640px] lg:min-w-[320px] xl:text-2xl"
        >
          HomeBoard is the best tool to create mood boards, making it easy to
          design your home.
        </h2>

        <div
          class="flex flex-col max-w-[320px] xl:max-w-[840px] md:flex-row md:justify-center m-auto gap-2 lg:gap-4 w-full mb-6"
        >
          <a
            class="flex items-center justify-center bg-secondary rounded-full text text-mg font-semibold min-h-10 min-w-[180px] lg:min-w-[220px] xl:px-8"
            href="https://apps.apple.com/us/app/moodboard-by-homeboard/id1612805374"
          >
            <img class="h-8 xl:h-10 mb-2" src={apple} alt="" />
            <h2 class="m-0 text opacity-100 xl:text-xl font-normal">Get iOS</h2>
          </a>

          <a
            class="flex items-center justify-center p-2 bg-secondary rounded-full text text-mg font-semibold min-h-10 gap-2 min-w-[180px] lg:px-8 lg:min-w-[220px]"
            href="https://play.google.com/store/apps/details?id=com.vdmnszk.hb&hl=en_US"
          >
            <img class="h-4" src={android} alt="" />
            <h2 class="mb-0 text opacity-100 xl:text-xl font-normal">
              Get Android
            </h2>
          </a>
        </div>
      </div>

      <div class="grid h-80 justify-center xl:mb-24">
        <img
          class="w-80 my-2 drop-shadow-lg lg:min-w-[400px] xl:min-w-[460px]"
          src={landing_0}
          alt="landing-0"
        />
      </div>
    </div>
  </section>

  <section class="mt-32 w-screen flex flex-col md:items-center">
    <div class="flex flex-col md:flex-row md:gap-4 lg:gap-12">
      <div class="max-md:hidden md:visible md:max-w-[480px] m-auto">
        <img class="" src={landing_1} alt="" />
      </div>
      <div
        class="flex flex-col md:justify-center md:ml-6 md:mt-20 md:min-w-[280px] md:m-auto"
      >
        <h1 class="max-w-[500px] xl:text-4xl lg:max-w-[450px]">
          Remove the backgrounds
        </h1>
        <h2 class="mb-6 max-w-[500px] xl:text-2xl lg:max-w-[450px]">
          Collect your images for visualization and easily erase the backgrounds
        </h2>
      </div>
      <div>
        <img class="md:hidden max-w-80 m-auto" src={landing_1} alt="" />
      </div>
    </div>

    <div
      class=" flex flex-col md:flex-row md:max-w-[1024px] md:justify-start md:gap-8 xl:gap-12"
    >
      <div
        class="flex flex-col md:max-w-[500px] md:justify-center md:mr-6 md:mb-40 mt-10 xl:mr-12"
      >
        <h1 class="xl:text-4xl">Keep organized with folders</h1>
        <h2 class="mb-10 max-w-[480px] xl:text-2xl">
          Use customizable folders for your projects and ideas, ensuring that
          all your materials are and neatly categorized
        </h2>
      </div>

      <div class="relative flex justify-center">
        <img
          class="max-w-[256px] drop-shadow-lg z-[1] mb-10"
          style="transform: translateY({scrollY * 0.045}px);"
          src={landing_2_0}
          alt=""
        />
        <img
          class="absolute top-12 md:top-12 md:left-1 max-w-80 drop-shadow-lg z-[2] transform"
          style="transform: translateY({scrollY * 0.015}px);"
          src={landing_2_1}
          alt=""
        />
        <img
          class="absolute top-14 md:top-10 md:-left-6 max-w-80 drop-shadow-lg z-[2] transform"
          src={landing_2_2}
          alt=""
        />
        <img
          class="absolute top-20 md:top-16 md:-left-12 max-w-80 object-cover drop-shadow-lg z-[2] transform"
          src={landing_2_3}
          alt=""
        />

        <img
          class="absolute -top-10 transform translate-x-2 min-w-[1200px] z-[0]"
          src={bgBoxes}
          alt=""
        />
      </div>
    </div>

    <div class="mt-24 md:mt-0 flex flex-col md:flex-row">
      <div class="m-auto max-md:hidden md:visible md:max-w-[640px]">
        <img class="mb-8" src={landing_3} alt="" />
      </div>
      <div class="md:m-auto md:min-w-[280px]">
        <h1 class="xl:text-4xl">Add Notes</h1>
        <h2 class=" max-w-[500px] xl:text-2xl lg:max-w-[450px]">
          Add notes to your <span class="text-secondary font-bold"
            >items detailing</span
          > material, size, product link, color, and more
        </h2>
      </div>
      <div>
        <img class="m-auto mb-8 md:hidden" src={landing_3} alt="" />
      </div>
    </div>

    <div
      class="flex flex-col md:flex-row md:max-w-[860px] md:justify-start md:gap-8 xl:gap-12 mt-6"
    >
      <div class="flex flex-col md:justify-center md:mr-6 md:mb-40 mt-10 xl:mr-12">
        <h1 class="xl:text-4xl">Create mood boards easily in no time</h1>
        <h2 class="xl:text-2xl">
          Add images, shapes, texts from various sources to start designing your
          home
        </h2>
      </div>
      <div class="md:max-w-[450px] md:min-w-[400px]">
        <img class="drop-shadow-lg" src={landing_4} alt="" />
      </div>
    </div>
  </section>

  <section class="bg-primary">
    <div class=" max-w-[1280px] w-full m-auto">
      <h1 class="text text-xl">Users said about us</h1>
      <div class="flex flex-col sm:flex-row sm:gap-4">
        <div
          class="card bg-white mr-14 sm:m-0 ml-4 px-4 py-6 mb-4 drop-shadow-lg"
        >
          <h2 class="font-bold">Highly recommended</h2>
          <p>
            I designed my first Airbnb with this help. Very useful! Do not know
            how else could I do it without this app.
          </p>
        </div>
        <div
          class="card bg-white ml-14 sm:m-0 mr-4 px-4 py-6 mb-4 drop-shadow-lg"
        >
          <h2 class="font-bold">Great app!</h2>
          <p>
            I love this app! It’s so easy to create mood boards and imagine how
            your room will look! 5 stars!!!!
          </p>
        </div>
        <div
          class="card bg-white mr-14 sm:m-0 ml-4 px-4 py-6 mb-4 drop-shadow-lg"
        >
          <h2 class="font-bold">Easy to use!</h2>
          <p>
            I am a designer and this app allows me to quickly create mood
            boards. I love it and use it all the time!
          </p>
        </div>
      </div>
    </div>
  </section>
</main>

<style>
  /* Custom styles if needed */
  /*  .transform {
    transition: transform 0.3s ease;
  } */
</style>
