<script lang="ts">
	import ArrowUpRight from 'lucide-svelte/icons/arrow-up-right';
	import Video from 'lucide-svelte/icons/video';
	import Award from 'lucide-svelte/icons/award';
	import Shield from 'lucide-svelte/icons/shield';
	import ShoppingBag from 'lucide-svelte/icons/shopping-bag';
	import ExternalLink from 'lucide-svelte/icons/external-link';
	import Modal from './Modal.svelte';
	import { base } from '$app/paths';

	let modalState = $state({
		open: false,
		title: '',
		image: '',
		description: '',
		link: ''
	});

	const spotlights = [
		{
			id: 0,
			title: 'Coinpedia Ethereum Builder Spotlight',
			publication: 'Coinpedia',
			description:
				'Featured builder spotlight highlighting the journey from learning web development on a mother\'s phone to creating tools for the Ethereum developer ecosystem.',
			image: `${base}/images/coinpedia-spotlight.png`,
			link: 'https://coinpedia.org'
		},
		{
			id: 1,
			title: 'Developer Spotlight Interview with Tom Smith',
			publication: 'CoderLegion',
			description:
				'In-depth video interview discussing systems programming, web3 infrastructure, building RivETH, and developer workflows.',
			image: `${base}/images/coderlegion-interview.jpg`,
			link: 'https://youtu.be/RZbiTxeRFCg?si=RffGqBimDspATWG4',
			isVideo: true
		}
	];

	const oneKeyLinks = [
		{
			category: 'Hardware Sales',
			title: 'Official Shop',
			description: 'Official OneKey hardware wallet shop',
			url: 'https://onekey.so/r/TEMI0x0/shop',
			icon: ShoppingBag
		},
		{
			category: 'Perps',
			title: 'Trade Perps',
			description: 'Trade perpetuals on OneKey',
			url: 'https://app.onekey.so/r/TEMI0x0/app/perps',
			icon: ExternalLink
		},
		{
			category: 'Swap',
			title: 'Token Swap',
			description: 'Swap tokens securely on OneKey',
			url: 'https://app.onekey.so/r/TEMI0x0/app/swap',
			icon: ExternalLink
		},
		{
			category: 'DeFi',
			title: 'DeFi Access',
			description: 'Explore DeFi protocols on OneKey',
			url: 'https://app.onekey.so/r/TEMI0x0/app/defi',
			icon: Shield
		}
	];
</script>

