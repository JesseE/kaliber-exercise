<template>
  <header class="nav-container" ref='nav' @click="openMenu">
    <nav class="nav">
      <ul class="nav__list" ref="navList">
        <li class="nav__list-item"
            v-for="link in links"
            :key="link.title">
          <router-link class="nav__list-link" :to="link.target">
            <span class="nav__list-text">{{link.title}}</span>
          </router-link>
        </li>
      </ul>
      <div  class="nav-hamburger">
        <HamburgerIcon ref="navHamburger"/>
      </div>
    </nav>
  </header>
</template>

<script>
import HamburgerIcon from '../../images/menu.svg'
import { TweenLite } from 'gsap'

export default {
  components: {
    HamburgerIcon
  },
	data() {
		return {
			links: [
        {
          title: 'dolorem',
          target: '/'
        },
				{
          title: 'lorem',
          target: '/lorem'
        },
        {
          title: 'ipsum',
          target: '/ipsum'
        },
        {
          title: 'dolor',
          target: '/dolor'
        },
        {
          title: 'sit',
          target: '/sit'
        },
        {
          title: 'amet',
          target: '/amet'
        },
        {
          title: 'consectetur',
          target: '/consectetur'
        }
      ],
      scrollPosition: 0,
      menuOpened: false,
      isHamburger: false,
      xPositionNav: 0,
      pageMargin: 0,
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll, true);
  },
  mounted() {
    this.setPositionNav()
    window.addEventListener('resize', () => {
      this.setPositionNav()

      if(window.innerWidth <= 675) {
        this.navToHamburger();
        this.hideNavLinks();
      } else {
        this.navToFullWidth();
        this.showNavLinks();
      }

      if(window.innerWidth > 1440) {
        const pageWidth = document.getElementsByTagName('html')[0].offsetWidth - 1440
        this.pageMargin = pageWidth / 2
      }
    })
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    openMenu() {
      this.navToFullWidth()
      this.showNavLinks()
    },
    navToFullWidth() {
      this.isHamburger = false
      TweenLite.to(this.$refs.nav, 0.3, {
        top: "0px",
        left: "",
        right: "",
        width: "100%",
        height: "100px",
        marginLeft: "auto",
        marginRight: "auto",
        onComplete: function() {
          this.setPositionNav()
        }.bind(this)
      })

      TweenLite.to(this.$refs.navHamburger, 0.1, {
        opacity: 0,
      })
    },
    setPositionNav() {
      this.xPositionNav = this.$refs.nav.offsetWidth
    },
    navToHamburger() {
      this.isHamburger = true


      TweenLite.to(this.$refs.nav, 0.3, {
        top: "10px",
        marginLeft: 0,
        marginRight: 0,
        left: this.xPositionNav - 85 + this.pageMargin,
        right: "",
        width: "75px",
        height: "75px"
      })

      TweenLite.to(this.$refs.navHamburger, 0.3, {
        opacity: 1,
        display: "block"
      })
    },
    hideNavLinks() {
      TweenLite.to(this.$refs.navList, 0.2, {
        opacity: 0,
        display: "none"
      })
    },
    showNavLinks() {
      TweenLite.to(this.$refs.navList, 0.2, {
        opacity: 1,
        display: "flex"
      })
    },
    handleScroll () {
      const scrollTarget = document.querySelector('[data-text-block]')

      if(window.scrollY < this.scrollPosition) {
        this.navToFullWidth()
        this.showNavLinks()
      } else if(scrollTarget.offsetTop <= window.scrollY) {
        this.navToHamburger()
        this.hideNavLinks()
      }

      this.scrollPosition = window.scrollY
    }
  }
}
</script>
