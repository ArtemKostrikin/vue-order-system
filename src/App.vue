<template>
  <div>
    <button class="profile-button" @click="goToProfile">Профиль</button>
    <router-view />
  </div>
</template>

<script>
export default {
  methods: {
    goToProfile() {
      this.$router.push('/profile');
    }
  }
}
</script>
