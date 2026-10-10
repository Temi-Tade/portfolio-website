<script lang="ts">
	import ArrowOut from 'lucide-svelte/icons/arrow-up-right';
	import GitHub from 'lucide-svelte/icons/github';
	import Modal from './Modal.svelte';
	import { base } from '$app/paths';

	let projectModalDetails = $state({
		name: '',
		image: '',
		description: ''
	});
	let isModalOpen = $state(false);

	type ProjectType = {
		id: number;
		name: string;
		link: string;
		github: string;
		description: string;
		tags: string[];
		image: string;
	};

	const projects: ProjectType[] = [
		{
			id: 0,
			name: 'RivETH',
			link: 'https://temi-tade.github.io/RivETHDocs',
			github: 'https://github.com/Temi-Tade/RivETH',
			description: 'An open source Ethereum smart contract infrastructure for deploying and interacting with smart contracts. Alchemy-listed.',
			tags: ['Ethereum', 'Smart Contracts', 'Open Source', 'Infrastructure', 'Dev Tools'],
			image: `${base}/images/riveth.png`
		},
		{
			id: 1,
			name: 'qodon',
			link: 'https://github.com/Temi-Tade/qodon',
			github: 'https://github.com/Temi-Tade/qodon',
			description: 'A CLI-based genomics tool. Written in C',
			tags: ['CLI', 'Genomics', 'Bioinformatics', 'C'],
			image: `${base}/images/qdn_qft.png`
		},
		{
			id: 2,
			name: 'Medusa',
			link: 'https://temi-tade.github.io/medusa',
			github: 'https://github.com/Temi-Tade/medusa',
			description: 'A password-based file encryption tool with lossless decryption.',
			tags: ['Encryption', 'Security', 'File Management'],
			image: `${base}/images/medusa.png`
		},
		{
			id: 3,
			name: 'Skaylar',
			link: 'https://temi-tade.github.io/Skaylar',
			github: 'https://github.com/Temi-Tade/Skaylar',
			description: 'A tool for analysing and visualizing first-digit distributions using Benford\'s Law.',
			tags: ['Data Analysis', 'Visualization', 'Benford\'s Law', 'Statistics'],
			image: `${base}/images/Skaylar.png`
		}
	];
</script>

