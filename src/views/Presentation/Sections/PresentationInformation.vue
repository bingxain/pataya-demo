<script setup>
import RotatingCard from "../../../examples/cards/rotatingCards/RotatingCard.vue";
import RotatingCardFront from "../../../examples/cards/rotatingCards/RotatingCardFront.vue";
import RotatingCardBack from "../../../examples/cards/rotatingCards/RotatingCardBack.vue";
import DefaultInfoCard from "../../../examples/cards/infoCards/DefaultInfoCard.vue";
import ImgCardLadyFront from "../../../assets/img/Card_Lady_Front.jpg";
import ImgCardLadyBack from "../../../assets/img/Card_Lady_Back.jpg";

</script>
<template>
  <section class="my-5 py-5">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-4 ms-auto me-auto p-lg-4 mt-lg-0 mt-4">
          <RotatingCard>
            <RotatingCardFront
              :image="ImgCardLadyFront"
              icon="touch_app"
              title="Feel the <br /> Pattaya Nightlife"
              description="All the services you need during your trip have been evaluated to give you a brand new experience."
            />

            <RotatingCardBack
              :image="ImgCardLadyBack"
              title="Discover More"
              description="You will save a lot of time going from High-quality travel, because all the locations have been screened by professional staff for you."
              :action="[
                {
                  route: 'signin-basic',
                  label: 'Join our club',
                  // color: 'red',
                },
              ]"
            />
          </RotatingCard>
        </div>
        <div class="col-lg-6 ms-auto">
          <div class="row justify-content-start">
            <DefaultInfoCard
              icon="content_copy"
              title="Concierge Service"
              description="Only cooperate with legit entertainment businesses to ensure the hightest quality nightlife as you wish."
            />
            <DefaultInfoCard
              icon="flip_to_front"
              title="Join US now"
              description="The most discreet and exciting entertainment website for Pattaya nightlife. Safety and optimal pricing are our essential goals."
            />
          </div>
          <div class="row justify-content-start mt-5">
            <DefaultInfoCard
              class="mt-3"
              icon="price_change"
              title="Save Time & Money"
              description="Our informative website with promotional coupons are here to complete your amazing nightlife in Pattaya."
            />
            <DefaultInfoCard
              class="mt-3"
              icon="devices"
              title="VIP Customer Service"
              description="Our VIP Customer Service provides consistency and
                          reliability of superior, VIP customer service and integration
                          of cloud and artificial intelligence technology."
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
