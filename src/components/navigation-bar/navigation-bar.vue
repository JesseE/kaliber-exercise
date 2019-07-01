<template>
  <header
    class="nav-container"
    ref='nav'
    @click="openMenu">
    <nav class="nav">
      <ul class="nav__list"
          :class="{ 'nav__list--column' : menuIsOpen }"
          ref="navList">
        <li class="nav__list-item"
          :class="{ 'nav__list-item--no-margin' : menuIsOpen }"
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
      <div class="nav-close" @click="closeMenu">
        <CloseIcon />
      </div>
    </nav>
  </header>
</template>

<script>
import debounce from '../../lib/debounce'
import HamburgerIcon from '../../images/menu.svg'
import CloseIcon from '../../images/multiply.svg'
import { TweenLite } from 'gsap'

export default {
  components: {
    HamburgerIcon,
    CloseIcon
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
      navBarHeight: 65,
      normalAnimationSpeed: 0.3,
      fastAnimationSpeed: 0.2
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll, true);
  },
  mounted() {
    this.setPositionNav()
    window.addEventListener('resize', debounce(this.handleResize, 300))
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    closeMenu() {
      console.log('clicked')
      this.navToHamburger()
      this.hideNavLinks()
    },
    openMenu() {
      const isClicked = true

      if (window.innerWidth < 675) {
        this.navBarHeight = "100vh"
        this.menuIsOpen = true;
      }

      this.navToFullWidth(isClicked)
      this.showNavLinks()
      this.showNavListItems()
    },
    showNavListItems() {
      TweenLite.to(
        this.$refs.navListItem,
        this.normalAnimationSpeed, { display:'flex' }
      )
    },
    handleResize() {
      this.setPositionNav()

      if(window.innerWidth <= 675) {
        this.navToHamburger();
        this.hideNavLinks();
      } else {
        this.navToFullWidth();
        this.showNavLinks();
      }
    },
    handleScroll () {
      if(window.innerWidth > 1440) {
        const bodyElWidth = document.getElementsByTagName('body')[0].offsetWidth
        const htmlElWidth = document.getElementsByTagName('html')[0].offsetWidth
        const pageWidth = htmlElWidth - bodyElWidth
        this.pageMargin = pageWidth / 2
      }

      const scrollTarget = document.querySelector('[data-text-block]')

      if(window.scrollY < this.scrollPosition) {
        this.navToFullWidth()
        this.showNavLinks()
      } else if(scrollTarget.offsetTop <= window.scrollY) {
        this.navToHamburger()
        this.hideNavLinks()
      }

      this.scrollPosition = window.scrollY
    },
    navToFullWidth(isClicked) {
      (!isClicked) ? this.menuIsOpen = false : null

      TweenLite.to(this.$refs.nav, this.normalAnimationSpeed, {
        top: 0,
        left: 0,
        right: 0,
        width: "100%",
        height: this.navBarHeight,
        marginLeft: "auto",
        marginRight: "auto",
        onComplete: function() {
          this.setPositionNav()
        }.bind(this)
      })

      TweenLite.to(
        this.$refs.navHamburger,
        0.1,
        { opacity: 0, display: "none" }
      )
    },
    setPositionNav() {
      this.xPositionNav = this.$refs.nav.offsetWidth
    },
    navToHamburger() {
      TweenLite.to(this.$refs.nav, this.normalAnimationSpeed, {
        top: 10,
        marginLeft: 0,
        marginRight: 0,
        left: (window.innerWidth > 1440)
          ? (this.xPositionNav - 75) + this.pageMargin
          : "",
        right: 10,
        width: 65,
        height: 65,
      })

      TweenLite.to(this.$refs.navHamburger, this.normalAnimationSpeed, {
        opacity: 1,
        display: "block"
      })
    },
    hideNavLinks() {
      TweenLite.to(this.$refs.navList, this.fastAnimationSpeed, {
        opacity: 0,
        display: "none"
      })
    },
    showNavLinks() {
      TweenLite.to(this.$refs.navList, this.fastAnimationSpeed, {
        opacity: 1,
        display: "flex"
      })
    }
  }
}
</script>
