<script setup>
import { RouterLink } from "vue-router";
import { ref, watch } from "vue";
import { useWindowsWidth } from "../../assets/js/useWindowsWidth";

// images
import ArrDark from "@/assets/img/down-arrow-dark.svg";
import downArrow from "@/assets/img/down-arrow.svg";
import DownArrWhite from "@/assets/img/down-arrow-white.svg";

const scrollTo = (id) => {
  let element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const props = defineProps({
  action: {
    type: Object,
    route: String,
    color: String,
    label: String,
    default: () => ({
      route: "signin-basic",
      color: "bg-gradient-success",
      label: "Login",
    }),
  },
  transparent: {
    type: Boolean,
    default: false,
  },
  light: {
    type: Boolean,
    default: false,
  },
  dark: {
    type: Boolean,
    default: false,
  },
  sticky: {
    type: Boolean,
    default: false,
  },
  darkText: {
    type: Boolean,
    default: false,
  },
  isLogin: {
    type: Boolean,
    default: true,
  },
});

// set arrow  color
function getArrowColor() {
  if (props.transparent && textDark.value) {
    return ArrDark;
  } else if (props.transparent) {
    return DownArrWhite;
  } else {
    return ArrDark;
  }
}

// set text color
const getTextColor = () => {
  let color;
  if (props.transparent && textDark.value) {
    color = "text-dark";
  } else if (props.transparent) {
    color = "text-white";
  } else {
    color = "text-dark";
  }

  return color;
};

// set nav color on mobile && desktop

let textDark = ref(props.darkText);
const { type } = useWindowsWidth();

if (type.value === "mobile") {
  textDark.value = true;
} else if (type.value === "desktop" && textDark.value == false) {
  textDark.value = false;
}

watch(
  () => type.value,
  (newValue) => {
    if (newValue === "mobile") {
      textDark.value = true;
    } else {
      textDark.value = false;
    }
  }
);
</script>
<template>
  <nav
    class="navbar navbar-expand-lg top-0"
    :class="{
      'z-index-3 w-100 shadow-none navbar-transparent position-absolute my-3':
        props.transparent,
      'my-3 blur border-radius-lg z-index-3 py-2 shadow py-2 start-0 end-0 mx-4 position-absolute mt-4':
        props.sticky,
      'navbar-light bg-white py-3': props.light,
      ' navbar-dark bg-gradient-dark z-index-3 py-3': props.dark,
    }"
  >
    <div
      :class="
        props.transparent || props.light || props.dark
          ? 'container'
          : 'container-fluid px-0'
      "
    >
      <RouterLink
        class="navbar-brand d-none d-md-block"
        :class="[
          (props.transparent && textDark.value) || !props.transparent
            ? 'text-dark font-weight-bolder ms-sm-3'
            : 'text-white font-weight-bolder ms-sm-3',
        ]"
        :to="{ name: 'presentation' }"
        rel="tooltip"
        title="Designed and Coded by Creative Tim"
        data-placement="bottom"
      >
      Pattaya Nightlife
      </RouterLink>
      <RouterLink
        class="navbar-brand d-block d-md-none"
        :class="
          props.transparent || props.dark
            ? 'text-white'
            : 'font-weight-bolder ms-sm-3'
        "
        to="/"
        rel="tooltip"
        title="Designed and Coded by Creative Tim"
        data-placement="bottom"
      >
        Pattaya Nightlife
      </RouterLink>
      <RouterLink
        v-if="isLogin"
        :to="{ name: 'signin-basic' }"
        class="btn btn-sm bg-gradient-success mb-0 ms-auto d-lg-none d-block"
        >Login</RouterLink
      >
      <button
        class="navbar-toggler shadow-none ms-2"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navigation"
        aria-controls="navigation"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon mt-2">
          <span class="navbar-toggler-bar bar1"></span>
          <span class="navbar-toggler-bar bar2"></span>
          <span class="navbar-toggler-bar bar3"></span>
        </span>
      </button>
      <div
        class="collapse navbar-collapse w-100 pt-3 pb-2 py-lg-0"
        id="navigation"
      >
        <ul class="navbar-nav navbar-nav-hover ms-auto">
          <li class="nav-item dropdown dropdown-hover mx-2">
            <a
              role="button"
              class="nav-link ps-2 d-flex cursor-pointer align-items-center"
              :class="getTextColor()"
              id="dropdownMenuPages"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i
                class="material-icons opacity-6 me-2 text-md"
                :class="getTextColor()"
                >dashboard</i
              >
              Discovery
              <img
                :src="getArrowColor()"
                alt="down-arrow"
                class="arrow ms-2 d-lg-block d-none"
              />
              <img
                :src="getArrowColor()"
                alt="down-arrow"
                class="arrow ms-1 d-lg-none d-block ms-auto"
              />
            </a>
            <div
              class="dropdown-menu dropdown-menu-animation ms-n3 dropdown-md p-3 border-radius-xl mt-0 mt-lg-3"
              aria-labelledby="dropdownMenuPages"
            >
              <div class="row d-none d-lg-block">
                <div class="col-12 px-4 py-2">
                  <div class="row">
                    <div class="position-relative">
                      <div
                        class="dropdown-header text-dark font-weight-bolder d-flex align-items-center px-1"
                      >
                        Our Club
                      </div>
                      <RouterLink
                        :to="{ name: 'about' }"
                        class="dropdown-item border-radius-md"
                      >
                        <span>About Us</span>
                      </RouterLink>
                      <RouterLink
                        :to="{ name: 'contactus' }"
                        class="dropdown-item border-radius-md"
                      >
                        <span>Contact Us</span>
                      </RouterLink>
                      <RouterLink
                        :to="{ name: 'author' }"
                        class="dropdown-item border-radius-md"
                      >
                        <span>Author</span>
                      </RouterLink>
                      <div
                        class="dropdown-header text-dark font-weight-bolder d-flex align-items-center px-0 mt-3"
                      >
                        Account
                      </div>
                      <RouterLink
                        :to="{ name: 'signin-basic' }"
                        class="dropdown-item border-radius-md"
                      >
                        <span>Sign In</span>
                      </RouterLink>
                    </div>
                  </div>
                </div>
              </div>
              <div class="d-lg-none">
                <div
                  class="dropdown-header text-dark font-weight-bolder d-flex align-items-center px-0"
                >
                  Our Club
                </div>
                <RouterLink
                  :to="{ name: 'about' }"
                  class="dropdown-item border-radius-md"
                >
                  <span>About Us</span>
                </RouterLink>
                <RouterLink
                  :to="{ name: 'contactus' }"
                  class="dropdown-item border-radius-md"
                >
                  <span>Contact Us</span>
                </RouterLink>
                <RouterLink
                  :to="{ name: 'author' }"
                  class="dropdown-item border-radius-md"
                >
                  <span>Author</span>
                </RouterLink>
                <div
                  class="dropdown-header text-dark font-weight-bolder d-flex align-items-center px-0 mt-3"
                >
                  Account
                </div>
                <RouterLink
                  :to="{ name: 'signin-basic' }"
                  class="dropdown-item border-radius-md"
                >
                  <span>Sign In</span>
                </RouterLink>
              </div>
            </div>
          </li>
          <li v-if="isLogin" class="nav-item dropdown dropdown-hover mx-2">
            <a
              role="button"
              class="nav-link ps-2 d-flex cursor-pointer align-items-center"
              :class="getTextColor()"
              id="dropdownMenuBlocks"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i
                class="material-icons opacity-6 me-2 text-md"
                :class="getTextColor()"
                >view_day</i
              >
              Service
              <img
                :src="getArrowColor()"
                alt="down-arrow"
                class="arrow ms-2 d-lg-block d-none"
              />
              <img
                :src="getArrowColor()"
                alt="down-arrow"
                class="arrow ms-1 d-lg-none d-block ms-auto"
              />
            </a>
            <div
              class="dropdown-menu dropdown-menu-end dropdown-menu-animation dropdown-md dropdown-md-responsive p-3 border-radius-lg mt-0 mt-lg-3"
              aria-labelledby="dropdownMenuBlocks"
            >
              <div class="d-none d-lg-block">
                <ul class="list-group">
                  <li
                    class="nav-item dropdown dropdown-hover dropdown-subitem list-group-item border-0 p-0"
                  >
                    <a
                      class="dropdown-item py-2 ps-3 border-radius-md"
                      href="javascript:;"
                    >
                      <div class="d-flex">
                        <div
                          class="w-100 d-flex align-items-center justify-content-between"
                        >
                          <div>
                            <h6
                              class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"
                            >
                              Attractions
                            </h6>
                            <span class="text-sm">See all Attractions</span>
                          </div>
                          <img
                            :src="downArrow"
                            alt="down-arrow"
                            class="arrow"
                          />
                        </div>
                      </div>
                    </a>
                    <div class="dropdown-menu mt-0 py-3 px-2 mt-3">
                      <a
                        class="dropdown-item ps-3 border-radius-md mb-1"
                        @click.prevent="scrollTo('Beer Bar')"
                      >
                        Beer Bar
                      </a>
                      <a
                        class="dropdown-item ps-3 border-radius-md mb-1"
                        @click.prevent="scrollTo('Night Club')"
                      >
                        Night Club
                      </a>
                      <a
                        class="dropdown-item ps-3 border-radius-md mb-1"
                        @click.prevent="scrollTo('Restaurant')"
                      >
                      Restaurant
                      </a>
                      <a
                        class="dropdown-item ps-3 border-radius-md mb-1"
                        @click.prevent="scrollTo('Villa')"
                      >
                      Villa
                      </a>
                      <a
                        class="dropdown-item ps-3 border-radius-md mb-1"
                        @click.prevent="scrollTo('Transportation')"
                      >
                      Transportation
                      </a>
                    </div>
                  </li>
                  <li
                    class="nav-item dropdown dropdown-hover dropdown-subitem list-group-item border-0 p-0"
                  >
                    <a
                      class="dropdown-item py-2 ps-3 border-radius-md"
                      href="javascript:;"
                    >
                      <div class="d-flex">
                        <div
                          class="w-100 d-flex align-items-center justify-content-between"
                        >
                          <div>
                            <h6
                              class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"
                            >
                              Guide
                            </h6>
                            <span class="text-sm">See all Guide</span>
                          </div>
                          <img
                            :src="downArrow"
                            alt="down-arrow"
                            class="arrow"
                          />
                        </div>
                      </div>
                    </a>
                    <div class="dropdown-menu mt-0 py-3 px-2 mt-3">
                      <a
                        class="dropdown-item ps-3 border-radius-md mb-1"
                        @click.prevent="scrollTo('Guide')"
                      >
                        Guide Resume
                      </a>
                      <a
                        class="dropdown-item ps-3 border-radius-md mb-1"
                        @click.prevent="scrollTo('Guide')"
                      >
                        Travel Together
                      </a>
                    </div>
                  </li>
                  <li
                    class="nav-item dropdown dropdown-hover dropdown-subitem list-group-item border-0 p-0"
                  >
                    <a
                      class="dropdown-item py-2 ps-3 border-radius-md"
                      href="javascript:;"
                    >
                      <div class="d-flex">
                        <div
                          class="w-100 d-flex align-items-center justify-content-between"
                        >
                          <div>
                            <h6
                              class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"
                            >
                              Insurance
                            </h6>
                            <span class="text-sm">See all Insurance</span>
                          </div>
                          <img
                            :src="downArrow"
                            alt="down-arrow"
                            class="arrow"
                          />
                        </div>
                      </div>
                    </a>
                    <div class="dropdown-menu mt-0 py-3 px-2 mt-3">
                      <a
                        class="dropdown-item ps-3 border-radius-md mb-1"
                        @click.prevent="scrollTo('Insurance')"
                      >
                        Insurance Instructions
                      </a>
                      <a
                        class="dropdown-item ps-3 border-radius-md mb-1"
                        @click.prevent="scrollTo('Insurance')"
                      >
                        Take Out Insurance
                      </a>
                    </div>
                  </li>
                  <!-- <li
                    class="nav-item dropdown dropdown-hover dropdown-subitem list-group-item border-0 p-0"
                  >
                    <a
                      class="dropdown-item py-2 ps-3 border-radius-md"
                      href="javascript:;"
                    >
                      <div class="d-flex">
                        <div
                          class="w-100 d-flex align-items-center justify-content-between"
                        >
                          <div>
                            <h6
                              class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"
                            >
                              Attention Catchers
                            </h6>
                            <span class="text-sm">See all examples</span>
                          </div>
                          <img
                            :src="downArrow"
                            alt="down-arrow"
                            class="arrow"
                          />
                        </div>
                      </div>
                    </a>
                    <div class="dropdown-menu mt-0 py-3 px-2 mt-3">
                      <RouterLink
                        class="dropdown-item ps-3 border-radius-md mb-1"
                        :to="{ name: 'ac-alerts' }"
                      >
                        Alerts
                      </RouterLink>
                      <RouterLink
                        class="dropdown-item ps-3 border-radius-md mb-1"
                        :to="{ name: 'ac-modals' }"
                      >
                        Modals
                      </RouterLink>
                      <RouterLink
                        class="dropdown-item ps-3 border-radius-md mb-1"
                        :to="{ name: 'ac-tooltips-popovers' }"
                      >
                        Tooltips & Popovers
                      </RouterLink>
                    </div>
                  </li>
                  <li
                    class="nav-item dropdown dropdown-hover dropdown-subitem list-group-item border-0 p-0"
                  >
                    <a
                      class="dropdown-item py-2 ps-3 border-radius-md"
                      href="javascript:;"
                    >
                      <div class="d-flex">
                        <div
                          class="w-100 d-flex align-items-center justify-content-between"
                        >
                          <div>
                            <h6
                              class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"
                            >
                              Elements
                            </h6>
                            <span class="text-sm">See all elements</span>
                          </div>
                          <img
                            :src="downArrow"
                            alt="down-arrow"
                            class="arrow"
                          />
                        </div>
                      </div>
                    </a>
                    <div class="dropdown-menu mt-0 py-3 px-2 mt-3">
                      <RouterLink
                        class="dropdown-item ps-3 border-radius-md mb-1"
                        :to="{ name: 'el-avatars' }"
                      >
                        Avatars
                      </RouterLink>
                      <RouterLink
                        class="dropdown-item ps-3 border-radius-md mb-1"
                        :to="{ name: 'el-badges' }"
                      >
                        Badges
                      </RouterLink>
                      <RouterLink
                        class="dropdown-item ps-3 border-radius-md mb-1"
                        :to="{ name: 'el-breadcrumbs' }"
                      >
                        Breadcrumbs
                      </RouterLink>
                      <RouterLink
                        class="dropdown-item ps-3 border-radius-md mb-1"
                        :to="{ name: 'el-buttons' }"
                      >
                        Buttons
                      </RouterLink>
                      <RouterLink
                        class="dropdown-item ps-3 border-radius-md mb-1"
                        :to="{ name: 'el-button-groups' }"
                      >
                        Button Groups
                      </RouterLink>
                      <RouterLink
                        class="dropdown-item ps-3 border-radius-md mb-1"
                        :to="{ name: 'el-dropdowns' }"
                      >
                        Dropdowns
                      </RouterLink>
                      <RouterLink
                        class="dropdown-item ps-3 border-radius-md mb-1"
                        :to="{ name: 'el-progress-bars' }"
                      >
                        Progress Bars
                      </RouterLink>
                      <RouterLink
                        class="dropdown-item ps-3 border-radius-md mb-1"
                        :to="{ name: 'el-toggles' }"
                      >
                        Toggles
                      </RouterLink>
                      <RouterLink
                        class="dropdown-item ps-3 border-radius-md mb-1"
                        :to="{ name: 'el-typography' }"
                      >
                        Typography
                      </RouterLink>
                    </div>
                  </li> -->
                </ul>
              </div>
              <div class="row d-lg-none">
                <div class="col-md-12">
                  <div class="d-flex mb-2 mt-3">
                    <div
                      class="w-100 d-flex align-items-center justify-content-between"
                    >
                      <div>
                        <h6
                          class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"
                        >
                          Attractions
                        </h6>
                      </div>
                    </div>
                  </div>
                  <a
                    class="dropdown-item ps-3 border-radius-md mb-1"
                    @click.prevent="scrollTo('Beer Bar')"
                  >
                  Beer Bar
                  </a>
                  <a
                    class="dropdown-item ps-3 border-radius-md mb-1"
                    @click.prevent="scrollTo('Night Club')"
                  >
                    Night Club
                  </a>
                  <a
                    class="dropdown-item ps-3 border-radius-md mb-1"
                    @click.prevent="scrollTo('Restaurant')"
                  >
                  Restaurant
                  </a>
                  <a
                    class="dropdown-item ps-3 border-radius-md mb-1"
                    @click.prevent="scrollTo('Villa')"
                  >
                  Villa
                  </a>
                  <a
                    class="dropdown-item ps-3 border-radius-md mb-1"
                    @click.prevent="scrollTo('Transportation')"
                  >
                  Transportation
                  </a>
                  <div class="d-flex mb-2">
                    <div
                      class="w-100 d-flex align-items-center justify-content-between"
                    >
                      <div>
                        <h6
                          class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"
                        >
                          Guide
                        </h6>
                      </div>
                    </div>
                  </div>
                  <a
                    class="dropdown-item ps-3 border-radius-md mb-1"
                    @click.prevent="scrollTo('Guide')"
                  >
                    Guide Resume
                  </a>
                  <a
                    class="dropdown-item ps-3 border-radius-md mb-1"
                    @click.prevent="scrollTo('Guide')"
                  >
                    Travel Together
                  </a>
                  <div class="d-flex mb-2 mt-3">
                    <div
                      class="w-100 d-flex align-items-center justify-content-between"
                    >
                      <div>
                        <h6
                          class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"
                        >
                          Insurance
                        </h6>
                      </div>
                    </div>
                  </div>
                  <a
                    class="dropdown-item ps-3 border-radius-md mb-1"
                    @click.prevent="scrollTo('Insurance')"
                  >
                    Insurance Instructions
                  </a>
                  <a
                    class="dropdown-item ps-3 border-radius-md mb-1"
                    @click.prevent="scrollTo('Insurance')"
                  >
                    Take Out Insurance
                  </a>
                  <!-- <div class="d-flex mb-2 mt-3">
                    <div
                      class="w-100 d-flex align-items-center justify-content-between"
                    >
                      <div>
                        <h6
                          class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"
                        >
                          Attention Catchers
                        </h6>
                      </div>
                    </div>
                  </div> -->
                  <!-- <RouterLink
                    class="dropdown-item ps-3 border-radius-md mb-1"
                    :to="{ name: 'ac-alerts' }"
                  >
                    Alerts
                  </RouterLink>
                  <RouterLink
                    class="dropdown-item ps-3 border-radius-md mb-1"
                    :to="{ name: 'ac-modals' }"
                  >
                    Modals
                  </RouterLink>
                  <RouterLink
                    class="dropdown-item ps-3 border-radius-md mb-1"
                    :to="{ name: 'ac-tooltips-popovers' }"
                  >
                    Tooltips & Popovers
                  </RouterLink>
                  <div class="d-flex mb-2 mt-3">
                    <div
                      class="w-100 d-flex align-items-center justify-content-between"
                    >
                      <div>
                        <h6
                          class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"
                        >
                          Elements
                        </h6>
                      </div>
                    </div>
                  </div>
                  <RouterLink
                    class="dropdown-item ps-3 border-radius-md mb-1"
                    :to="{ name: 'el-avatars' }"
                  >
                    Avatars
                  </RouterLink>
                  <RouterLink
                    class="dropdown-item ps-3 border-radius-md mb-1"
                    :to="{ name: 'el-badges' }"
                  >
                    Badges
                  </RouterLink>
                  <RouterLink
                    class="dropdown-item ps-3 border-radius-md mb-1"
                    :to="{ name: 'el-breadcrumbs' }"
                  >
                    Breadcrumbs
                  </RouterLink>
                  <RouterLink
                    class="dropdown-item ps-3 border-radius-md mb-1"
                    :to="{ name: 'el-buttons' }"
                  >
                    Buttons
                  </RouterLink>
                  <RouterLink
                    class="dropdown-item ps-3 border-radius-md mb-1"
                    :to="{ name: 'el-button-groups' }"
                  >
                    Button Groups
                  </RouterLink>
                  <RouterLink
                    class="dropdown-item ps-3 border-radius-md mb-1"
                    :to="{ name: 'el-dropdowns' }"
                  >
                    Dropdowns
                  </RouterLink>
                  <RouterLink
                    class="dropdown-item ps-3 border-radius-md mb-1"
                    :to="{ name: 'el-progress-bars' }"
                  >
                    Progress Bars
                  </RouterLink>
                  <RouterLink
                    class="dropdown-item ps-3 border-radius-md mb-1"
                    :to="{ name: 'el-toggles' }"
                  >
                    Toggles
                  </RouterLink>
                  <RouterLink
                    class="dropdown-item ps-3 border-radius-md mb-1"
                    :to="{ name: 'el-typography' }"
                  >
                    Typography
                  </RouterLink> -->
                </div>
              </div>
            </div>
          </li>
          <!-- <li class="nav-item dropdown dropdown-hover mx-2">
              <a
                role="button"
                class="nav-link ps-2 d-flex cursor-pointer align-items-center"
                :class="getTextColor()"
                id="dropdownMenuDocs"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i
                  class="material-icons opacity-6 me-2 text-md"
                  :class="getTextColor()"
                  >article</i
                >
                Discovery 
                <img
                  :src="getArrowColor()"
                  alt="down-arrow"
                  class="arrow ms-2 d-lg-block d-none"
                />
                <img
                  :src="getArrowColor()"
                  alt="down-arrow"
                  class="arrow ms-1 d-lg-none d-block ms-auto"
                />
              </a>
              <div
                class="dropdown-menu dropdown-menu-end dropdown-menu-animation dropdown-md mt-0 mt-lg-3 p-3 border-radius-lg"
                aria-labelledby="dropdownMenuDocs"
              >
                <div class="d-none d-lg-block">
                  <ul class="list-group">
                    <li class="nav-item list-group-item border-0 p-0">
                      <a
                        class="dropdown-item py-2 ps-3 border-radius-md"
                        href=" https://www.creative-tim.com/learning-lab/vue/overview/material-kit/"
                      >
                        <h6
                          class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"
                        >
                          Getting Started
                        </h6>
                        <span class="text-sm"
                          >All about overview, quick start, license and
                          contents</span
                        >
                      </a>
                    </li>
                    <li class="nav-item list-group-item border-0 p-0">
                      <a
                        class="dropdown-item py-2 ps-3 border-radius-md"
                        href=" https://www.creative-tim.com/learning-lab/vue/colors/material-kit/"
                      >
                        <h6
                          class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"
                        >
                          Foundation
                        </h6>
                        <span class="text-sm"
                          >See our colors, icons and typography</span
                        >
                      </a>
                    </li>
                    <li class="nav-item list-group-item border-0 p-0">
                      <a
                        class="dropdown-item py-2 ps-3 border-radius-md"
                        href=" https://www.creative-tim.com/learning-lab/vue/alerts/material-kit/"
                      >
                        <h6
                          class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"
                        >
                          Components
                        </h6>
                        <span class="text-sm"
                          >Explore our collection of fully designed
                          components</span
                        >
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="row d-lg-none">
                  <div class="col-md-12 g-0">
                    <a
                      class="dropdown-item py-2 ps-3 border-radius-md"
                      href="./pages/about-us.html"
                    >
                      <h6
                        class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"
                      >
                        Getting Started
                      </h6>
                      <span class="text-sm"
                        >All about overview, quick start, license and
                        contents</span
                      >
                    </a>
                    <a
                      class="dropdown-item py-2 ps-3 border-radius-md"
                      href="./pages/about-us.html"
                    >
                      <h6
                        class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"
                      >
                        Foundation
                      </h6>
                      <span class="text-sm"
                        >See our colors, icons and typography</span
                      >
                    </a>
                    <a
                      class="dropdown-item py-2 ps-3 border-radius-md"
                      href="./pages/about-us.html"
                    >
                      <h6
                        class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"
                      >
                        Components
                      </h6>
                      <span class="text-sm"
                        >Explore our collection of fully designed components</span
                      >
                    </a>
                    <a
                      class="dropdown-item py-2 ps-3 border-radius-md"
                      href="./pages/about-us.html"
                    >
                      <h6
                        class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"
                      >
                        Plugins
                      </h6>
                      <span class="text-sm"
                        >Check how you can integrate our plugins</span
                      >
                    </a>
                    <a
                      class="dropdown-item py-2 ps-3 border-radius-md"
                      href="./pages/about-us.html"
                    >
                      <h6
                        class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"
                      >
                        Utility Classes
                      </h6>
                      <span class="text-sm"
                        >For those who want flexibility, use our utility
                        classes</span
                      >
                    </a>
                  </div>
                </div>
              </div>
            </li> -->
          <li class="nav-item dropdown dropdown-hover mx-2">
            <a
              href="https://www.tiktok.com/@wc16899"
              class="nav-link d-flex cursor-pointer align-items-center"
            >
              <svg
                width="20px"
                height="20px"
                class="material-icons me-2 opacity-6"
                viewBox="0 0 24 24"
                aria-hidden="true"
                data-testid="TikTokIcon"
                :fill="props.transparent && '#fff'"
              >
                <path
                  d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z"
                ></path>
              </svg>
              TikTok
            </a>
          </li>
        </ul>
        <ul class="navbar-nav d-lg-block d-none">
          <li class="nav-item">
            <RouterLink
              v-if="isLogin"
              :to="{ name: action.route }"
              class="btn btn-sm mb-0"
              :class="action.color"
              onclick="smoothToPricing('pricing-soft-ui')"
              >{{ action.label }}</RouterLink
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- End Navbar -->
</template>
