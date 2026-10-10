<script lang="ts">
	import Download from 'lucide-svelte/icons/file';
	import Computer from 'lucide-svelte/icons/computer';
	import Blocks from 'lucide-svelte/icons/blocks';
	import Cpu from 'lucide-svelte/icons/cpu';
	import { base } from '$app/paths';

	type Tool = {
		id: number;
		name: string;
		logo: string;
		color: string;
	};

	const tools: Tool[] = [
		{ id: 0, name: 'React', logo: 'https://cdn.simpleicons.org/react/61dafb', color: '#61dafb' },
		{ id: 1, name: 'Next.js', logo: 'https://cdn.simpleicons.org/nextdotjs/000000', color: '#111827' },
		{ id: 2, name: 'Tailwind', logo: 'https://cdn.simpleicons.org/tailwindcss/06b6d4', color: '#06b6d4' },
		{ id: 3, name: 'Svelte', logo: 'https://cdn.simpleicons.org/svelte/ff3e00', color: '#ff3e00' },
		{ id: 4, name: 'TypeScript', logo: 'https://cdn.simpleicons.org/typescript/3178c6', color: '#3178c6' },
		{ id: 5, name: 'Solidity', logo: 'https://cdn.simpleicons.org/solidity/8a63d2', color: '#8a63d2' },
		{ id: 6, name: 'Foundry', logo: 'https://cdn.simpleicons.org/ethereum/000000', color: '#000000' },
		{ id: 7, name: 'C', logo: 'https://cdn.simpleicons.org/c/00599c', color: '#00599c' },
		{ id: 8, name: 'Arduino', logo: 'https://cdn.simpleicons.org/arduino/00979d', color: '#00979d' }
	];

	const services = [
		{ name: 'Web Application Development', icon: Computer },
		{ name: 'Smart Contract Development & dApp Integration', icon: Blocks },
		{ name: 'Systems & Embedded Software Development', icon: Cpu }
	];
</script>

