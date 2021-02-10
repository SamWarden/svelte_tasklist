<script lang="ts">
  import type { Task } from "../types.ts";
  import { tasks } from "../tasks.ts";
  import TaskView from "./TaskView.svelte";
</script>

<style>

</style>

<div class="tasks mx-auto w-auto max-w-md">
  {#each $tasks as task}
    <TaskView {task} />
  {/each}
</div>
