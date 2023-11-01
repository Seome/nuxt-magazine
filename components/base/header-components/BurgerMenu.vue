<template>
	<div class="mobile-menu">
		<div class="burger-icon" @click="toggleMenu">
  	  <div class="burger-bar top"></div>
  	  <div class="burger-bar middle"></div>
  	  <div class="burger-bar bottom"></div>
  	</div>
  	<div class="burger-menu" :class="{ active: isMenuOpen }">
  	  <div class="menu-content">
  	    <div class="section header">
  	      <div class="logo">
						<nuxt-link to="/">
          		<img src="~/assets/images/logo.png" alt="Logo">
        		</nuxt-link>
					</div>
  	      <div class="close-button" @click="closeMenu">
						<client-only>
							<font-awesome-icon :icon="['fas', 'xmark']" size="lg" style="color: #000000;" />
						</client-only>
					</div>
  	    </div>
  	    <div class="section navigation">
  	      <nav class="navigation">
  	        <ul>
    				  <li><nuxt-link class="link" to="/">Home</nuxt-link></li>
    				  <li class="link"   @click="toggleProductsDropdown"> 
								<div class="has-dropdown" >
									<nuxt-link class="link" :class="{ 'router-link-active': isMainProductsActive }" to="/products" >
  						  	  Products
  						  	</nuxt-link>
									<client-only>
										<font-awesome-icon class="dropdown-icon" :class="{open : isProductsActive}" :icon="['fas', 'angle-down']" size="sm" style="color: #212121;" />
									</client-only>
								</div>
								<div ref="dropdown">
  						  	<ul v-if="isProductsActive" class="dropdown"  :class="{ 'is-open': isProductsActive }">
  						  	  <li class="link"><nuxt-link class="link" to="/products/candles">Candles</nuxt-link></li>
  						  	  <li class="link"><nuxt-link class="link" to="/products/puzzles">Puzzles</nuxt-link></li>
  						  	</ul>
								</div>
  						</li>
    				  <li><nuxt-link class="link" to="/about">About</nuxt-link></li>
    				</ul>
  	      </nav>


  	    </div>
  	    <div class="section flags">
					<div class="flags-container">
						<div>
							<svg-icon class="icon" name="country/Ukrainian" />
						</div>
  	      	<div>
							<svg-icon class="icon" name="country/English" />
						</div>
					</div>
  	    </div>
  	  </div>
  	  <div class="overlay" @click="closeMenu"></div>
  	</div>
	</div>
</template>


<script>
import autoAnimate from "@formkit/auto-animate";

export default {
  data() {
    return {
      isMenuOpen: false,
			isProductsActive: false,
    };
  },
	computed: {
    isMainProductsActive() {
      return this.$route.path.startsWith('/products');
    },
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    },
		toggleProductsDropdown() {
      this.isProductsActive = !this.isProductsActive;
    },
  },
	mounted() {
    autoAnimate(this.$refs.dropdown);
  },
};
</script>

<style scoped lang="scss">
.burger-icon {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 30px;
  height: 20px;
}

.close-button {
	cursor: pointer;
}

.burger-bar {
  height: 2px;
  background-color: #000;
}

.top {
  width: 24px;
}

.middle {
  width: 12px;
  transition: width 0.3s ease;
}

.bottom {
  width: 24px;
}

.burger-icon:hover .middle {
  width: 24px;
}

.burger-menu {
  position: fixed;
  top: 0;
  left: -320px;
  width: 320px;
  height: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  transition: left 0.3s;
  z-index: 2;
}

.burger-menu.active {
  left: 0;
}

.menu-content {
  display: flex;
  flex-direction: column;
  height: 100%;
	background-color: #fff;
}

.section {
  padding: 10px 20px;
  display: flex;
  align-items: center;
}

.header {
	padding: 10px 20px;
  justify-content: space-between;
	background-color: #f7f7f7;

	.logo {
		max-width: 80px;
		width: 100%;
	
		img {
			width: 100%;
		}
	}
}



.navigation {
	width: 100%;

	.link.router-link-active > a,
	a.link.router-link-active {
  	color: #B26B53; 
	}

  ul {
		width: 100%;
    list-style: none;
    padding: 0;
  }

  li {
		width: 100%;
    padding: 15px 0;
		cursor: pointer;
		border-bottom: 1px solid #d1d1d1;
  }

	a {
		color: #212121;
		font-weight: 400;
		text-decoration: none;
	}

	.has-dropdown {
		min-height: 24px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.dropdown-icon {
		padding: 0 0 10px 0;
		transform: rotate(-90deg);

		&.open {
			padding: 0 10px 0 0;
			transform: rotate(0deg);
		}
	}

  .dropdown {
  	display: none;
  	height: 0;
  	overflow: hidden;
  	transition: height 0.3s; 

		li {
			border-bottom: 0 solid;
		}
		
		.link {
			padding: 15px 0 0;
			color: #797979;
		}
	}

	.dropdown.is-open {
	  display: block;
	  height: auto; 
	}
}

.flags {
	margin: auto 0 0 0;

	.flags-container {
		padding: 20px 0 0;
		width: 100%;
		display: flex;
		justify-content: flex-start;
		border-top: 1px solid #d1d1d1;
	}

	.icon {
		margin: 0 10px 0 0;
		height: 24px;
		width: 32px;
		cursor: pointer;
	}
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: -1;
  display: none;
}

.burger-menu.active .overlay {
  display: block;
}
</style>
