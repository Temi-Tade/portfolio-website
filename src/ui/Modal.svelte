<script lang="ts">
	let { children, onClose } = $props();
</script>

<div class="modal-backdrop" aria-modal="true" role="dialog">
	<div class="modal-panel">
		<button class="close-button" aria-label="Close modal" onclick={() => onClose()}>&times;</button>
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
		padding: 1rem;
		background: rgba(15, 23, 42, 0.56);
		backdrop-filter: blur(12px);
	}

	.modal-panel {
		position: relative;
		width: min(100%, 42rem);
		padding: 1.25rem 1.25rem 1.5rem;
		border-radius: 1.5rem;
		background: rgba(255, 255, 255, 0.96);
		border: 1px solid rgba(15, 23, 42, 0.08);
		box-shadow: 0 28px 60px rgba(15, 23, 42, 0.2);
		text-align: center;
	}

	.close-button {
		position: absolute;
		top: 0.8rem;
		right: 0.8rem;
		width: 2.2rem;
		height: 2.2rem;
		border: none;
		border-radius: 999px;
		background: rgba(15, 23, 42, 0.05);
		color: var(--primary-strong);
		font-size: 1.6rem;
		line-height: 1;
	}
</style>