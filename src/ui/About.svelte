<script lang="ts">
	import Download from 'lucide-svelte/icons/file-text';
	import ArrowUpRight from 'lucide-svelte/icons/arrow-up-right';
	import Computer from 'lucide-svelte/icons/laptop';
	import Blocks from 'lucide-svelte/icons/blocks';
	import Cpu from 'lucide-svelte/icons/cpu';
	import { base } from '$app/paths';

	type Tool = {
		id: number;
		name: string;
		logo: string;
	};

	const tools: Tool[] = [
		{ id: 0, name: 'React', logo: 'https://cdn.simpleicons.org/react/61dafb' },
		{ id: 1, name: 'Next.js', logo: 'https://cdn.simpleicons.org/nextdotjs/f4f4f5' },
		{ id: 2, name: 'Tailwind', logo: 'https://cdn.simpleicons.org/tailwindcss/38bdf8' },
		{ id: 3, name: 'Svelte', logo: 'https://cdn.simpleicons.org/svelte/ff3e00' },
		{ id: 4, name: 'TypeScript', logo: 'https://cdn.simpleicons.org/typescript/3178c6' },
		{ id: 5, name: 'Solidity', logo: 'https://cdn.simpleicons.org/solidity/a78bfa' },
		{ id: 6, name: 'Foundry', logo: 'https://cdn.simpleicons.org/ethereum/e4e4e7' },
		{ id: 7, name: 'C', logo: 'https://cdn.simpleicons.org/c/60a5fa' },
		{ id: 8, name: 'Arduino', logo: 'https://cdn.simpleicons.org/arduino/00b4bd' }
	];

	const services = [
		{ name: 'Web Application Development', icon: Computer },
		{ name: 'Smart Contract Development & dApp Integration', icon: Blocks },
		{ name: 'Systems & Embedded Software Development', icon: Cpu }
	];
</script>

