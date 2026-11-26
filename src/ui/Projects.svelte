<script lang="ts">
	import ArrowOut from 'lucide-svelte/icons/arrow-up-right';
	import GitHub from 'lucide-svelte/icons/github';
	import Modal from './Modal.svelte';
	import { base } from '$app/paths';

	let projectModalDetails = $state({
		name: '',
		image: '',
		description: '',
		link: '',
		github: ''
	});
	let isModalOpen = $state(false);

	type StackItem = {
		name: string;
		logo?: string;
		custom?: 'hardhat';
	};

	const stackIcons = {
		nextjs: { name: 'Next.js', logo: 'https://cdn.simpleicons.org/nextdotjs/f4f4f5' },
		typescript: { name: 'TypeScript', logo: 'https://cdn.simpleicons.org/typescript/3178c6' },
		supabase: { name: 'Supabase', logo: 'https://cdn.simpleicons.org/supabase/3ecf8e' },
		tailwindcss: { name: 'Tailwind CSS', logo: 'https://cdn.simpleicons.org/tailwindcss/38bdf8' },
		react: { name: 'React', logo: 'https://cdn.simpleicons.org/react/61dafb' },
		javascript: { name: 'JavaScript', logo: 'https://cdn.simpleicons.org/javascript/f7df1e' },
		nodejs: { name: 'Node.js', logo: 'https://cdn.simpleicons.org/nodedotjs/5fa04e' },
		hardhat: { name: 'Hardhat', custom: 'hardhat' as const },
		c: { name: 'C', logo: 'https://cdn.simpleicons.org/c/60a5fa' }
	};

	type ProjectType = {
		id: number;
		name: string;
		link: string;
		github?: string;
		description: string;
		stack: StackItem[];
		tags: string[];
		image: string;
	};

	const projects: ProjectType[] = [
		{
			id: 4,
			name: 'ShipTok',
			link: 'https://shiptok-app.vercel.app',
			description:
				'A social discovery platform for makers and builders to share builds, explore trending projects, and connect with creators.',
			stack: [
				stackIcons.nextjs,
				stackIcons.typescript,
				stackIcons.supabase,
				stackIcons.tailwindcss
			],
			tags: ['Web App', 'Social', 'Makers', 'Discovery'],
			image: `${base}/images/shiptok.png`
		},
		{
			id: 5,
			name: 'Ohm-E',
			link: 'https://github.com/Temi-Tade/Ohm-E',
			github: 'https://github.com/Temi-Tade/Ohm-E',
			description:
				'An interactive browser-based circuit simulator with a component library, real-time current flow, voltage coloring, and oscilloscope.',
			stack: [stackIcons.react, stackIcons.typescript, stackIcons.tailwindcss],
			tags: ['Electronics', 'Simulation', 'Interactive', 'Web App'],
			image: `${base}/images/ohm-e.png`
		},
		{
			id: 0,
			name: 'RivETH',
			link: 'https://temi-tade.github.io/RivETHDocs',
			github: 'https://github.com/Temi-Tade/RivETH',
			description:
				'An open source Ethereum smart contract infrastructure for deploying and interacting with smart contracts. Alchemy-listed.',
			stack: [stackIcons.javascript, stackIcons.nodejs, stackIcons.hardhat],
			tags: ['Ethereum', 'Smart Contracts', 'Open Source', 'Dev Tools'],
			image: `${base}/images/riveth.png`
		},
		{
			id: 1,
			name: 'qodon',
			link: 'https://github.com/Temi-Tade/qodon',
			github: 'https://github.com/Temi-Tade/qodon',
			description: 'A CLI-based genomics tool. Written in C.',
			stack: [stackIcons.c],
			tags: ['CLI', 'Genomics', 'Bioinformatics', 'C'],
			image: `${base}/images/qdn_qft.png`
		},
		{
			id: 2,
			name: 'Medusa',
			link: 'https://temi-tade.github.io/medusa',
			github: 'https://github.com/Temi-Tade/medusa',
			description: 'A password-based file encryption tool with lossless decryption.',
			stack: [stackIcons.javascript],
			tags: ['Encryption', 'Security', 'File Management'],
			image: `${base}/images/medusa.png`
		},
		{
			id: 3,
			name: 'Skaylar',
			link: 'https://temi-tade.github.io/Skaylar',
			github: 'https://github.com/Temi-Tade/Skaylar',
			description:
				"A tool for analysing and visualizing first-digit distributions using Benford's Law.",
			stack: [stackIcons.javascript],
			tags: ['Data Analysis', 'Visualization', "Benford's Law", 'Statistics'],
			image: `${base}/images/Skaylar.png`
		}
	];
</script>

