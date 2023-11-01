<template>
  <header class="header">
    <div class="header-top">
      <div class="header-social">
        <a href="https://www.facebook.com/">
          <client-only>
            <font-awesome-icon :icon="['fab', 'facebook']" size="lg" style="color: #ffffff;" />
          </client-only>
        </a>
        <a href="https://www.instagram.com/">
          <client-only>
            <font-awesome-icon :icon="['fab', 'instagram']" size="lg" style="color: #ffffff;" />
          </client-only>
        </a>
        <a href="https://twitter.com/">
          <client-only>
            <font-awesome-icon :icon="['fab', 'twitter']" size="lg" style="color: #ffffff;" />
          </client-only>
        </a>
        <a href="https://www.youtube.com/">
          <client-only>
            <font-awesome-icon :icon="['fab', 'youtube']" size="lg" style="color: #ffffff;" />
          </client-only>
        </a>
      </div>

      <div class="header-text">
        FREE SHIPPING* on orders of $50 or more. <a href="#">Carrier surcharge</a> may apply.
      </div>

      <div class="header-language">
        <BaseHeaderComponentsCountrySelect
          :options="['Ukrainian', 'English']"
          :default="'Ukrainian'"
        />
      </div>
    </div>

    <div class="header-bottom">
      <div class="header-logo">
        <nuxt-link to="/">
          <img src="~/assets/images/logo.png" alt="Logo">
        </nuxt-link>
      </div>

      <div class="header-navigation">
        <BaseHeaderComponentsMainMenu />
      </div>

      <div class="header-links">
        <nuxt-link to="/profile">
          <client-only>
            <font-awesome-icon :icon="['far', 'user']" size="sm"/>
          </client-only>
        </nuxt-link>
        <nuxt-link to="/wishlist">
          <client-only>
            <font-awesome-icon :icon="['far', 'heart']" size="sm"/>
          </client-only>
        </nuxt-link>
        <nuxt-link to="/">
          <client-only>
            <font-awesome-icon :icon="['fas', 'cart-shopping']" size="sm"/>
          </client-only>
        </nuxt-link>
        <nuxt-link to="/search">
          <client-only>
            <font-awesome-icon :icon="['fas', 'magnifying-glass']" size="sm"/>
          </client-only>
        </nuxt-link>
      </div>
    </div>
    
    <div class="header-bottom mobile">
      <div class="header-navigation">
        <BaseHeaderComponentsBurgerMenu />
        <BaseHeaderComponentsMobileIcons />
      </div>

      <div class="header-logo">
        <nuxt-link to="/">
          <img src="~/assets/images/logo.png" alt="Logo">
        </nuxt-link>
      </div>

      <div class="header-links">
        <nuxt-link to="/cart">
          <client-only>
            <font-awesome-icon :icon="['fas', 'cart-shopping']" size="sm"/>
          </client-only>
        </nuxt-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
};
</script>


<style lang="scss" scoped>
.header {
  box-shadow: 0 5px 8px -4px #807f7f36;

  &-top {
    padding: 10px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #B26B53;

    .header-social a {
      color: #fff;
      margin-right: 10px;
    }

    .header-text {
      flex: 1;
      text-align: center;
      color: #fff;
      font-size: 12px;

      a {
        border-bottom: 1px solid;
        color:#ffffff;
        text-decoration: none;
      }
    }

    .header-language select {
      display: flex;
      align-items: center;
    }

  }

  &-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 40px 5px;
    min-height: 88px;

    &.mobile {
      display: none;
    }

    .header-logo {
      max-width: 160px;
      width: 100%;
      line-height: 0;

      img {
        width: 100%;
      }
    }

    .header-links a {
      color: #000000;
      font-size: 20px;
      margin-left: 20px;

      &:hover {
        color: #B26B53;
      }
    }
  }
}


@media (max-width: 1024px) {
  .header {

    &-top {
      padding: 10px 20px;
    }

    &-bottom {
      padding: 10px 20px;
      min-height: 76px;

      .header-logo {
        max-width: 120px;
      }
    }

  }
}

@media (max-width: 768px) {
  .header {

    &-top {
      padding: 10px 20px 15px;
      flex-direction: column;

      .header-social {
        margin: 0 0 10px;
      }

      .header-language {
        display: none;
      }
    }

    &-bottom {
      display: none;

      &.mobile {
        padding: 10px 20px;
        min-height: 76px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .header-logo {
          max-width: 100px;
        }
      }
    }
  }
}
</style>