<script lang="ts">
  import type { Task } from "../types.ts";
  import { tasks } from "../tasks.ts";

  let taskText: string = "";

  function createTask(text): void {
    let task: Task = {
      text: text,
      checked: false,
    }
    tasks.update(arr => [...arr, task]);
  }

  function handleBtnClick(): void {
    if (taskText === "") return;
    createTask(taskText);
    taskText = "";
  }
</script>

<style>  
  .btn-blue {
    @apply py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md;
  }
</style>

<div class="input_task">
  <button type="button" class="btn-blue" on:click={handleBtnClick}>Add task</button>
  <input type="text" class="ml-3 p-1 border border-transparent rounded bg-gray-800 text-white" name="task_text" placeholder="Task..." bind:value={taskText}>
</div>