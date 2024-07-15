<script lang="ts" setup>
import { logicPage } from "../AppLogic.ts";
const { photo } = logicPage();
</script>
<template>
  <div
    class="font-open-sans flex flex-wrap min-h-screen items-center justify-center "
  >
    <div
      class="w-full sm:w-1/6 md:w-3/6 lg:w-4/6 flex "
    >
      <div class="w-[30%] h-full flex items-center">
        <img
          :src="photo"
          alt="{{ $t('altPhoto') }}"
          class="rounded-full border"
        />
      </div>
      <div class="w-[70%] p-6">
        <p
          class="text-center tracking-widest font-medium leading-tight mt-1 text-xs"
        >
          {{ $t("who") }}
        </p>
        <h5
          class="font-handjet text-center tracking-widest font-bold leading-tight mt-1"
        >
          {{ $t("about") }}
        </h5>
        <p class="text-justify text-xs mt-1 leading-relaxed">
          {{ $t("aboutme") }}
        </p>
      </div>
    </div>
  </div>
</template>
