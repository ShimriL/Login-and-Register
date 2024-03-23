// router/index.ts

import { createRouter, createWebHistory } from 'vue-router/auto'
import { setupLayouts } from 'virtual:generated-layouts'

// Import your registration component
import Register from '../pages/register.vue'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  extendRoutes: setupLayouts,
  routes: [
    // Your existing routes
    // ...

    // Add a route for the registration page
    {
      path: '/register', // Define the URL path
      name: 'Register',   // Give it a name (optional)
      component: Register // Specify the component to render
    }
  ]
})

export default router