<section class="spotlights-section" id="spotlights">
	{#if modalState.open}
		<Modal onClose={() => (modalState.open = false)}>
			<h3 class="modal-title">{modalState.title}</h3>
			<div class="modal-image-wrap">
				<img
					src={modalState.image}
					alt={modalState.title}
					loading="lazy"
					referrerpolicy="no-referrer"
				/>
			</div>
			<p class="modal-desc">{modalState.description}</p>
			<div class="modal-actions">
				<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
				<a href={modalState.link} target="_blank" rel="noreferrer" class="project-link primary-link">
					Open feature
					<ArrowUpRight size={16} />
				</a>
			</div>
		</Modal>
	{/if}

	<div class="section-heading">
		<div>
			<span class="kicker">Recognition &amp; Partners</span>
			<h2>Spotlights, Interviews &amp; Collaborations</h2>
			<p class="section-sub">Media features, builder spotlights, and official partnerships.</p>
		</div>
	</div>

	<div class="spotlights-grid">
		{#each spotlights as item (item.id)}
			<div class="spotlight-card">
				<button
					type="button"
					class="image-button"
					aria-label={`View ${item.title}`}
					onclick={() => {
						modalState = {
							open: true,
							title: item.title,
							image: item.image,
							description: item.description,
							link: item.link
						};
					}}
				>
					<img src={item.image} alt={item.title} loading="lazy" referrerpolicy="no-referrer" />
					{#if item.isVideo}
						<div class="video-badge">
							<Video size={16} />
							<span>Video Interview</span>
						</div>
					{/if}
				</button>

				<div class="spotlight-body">
					<div class="spotlight-meta">
						<Award size={15} />
						<span>{item.publication}</span>
					</div>
					<h3>{item.title}</h3>
					<p>{item.description}</p>
					<div class="spotlight-actions">
						<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
						<a href={item.link} target="_blank" rel="noreferrer" class="project-link primary-link">
							{#if item.isVideo}
								Watch Interview
							{:else}
								View Spotlight
							{/if}
							<ArrowUpRight size={15} />
						</a>
					</div>
				</div>
			</div>
		{/each}
	</div>

	<!-- OneKey Collaboration & Referral Links Banner -->
	<div class="onekey-banner">
		<div class="onekey-header">
			<img
				src="{base}/images/onekey-logo.png"
				alt="OneKey official logo"
				class="onekey-logo"
				width="52"
				height="52"
				loading="lazy"
				referrerpolicy="no-referrer"
			/>
			<div class="onekey-title-wrap">
				<span class="kicker">Official Partner</span>
				<h3>OneKey Collaboration &amp; Referral Links</h3>
				<p>Secure hardware wallets &amp; Web3 tools. Use my referral links below to get started.</p>
			</div>
		</div>

		<div class="onekey-hardware">
			<button
				type="button"
				class="hardware-image-btn"
				aria-label="View OneKey Classic 1S hardware wallet"
				onclick={() => {
					modalState = {
						open: true,
						title: 'OneKey Classic 1S - Hardware Partner Drop',
						image: `${base}/images/onekey-classic-1s.jpg`,
						description:
							'Shipped by OneKey as part of our collaboration - an ultra-thin, open-source hardware wallet built for secure multi-chain cold storage and onchain signing.',
						link: 'https://onekey.so/r/TEMI0x0/shop'
					};
				}}
			>
				<img
					src="{base}/images/onekey-classic-1s.jpg"
					alt="OneKey Classic 1S hardware wallet box shipped to Temiloluwa"
					loading="lazy"
					referrerpolicy="no-referrer"
				/>
			</button>

			<div class="hardware-copy">
				<span class="kicker">Hardware Partner Drop</span>
				<h4>OneKey Classic 1S</h4>
				<p>
					Shipped by OneKey as part of our collaboration - an open-source hardware wallet built for
					secure multi-chain cold storage, offline transaction signing, and everyday Web3 workflows.
				</p>
				<div class="hardware-actions">
					<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
					<a href="https://onekey.so/r/TEMI0x0/shop" target="_blank" rel="noreferrer" class="project-link primary-link">
						Shop OneKey Classic 1S
						<ArrowUpRight size={15} />
					</a>
				</div>
			</div>
		</div>

		<div class="onekey-links-grid">
			{#each oneKeyLinks as link (link.category)}
				{@const Icon = link.icon}
				<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
				<a href={link.url} target="_blank" rel="noreferrer" class="onekey-card">
					<div class="onekey-card-top">
						<span class="onekey-category">{link.category}</span>
						<Icon size={16} class="external-icon" />
					</div>
					<h4>{link.title}</h4>
					<p>{link.description}</p>
					<span class="onekey-url">{link.url.replace('https://', '')}</span>
				</a>
			{/each}
		</div>
	</div>
</section>

<style>
	.spotlights-section {
		margin-top: 2.5rem;
		padding: 3rem 0 1.5rem;
		border-top: 1px solid var(--border);
	}

	.section-heading {
		margin-bottom: 1.75rem;
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
		margin: 0.5rem 0 0.45rem;
		font-size: clamp(1.8rem, 3vw, 2.55rem);
		line-height: 1.12;
		letter-spacing: -0.03em;
	}

	.section-sub {
		margin: 0;
		color: var(--muted);
		line-height: 1.65;
	}

	.spotlights-grid {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 1.35rem;
		margin: 0 0 2.5rem;
		padding: 0;
	}

	.spotlight-card {
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

	.spotlight-card:hover {
		border-color: var(--border-strong);
		transform: translateY(-2px);
	}

	.image-button {
		position: relative;
		display: block;
		width: 100%;
		padding: 0;
		border: none;
		border-bottom: 1px solid var(--border);
		background: var(--bg-subtle);
		overflow: hidden;
		aspect-ratio: 16 / 10;
		cursor: pointer;
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

	.video-badge {
		position: absolute;
		bottom: 0.85rem;
		left: 0.85rem;
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
		padding: 0.38rem 0.65rem;
		border-radius: 0.45rem;
		background: rgba(9, 9, 11, 0.86);
		backdrop-filter: blur(8px);
		border: 1px solid rgba(255, 255, 255, 0.15);
		color: #ffffff;
		font-size: 0.78rem;
		font-weight: 600;
	}

	.spotlight-body {
		display: flex;
		flex-direction: column;
		flex: 1;
		padding: 1.25rem 1.35rem 1.35rem;
	}

	.spotlight-meta {
		display: flex;
		align-items: center;
		gap: 0.45rem;
		color: var(--primary-bright);
		font-family: var(--font-mono);
		font-size: 0.78rem;
		font-weight: 500;
	}

	.spotlight-card h3 {
		margin: 0.7rem 0 0.55rem;
		font-size: 1.28rem;
		font-weight: 600;
		line-height: 1.32;
		letter-spacing: -0.02em;
	}

	.spotlight-card p {
		margin: 0;
		color: var(--muted);
		font-size: 0.94rem;
		line-height: 1.65;
	}

	.spotlight-actions {
		display: flex;
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

	.primary-link {
		background: var(--primary);
		color: #ffffff;
	}

	.primary-link:hover,
	.primary-link:focus-visible {
		background: var(--primary-hover);
		transform: translateY(-1px);
	}

	/* OneKey Banner */
	.onekey-banner {
		padding: 1.75rem;
		border: 1px solid var(--border);
		border-radius: 0.9rem;
		background:
			radial-gradient(ellipse 60% 70% at 90% 10%, rgba(59, 130, 246, 0.08), transparent 70%),
			var(--surface);
		box-shadow: var(--shadow);
	}

	.onekey-header {
		display: flex;
		align-items: center;
		gap: 1.1rem;
		margin-bottom: 1.35rem;
	}

	.onekey-logo {
		width: 3.35rem;
		height: 3.35rem;
		border-radius: 0.7rem;
		object-fit: cover;
		flex-shrink: 0;
		border: 1px solid rgba(255, 255, 255, 0.14);
	}

	.onekey-title-wrap h3 {
		margin: 0.4rem 0 0.35rem;
		font-size: 1.45rem;
		letter-spacing: -0.02em;
	}

	.onekey-title-wrap p {
		margin: 0;
		color: var(--muted);
		font-size: 0.94rem;
	}

	.onekey-hardware {
		display: grid;
		grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
		gap: 1.5rem;
		align-items: center;
		padding: 1.15rem;
		margin-bottom: 1.25rem;
		border: 1px solid var(--border);
		border-radius: 0.75rem;
		background: var(--bg-subtle);
	}

	.hardware-image-btn {
		display: block;
		width: 100%;
		padding: 0;
		border: 1px solid var(--border);
		border-radius: 0.6rem;
		background: #0d0d10;
		overflow: hidden;
		aspect-ratio: 4 / 3;
		cursor: pointer;
	}

	.hardware-image-btn img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center 78%;
		transition: transform 240ms cubic-bezier(0.16, 1, 0.3, 1);
	}

	.hardware-image-btn:hover img,
	.hardware-image-btn:focus-visible img {
		transform: scale(1.03);
	}

	.hardware-copy h4 {
		margin: 0.45rem 0 0.5rem;
		font-size: 1.28rem;
		font-weight: 600;
		letter-spacing: -0.02em;
	}

	.hardware-copy p {
		margin: 0;
		color: var(--muted);
		font-size: 0.93rem;
		line-height: 1.65;
	}

	.hardware-actions {
		display: flex;
		margin-top: 1.1rem;
	}

	.onekey-links-grid {
		display: grid;
		grid-template-columns: repeat(4, minmax(0, 1fr));
		gap: 1rem;
	}

	.onekey-card {
		display: flex;
		flex-direction: column;
		padding: 1.15rem;
		border: 1px solid var(--border);
		border-radius: 0.75rem;
		background: var(--bg-subtle);
		color: var(--ink);
		transition:
			border-color 180ms cubic-bezier(0.16, 1, 0.3, 1),
			transform 180ms cubic-bezier(0.16, 1, 0.3, 1),
			background-color 180ms cubic-bezier(0.16, 1, 0.3, 1);
	}

	.onekey-card:hover {
		border-color: rgba(96, 165, 250, 0.45);
		background: var(--surface-elevated);
		transform: translateY(-2px);
	}

	.onekey-card-top {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 0.5rem;
		color: var(--primary-bright);
	}

	.onekey-category {
		font-family: var(--font-mono);
		font-size: 0.73rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.04em;
	}

	.onekey-card h4 {
		margin: 0 0 0.35rem;
		font-size: 1.05rem;
		font-weight: 600;
	}

	.onekey-card p {
		margin: 0 0 0.85rem;
		color: var(--muted);
		font-size: 0.83rem;
		line-height: 1.5;
		flex: 1;
	}

	.onekey-url {
		font-family: var(--font-mono);
		font-size: 0.72rem;
		color: var(--primary-bright);
		word-break: break-all;
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
		max-height: 60vh;
		object-fit: contain;
	}

	.modal-desc {
		margin: 0;
		color: var(--muted);
		line-height: 1.65;
	}

	.modal-actions {
		display: flex;
		margin-top: 1.15rem;
	}

	@media (max-width: 900px) {
		.spotlights-grid {
			grid-template-columns: 1fr;
		}

		.onekey-hardware {
			grid-template-columns: 1fr;
		}

		.onekey-links-grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}

	@media (max-width: 580px) {
		.onekey-links-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
