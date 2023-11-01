<template>
  <nav class="navigation">
    <ul>
      <li><nuxt-link class="link" to="/">Home</nuxt-link></li>
      <li class="has-dropdown link" :class="{ 'router-link-active': isProductsActive }">
        <nuxt-link class="link" to="/products">Products</nuxt-link>
        <ul class="dropdown">
          <li class="link"><nuxt-link class="link" to="/products/candles">Candles</nuxt-link></li>
          <li class="link"><nuxt-link class="link" to="/products/puzzles">Puzzles</nuxt-link></li>
        </ul>
      </li>
      <li><nuxt-link class="link" to="/about">About</nuxt-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  computed: {
    isProductsActive() {
      return this.$route.path.startsWith('/products');
    },
  },
};
</script>

<style lang="scss" scoped>
.navigation {
  .link.router-link-active > a,
  a.link.router-link-active {
    color: #B26B53; 
    border-bottom: 1px solid;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    justify-content: center;

    li {
      padding: 20px 0;
      margin: 0 20px;

      .link {
        padding: 0 0 5px 0;
        color: #000000; 
        text-decoration: none;
        transition: color 0.3s; 

        &:hover {
          color: #B26B53; 
          border-bottom: 1px solid;
        }
      }
    }
  }

  a {
    text-decoration: none;
  }

  .has-dropdown {
    position: relative;

    .dropdown {
      display: none;
    }

    &:hover > .link {
      color: #B26B53; 
    }

    &:hover .dropdown {
      display: block;
    }

    .dropdown {
      min-width: 200px;
      padding: 10px;
      top: 100%;
      position: absolute;
      background-color: #fff;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
      padding: 10px;
      z-index: 1;

      li {
        padding: 10px;
        margin: 0;

        a {
          font-weight: 400;
        }

        &.link:hover,
        a:hover,
        .router-link-active {
          border-bottom: 0 solid;
        }
      }
    }
  }
}
</style>
