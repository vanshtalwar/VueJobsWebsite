<script>
export default {
  data() {
    return {
      name: "Vansh Talwar",
      status: 'active',
      tasks: ['Task one', 'Task two', 'Task three'],
      link: "https://google.com"
    }
  },
  methods: {
    toggleStatus() {
      if (this.status === 'active') {
        this.status = 'pending';
      }
      else if (this.status === 'pending') {
        this.status = 'inactive';
      }
      else {
        this.status = 'active';
      }


    }

  },
}
</script>

<template>
  <!-- Option API :-->

  <!-- v-if, v-elseif, v-else -->
  <h1>{{ name }}</h1>
  <p v-if="status === 'active'"> User is active</p>
  <p v-else-if="status === 'pending'"> User is pending</p>
  <p v-else> User is inactive</p>

  <!-- v-for (iterate loop of an array, uses key) -->
  <h3>Tasks:</h3>
  <ul>
    <li v-for="kaam in tasks" :key="kaam"> {{ kaam }}</li>
  </ul>

  <!-- v-bind: (: href)-->
  <a v-bind:href="link" target="_blank">Click to Google</a>

  <br>

  <!-- v-on:  (@click) -->
  <button v-on:click="toggleStatus">Change Status</button>




</template>

<style scoped></style>
