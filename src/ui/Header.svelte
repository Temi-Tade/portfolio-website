<script lang="ts">
	import Home from 'lucide-svelte/icons/house';
	import About from 'lucide-svelte/icons/info';
	import Cog from 'lucide-svelte/icons/cog';
	import Phone from 'lucide-svelte/icons/phone';
	import BookOpen from 'lucide-svelte/icons/book-open';
	import Menu from 'lucide-svelte/icons/menu';
	import X from 'lucide-svelte/icons/x';
	import type { Icon as IconType } from 'lucide-svelte';
	import { base } from '$app/paths';

	type Links = {
		id: number;
		name: string;
		href: string;
		icon: typeof IconType;
	};

	const links: Links[] = [
		{ id: 0, name: 'Home', href: '#', icon: Home },
		{ id: 1, name: 'About', href: '#about', icon: About },
		{ id: 2, name: 'Projects', href: '#projects', icon: Cog },
		{ id: 3, name: 'Articles', href: '#articles', icon: BookOpen },
		{ id: 4, name: 'Contacts', href: '#contacts', icon: Phone }
	];

	let isMenuOpen = $state(false);
</script>

<section class="topbar">
	<header class="nav-shell">
		<a href="#top" class="brand" aria-label="Temiloluwa home page">
			<img src="{base}/images/TEEE.png" alt="Temiloluwa" />
		</a>

		<div class="nav-wrapper">
			<button
				class="menu-button"
				aria-label="Toggle navigation menu"
				onclick={() => (isMenuOpen = !isMenuOpen)}
			>
				{#if isMenuOpen}
					<X />
				{:else}
					<Menu />
				{/if}
			</button>

			<nav class:open={isMenuOpen} class="nav-panel" aria-label="Main navigation">
				<ul>
					{#each links as link (link.id)}
						{@const Icon = link.icon}
						<li>
							<a href={link.href} class="nav-link">
								<Icon />
								<span>{link.name}</span>
							</a>
						</li>
					{/each}
					<li>
						<a href="mailto:akintadetemi19@gmail.com" class="nav-cta">Hire me</a>
					</li>
				</ul>
			</nav>
		</div>
	</header>
</section>

<style>
	.topbar {
		position: sticky;
		top: 0;
		z-index: 50;
		backdrop-filter: blur(18px);
		background: rgba(245, 247, 255, 0.75);
		border-bottom: 1px solid var(--border);
	}

	.nav-shell {
		width: min(1200px, calc(100% - 2rem));
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0.9rem 0;
	}

	.brand {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 0.25rem;
	}

	.brand img {
		width: clamp(3.5rem, 4vw, 5rem);
		height: auto;
	}

	.nav-wrapper {
		position: relative;
		display: flex;
		align-items: center;
	}

	.menu-button {
		display: none;
		align-items: center;
		justify-content: center;
		width: 2.8rem;
		height: 2.8rem;
		border: 1px solid var(--border);
		border-radius: 0.9rem;
		background: rgba(255, 255, 255, 0.8);
		color: var(--primary-strong);
	}

	.menu-button:hover,
	.menu-button:focus-visible {
		background: rgba(29, 78, 216, 0.08);
		border-color: rgba(29, 78, 216, 0.2);
		transform: translateY(-1px);
	}

	.nav-panel ul {
		list-style: none;
		display: flex;
		align-items: center;
		gap: 0.75rem;
		margin: 0;
		padding: 0;
	}

	.nav-link,
	.nav-cta {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.7rem 1rem;
		border-radius: 999px;
		font-size: 0.96rem;
		font-weight: 600;
		color: var(--primary-strong);
	}

	.nav-link {
		color: var(--muted);
	}

	.nav-link:hover,
	.nav-link:focus-visible {
		background: rgba(29, 78, 216, 0.08);
		color: var(--primary);
	}

	.nav-cta {
		background: var(--primary);
		color: #ffffff;
		box-shadow: 0 12px 24px rgba(29, 78, 216, 0.2);
	}

	.nav-cta:hover,
	.nav-cta:focus-visible {
		background: #1e3a8a;
		transform: translateY(-1px);
	}

	@media (max-width: 768px) {
		.menu-button {
			display: inline-flex;
		}

		.nav-panel {
			position: absolute;
			top: calc(100% + 0.75rem);
			right: 0;
			padding: 0.75rem;
			border-radius: 1rem;
			border: 1px solid var(--border);
			background: rgba(255, 255, 255, 0.92);
			box-shadow: var(--shadow);
			opacity: 0;
			pointer-events: none;
			transform: translateY(-8px);
		}

		.nav-panel.open {
			opacity: 1;
			pointer-events: auto;
			transform: translateY(0);
		}

		.nav-panel ul {
			flex-direction: column;
			align-items: stretch;
			min-width: 12rem;
		}

		.nav-link,
		.nav-cta {
			justify-content: flex-start;
			width: 100%;
		}
	}
</style>