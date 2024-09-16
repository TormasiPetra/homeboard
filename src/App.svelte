<script lang="ts">
  import apple from "./assets/store_apple.png";
  import android from "./assets/store_android.png";
  import landing_0 from "./assets/img_landing_0.png";
  import landing_1 from "./assets/img_landing_1.png";
  import landing_2 from "./assets/img_landing_2.png";
  import landing_3 from "./assets/img_landing_3.png";
  import landing_4 from "./assets/img_landing_4.png";
  import boxes from "./assets/boxes_big_op.svg";
  import shadow from "./assets/shadow.svg";
  import bgBoxes from "./assets/bg-boxes.svg";
  import Header from "./Components/Header.svelte";

  import Home from './routes/Home.svelte';
  import Privacy from './routes/Privacy.svelte';
  import Terms from './routes/Terms.svelte';
  import Contact from './routes/Contact.svelte';
  import NotFound from './routes/Notfound.svelte';

  import Router, {link, location} from "svelte-spa-router";
  import Footer from "./Components/Footer.svelte";

  const routes = {
    '/': Home,
    '/privacy': Privacy,
    '/terms': Terms,
    '/contact': Contact,
    '*': NotFound // Wildcard (*) route to handle 404
  };
</script>


<Header/>

<Router {routes} />

<Footer />



