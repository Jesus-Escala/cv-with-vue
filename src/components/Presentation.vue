<script lang="ts" setup>
import { logicPage } from "../AppLogic.ts";
const { download, send, cv, openLink } = logicPage();
</script>

<template>
  <header
    class="font-open-sans flex flex-wrap min-h-screen items-center justify-center"
  >
    <div class="w-full sm:w-5/6 md:w-4/6 lg:w-3/6">
      <p class="text-center font-medium">{{ $t("greeting") }}</p>
      <h1
        class="font-handjet text-center tracking-widest font-bold leading-tight mt-1"
      >
        {{ $t("name") }}<br />
        {{ $t("lastname") }}
      </h1>
      <p class="text-center font-medium">{{ $t("role") }}</p>
      <div class="flex justify-center gap-4 py-3">
        <a
          download
          :href="cv"
          class="flex items-center px-4 py-2 rounded-md text-center bg-indigo-800 font-semibold text-white shadow-indigo"
        >
          {{ $t("downloadCV") }}
          <img
            :src="download"
            class="ml-2 h-5 w-5"
            alt="{{ $t('altDownload') }}"
          />
        </a>
        <button
          @click="openLink('https://wa.me/924762054')"
          class="flex items-center px-4 py-2 rounded-md text-center bg-indigo-800 font-semibold text-white shadow-indigo"
        >
          {{ $t("contactMe") }}
          <img :src="send" class="ml-2 h-5 w-5" alt="{{ $t('altDownload') }}" />
        </button>
      </div>
    </div>
  </header>
</template>
