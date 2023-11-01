<template>
  <div class="mobile-icons">
    <div class="icon-block">
			<nuxt-link to="/">
        <client-only>
          <font-awesome-icon :icon="['fas', 'house']" size="sm"/>
        </client-only>
    	</nuxt-link>
    </div>
		<div class="icon-block">
			<nuxt-link to="/profile">
        <client-only>
          <font-awesome-icon :icon="['far', 'user']" size="sm"/>
        </client-only>
    	</nuxt-link>
    </div>
		<div class="icon-block">
			<nuxt-link to="/wishlist">
        <client-only>
          <font-awesome-icon :icon="['far', 'heart']" size="sm"/>
        </client-only>
    	</nuxt-link>
		</div>
		<div class="icon-block">
  		<nuxt-link to="/search">
        <client-only>
          <font-awesome-icon :icon="['fas', 'magnifying-glass']" size="sm"/>
        </client-only>
    	</nuxt-link>
		</div>
  </div>
</template>

<style scoped lang="scss">
.mobile-icons {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #ffffff;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}

.icon-block {
	width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
	border-right: 1px solid #d1d1d1;
	border-top: 1px solid #d1d1d1;

	&:first-child {
		border-left: 1px solid #d1d1d1;
	}

	a {
		padding: 10px 0;
		width: 100%;
		text-align: center;
  	color: #000000;
  	text-decoration: none;
	}
}

</style>
