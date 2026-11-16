<script lang="ts">
	import X from 'lucide-svelte/icons/x';

	let { children, onClose } = $props();

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			onClose();
		}
	}
</script>

<svelte:window onkeydown={handleKeydown} />

<!-- svelte-ignore a11y_click_events_have_key_events -->
<div
	class="modal-backdrop"
	aria-modal="true"
	role="dialog"
	tabindex="-1"
	onclick={(event) => {
		if (event.target === event.currentTarget) {
			onClose();
		}
	}}
>
	<div class="modal-panel">
		<button type="button" class="close-button" aria-label="Close modal" onclick={() => onClose()}>
			<X size={18} />
		</button>
		{@render children()}
	</div>
</div>

<style>
	.modal-backdrop {
		position: fixed;
		inset: 0;
		z-index: 100;
		display: grid;
		place-items: center;
		padding: 1.25rem;
		background: rgba(5, 5, 7, 0.82);
		backdrop-filter: blur(10px);
	}

	.modal-panel {
		position: relative;
		width: min(100%, 46rem);
		padding: 1.5rem 1.5rem 1.75rem;
		border-radius: 1rem;
		background: var(--surface);
		border: 1px solid var(--border-strong);
		box-shadow: var(--shadow);
		color: var(--ink);
		text-align: left;
	}

	.close-button {
		position: absolute;
		top: 1rem;
		right: 1rem;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 2.35rem;
		height: 2.35rem;
		border: 1px solid var(--border);
		border-radius: 0.5rem;
		background: var(--surface-elevated);
		color: var(--ink);
		transition:
			background-color 180ms cubic-bezier(0.16, 1, 0.3, 1),
			border-color 180ms cubic-bezier(0.16, 1, 0.3, 1);
	}

	.close-button:hover,
	.close-button:focus-visible {
		background: rgba(255, 255, 255, 0.1);
		border-color: var(--border-strong);
	}
</style>