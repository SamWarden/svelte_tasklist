<script lang="ts">
  import type { Task } from "./types";
  export let task: Task;
</script>

<style>
  .btn-red {
    @apply py-2 px-4 bg-red-600 text-white font-semibold rounded-lg shadow-md;
  }
</style>

{#if !task.removed}
  <div class="task bg-gray-800 p-3 rounded flex my-5">
    <input type="checkbox" class="form-checkbox flex-none" bind:checked={task.checked}>
    <div class="task__text inline-block ml-2 flex-auto text-left px-5">
      <span class={task.checked ? "line-through" : ""}>{task.text}</span>
    </div>
    <button class="task__remove_button btn-red flex-none h-auto" on:click={() => {task.removed = true}}>X</button>
  </div>
{/if}
