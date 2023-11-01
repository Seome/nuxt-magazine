<template>
  <div class="custom-select" :tabindex="tabindex" @blur="open = false">
    <div class="selected" :class="{ open: open }" @click="open = !open">
    	{{ selected }}
			<client-only>
				<font-awesome-icon :icon="['fas', 'angle-down']" size="lg" style="color: #ffffff;" />
			</client-only>
    </div>
    <div class="items" :class="{ selectHide: !open }">
      <div
        v-for="(option, i) of options"
        :key="i"
        @click="
          selected = option;
          open = false;
          $emit('input', option);
        "
      >
				<svg-icon class="icon" :name="`country/${option}`" />
        {{ option }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true,
    },
    default: {
      type: String,
      required: false,
      default: null,
    },
    tabindex: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  data() {
    return {
      selected: this.default
        ? this.default
        : this.options.length > 0
        ? this.options[0]
        : null,
      open: false,
    };
  },
  mounted() {
    this.$emit("input", this.selected);
  },
};
</script>

<style scoped>
.custom-select {
	min-width: 120px;
  position: relative;
  width: 100%;
  outline: none;
}

.icon {
	margin-left: 5px;
	width: 18px;
	height: 12px;
}

.custom-select .selected {
	font-size: 12px;
	line-height: 1.2;
  color: #fff;
  padding: 2px 15px;
  cursor: pointer;
  user-select: none;
	text-transform: uppercase;
}

.custom-select .selected.open {
  border: 0px solid #ad8225;
}

.custom-select .items {
	padding: 10px 0;
	min-width: 120px;
  overflow: hidden;
	font-size: 12px;
  position: absolute;
  background-color: #ffffff;
  left: 0;
  right: 0;
  z-index: 1;
	box-shadow: 0 5px 8px -4px #807f7f;
}

.custom-select .items div {
	padding: 10px 15px;
  color: #A0A0A0;
  display: flex;
  cursor: pointer;
  user-select: none;
	text-transform: uppercase;
}

.custom-select .items div:hover {
  background-color: #F2F2F2;
}

.custom-select .items .country.icon {
  margin: 0 5px 0 0;
}


.selectHide {
  display: none;
}
</style>
