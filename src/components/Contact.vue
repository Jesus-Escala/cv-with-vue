<script lang="ts" setup>
import { logicPage } from "../AppLogic.ts";

const {
  darkModeIconGit,
  darkModeIconEmail,
  darkModeIconWssp,
  darkModeIconLink,
  openLink,
} = logicPage();
</script>

<template>
  <div
    class="font-open-sans flex flex-wrap min-h-screen items-center justify-center"
  >
    <div class="w-full sm:w-1/6 md:w-4/6 lg:w-3/6">
      <h2
        class="font-handjet text-center tracking-widest font-bold leading-tight mt-1"
      >
      {{ $t('thanks') }}
      </h2>

      <p class="text-center font-medium">{{ $t('forContact') }}</p>
      <div class="flex justify-center gap-9 py-3">
        <button
          @click="openLink('https://github.com/Jesus-Escala')"
          class="flex items-center justify-center px-2 py-4 rounded-md w-1/4 text-center hover:bg-indigo-800 hover:shadow-indigo bg-gray-800 font-semibold text-white transition-transform duration-300 transform hover:scale-105"
        >
          {{ $t("gitHub") }}
          <img
            :src="darkModeIconGit"
            class="ml-2 h-5 w-5"
            alt="{{ $t('altDownload') }}"
          />
        </button>
        <button
          @click="openLink('https://www.linkedin.com/in/jesusescala')"
          class="flex items-center justify-center px-2 py-4 rounded-md w-1/4 text-center hover:bg-indigo-800 hover:shadow-indigo bg-gray-800 font-semibold text-white transition-transform duration-300 transform hover:scale-105"
        >
          {{ $t("linkedin") }}

          <img
            :src="darkModeIconLink"
            class="ml-2 h-5 w-5"
            alt="{{ $t('altDownload') }}"
          />
        </button>
        <button
          @click="openLink('https://wa.me/924762054')"
          class="flex items-center justify-center px-2 py-4 rounded-md w-1/4 text-center hover:bg-indigo-800 hover:shadow-indigo bg-gray-800 font-semibold text-white transition-transform duration-300 transform hover:scale-105"
        >
          {{ $t("wssp") }}

          <img
            :src="darkModeIconWssp"
            class="ml-2 h-5 w-5"
            alt="{{ $t('altDownload') }}"
          />
        </button>
        <button
          @click="openLink('mailto:jesusescalatrabajo@gmail.com')"
          class="flex items-center justify-center px-2 py-4 rounded-md w-1/4 text-center hover:bg-indigo-800 hover:shadow-indigo bg-gray-800 font-semibold text-white transition-transform duration-300 transform hover:scale-105"
        >
          {{ $t("email") }}

          <img
            :src="darkModeIconEmail"
            class="ml-2 h-5 w-5"
            alt="{{ $t('altDownload') }}"
          />
        </button>
      </div>
    </div>
  </div>
</template>
