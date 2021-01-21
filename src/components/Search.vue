<template>
  <div>
    <section class="search">
      <h1>Track Player Stats</h1>
      <form v-on:submit.prevent="onSubmit">
        <div class="form-group">
          <label for="platform">Platform</label>
          <select name="platform" id="platform" v-model="platform">
            <option value="gamepad">Console</option>
            <option value="kbm">PC</option>
            <option value="touch">Mobile</option>
          </select>
        </div>
        <div class="form-group">
          <label for="gamertag">Gamertag</label
          ><input
            type="text"
            name="text"
            v-model="gamertag"
            id="gamertag"
            placeholder="Console ID, PC ID, Mobile ID"
          />
        </div>
        <div class="form-group">
          <input type="submit" value="Submit" class="btn" />
        </div>
      </form>
    </section>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      platform: "gamepad",
      gamertag: "",
    };
  },
  beforeCreate() {
    document.body.className = "body-bg-image";
  },
  methods: {
    onSubmit() {
      if (!this.gamertag) {
        this.$toasted.show("Please enter g tag", {
          duration: 3000,
          icon: "exclamation-circle",
        });
      } else {
        this.$router.push(`/profile/${this.platform}/${this.gamertag}`);
      }
    },
  },
};
</script>

<style></style>
