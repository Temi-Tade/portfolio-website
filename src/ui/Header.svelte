<script lang="ts">
	import Menu from 'lucide-svelte/icons/menu';
	import X from 'lucide-svelte/icons/x';
	import { base } from '$app/paths';

	type NavLink = {
		id: number;
		name: string;
		href: string;
	};

	const links: NavLink[] = [
		{ id: 0, name: 'Home', href: '#top' },
		{ id: 1, name: 'About', href: '#about' },
		{ id: 2, name: 'Projects', href: '#projects' },
		{ id: 3, name: 'Spotlights', href: '#spotlights' },
		{ id: 4, name: 'Articles', href: '#articles' },
		{ id: 5, name: 'Contacts', href: '#contacts' }
	];

	let isMenuOpen = $state(false);
	let readProgress = $state(0);

	function closeMenu() {
		isMenuOpen = false;
	}

	function updateReadProgress() {
		if (typeof window === 'undefined') return;
		const scrollable = document.documentElement.scrollHeight - window.innerHeight;
		if (scrollable <= 0) {
			readProgress = 0;
			return;
		}
		readProgress = Math.min(1, Math.max(0, window.scrollY / scrollable));
	}

	$effect(() => {
		updateReadProgress();
		window.addEventListener('scroll', updateReadProgress, { passive: true });
		window.addEventListener('resize', updateReadProgress, { passive: true });
		return () => {
			window.removeEventListener('scroll', updateReadProgress);
			window.removeEventListener('resize', updateReadProgress);
		};
	});
</script>

<header class="topbar">
	<div class="nav-shell">
		<a href="#top" class="brand" aria-label="Temiloluwa home page">
			<img src="{base}/images/TEEE.png" alt="Temiloluwa" />
		</a>

		<nav class:open={isMenuOpen} class="nav-panel" aria-label="Main navigation">
			<ul>
				{#each links as link (link.id)}
					<li>
						<a href={link.href} class="nav-link" onclick={closeMenu}>
							{link.name}
						</a>
					</li>
				{/each}
				<li class="mobile-cta-item">
					<a href="mailto:akintadetemi19@gmail.com" class="nav-cta mobile-cta" onclick={closeMenu}>
						Hire me
					</a>
				</li>
			</ul>
		</nav>

		<div class="nav-actions">
			<a href="mailto:akintadetemi19@gmail.com" class="nav-cta desktop-cta">Hire me</a>
			<button
				type="button"
				class="menu-button"
				aria-label="Toggle navigation menu"
				aria-expanded={isMenuOpen}
				onclick={() => (isMenuOpen = !isMenuOpen)}
			>
				{#if isMenuOpen}
					<X size={20} />
				{:else}
					<Menu size={20} />
				{/if}
			</button>
		</div>
	</div>
	<div
		class="reading-progress"
		aria-hidden="true"
		style:transform={`scaleX(${readProgress})`}
	></div>
</header>

<style>
	.topbar {
		position: sticky;
		top: 0;
		z-index: 50;
		backdrop-filter: blur(16px);
		background: rgba(9, 9, 11, 0.84);
		border-bottom: 1px solid var(--border);
	}

	.reading-progress {
		position: absolute;
		left: 0;
		right: 0;
		bottom: -1px;
		height: 2px;
		background: linear-gradient(90deg, var(--primary) 0%, var(--primary-bright) 100%);
		transform-origin: left center;
		pointer-events: none;
		will-change: transform;
	}

	.nav-shell {
		width: min(1180px, calc(100% - 2rem));
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 2rem;
		padding: 0.85rem 0;
		position: relative;
	}

	.brand {
		display: inline-flex;
		align-items: center;
		flex-shrink: 0;
		padding: 0.15rem 0;
	}

	.brand img {
		width: clamp(3rem, 3.6vw, 3.85rem);
		height: auto;
	}

	.nav-panel ul {
		list-style: none;
		display: flex;
		align-items: center;
		gap: 1.5rem;
		margin: 0;
		padding: 0;
	}

	.nav-link {
		position: relative;
		display: inline-block;
		padding: 0.35rem 0;
		font-size: 0.92rem;
		font-weight: 500;
		color: var(--muted);
		white-space: nowrap;
		flex-shrink: 0;
		transition: color 160ms cubic-bezier(0.16, 1, 0.3, 1);
	}

	.nav-link::after {
		content: '';
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		height: 1px;
		background: var(--primary-bright);
		transform: scaleX(0);
		transform-origin: left;
		transition: transform 180ms cubic-bezier(0.16, 1, 0.3, 1);
	}

	.nav-link:hover,
	.nav-link:focus-visible {
		color: var(--ink);
	}

	.nav-link:hover::after,
	.nav-link:focus-visible::after {
		transform: scaleX(1);
	}

	.nav-actions {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		flex-shrink: 0;
	}

	.nav-cta {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 0.58rem 1.15rem;
		border-radius: 0.55rem;
		background: var(--primary);
		color: #ffffff;
		font-size: 0.88rem;
		font-weight: 600;
		white-space: nowrap;
		flex-shrink: 0;
		transition:
			background-color 160ms cubic-bezier(0.16, 1, 0.3, 1),
			transform 160ms cubic-bezier(0.16, 1, 0.3, 1);
	}

	.nav-cta:hover,
	.nav-cta:focus-visible {
		background: var(--primary-hover);
		transform: translateY(-1px);
	}

	.mobile-cta-item {
		display: none;
	}

	.menu-button {
		display: none;
		align-items: center;
		justify-content: center;
		width: 2.65rem;
		height: 2.65rem;
		border: 1px solid var(--border);
		border-radius: 0.55rem;
		background: var(--surface);
		color: var(--ink);
		transition:
			background-color 160ms cubic-bezier(0.16, 1, 0.3, 1),
			border-color 160ms cubic-bezier(0.16, 1, 0.3, 1);
	}

	.menu-button:hover,
	.menu-button:focus-visible {
		background: var(--surface-elevated);
		border-color: var(--border-strong);
	}

	@media (max-width: 840px) {
		.desktop-cta {
			display: none;
		}

		.mobile-cta-item {
			display: block;
			padding-top: 0.35rem;
		}

		.menu-button {
			display: inline-flex;
		}

		.nav-panel {
			position: absolute;
			top: calc(100% + 0.5rem);
			right: 0;
			min-width: 13.5rem;
			padding: 0.85rem;
			border-radius: 0.85rem;
			border: 1px solid var(--border-strong);
			background: var(--surface);
			box-shadow: var(--shadow);
			opacity: 0;
			pointer-events: none;
			transform: translateY(-6px);
			transition:
				opacity 180ms cubic-bezier(0.16, 1, 0.3, 1),
				transform 180ms cubic-bezier(0.16, 1, 0.3, 1);
		}

		.nav-panel.open {
			opacity: 1;
			pointer-events: auto;
			transform: translateY(0);
		}

		.nav-panel ul {
			flex-direction: column;
			align-items: stretch;
			gap: 0.25rem;
		}

		.nav-link {
			display: block;
			padding: 0.6rem 0.7rem;
			border-radius: 0.45rem;
		}

		.nav-link::after {
			display: none;
		}

		.nav-link:hover,
		.nav-link:focus-visible {
			background: var(--surface-elevated);
		}

		.mobile-cta {
			width: 100%;
			padding: 0.7rem 1rem;
		}
	}
</style>