<script lang="ts">
  import Tailwindcss from "./Tailwind.svelte";
  import InputTasks from "./tasks_components/InputTasks.svelte";
  import TasksDisplay from "./tasks_components/TasksDisplay.svelte";

  // import { tasks } from "./tasks.ts";
</script>

<Tailwindcss />

<main class="min-h-screen w-screen bg-gray-900 text-center p-5 text-white">
  <div class="container mx-auto">
    <InputTasks /> 
    <hr class="border-gray-700 m-5">
    <TasksDisplay />
  </div>
</main>
