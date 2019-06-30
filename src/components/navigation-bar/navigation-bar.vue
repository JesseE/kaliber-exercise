<template>
  <header class="nav-container"
          ref='nav' @click="openMenu">
    <nav class="nav">
      <ul class="nav__list"
          :class="{ 'nav__list--column' : menuIsOpen }"
          ref="navList">
        <li class="nav__list-item"
          :class="{ 'nav__list-item--no-margin' : menuIsOpen}"
            v-for="link in links"
            :key="link.title"
            ref="navListItem">
          <router-link class="nav__list-link" :to="link.target">
            <span class="nav__list-text">{{link.title}}</span>
          </router-link>
        </li>
      </ul>
      <div class="nav-hamburger">
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
      menuIsOpen: false,
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
      let height
      let isClicked

      if (window.innerWidth < 675) {
        height = "100vh"
        this.menuIsOpen = true;
      } else {
        height = "65px"
      }

      this.navToFullWidth(height, isClicked=true)
      this.showNavLinks()
      this.showNavListItems()
    },
    showNavListItems() {
      TweenLite.to(this.$refs.navListItem, 0.3, {
        display:'flex',
      })
    },
    navToFullWidth(height, isClicked) {
      (!isClicked) ? this.menuIsOpen = false : null
      TweenLite.to(this.$refs.nav, 0.3, {
        top: "0px",
        left: "",
        right: "",
        width: "100%",
        height: height,
        marginLeft: "auto",
        marginRight: "auto",
        background: "black",
        onComplete: function() {
          this.setPositionNav()
        }.bind(this)
      })

      TweenLite.to(this.$refs.navHamburger, 0.1, {
        opacity: 0,
        display: "none"
      })
    },
    setPositionNav() {
      this.xPositionNav = this.$refs.nav.offsetWidth
    },
    navToHamburger() {
      TweenLite.to(this.$refs.nav, 0.3, {
        top: "10px",
        marginLeft: 0,
        marginRight: 0,
        left: this.xPositionNav - 85 + this.pageMargin,
        right: "",
        width: "65px",
        height: "65px",
        background: "black"
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
