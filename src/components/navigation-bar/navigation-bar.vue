<template>
  <div class="nav-container">
    <h1 class="page-logo">
      <router-link :to="pageLogo.target" ref="pageLogo">
        {{ pageLogo.title }}
      </router-link>
    </h1>

      <nav ref='nav' class="nav" :class="{ 'nav--fullscreen' :menuIsOpen}" >
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
      </nav>

     <div
      class="nav-close"
      :class="{ 'hidden' : !menuIsOpen }"
       @click="closeMenu">
      <CloseIcon ref="navClose" />
    </div>

    <div
    class="nav-hamburger"
    :class="{ 'hidden' : menuIsOpen }"
    @click="openMenu">
      <HamburgerIcon ref="navHamburger"/>
    </div>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router'
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
      pageLogo: {
        title: 'dolorem',
        target: '/'
      },
			links: [
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
    window.addEventListener('scroll', this.handleScroll, true)
  },
  mounted() {
    if(window.innerWidth >= 675) this.setPositionNav()
    window.addEventListener('resize', debounce(this.handleResize, 300))
  },
  methods: {
    closeMenu() {
      this.menuIsOpen = false
      this.navToHamburger()
      this.hideNavListItems()
      this.hideNavLinks()
    },
    openMenu() {
      const isClicked = true

      if (window.innerWidth < 675) {
        this.navBarHeight = "100vh"
        this.menuIsOpen = true
      }

      this.navToFullWidth(isClicked)
      this.showNavLinks()
      this.showNavListItems()
    },
    handleResize() {
      this.setPositionNav()

      if(window.innerWidth <= 675) {
        this.navToHamburger()
        this.hideNavLinks()
      } else {
        this.navToFullWidth()
        this.showNavLinks()
      }
    },
    handleScroll () {
      if(window.innerWidth > 675) {
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
          this.showNavListItems()
        } else if(scrollTarget.offsetTop <= window.scrollY) {
          this.navToHamburger()
          this.hideNavLinks()
        }

        this.scrollPosition = window.scrollY
      }
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
        position: 'relative',
        onComplete: function() {
          this.setPositionNav()
        }.bind(this)
      })

      TweenLite.to(
        this.$refs.navClose,
        0.2,
        {
          top: 0,
          right: 0,
        }
      )

      TweenLite.to(this.$refs.pageLogo.$el, this.normalAnimationSpeed, {
        color: "white",
      })

      this.menuIsOpen = true
    },
    setPositionNav() {
      this.xPositionNav = this.$refs.nav.offsetWidth
    },
    navToHamburger() {
      this.menuIsOpen = false

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
        position: 'fixed',
      })

      TweenLite.to(this.$refs.navHamburger, this.normalAnimationSpeed, {
        opacity: 1,
        top: 10,
        right: 10,
        position: 'absolute',
        display: "block"
      })

      TweenLite.to(this.$refs.pageLogo.$el, this.normalAnimationSpeed, {
        color: "black",
      })
    },
    hideNavLinks() {
      return TweenLite.to(this.$refs.navList, this.fastAnimationSpeed, {
        opacity: 0,
        display: "none"
      })
    },
    showNavLinks() {
      return TweenLite.to(this.$refs.navList, this.fastAnimationSpeed, {
        opacity: 1,
        display: "flex"
      })
    },
    hideNavListItems() {
      return TweenLite.to(
        this.$refs.navListItem,
        this.normalAnimationSpeed, { display:'none' }
      )
    },
    showNavListItems() {
      return TweenLite.to(
        this.$refs.navListItem,
        this.normalAnimationSpeed, { display:'flex' }
      )
    },
  }
}
</script>
