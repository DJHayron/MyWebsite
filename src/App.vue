<template>  
  <nav class="fixed w-full bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 z-50">
    <div class="container flex flex-wrap items-center justify-between mx-auto">
      <button @click="$router.push('/')" class="flex items-center">
        <!-- <img src="https://flowbite.com/docs/images/logo.svg" class="h-6 mr-3 sm:h-10" alt="Flowbite Logo" /> -->
        <span class="self-center text-xl font-semibold whitespace-nowrap ">Hayron竑</span>
      </button>

      <!-- 手機板menu -->
      <button type="button" @click="NavMenuOpen()" class="inline-flex items-center p-2 ml-3 text-sm rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200  dark:hover:bg-gray-700 dark:focus:ring-gray-600">
        <span class="sr-only">Open main menu</span>
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
      </button>

      <!-- mobile dark mode -->
      <button id="theme-toggle" type="button" @click="darkMode()" class="md:hidden  block pl-3 pr-4 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm">
        <div class="float-left">日夜模式</div>
        <svg aria-hidden="true" id="theme-toggle-dark-icon" class="w-5 h-5" :class="[this.isDark ? '' : 'hidden']" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>

        <svg aria-hidden="true" id="theme-toggle-light-icon" class="w-5 h-5" :class="[this.isDark ? 'hidden' : '']" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path></svg>              
      </button>

      <!-- router table -->
      <div :class="this.isNavOpen ? '' : 'hidden'" class="w-full md:block md:w-auto" id="navbar-default">
        <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li v-for="(element, key) in routes" :key="key" @click="NavMenuOpen()" class="w-fit h-8 p-1 max-md:w-full flex lg:justify-center">
            <router-link :to="element.path" class="nav-link block pl-3 pr-4  md:hover:bg-transparent md:border-0 md:hover:text-orange-400 md:p-0 md:dark:hover:text-white dark:hover:text-white md:dark:hover:bg-transparent" aria-current="page">{{ element.name }}</router-link>
          </li>
        </ul>
      </div>

      <!-- large dark mode -->
      <button id="theme-toggle" type="button" @click="darkMode()" class="max-md:hidden text-gray-500 block pl-3 pr-4 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm">
        <svg aria-hidden="true" id="theme-toggle-dark-icon" class="w-5 h-5" :class="[this.isDark ? '' : 'hidden']" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>

        <svg aria-hidden="true" id="theme-toggle-light-icon" class="w-5 h-5" :class="[this.isDark ? 'hidden' : '']" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path></svg>              
      </button>
    </div>
  </nav>

  <router-view></router-view>
</template>

<script>
export default {
  data() {
    return {
      routes : [
        // {
        //   name: '主頁',
        //   path: '/'
        // },
        {
          name: '關於我',
          path: '/about'
        },
        {
          name: '更新日誌',
          path: '/log'
        },
        {
          name: 'TODO',
          path: '/todo'
        },
        {
          name: '對我發問',
          path: '/askme'
        },
        {
          name: '我的作品',
          path: '/project'
        },
        {
          name: '部落格',
          path: '/blog'
        }
      ],
      isDark: false,
      isNavOpen: false
    }
  },
  methods: {
    darkMode() {
      // if set via local storage previously
      if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
          document.documentElement.classList.add('dark')
          localStorage.setItem('color-theme', 'dark')
        } else {
          document.documentElement.classList.remove('dark')
          localStorage.setItem('color-theme', 'light')   
        }     
        this.isDark = !this.isDark   
      }
    },
    NavMenuOpen() {
      this.isNavOpen = !this.isNavOpen
    }
  },
  mounted() {
    // if NOT set via local storage previously
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('color-theme', 'light')
    } else {
      document.documentElement.classList.add('dark')
      localStorage.setItem('color-theme', 'dark')
    }
  }
}
</script>

<style>
.router-link-active, .nav-link:hover {
  border-bottom: 2px solid orange !important;
}

.nav-link:active {
  transform: scale(1.1);
}

@media screen and (max-width: 768px) {
  .router-link-active, .nav-link:hover {
    border-bottom: 0 !important;
    font-weight: 600;
  } 
}
</style>