<section class="hero-section" id="about">
	<div class="hero-copy">
		<!-- <span class="eyebrow">Available for freelance work</span> -->
		<h1>
			Hello, I am <span>Temiloluwa</span>
			<br />
			Software Developer
		</h1>
		<p class="lead">
			I am a software developer with 5+ years of experience building products across web, blockchain,
			systems, and embedded spaces. I design and ship reliable software that balances product
			thinking, engineering quality, and real-world usability.
		</p>

		<div class="action-row">
			<a class="primary-action" href="{base}/docs/AKINTADE TEMILOLUWA AYOMIDE CV.pdf">
				<Download />
				My Resume
			</a>
			<a class="secondary-action" href="mailto:akintadetemi19@gmail.com">Got a project?</a>
		</div>

		<div class="tech-grid">
			{#each tools as tool (tool.id)}
				<span class="tech-pill" style={`--tool-color: ${tool.color}`}>
					<img src={tool.logo} alt={`${tool.name} logo`} class="tech-logo" />
					{tool.name}
				</span>
			{/each}
		</div>
	</div>

	<div class="hero-visual">
		<div class="portrait-card">
			<img
				src="{base}/images/temiloluwa-peerlist.jpg"
				alt="Temiloluwa Akintade, software developer"
				width="400"
				height="400"
				fetchpriority="high"
			/>
		</div>
		<div class="mini-stat">
			<strong>5+ Years</strong>
			<span>Building for real-world impact</span>
		</div>
	</div>

	<div class="service-panel">
		<h2>About me</h2>
		<p>
			I have spent the last 5+ years building software across the stack - from polished web experiences
			to smart contract and onchain product work, low-level systems, and embedded prototypes.
		</p>
		<p>
			My stack spans React, Next.js, TailwindCSS, Svelte, TypeScript, Solidity, Foundry, C, and
			Arduino. I enjoy turning ambitious ideas into real, usable products that work in the wild.
		</p>
		<ul>
			{#each services as service}
				{@const Icon = service.icon}
				<li>
					<Icon />
					<span>{service.name}</span>
				</li>
			{/each}
		</ul>
	</div>
</section>

<style>
	.hero-section {
		display: grid;
		grid-template-columns: 1.2fr 0.8fr;
		gap: 2.25rem;
		padding: 4rem 0 2rem;
		align-items: center;
	}

	.hero-copy,
	.hero-visual,
	.service-panel {
		position: relative;
	}

	.eyebrow {
		display: inline-flex;
		align-items: center;
		padding: 0.5rem 0.9rem;
		margin-bottom: 0.9rem;
		border-radius: 999px;
		font-size: 0.78rem;
		font-weight: 700;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		background: rgba(29, 78, 216, 0.08);
		color: var(--primary);
	}

	.hero-copy h1 {
		margin: 0;
		font-size: clamp(2.5rem, 5vw, 5rem);
		line-height: 0.97;
		letter-spacing: -0.06em;
	}

	.hero-copy h1 span {
		color: var(--primary);
	}

	.lead {
		max-width: 38rem;
		margin-top: 1.25rem;
		font-size: 1.08rem;
		line-height: 1.7;
		color: var(--muted);
	}

	.action-row {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 1rem;
		margin-top: 1.75rem;
	}

	.primary-action,
	.secondary-action {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 0.6rem;
		padding: 0.9rem 1.3rem;
		border-radius: 999px;
		font-weight: 700;
	}

	.primary-action {
		background: var(--primary);
		color: white;
		box-shadow: 0 12px 26px rgba(29, 78, 216, 0.18);
	}

	.primary-action:hover,
	.primary-action:focus-visible {
		background: #1e3a8a;
		transform: translateY(-1px);
		box-shadow: 0 18px 28px rgba(29, 78, 216, 0.2);
	}

	.secondary-action {
		color: var(--primary);
		background: rgba(29, 78, 216, 0.08);
	}

	.secondary-action:hover,
	.secondary-action:focus-visible {
		background: rgba(29, 78, 216, 0.12);
		transform: translateY(-1px);
	}

	.tech-grid {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
		margin-top: 2rem;
	}

	.tech-pill {
		display: inline-flex;
		align-items: center;
		gap: 0.55rem;
		padding: 0.55rem 0.85rem;
		border-radius: 999px;
		background: rgba(255, 255, 255, 0.9);
		border: 1px solid var(--border);
		font-size: 0.8rem;
		font-weight: 600;
		color: var(--primary-strong);
	}

	.tech-logo {
		display: block;
		width: 1.1rem;
		height: 1.1rem;
		object-fit: contain;
		filter: saturate(1.1);
	}

	.hero-visual {
		display: grid;
		place-items: center;
	}

	.portrait-card {
		position: relative;
		padding: 1rem;
		border-radius: 2rem;
		background: linear-gradient(145deg, rgba(255, 255, 255, 0.9), rgba(219, 234, 254, 0.7));
		border: 1px solid rgba(255, 255, 255, 0.7);
		box-shadow: var(--shadow);
	}

	.portrait-card img {
		width: min(100%, 26rem);
		aspect-ratio: 4 / 5;
		object-fit: cover;
		border-radius: 1.35rem;
	}

	.mini-stat {
		position: absolute;
		bottom: -1rem;
		right: -0.5rem;
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		padding: 1rem 1.1rem;
		border-radius: 1rem;
		background: rgba(15, 23, 42, 0.92);
		box-shadow: var(--shadow);
		color: white;
	}

	.mini-stat strong {
		font-size: 1.3rem;
	}

	.mini-stat span {
		font-size: 0.8rem;
		color: rgba(255, 255, 255, 0.78);
	}

	.service-panel {
		grid-column: 1 / -1;
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1.5rem;
		padding: 1.5rem;
		border: 1px solid var(--border);
		border-radius: 1.5rem;
		background: rgba(255, 255, 255, 0.52);
		backdrop-filter: blur(8px);
	}

	.service-panel h2 {
		margin: 0 0 0.75rem;
		font-size: clamp(1.6rem, 2vw, 2.2rem);
	}

	.service-panel p {
		margin: 0;
		color: var(--muted);
		line-height: 1.7;
	}

	.service-panel ul {
		display: grid;
		gap: 0.9rem;
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.service-panel li {
		display: flex;
		align-items: center;
		gap: 0.7rem;
		padding: 0.85rem 0.95rem;
		border-radius: 0.9rem;
		background: rgba(29, 78, 216, 0.04);
		border: 1px solid rgba(29, 78, 216, 0.08);
		color: var(--primary-strong);
		font-weight: 600;
	}

	@media (max-width: 900px) {
		.hero-section {
			grid-template-columns: 1fr;
		}

		.hero-visual {
			order: -1;
		}

		.service-panel {
			grid-template-columns: 1fr;
		}
	}
</style>
