<template>
  <div>
    Profile
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Profile",
  data() {
    return {
      loading: false,
      error: null,
      profileData: null,
    };
  },
  beforeCreate() {
    document.body.className = "body-bg-no-image";
  },
  async created() {
    this.loading = true;
    try {
      const res = await axios.get(
        `/profile/${this.$route.params.platform}/${this.$route.params.gamertag}`
      );
      this.profileData = res.data();
      console.log(this.profileData);
      this.loading = false;
    } catch (error) {
      this.loading = false;
      this.error = error.res.data.message;
    }
  },
};
</script>

<style lang="scss" scoped></style>