<section class="projects-section" id="projects">
	{#if isModalOpen}
		<Modal onClose={() => (isModalOpen = !isModalOpen)}>
			<h3>{projectModalDetails.name}</h3>
			<div class="modal-image-wrap">
				<img
					src={projectModalDetails.image}
					alt={projectModalDetails.description}
					loading="lazy"
				/>
			</div>
			<p>{projectModalDetails.description}</p>
		</Modal>
	{/if}

	<div class="section-heading">
		<span class="eyebrow">Selected work</span>
		<h2>Builds that span product, blockchain, and systems thinking.</h2>
	</div>

	<ul class="projects-grid">
		{#each projects as project (project.id)}
			<li class="project-card">
				<div class="project-media">
					<button
						class="image-button"
						onclick={() => {
							isModalOpen = !isModalOpen;
							projectModalDetails.name = project.name;
							projectModalDetails.image = project.image;
							projectModalDetails.description = project.description;
						}}
					>
						<img src={project.image} alt={project.description} loading="lazy" />
					</button>
					<div class="tag-list">
						{#each project.tags as tag (tag)}
							<span>{tag}</span>
						{/each}
					</div>
				</div>

				<div class="project-body">
					<div class="project-title-row">
						<h3>{project.name}</h3>
						<span>Live</span>
					</div>
					<p class="project-description">{project.description}</p>
					<div class="project-actions">
						<a href={project.github} class="project-link ghost-link">
							<GitHub />
							GitHub
						</a>
						<a href={project.link} class="project-link primary-link">
							View project
							<ArrowOut />
						</a>
					</div>
				</div>
			</li>
		{/each}
	</ul>

	<div class="github-cta">
		<a href="https://github.com/Temi-Tade">
			Visit my GitHub
			<ArrowOut />
		</a>
	</div>
</section>

<style>
	.projects-section {
		padding: 3rem 0 1rem;
	}

	.section-heading {
		margin-bottom: 1.5rem;
		text-align: center;
	}

	.eyebrow {
		display: inline-flex;
		padding: 0.5rem 0.9rem;
		border-radius: 999px;
		background: rgba(124, 58, 237, 0.08);
		color: var(--accent);
		font-size: 0.75rem;
		font-weight: 700;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	.section-heading h2 {
		margin: 1rem 0 0;
		font-size: clamp(2rem, 3vw, 3rem);
		letter-spacing: -0.05em;
	}

	.projects-grid {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 1.5rem;
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.project-card {
		display: grid;
		grid-template-columns: 1.1fr 1fr;
		gap: 1rem;
		padding: 1rem;
		border: 1px solid var(--border);
		border-radius: 1.5rem;
		background: rgba(255, 255, 255, 0.65);
		box-shadow: 0 14px 38px rgba(15, 23, 42, 0.04);
	}

	.project-card:hover {
		transform: translateY(-3px);
		box-shadow: var(--shadow);
	}

	.project-media {
		display: flex;
		flex-direction: column;
		align-items: stretch;
		justify-content: center;
	}

	.image-button {
		padding: 0;
		border: none;
		background: none;
		width: 100%;
	}

	.image-button:hover img,
	.image-button:focus-visible img {
		scale: 1.02;
		box-shadow: 0 16px 28px rgba(15, 23, 42, 0.12);
	}

	.image-button img {
		width: 100%;
		height: 100%;
		max-height: 18rem;
		object-fit: cover;
		border-radius: 1rem;
		border: 1px solid rgba(15, 23, 42, 0.05);
	}

	.project-body {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.project-title-row {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 0.5rem;
		margin-bottom: 0.5rem;
	}

	.project-title-row h3 {
		margin: 0;
		font-size: 1.5rem;
	}

	.project-title-row span {
		display: inline-flex;
		padding: 0.35rem 0.55rem;
		border-radius: 999px;
		background: rgba(29, 78, 216, 0.08);
		color: var(--primary);
		font-size: 0.7rem;
		font-weight: 700;
	}

	.project-description {
		margin: 0;
		color: var(--muted);
		line-height: 1.7;
	}

	.tag-list {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin-top: 0.75rem;
	}

	.tag-list span {
		display: inline-flex;
		padding: 0.35rem 0.6rem;
		border-radius: 999px;
		background: rgba(124, 58, 237, 0.06);
		color: var(--primary-strong);
		font-size: 0.72rem;
		font-weight: 600;
	}

	.project-actions {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
		margin-top: 1.2rem;
	}

	.project-link {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 0.45rem;
		padding: 0.75rem 0.9rem;
		border-radius: 999px;
		font-weight: 700;
	}

	.ghost-link {
		background: rgba(15, 23, 42, 0.04);
		color: var(--primary-strong);
	}

	.ghost-link:hover,
	.ghost-link:focus-visible {
		background: rgba(29, 78, 216, 0.08);
		transform: translateY(-1px);
	}

	.primary-link {
		background: var(--primary);
		color: white;
	}

	.primary-link:hover,
	.primary-link:focus-visible {
		background: #1e3a8a;
		transform: translateY(-1px);
	}

	.github-cta {
		display: flex;
		justify-content: center;
		margin-top: 1.5rem;
	}

	.github-cta a {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.9rem 1.25rem;
		border-radius: 999px;
		background: rgba(15, 23, 42, 0.95);
		color: white;
		font-weight: 700;
	}

	.github-cta a:hover,
	.github-cta a:focus-visible {
		background: #111827;
		transform: translateY(-1px);
	}

	.modal-image-wrap {
		padding: 0.75rem 0 1rem;
	}

	.modal-image-wrap img {
		width: min(100%, 32rem);
		margin: 0 auto;
		border-radius: 1rem;
	}

	.projects-section h3 {
		font-size: 1.35rem;
		margin: 0;
	}

	.projects-section p {
		margin: 0;
	}

	@media (max-width: 768px) {
		.projects-grid {
			grid-template-columns: 1fr;
		}

		.project-card {
			grid-template-columns: 1fr;
		}
	}
</style>