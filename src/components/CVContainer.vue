<script lang="ts" setup>
import { logicPage } from "../AppLogic.ts";
import Presentation from "./Presentation.vue";
import AboutMe from "./AboutMe.vue";
import Skills from "./Skills.vue";
import Contact from "./Contact.vue";

const {
  isDark,
  toggleDark,
  toggleClasses,
  openLink,
  changeLocale,
  toggleMenu,
  isOpen,
  changeImage,
  selectedImage,
  darkModeIconGit,
  lightModeIconGit,
  darkModeIconEmail,
  lightModeIconEmail,
  darkModeIconWssp,
  lightModeIconWssp,
  lightModeIconLink,
  darkModeIconLink,
  rocketGif,
  rocketGif2,
  rocketGif3,
  rocketGif4,
  scrollToSection,
} = logicPage();
</script>

<template>
  <nav id="presentation">
    <div :class="{ 'menu-open': isOpen }" class="fixed t-0 l-0">
      <div
        class="fixed top-5 left-5 text-3xl cursor-pointer z-6"
        @click="toggleMenu"
      >
        <span
          v-if="!isOpen"
          class="no-select shadow-indigo bg-indigo-800 text-white flex w-9 h-9 items-center justify-center rounded"
          >{{ $t("hamburger") }}</span
        >
        <span
          v-if="isOpen"
          class="no-select shadow-indigo bg-indigo-800 text-white flex w-9 h-9 items-center justify-center rounded"
          >{{ $t("close") }}</span
        >
      </div>
      <div
        v-if="isOpen"
        class="fixed top-0 left-0 h-full bg-dark-100 w-full"
        @click="toggleMenu"
      ></div>
      <div
        v-if="isOpen"
        class="side-menu fixed top-0 left-0 w-60 h-full z-5 transition-transform duration-900 ease-in-out"
        :class="[
          isDark
            ? 'bg-gray-800 shadow-lg shadow-indigo'
            : 'bg-indigo-100 shadow-lg shadow-indigo',
        ]"
      >
        <ul class="list-none mt-20 text-sm h-[100%]">
          <li>
            <a
              href="#presentation"
              @click.prevent="scrollToSection('presentation')"
              >{{ $t("presentation") }}</a
            >
          </li>
          <li>
            <a href="#aboutme" @click.prevent="scrollToSection('aboutme')">{{
              $t("about")
            }}</a>
          </li>
          <li>
            <a href="#skills" @click.prevent="scrollToSection('skills')">{{
              $t("skills")
            }}</a>
          </li>
          <li>
            <a href="#projects" @click.prevent="scrollToSection('projects')">{{
              $t("projects")
            }}</a>
          </li>
        
          <li class="flex items-center justify-between px-5 h-[5%]">
            <div>
              <select
                @change="changeLocale($event, $i18n)"
                :class="[
                  isDark
                    ? 'bg-gray-600 text-white'
                    : 'bg-indigo-800 text-white',
                ]"
                class="rounded border-none py-1 px-2 outline-none appearance-none cursor-pointer"
              >
                <option value="es">{{ $t("ES") }}</option>
                <option value="en">{{ $t("EN") }}</option>
              </select>
            </div>
            <div :class="{ dark: isDark }">
              <label class="flex items-center cursor-pointer">
                <input type="checkbox" class="hidden" @change="toggleDark()" />
                <div
                  :class="[isDark ? 'bg-gray-600' : 'bg-indigo-800']"
                  class="w-10 h-6 rounded-full shadow-inner -ml-10"
                ></div>
                <div
                  :class="toggleClasses"
                  class="w-6 h-6 bg-white rounded-full shadow -ml-10"
                ></div>
              </label>
            </div>
          </li>
          <li class="flex flex-col justify-center items-center h-[30%]">
            <p class="font-semibold mb-[10%] mt-[20%]">{{ $t("choose") }}</p>
            <div class="grid grid-cols-2 gap-4">
              <div class="flex items-center justify-center">
                <img
                  :src="rocketGif"
                  alt="Image 1"
                  @click="changeImage('rocket.gif')"
                  class="w-full h-auto object-cover max-h-[60px] cursor-pointer hover:shadow-blue hover:bg-blue-300 rounded-full"
                />
              </div>
              <div class="flex items-center justify-center">
                <img
                  :src="rocketGif2"
                  alt="Image 2"
                  @click="changeImage('rocket2.gif')"
                  class="w-full h-auto object-cover max-h-[60px] cursor-pointer hover:shadow-red hover:bg-red-300 rounded-full"
                />
              </div>
              <div class="flex items-center justify-center">
                <img
                  :src="rocketGif3"
                  alt="Image 3"
                  @click="changeImage('rocket3.gif')"
                  class="w-full h-auto object-cover max-h-[60px] cursor-pointer hover:shadow-purple hover:bg-indigo-300 rounded-full"
                />
              </div>
              <div class="flex items-center justify-center">
                <img
                  :src="rocketGif4"
                  alt="Image 4"
                  @click="changeImage('rocket4.gif')"
                  class="w-full h-auto object-cover max-h-[60px] rotate-90 cursor-pointer hover:shadow-gray hover:bg-gray-300 rounded-full"
                />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div :class="{ dark: isDark }">
      <div class="lines-left">
        <div class="line-left -z-5" v-for="i in 10" :key="i"></div>
      </div>
      <div class="lines-right">
        <div class="line-right -z-5" v-for="i in 10" :key="i"></div>
      </div>

      <div
        class="circle-container items-center justify-center animate-updownc ml-[-10vh]"
        id="circles-container"
      >
        <div class="lines-shoots">
          <div class="line-shoot" v-for="i in 4" :key="i"></div>
        </div>
        <img
          v-if="selectedImage === 'rocket.gif'"
          :src="rocketGif"
          alt="Rocket 2"
          class="fixed rotate-right w-8"
        />
        <img
          v-if="selectedImage === 'rocket2.gif'"
          :src="rocketGif2"
          alt="Rocket 2"
          class="fixed rotate-right w-8"
        />
        <img
          v-if="selectedImage === 'rocket3.gif'"
          :src="rocketGif3"
          alt="Rocket 2"
          class="fixed rotate-right w-8"
        />
        <img
          v-if="selectedImage === 'rocket4.gif'"
          :src="rocketGif4"
          alt="Rocket 2"
          class="fixed rotate-right w-8"
        />
      </div>
    </div>

    <div class="absolute bottom-0 right-[10%] flex items-center">
      <div class="flex flex-col items-center">
        <button
          class="flex items-center mx-2 mb-2 mt-5"
          @click="openLink('https://github.com/Jesus-Escala')"
        >
          <img
            :src="isDark ? darkModeIconGit : lightModeIconGit"
            alt="{{ $t('altGitHub') }}"
            class="h-5 w-5 icon transition-transform duration-300 transform hover:scale-110"
          />
        </button>

        <button
          class="flex items-center mb-2 mx-2"
          @click="openLink('https://www.linkedin.com/in/jesusescala')"
        >
          <img
            :src="isDark ? darkModeIconLink : lightModeIconLink"
            alt="{{ $t('altLinkdin') }}"
            class="h-5 w-5 icon transition-transform duration-300 transform hover:scale-110"
          />
        </button>

        <button
          class="flex items-center mb-2 mx-2"
          @click="openLink('https://wa.me/924762054')"
        >
          <img
            :src="isDark ? darkModeIconWssp : lightModeIconWssp"
            alt="{{ $t('altWssp') }}"
            class="h-5 w-5 icon transition-transform duration-300 transform hover:scale-110"
          />
        </button>

        <button
          class="flex items-center mx-2 mb-5"
          @click="openLink('mailto:jesusescalatrabajo@gmail.com')"
        >
          <img
            :src="isDark ? darkModeIconEmail : lightModeIconEmail"
            alt="{{ $t('altEmail') }}"
            class="h-5 w-5 icon transition-transform duration-300 transform hover:scale-110"
          />
        </button>
      </div>
      <hr class="w-1 h-36 bg-neutral-500 rounded" />
    </div>
    <Presentation />
  </nav>
  <div id="aboutme">
    <AboutMe />
  </div>
  <div id="skills">
    <Skills />
  </div>

  <div id="contact">
    <Contact />
  </div>
</template>
