<template>
  <div>
    <header><img :src="image" /></header>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      image: require("@/assets/logo.png"),
    };
  },
};
</script>

<style>
img {
  width: 40vh;
  display: block;
  margin: auto;
}
</style>