<section class="hero-section" id="about">
	<div class="hero-grid">
		<div class="hero-copy">
			<h1>
				Hello, I am <span class="name-accent">Temiloluwa</span>
				<span class="role-title">Software Developer</span>
			</h1>

			<p class="lead">
				I am a software developer with 5+ years of experience building products across web,
				blockchain, systems, and embedded spaces. I design and ship reliable software that balances
				product thinking, engineering quality, and real-world usability.
			</p>

			<div class="action-row">
				<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
				<a class="primary-action" href="{base}/docs/AKINTADE TEMILOLUWA AYOMIDE CV.pdf">
					<Download size={17} />
					My Resume
				</a>
				<a class="secondary-action" href="mailto:akintadetemi19@gmail.com">
					Got a project?
					<ArrowUpRight size={16} />
				</a>
			</div>

			<div class="stack-block">
				<span class="stack-label">Core Stack</span>
				<ul class="tech-list">
					{#each tools as tool (tool.id)}
						<li class="tech-item">
							<img
								src={tool.logo}
								alt={`${tool.name} logo`}
								class="tech-logo"
								referrerpolicy="no-referrer"
							/>
							<span>{tool.name}</span>
						</li>
					{/each}
				</ul>
			</div>
		</div>

		<div class="hero-visual">
			<figure class="portrait-frame">
				<div class="portrait-media">
					<img
						src="{base}/images/temiloluwa-peerlist.jpg"
						alt="Temiloluwa Akintade, software developer"
						width="400"
						height="500"
						fetchpriority="high"
						referrerpolicy="no-referrer"
					/>
				</div>
				<figcaption class="portrait-caption">
					<strong>5+ Years</strong>
					<span>Web · Blockchain · Systems</span>
				</figcaption>
			</figure>
		</div>
	</div>

	<div class="about-band">
		<div class="about-copy">
			<h2>About me</h2>
			<p>
				I have spent the last 5+ years building software across the stack — from polished web
				experiences to smart contract and onchain product work, low-level systems, and embedded
				prototypes.
			</p>
			<p>
				My stack spans React, Next.js, TailwindCSS, Svelte, TypeScript, Solidity, Foundry, C, and
				Arduino. I enjoy turning ambitious ideas into real, usable products that work in the wild.
			</p>
		</div>

		<div class="about-disciplines">
			<h3>What I build</h3>
			<ul>
				{#each services as service (service.name)}
					{@const Icon = service.icon}
					<li>
						<span class="discipline-icon">
							<Icon size={18} />
						</span>
						<span>{service.name}</span>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</section>

<style>
	.hero-section {
		padding: 3rem 0 1.5rem;
	}

	.hero-grid {
		display: grid;
		grid-template-columns: minmax(0, 1.25fr) minmax(0, 0.75fr);
		gap: 3rem;
		align-items: center;
	}

	.hero-copy h1 {
		margin: 0;
		font-size: clamp(2.4rem, 4.4vw, 4.1rem);
		font-weight: 700;
		line-height: 1.04;
		letter-spacing: -0.035em;
	}

	.name-accent {
		color: var(--primary-bright);
	}

	.role-title {
		display: block;
		margin-top: 0.45rem;
		font-family: var(--font-sans);
		font-size: clamp(1.08rem, 1.75vw, 1.4rem);
		font-weight: 500;
		line-height: 1.3;
		letter-spacing: -0.01em;
		color: var(--muted);
	}

	.lead {
		max-width: 39rem;
		margin: 1.35rem 0 0;
		font-size: 1.02rem;
		line-height: 1.7;
		color: var(--muted);
	}

	.action-row {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 0.85rem;
		margin-top: 1.75rem;
	}

	.primary-action,
	.secondary-action {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		padding: 0.75rem 1.35rem;
		border-radius: 0.55rem;
		font-size: 0.92rem;
		font-weight: 600;
		white-space: nowrap;
		flex-shrink: 0;
		transition:
			background-color 160ms cubic-bezier(0.16, 1, 0.3, 1),
			border-color 160ms cubic-bezier(0.16, 1, 0.3, 1),
			transform 160ms cubic-bezier(0.16, 1, 0.3, 1);
	}

	.primary-action {
		background: var(--primary);
		color: #ffffff;
	}

	.primary-action:hover,
	.primary-action:focus-visible {
		background: var(--primary-hover);
		transform: translateY(-1px);
	}

	.secondary-action {
		background: var(--surface);
		border: 1px solid var(--border-strong);
		color: var(--ink);
	}

	.secondary-action:hover,
	.secondary-action:focus-visible {
		background: var(--surface-elevated);
		border-color: rgba(255, 255, 255, 0.28);
		transform: translateY(-1px);
	}

	.stack-block {
		margin-top: 2rem;
		padding-top: 1.25rem;
		border-top: 1px solid var(--border);
	}

	.stack-label {
		display: block;
		margin-bottom: 0.75rem;
		font-family: var(--font-mono);
		font-size: 0.75rem;
		letter-spacing: 0.04em;
		color: var(--subtle);
	}

	.tech-list {
		display: flex;
		flex-wrap: wrap;
		gap: 0.65rem 1.35rem;
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.tech-item {
		display: inline-flex;
		align-items: center;
		gap: 0.45rem;
		font-size: 0.86rem;
		font-weight: 500;
		color: #d4d4d8;
	}

	.tech-logo {
		width: 1rem;
		height: 1rem;
		object-fit: contain;
		flex-shrink: 0;
	}

	.hero-visual {
		display: flex;
		justify-content: flex-end;
	}

	.portrait-frame {
		width: min(100%, 24rem);
		margin: 0;
		padding: 0.65rem;
		border-radius: 0.9rem;
		background: var(--surface);
		border: 1px solid var(--border);
		box-shadow: var(--shadow);
	}

	.portrait-media {
		overflow: hidden;
		border-radius: 0.55rem;
		background: var(--surface-elevated);
	}

	.portrait-media img {
		width: 100%;
		aspect-ratio: 4 / 5;
		object-fit: cover;
	}

	.portrait-caption {
		display: flex;
		align-items: baseline;
		justify-content: space-between;
		gap: 0.75rem;
		padding: 0.8rem 0.35rem 0.25rem;
	}

	.portrait-caption strong {
		font-family: var(--font-mono);
		font-variant-numeric: tabular-nums;
		font-size: 0.92rem;
		font-weight: 600;
		color: var(--ink);
		white-space: nowrap;
	}

	.portrait-caption span {
		font-size: 0.8rem;
		color: var(--muted);
		text-align: right;
	}

	.about-band {
		margin-top: 2.75rem;
		padding: 1.75rem;
		border: 1px solid var(--border);
		border-radius: 0.9rem;
		background: var(--surface);
		display: grid;
		grid-template-columns: minmax(0, 1.15fr) minmax(0, 0.85fr);
		gap: 2.25rem;
		align-items: start;
	}

	.about-copy {
		display: flex;
		flex-direction: column;
		gap: 0.85rem;
	}

	.about-copy h2 {
		margin: 0;
		font-size: clamp(1.5rem, 2.2vw, 1.95rem);
		letter-spacing: -0.025em;
	}

	.about-copy p {
		margin: 0;
		max-width: 58ch;
		color: var(--muted);
		line-height: 1.68;
	}

	.about-disciplines h3 {
		margin: 0 0 0.9rem;
		font-family: var(--font-mono);
		font-size: 0.78rem;
		font-weight: 500;
		letter-spacing: 0.04em;
		color: var(--subtle);
	}

	.about-disciplines ul {
		display: flex;
		flex-direction: column;
		margin: 0;
		padding: 0;
		list-style: none;
		border-top: 1px solid var(--border);
	}

	.about-disciplines li {
		display: flex;
		align-items: center;
		gap: 0.85rem;
		padding: 0.9rem 0;
		border-bottom: 1px solid var(--border);
		color: var(--ink);
		font-size: 0.95rem;
		font-weight: 500;
	}

	.discipline-icon {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 2rem;
		height: 2rem;
		border-radius: 0.45rem;
		background: rgba(59, 130, 246, 0.12);
		color: var(--primary-bright);
		flex-shrink: 0;
	}

	@media (max-width: 900px) {
		.hero-section {
			padding-top: 2rem;
		}

		.hero-grid {
			grid-template-columns: 1fr;
			gap: 2rem;
		}

		.hero-visual {
			order: -1;
			justify-content: flex-start;
		}

		.portrait-frame {
			width: min(100%, 20rem);
		}

		.about-band {
			grid-template-columns: 1fr;
			gap: 1.75rem;
			padding: 1.35rem;
		}
	}
</style>
