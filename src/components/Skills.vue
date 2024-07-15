<script lang="ts" setup>
import { logicPage } from "../AppLogic.ts";
const {
  darkModeIconBack,
  darkModeIconFront,
  darkModeIconMobile,
  darkModeIconTool,
  isDark,
  lightModeIconBack,
  lightModeIconFront,
  lightModeIconMobile,
  lightModeIconTool,
} = logicPage();
</script>
<template>
  <div
    class="font-open-sans flex flex-wrap min-h-screen items-center justify-center"
  >
    <div class="w-full sm:w-full md:w-5/6 lg:w-4/6 flex flex-col">
      <div>
        <h2
          class="font-handjet text-center tracking-widest font-bold leading-tight mt-1"
        >
          {{ $t("skills") }}
        </h2>
      </div>
      <div class="flex flex-wrap p-3 items-center justify-center">
        <div class="w-1/2 flex justify-center flex-col items-center mb-5">
          <img
            :src="isDark ? darkModeIconFront : lightModeIconFront"
            alt="{{ $t('altFront') }}"
            class="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-cover"
          />
          <h6
            class="font-handjet text-center tracking-widest font-bold leading-tight mt-1"
          >
            {{ $t("frontend") }}
          </h6>
          <div class="flex flex-wrap items-center justify-center">
            <div
              class="w-20 m-2 text-xs text-center bg-gray-500 text-white font-bold rounded h-[4vh] p-1"
            >
              <p>{{ $t("html") }}</p>
            </div>
            <div
              class="w-20 m-2 text-xs text-center bg-gray-500 text-white font-bold rounded h-[4vh] p-1"
            >
              <p>{{ $t("css") }}</p>
            </div>
            <div
              class="w-20 m-2 text-xs text-center bg-gray-500 text-white font-bold rounded h-[4vh] p-1"
            >
              <p>{{ $t("javascript") }}</p>
            </div>
            <div
              class="w-20 m-2 text-xs text-center bg-gray-500 text-white font-bold rounded h-[4vh] p-1"
            >
              <p>{{ $t("sass") }}</p>
            </div>
            <div
              class="w-20 m-2 text-xs text-center bg-gray-500 text-white font-bold rounded h-[4vh] p-1"
            >
              <p>{{ $t("tailwind") }}</p>
            </div>
            <div
              class="w-20 m-2 text-xs text-center bg-gray-500 text-white font-bold rounded h-[4vh] p-1"
            >
              <p>{{ $t("vue") }}</p>
            </div>
            <div
              class="w-20 m-2 text-xs text-center bg-gray-500 text-white font-bold rounded h-[4vh] p-1"
            >
              <p>{{ $t("angular") }}</p>
            </div>
          </div>
        </div>
        <div class="w-1/2 flex justify-center flex-col items-center mb-5">
          <img
            :src="isDark ? darkModeIconBack : lightModeIconBack"
            alt="{{ $t('altBack') }}"
            class="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-cover"
          />
          <h6
            class="font-handjet text-center tracking-widest font-bold leading-tight mt-1"
          >
            {{ $t("backend") }}
          </h6>
          <div class="flex flex-wrap items-center justify-center">
            <div
              class="w-20 m-2 text-xs text-center bg-gray-500 text-white font-bold rounded h-[4vh] p-1"
            >
              <p>{{ $t("java") }}</p>
            </div>
            <div
              class="w-20 m-2 text-xs text-center bg-gray-500 text-white font-bold rounded h-[4vh] p-1"
            >
              <p>{{ $t("spring") }}</p>
            </div>
            <div
              class="w-20 m-2 text-xs text-center bg-gray-500 text-white font-bold rounded h-[4vh] p-1"
            >
              <p>{{ $t("c") }}</p>
            </div>
            <div
              class="w-20 m-2 text-xs text-center bg-gray-500 text-white font-bold rounded h-[4vh] p-1"
            >
              <p>{{ $t("mysql") }}</p>
            </div>
            <div
              class="w-20 m-2 text-xs text-center bg-gray-500 text-white font-bold rounded h-[4vh] p-1"
            >
              <p>{{ $t("sqlserver") }}</p>
            </div>
            <div
              class="w-20 m-2 text-xs text-center bg-gray-500 text-white font-bold rounded h-[4vh] p-1"
            >
              <p>{{ $t("mongodb") }}</p>
            </div>
          </div>
        </div>
        <div class="w-1/2 p-2 flex justify-center flex-col items-center">
          <img
            :src="isDark ? darkModeIconMobile : lightModeIconMobile"
            alt="{{ $t('altMobile') }}"
            class="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-cover"
          />
          <h6
            class="font-handjet text-center tracking-widest font-bold leading-tight mt-1"
          >
            {{ $t("mobile") }}
          </h6>
          <div class="flex flex-wrap items-center justify-center">
            <div
              class="w-20 m-2 text-xs text-center bg-gray-500 text-white font-bold rounded h-[4vh] p-1"
            >
              <p>{{ $t("kotlin") }}</p>
            </div>
            <div
              class="w-20 m-2 text-xs text-center bg-gray-500 text-white font-bold rounded h-[4vh] p-1"
            >
              <p>{{ $t("swift") }}</p>
            </div>
          </div>
        </div>

        <div class="w-1/2 p-2 flex justify-center flex-col items-center">
          <img
            :src="isDark ? darkModeIconTool : lightModeIconTool"
            alt="{{ $t('altTools') }}"
            class="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-cover"
          />
          <h6
            class="font-handjet text-center tracking-widest font-bold leading-tight mt-1"
          >
            {{ $t("tool") }}
          </h6>
          <div class="flex flex-wrap items-center justify-center">
            <div
              class="w-20 m-2 text-xs text-center bg-gray-500 text-white font-bold rounded h-[4vh] p-1"
            >
              <p>{{ $t("git") }}</p>
            </div>
            <div
              class="w-20 m-2 text-xs text-center bg-gray-500 text-white font-bold rounded h-[4vh] p-1"
            >
              <p>{{ $t("gitHub") }}</p>
            </div>
            <div
              class="w-20 m-2 text-xs text-center bg-gray-500 text-white font-bold rounded h-[4vh] p-1"
            >
              <p>{{ $t("postman") }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
