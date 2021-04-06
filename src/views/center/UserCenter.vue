<template>
  <v-tabs-items v-model="model">
    <v-tab-item v-for="i in 3" :key="i" :value="`tab-${i}`">
      <v-card flat>
        <v-card-text v-text="text"></v-card-text>
      </v-card>
    </v-tab-item>
  </v-tabs-items>
</template>

<script>
export default {
  name: 'UserCenter',
  data() {
    return {
      model: 'tab-2',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    }
  },
}
</script>

<style scoped></style>