<section class="projects-section" id="projects">
	{#if isModalOpen}
		<Modal onClose={() => (isModalOpen = false)}>
			<h3 class="modal-title">{projectModalDetails.name}</h3>
			<div class="modal-image-wrap">
				<img
					src={projectModalDetails.image}
					alt={projectModalDetails.description}
					loading="lazy"
					referrerpolicy="no-referrer"
				/>
			</div>
			<p class="modal-desc">{projectModalDetails.description}</p>
			<div class="modal-actions">
				{#if projectModalDetails.github}
					<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
					<a href={projectModalDetails.github} target="_blank" rel="noreferrer" class="project-link ghost-link">
						<GitHub size={16} />
						GitHub
					</a>
				{/if}
				<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
				<a href={projectModalDetails.link} target="_blank" rel="noreferrer" class="project-link primary-link">
					View project
					<ArrowOut size={16} />
				</a>
			</div>
		</Modal>
	{/if}

	<div class="section-heading">
		<div>
			<span class="kicker">Selected work</span>
			<h2>Builds across web, blockchain, systems, and embedded software.</h2>
		</div>
		<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
		<a href="https://github.com/Temi-Tade" target="_blank" rel="noreferrer" class="github-inline">
			Visit my GitHub
			<ArrowOut size={16} />
		</a>
	</div>

	<ul class="projects-grid">
		{#each projects as project (project.id)}
			<li class="project-card">
				<button
					type="button"
					class="image-button"
					aria-label={`Inspect ${project.name} screenshot`}
					onclick={() => {
						projectModalDetails = {
							name: project.name,
							image: project.image,
							description: project.description,
							link: project.link,
							github: project.github ?? ''
						};
						isModalOpen = true;
					}}
				>
					<img
						src={project.image}
						alt={project.description}
						loading="lazy"
						referrerpolicy="no-referrer"
					/>
				</button>

				<div class="project-body">
					<div class="project-header">
						<h3>{project.name}</h3>
					</div>

					<p class="project-description">{project.description}</p>

					<ul class="project-stack" aria-label={`${project.name} tech stack`}>
						{#each project.stack as tech (tech.name)}
							<li class="stack-icon" title={tech.name}>
								{#if tech.custom === 'hardhat'}
									<svg
										viewBox="0 0 24 24"
										width="18"
										height="18"
										role="img"
										aria-label="Hardhat"
										fill="none"
									>
										<path
											d="M12 4.5c-4.2 0-7.5 3.2-7.5 7.3V15h15v-3.2c0-4.1-3.3-7.3-7.5-7.3Z"
											fill="#FACC15"
										/>
										<path
											d="M10.25 4.75V12h3.5V4.75a7.5 7.5 0 0 0-3.5 0Z"
											fill="#FEF08A"
										/>
										<rect x="2.5" y="14.5" width="19" height="3" rx="1.5" fill="#EAB308" />
									</svg>
								{:else if tech.logo}
									<img
										src={tech.logo}
										alt={tech.name}
										width="18"
										height="18"
										loading="lazy"
										referrerpolicy="no-referrer"
									/>
								{/if}
							</li>
						{/each}
					</ul>

					<p class="project-tags">{project.tags.join(' · ')}</p>

					<div class="project-actions">
						{#if project.github}
							<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
							<a href={project.github} target="_blank" rel="noreferrer" class="project-link ghost-link">
								<GitHub size={15} />
								GitHub
							</a>
						{/if}
						<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
						<a href={project.link} target="_blank" rel="noreferrer" class="project-link primary-link">
							View project
							<ArrowOut size={15} />
						</a>
					</div>
				</div>
			</li>
		{/each}
	</ul>
</section>

<style>
	.projects-section {
		margin-top: 2.5rem;
		padding: 3rem 0 1.5rem;
		border-top: 1px solid var(--border);
	}

	.section-heading {
		display: flex;
		flex-wrap: wrap;
		align-items: flex-end;
		justify-content: space-between;
		gap: 1rem 2rem;
		margin-bottom: 2rem;
	}

	.kicker {
		display: block;
		font-family: var(--font-mono);
		font-size: 0.78rem;
		font-weight: 500;
		letter-spacing: 0.04em;
		color: var(--primary-bright);
	}

	.section-heading h2 {
		margin: 0.5rem 0 0;
		max-width: 34rem;
		font-size: clamp(1.8rem, 3vw, 2.55rem);
		line-height: 1.12;
		letter-spacing: -0.03em;
	}

	.github-inline {
		display: inline-flex;
		align-items: center;
		gap: 0.45rem;
		padding: 0.65rem 1.05rem;
		border-radius: 0.55rem;
		border: 1px solid var(--border-strong);
		background: var(--surface);
		color: var(--ink);
		font-size: 0.88rem;
		font-weight: 600;
		white-space: nowrap;
		flex-shrink: 0;
		transition:
			background-color 160ms cubic-bezier(0.16, 1, 0.3, 1),
			border-color 160ms cubic-bezier(0.16, 1, 0.3, 1),
			transform 160ms cubic-bezier(0.16, 1, 0.3, 1);
	}

	.github-inline:hover,
	.github-inline:focus-visible {
		background: var(--surface-elevated);
		border-color: rgba(255, 255, 255, 0.28);
		transform: translateY(-1px);
	}

	.projects-grid {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 1.35rem;
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.project-card {
		display: flex;
		flex-direction: column;
		border: 1px solid var(--border);
		border-radius: 0.9rem;
		background: var(--surface);
		overflow: hidden;
		transition:
			border-color 180ms cubic-bezier(0.16, 1, 0.3, 1),
			transform 180ms cubic-bezier(0.16, 1, 0.3, 1);
	}

	.project-card:hover {
		border-color: var(--border-strong);
		transform: translateY(-2px);
	}

	.image-button {
		display: block;
		width: 100%;
		padding: 0;
		border: none;
		border-bottom: 1px solid var(--border);
		background: var(--bg-subtle);
		overflow: hidden;
		aspect-ratio: 16 / 10;
	}

	.image-button img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 240ms cubic-bezier(0.16, 1, 0.3, 1);
	}

	.image-button:hover img,
	.image-button:focus-visible img {
		transform: scale(1.03);
	}

	.project-body {
		display: flex;
		flex-direction: column;
		flex: 1;
		padding: 1.25rem 1.35rem 1.35rem;
	}

	.project-header h3 {
		margin: 0;
		font-size: 1.35rem;
		font-weight: 600;
		letter-spacing: -0.02em;
	}

	.project-description {
		margin: 0.6rem 0 0;
		color: var(--muted);
		font-size: 0.94rem;
		line-height: 1.62;
	}

	.project-stack {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 0.75rem;
		list-style: none;
		margin: 0.95rem 0 0;
		padding: 0;
	}

	.stack-icon {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		transition: transform 160ms cubic-bezier(0.16, 1, 0.3, 1);
	}

	.stack-icon:hover {
		transform: translateY(-1px) scale(1.1);
	}

	.stack-icon img,
	.stack-icon svg {
		width: 1.15rem;
		height: 1.15rem;
		object-fit: contain;
		display: block;
	}

	.project-tags {
		margin: 0.6rem 0 0;
		font-size: 0.8rem;
		color: var(--subtle);
		line-height: 1.5;
	}

	.project-actions {
		display: flex;
		flex-wrap: wrap;
		gap: 0.65rem;
		margin-top: auto;
		padding-top: 1.25rem;
	}

	.project-link {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 0.4rem;
		padding: 0.58rem 1rem;
		border-radius: 0.5rem;
		font-size: 0.86rem;
		font-weight: 600;
		white-space: nowrap;
		flex-shrink: 0;
		transition:
			background-color 160ms cubic-bezier(0.16, 1, 0.3, 1),
			border-color 160ms cubic-bezier(0.16, 1, 0.3, 1),
			transform 160ms cubic-bezier(0.16, 1, 0.3, 1);
	}

	.ghost-link {
		background: var(--surface-elevated);
		border: 1px solid var(--border);
		color: var(--ink);
	}

	.ghost-link:hover,
	.ghost-link:focus-visible {
		border-color: var(--border-strong);
		background: rgba(255, 255, 255, 0.08);
		transform: translateY(-1px);
	}

	.primary-link {
		background: var(--primary);
		color: #ffffff;
	}

	.primary-link:hover,
	.primary-link:focus-visible {
		background: var(--primary-hover);
		transform: translateY(-1px);
	}

	.modal-title {
		margin: 0;
		padding-right: 2.5rem;
		font-size: 1.45rem;
	}

	.modal-image-wrap {
		margin: 1rem 0;
		border-radius: 0.6rem;
		overflow: hidden;
		border: 1px solid var(--border);
		background: var(--bg-subtle);
	}

	.modal-image-wrap img {
		width: 100%;
		max-height: 62vh;
		object-fit: contain;
	}

	.modal-desc {
		margin: 0;
		color: var(--muted);
		line-height: 1.65;
	}

	.modal-actions {
		display: flex;
		flex-wrap: wrap;
		gap: 0.65rem;
		margin-top: 1.15rem;
	}

	@media (max-width: 768px) {
		.projects-grid {
			grid-template-columns: 1fr;
		}
	}
</style>