<script setup>
/*
=========================================================
* Vue Material Kit 2 - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vue-material-kit
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// 導入 Vue Router 的 RouterView 組件
// RouterView 用於渲染與當前路由匹配的組件
import { RouterView } from "vue-router";
</script>

<template>
  <!-- 
    路由視圖容器
    這裡會根據當前的 URL 路由來渲染相應的組件
    是應用程序的主要內容區域
  -->
  <router-view />
</template>
