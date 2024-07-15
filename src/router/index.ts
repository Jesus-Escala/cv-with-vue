// src/router.ts
import { createRouter, createWebHistory } from 'vue-router';
import Cv from '../components/CV.vue';
import Presentation from '../components/Presentation.vue';
import AboutMe from '../components/AboutMe.vue';
import Comida from '../components/Skills.vue';

const routes = [
  {
    path: '/',
    component: Cv,
    children: [
      {
        path: '',
        name: 'CvHeader',
        component: Presentation,
      },
      {
        path: 'prueba',
        name: 'Prueba',
        component: AboutMe,
      },
      {
        path: 'comida',
        name: 'Comida',
        component: Comida,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
