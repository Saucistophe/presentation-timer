<script lang="ts">
	import { timers } from '$lib/timers.svelte';

	let presentationStart = new Date().getTime();
	let timer = $state(0);
	let elapsedTime = $state(0);
	let enabled = $state(true);
	let pauseStart: number | undefined = undefined;

	// TODO Numbers color
	// TODO Smarter background color


	function passTheTime() {
		const currentTime = new Date().getTime();
		if (pauseStart && enabled) {
			presentationStart -= (pauseStart - currentTime);
			pauseStart = undefined;
		}

		if (enabled) elapsedTime = currentTime - presentationStart;
		else if (!pauseStart) pauseStart = currentTime;
		setTimeout(passTheTime, 100);
	}

	function progress() {
		const rawValue = elapsedTime / (timers[timer] * 1000 * 60);
		return Math.min(Math.max(rawValue, 0), 1);
	}

	function on_key_up(event: KeyboardEvent) {
		switch (event.key) {
			case ' ':
				enabled = !enabled;
				break;
			case 'Enter':
			case 'ArrowRight':
				if (timer < timers.length - 1) {
					presentationStart = new Date().getTime();
					timer++;
				}
				break;
			case 'ArrowLeft':
				if (timer > 0) {
					presentationStart = new Date().getTime();
					timer--;
				}
				break;

			default:
				console.log(event.key);
		}
	}

	function getLabel(): string {
		if (!enabled) return '⏸';
		const currentProgress = progress();
		//if (currentProgress <= 0.5) return '';
		const remainingMinutes = (1 - currentProgress) * timers[timer];
		if (remainingMinutes < 1) return (remainingMinutes * 60).toFixed(0) + '"';
		else return remainingMinutes.toFixed(0) + '\'';
	}

	function getBackgroundColor(): string {
		const currentProgress = progress();
		if (currentProgress < 0.5) return 'hsl(128 100% 80%)';
		else
			return `hsl(${(256 * (1 - currentProgress)).toFixed(0)} 100% ${110 - 60 * currentProgress}%)`;
	}

	passTheTime();

	navigator.wakeLock.request('screen');

</script>

<svelte:window
	on:keyup={on_key_up}
/>

<div class="page-block" style="background-color: {getBackgroundColor()}">
	<div class="numbers">{getLabel()}</div>
</div>
<div class="progress-bar" style="width: {(progress() * 100).toFixed(2)}%">
</div>
<footer>Timer {timer} time {elapsedTime} out of {timers[timer] * 1000 * 60} ({(progress() * 100).toFixed(1)}%)</footer>

<style>
    footer {
        position: absolute;
        bottom: 0;
        right: 0;
    }

    .page-block {
        position: absolute;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .numbers {
        color: white;
        font-size: 30cqh;
        text-align: center;

        text-shadow: -1px -1px 0 rgba(255, 255, 255, .5),
        1px 1px 0 rgba(0, 0, 0, .25),
        3px 3px 3px rgba(0, 0, 0, .25),
        10px 10px 20px rgba(0, 0, 0, .5),
        20px 40px 40px rgba(0, 0, 0, .5);
    }

    .progress-bar {
        position: absolute;
        left: 0;
        top: 0;
        height: 20px;
        background-color: white;
        box-shadow: -1px -1px 0 rgba(255, 255, 255, .5),
        1px 1px 0 rgba(0, 0, 0, .25),
        3px 3px 3px rgba(0, 0, 0, .25),
        10px 10px 20px rgba(0, 0, 0, .5),
        20px 40px 40px rgba(0, 0, 0, .5);
    }
</style>

