// 從 Vue 中導入 createApp 函數，用於創建 Vue 應用實例
import { createApp } from "vue";
// 導入 Pinia 狀態管理庫
import { createPinia } from "pinia";
// 導入根組件 App
import App from "./App.vue";
// 導入路由配置
import router from "./router";

// 導入 Nucleo 圖標相關的 CSS 文件
import "./assets/css/nucleo-icons.css";
import "./assets/css/nucleo-svg.css";

// 導入 Material Kit 主題/插件
import materialKit from "./material-kit";

// 創建 Vue 應用實例
const app = createApp(App);

// 使用 Pinia 進行狀態管理
app.use(createPinia());
// 使用路由
app.use(router);
// 使用 Material Kit
app.use(materialKit);
// 將應用掛載到 ID 為 app 的 DOM 元素上
app.mount("#app");
