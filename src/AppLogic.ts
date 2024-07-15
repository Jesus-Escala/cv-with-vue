import { useDark, useToggle } from "@vueuse/core";
import { computed, onMounted, ref } from "vue";
import darkModeIconGit from "./assets/icons/github-icon-B0B0B0.png";
import lightModeIconGit from "./assets/icons/github-icon-6B6B6B.png";
import darkModeIconEmail from "./assets/icons/email-icon-B0B0B0.png";
import lightModeIconEmail from "./assets/icons/email-icon-6B6B6B.png";
import darkModeIconWssp from "./assets/icons/wssp-icon-B0B0B0.png";
import lightModeIconWssp from "./assets/icons/wssp-icon-6B6B6B.png";
import darkModeIconLink from "./assets/icons/linkedin-icon-B0B0B0.png";
import lightModeIconLink from "./assets/icons/linkedin-icon-6B6B6B.png";

import darkModeIconBack from "./assets/icons/back-icon-B0B0B0.png";
import lightModeIconBack from "./assets/icons/back-icon-6B6B6B.png";
import darkModeIconFront from "./assets/icons/front-icon-B0B0B0.png";
import lightModeIconFront from "./assets/icons/front-icon-6B6B6B.png";
import darkModeIconMobile from "./assets/icons/mobile-icon-B0B0B0.png";
import lightModeIconMobile from "./assets/icons/mobile-icon-6B6B6B.png";
import darkModeIconTool from "./assets/icons/tool-icon-B0B0B0.png";
import lightModeIconTool from "./assets/icons/tool-icon-6B6B6B.png";

import rocketGif from "./assets/icons/rocket.gif";
import rocketGif2 from "./assets/icons/rocket2.gif";
import rocketGif3 from "./assets/icons/rocket3.gif";
import rocketGif4 from "./assets/icons/rocket4.gif";
import download from "./assets/icons/download-icon-FFFFFF.png";
import send from "./assets/icons/plane-icon-FFFFFF.png";
import photo from "./assets/icons/profile-photo.jpg";
import cv from "../public/docs/CV.pdf";
import { useRoute, useRouter } from "vue-router";

export function logicPage() {
  /*DARK MODE*/
  const isDark = useDark();
  const toggleDark = useToggle(isDark);
  const toggleClasses = computed(() => ({
    "translate-x-4": isDark.value,
    "translate-x-0": !isDark.value,
  }));

  /*PAGE ROUTES*/
  const openLink = (url: string) => {
    window.open(url, "_blank");
  };
  const scrollToSection = (section: string) => {
    const router = useRouter();
    const route = useRoute();

    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      router.push(route.path);
    }
  };

  /*NAV*/
  const isOpen = ref(false);
  const toggleMenu = () => {
    isOpen.value = !isOpen.value;
  };

  /*NAV IMAGE SELECTED */
  const selectedImage = ref("rocket.gif");
  const changeImage = (imageName: string): void => {
    if (selectedImage.value !== imageName) {
      selectedImage.value = imageName;
      localStorage.setItem("selectedImage", imageName);
    }
  };

  /*LINES ANIMATION */
  function initializeAnimations() {
    const linesLeft = document.querySelectorAll(".line-left");
    linesLeft.forEach((line, index) => {
      line.classList.add(`line-left-${index + 1}`);
    });

    const linesRight = document.querySelectorAll(".line-right");
    linesRight.forEach((line, index) => {
      line.classList.add(`line-right-${index + 1}`);
    });

    const linesShoot = document.querySelectorAll(".line-shoot");
    linesShoot.forEach((line, index) => {
      line.classList.add(`line-shoot-${index + 1}`);
    });

    const lines = document.querySelectorAll(".line-shoot");
    setTimeout(() => {
      lines.forEach((line, index) => {
        setTimeout(() => {
          line.classList.add("visible");
        }, index * 1000);
      });
    }, 1000);
  }

  /*GENERATE CIRCLES */
  function createCircles() {
    const container = document.getElementById("circles-container");
    if (container) {
      for (let i = 0; i < 5; i++) {
        const div = document.createElement("div");
        div.classList.add("circle-container");
        container.appendChild(div);
      }
    }
  }

  /*CHANGE LANGUAGE */
  function changeLocale(event: Event, $i18n: any) {
    const target = event.target as HTMLSelectElement;
    $i18n.locale = target.value;
  }

  onMounted(() => {
    initializeAnimations();
    createCircles();
    const savedImage = localStorage.getItem("selectedImage");
    if (savedImage) {
      selectedImage.value = savedImage;
    }
  });

  return {
    /*DARK MODE */
    isDark,
    toggleDark,
    toggleClasses,
    /*LINKS PAGE */
    isOpen,
    openLink,
    toggleMenu,
    /*CHANGE IMAGE */
    selectedImage,
    changeImage,
    /*LANGUAGE */
    changeLocale,
    /*SOCIAL MEDIA ICONS */
    darkModeIconGit,
    darkModeIconEmail,
    darkModeIconWssp,
    darkModeIconLink,

    lightModeIconWssp,
    lightModeIconLink,
    lightModeIconGit,
    lightModeIconEmail,

    darkModeIconBack,
    darkModeIconFront,
    darkModeIconMobile,
    darkModeIconTool,

    lightModeIconBack,
    lightModeIconFront,
    lightModeIconMobile,
    lightModeIconTool,
    /*ROCKET GIF */
    rocketGif,
    rocketGif2,
    rocketGif3,
    rocketGif4,
    /*PROFILE PHOTO */
    photo,
    /*PAGE ICONS */
    download,
    send,
    cv,
    scrollToSection,
  };
}
