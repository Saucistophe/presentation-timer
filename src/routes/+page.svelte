<script lang="ts">
	import { timers } from '$lib/timers.svelte';
</script>


<h1>Timers
	<button onclick="{() => timers.push(5)}">+</button>
</h1>

{#each timers as timer, index (index)}
	<p>
		<button onclick="{() => timers.splice(index,1)}">🗑️</button>
		Timer {index}:
		<button onclick="{() => timers[index]--}">-️</button>{timer}
		<button onclick="{() => timers[index]++}">+️</button>
	</p>
{/each}

{#if timers.length > 0}
	<a href="./display">GO!</a>
{/if}
