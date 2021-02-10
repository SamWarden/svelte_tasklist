import { Writable, writable } from "svelte/store";
import type { Task } from "./types";

export const tasks: Writable<Task[]> = writable([
  {text: "Lorem ips...", checked: true, removed: false},
  {text: "Lorem ipsum!", checked: false, removed: false},
])
