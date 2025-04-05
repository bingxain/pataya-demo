<script setup>
import ExampleCard from "../Components/ExampleCard.vue";

// images
import imgteam2 from "@/assets/img/team-2.jpg";
import imgteam3 from "@/assets/img/team-3.jpg";
import imgteam4 from "@/assets/img/team-4.jpg";
import imgteam5 from "@/assets/img/team-5.jpg";
import { RouterLink } from "vue-router";

defineProps({
  action: {
    type: Object,
    route: String,
    color: String,
    label: String,
    default: () => ({
      route: "signin-basic",
      color: "bg-gradient-success",
      label: "Join our club",
    }),
  },
  id: {
    type: String,
    required: false,
  },
});
</script>
<template>
  <section class="py-5">
    <div class="container">
      <div class="row">
        <div class="row text-center my-sm-5 mt-5">
          <div class="col-lg-6 mx-auto">
            <RouterLink
              :to="{ name: action.route }"
              class="btn btn-sm mb-0"
              :class="action.color"
              onclick="smoothToPricing('pricing-soft-ui')"
              >{{ action.label }}</RouterLink
            >
            <h2 class="" :id="id">With our Service</h2>
            <p class="lead">
              The easiest way to get started is to use one of our <br />
              Services and Escorts.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-8">
          <div class="row mt-4">
            <div class="col-md-6 mt-md-0 mt-5">
              <ExampleCard
                class="shadow-lg"
                title="Albert"
                :image="imgteam2"
                route="about"
              />
            </div>
            <div class="col-md-6 mt-md-0 mt-5">
              <ExampleCard
                class="shadow-lg"
                title="Lisa"
                :image="imgteam3"
                route="contactus"
              />
            </div>
          </div>
          <div class="row mt-4">
            <div class="col-md-6 mt-md-0 mt-5">
              <ExampleCard
                classes="mt-5"
                title="Michel"
                :image="imgteam4"
                route="signin-basic"
              />
            </div>
            <div class="col-md-6 mt-md-0 mt-5">
              <ExampleCard
                classes="shadow-lg"
                title="Candy"
                :image="imgteam5"
                route="author"
              />
            </div>
          </div>
        </div>
        <div class="col-md-3 mx-auto mt-md-0 mt-3">
          <div class="position-sticky" style="top: 100px !important">
            <h3>
              Premium Escort Service, Perfect tour guide lady, We will Support
              it.
            </h3>
            <h6 class="text-secondary font-weight-normal">
              You can enjoy the journey to your heart's content, rather than
              safety and cost-effectiveness.
            </h6>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
