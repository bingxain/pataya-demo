<script setup>
import DefaultCounterCard from "../../../examples/cards/counterCards/DefaultCounterCard.vue";
</script>

<template>
  <section class="pt-3 pb-4" id="count-stats">
    <div class="container">
      <div class="row">
        <div class="col-lg-9 z-index-2 border-radius-xl mx-auto py-3">
          <div class="row">
            <div class="col-md-4 position-relative">
              <DefaultCounterCard
                color="success"
                title="Joined Members"
                description="Provide safe and high-quality nightlife activities for a fast-growing number of members."
                :count="5000"
                suffix="+"
                :duration="9000"
                divider="vertical"
              />
            </div>
            <div class="col-md-4 position-relative">
              <DefaultCounterCard
                color="success"
                title="Selected Business Partners"
                description="Only work with partners with high operational standards."
                :count="300"
                suffix="+"
                :duration="13000"
                divider="vertical"
              />
            </div>
            <div class="col-md-4">
              <DefaultCounterCard
                color="success"
                title="Promotions & Coupons"
                description="Big savings on your nightlife activities to keep your amazing night last longer."
                :count="200000"
                suffix="+"
                :duration="17000"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
