<script setup>
// 引入 Vue 的生命週期鉤子
import { onMounted, onUnmounted } from "vue";

// 匯入基礎元件
// 導覽列元件 - 用於網站頂部導航
import NavbarDefault from "../..//examples/navbars/NavbarDefault.vue";
// 頁尾元件 - 用於網站底部資訊展示
import DefaultFooter from "../../examples/footers/FooterDefault.vue";
// 頁首元件 - 用於展示網站主要標題區域
import Header from "../../examples/Header.vue";
// 資訊卡片元件 - 用於展示會員等級資訊
import FilledInfoCard from "../../examples/cards/infoCards/FilledInfoCard.vue";

// 匯入 Vue Material Kit 2 元件
// 社群媒體按鈕元件 - 用於社群媒體分享功能
import MaterialSocialButton from "@/components/MaterialSocialButton.vue";

// 匯入頁面各區塊元件
// 計數器區塊
import PresentationCounter from "./Sections/PresentationCounter.vue";
// 頁面導覽區塊
import PresentationPages from "./Sections/PresentationPages.vue";
// 展示範例區塊
import PresentationExample from "./Sections/PresentationExample.vue";
// 設計區塊資料
import data from "./Sections/Data/designBlocksData";
// 開發者資訊區塊
import BuiltByDevelopers from "./Components/BuiltByDevelopers.vue";
// 用戶評價區塊
import PresentationTestimonials from "./Sections/PresentationTestimonials.vue";
// 資訊展示區塊
import PresentationInformation from "./Sections/PresentationInformation.vue";

// 匯入圖片資源
// 頁首背景圖片
import vueMkHeader from "@/assets/img/vue-mk-header.jpg";
// 波浪效果背景圖片
import wavesWhite from "@/assets/img/waves-white.jpg";
import { RouterLink } from "vue-router";

// 生命週期鉤子
const body = document.getElementsByTagName("body")[0];
// 元件掛載時添加所需的 CSS 類別
onMounted(() => {
  body.classList.add("presentation-page");
  body.classList.add("bg-gray-200");
});
// 元件卸載時移除添加的 CSS 類別，避免影響其他頁面
onUnmounted(() => {
  body.classList.remove("presentation-page");
  body.classList.remove("bg-gray-200");
});
</script>

<template>
  <!-- 固定在頂部的導覽列容器 -->
  <div class="container position-sticky z-index-sticky top-0">
    <div class="row">
      <div class="col-12">
        <NavbarDefault :sticky="true" />
      </div>
    </div>
  </div>

  <!-- 頁面頁首區域 - 包含主要標題和簡介 -->
  <Header>
    <div
      class="page-header min-vh-75"
      :style="`background-image: url(${vueMkHeader})`"
      loading="lazy"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-7 text-center mx-auto position-relative">
            <h1
              class="text-white pt-3 mt-n5 me-2"
              :style="{ display: 'inline-block ' }"
            >
              Welcome to Pattaya Nightlife
            </h1>
            <p class="lead text-white px-5 mt-3" :style="{ fontWeight: '500' }">
              Start living your dream with us and enter Pattaya nightlife.
            </p>
          </div>
        </div>
      </div>
    </div>
  </Header>

  <!-- 主要內容區域 -->
  <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6">
    <!-- 各個功能展示區塊 -->
    <PresentationCounter />
    <PresentationInformation />
    <PresentationExample :data="data" />
    <PresentationPages id="Guide" />
    <BuiltByDevelopers id="Insurance" />
    <!-- 會員等級卡片展示區域 -->
    <div class="container">
      <div class="row">
        <!-- 金卡會員資訊 -->
        <div class="col-lg-4">
          <FilledInfoCard
            class="p-4"
            :color="{ text: 'white', background: 'bg-gradient-success' }"
            :icon="{ component: 'flag', color: 'white' }"
            title="Gold VIP Member"
            description="In addition to providing exclusive VPI services to our partner Dining hall and Restaurant, we also provide real-time online services."
            :action="{
              route: 'signin-basic',
              label: { text: 'Join Us!', color: 'white' },
            }"
          />
        </div>
        <!-- 銀卡會員資訊 -->
        <div class="col-lg-4">
          <FilledInfoCard
            class="px-lg-1 mt-lg-0 mt-4 p-4"
            height="h-100"
            :icon="{ component: 'precision_manufacturing', color: 'success' }"
            title="Silver Member"
            description="Provide detailed information about all bars, clubs and restaurants that cooperate with us, and provide online consultation."
            :action="{
              route: 'signin-basic',
              label: { text: 'Join Us!' },
            }"
          />
        </div>
        <!-- 非會員資訊 -->
        <div class="col-lg-4">
          <FilledInfoCard
            class="px-lg-1 mt-lg-0 mt-4 p-4"
            :icon="{ component: 'receipt_long', color: 'success' }"
            title="Non-Member"
            description="Only provides basic introductions to tourist attractions and online AI consulting services."
            :action="{
              route: 'signin-basic',
              label: { text: '' },
            }"
          />
        </div>
      </div>
    </div>

    <!-- 用戶評價展示區域 -->
    <PresentationTestimonials />

    <!-- 產品優勢展示區域 - 使用漸層背景 -->
    <div
      class="container-fluid mt-sm-5 border-radius-xl"
      :style="{
        background: 'linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))',
      }"
    >
      <div
        class="page-header py-6 py-md-5 my-sm-3 mb-3 border-radius-xl"
        :style="{
          backgroundImage: `url(${wavesWhite})`,
        }"
        loading="lazy"
      >
        <span class="mask bg-gradient-dark"></span>
        <div class="container">
          <div class="row">
            <div class="d-flex justify-content-center p-5">
              <div class="col-lg-8 ms-lg-5 text-center">
                <h3 class="text-white">
                  Why choose to use our products and services
                </h3>
                <p class="text-white text-md">
                  Cause if you do, You can experience high-quality travel and
                  and the most in-depth VIP services that you have never 80% of
                  80% of users will choose to continue to request our services
                  after using it.
                </p>

                <RouterLink
                  :to="{ name: 'signin-basic' }"
                  class="btn btn-sm mb-0 bg-gradient-success px-5 py-3 mt-4"
                  >Join Our Club</RouterLink
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 社群媒體分享區域 -->
    <div class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-5 ms-auto">
            <h4 class="mb-1">Thank you for your support!</h4>
            <p class="lead mb-0">We deliver the best web products</p>
          </div>
          <!-- 社群媒體按鈕 -->
          <div class="col-lg-5 me-lg-auto my-lg-auto text-lg-end mt-5">
            <MaterialSocialButton
              route="https://twitter.com/intent/tweet?text=Check%20Material%20Design%20System%20made%20by%20%40CreativeTim%20%23webdesign%20%23designsystem%20%23bootstrap5&url=https%3A%2F%2Fwww.creative-tim.com%2Fproduct%2Fmaterial-design-system-pro"
              component="twitter"
              color="twitter"
              label="Tweet"
            />
            <MaterialSocialButton
              route="https://www.facebook.com/sharer/sharer.php?u=https://www.creative-tim.com/product/material-design-system-pro"
              component="facebook-square"
              color="facebook"
              label="Share"
            />
            <MaterialSocialButton
              route=""
              component="pinterest"
              color="pinterest"
              label="Pin it"
            />
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 頁面頁尾 -->
  <DefaultFooter />
</template>
