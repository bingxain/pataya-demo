<script setup>
defineProps({
  id: {
    type: String,
    required: false,
  },
});
</script>
<template>
  <div class="container mt-sm-5">
    <div
      class="page-header py-6 py-md-5 my-sm-3 mb-3 border-radius-xl"
      :style="{
        backgroundImage:
          'url(https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/desktop.jpg)'
      }"
      loading="lazy"
    >
      <span class="mask bg-gradient-dark"></span>
      <div class="container">
        <div class="row">
          <div :id="id" class="col-lg-6 ms-lg-5">
            <h4 class="text-white">Our Partners</h4>
            <h1 class="text-white">Travel Insurance</h1>
            <p class="lead text-white opacity-8">
              Cooperate with insurance companies to provide the most immediate
              online consulting services and insurance. Let you not be afraid of
              any difficulties during your travel.
            </p>
            <a
              href="https://www.pamolaw.com/travelpro/"
              class="text-white icon-move-right"
            >
              Read me
              <i class="fas fa-arrow-right text-sm ms-1"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
