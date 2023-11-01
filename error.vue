<template>
  <NuxtLayout name="404">
    <div>
      <div>You've Arrived Here on Error, boss</div>
      <button class="button" @click="goBack">Back</button>
    </div>
  </NuxtLayout>
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.button {
  padding: 4px 6px;
  margin: 10px 0px;
  background: black;
  color: white;
}
</style>