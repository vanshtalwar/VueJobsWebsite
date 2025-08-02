<script setup>
import { ref,onMounted } from 'vue';

const name = ref('Vansh Talwar');
const status = ref('active');
const tasks = ref(['Task one', 'Task two', 'Task three']);
const newTask = ref("")

const toggleStatus = () => {
  if (status.value === 'active') {
    status.value = 'pending';
  }
  else if (status.value === 'pending') {
    status.value = 'inactive';
  }
  else {
    status.value = 'active';
  }
}

const addTask = () => {
  if (newTask.value.trim !== "") {
    tasks.value.push(newTask.value);
    newTask.value = ''
  }
}


const deleteTask = (index) => {
  tasks.value.splice(index,1)

}

onMounted( async () => {
  try { const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data = await response.json()
    tasks.value = data.map( (task) => task.title  )
  } catch (error) {
    console.log('error fetching tasks')
  }
}

)

</script>

<template>
  <!-- Composition API :-->
  <div class="flex flex-col">
    <h1 class="text-2xl">{{ name }}</h1>
    <p v-if="status === 'active'"> User is active</p>
    <p v-else-if="status === 'pending'"> User is pending</p>
    <p v-else> User is inactive</p>

    <button class=" mx-2 px-1 border-2 rounded-xl" @click="toggleStatus">Change Status</button>
<br>

    <form @submit.prevent="addTask">
      <label for="newTask">Add Task : </label>
      <input class="border-2 solid rounded-xl px-2" type="text" id="newTask" name="newTask" v-model="newTask">
      <br>
      <button class=" mx-2 px-1 border-2 rounded-xl"  type="submit">Submit</button>


    </form>

<br>

    <h3>Tasks:</h3>
    <ul>
      <li v-for="(kaam,index) in tasks" :key="kaam"> 
<span>
{{ kaam }} 
</span>
<button class=" mx-2 px-1 border-2 rounded-xl"  @click="deleteTask(index)">x</button>

      </li>
    </ul>
    <br>




  </div>

</template>
