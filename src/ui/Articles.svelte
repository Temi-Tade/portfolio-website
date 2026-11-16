<script lang="ts">
	import ArrowUpRight from 'lucide-svelte/icons/arrow-up-right';
	import BookOpen from 'lucide-svelte/icons/book-open';

	type Article = {
		id: number;
		title: string;
		publication: string;
		published?: string;
		preview: string;
		href: string;
	};

	const articles: Article[] = [
		{
			id: 0,
			title: 'I built Medusa - A lossless password-based file encryption tool',
			publication: 'DEV Community',
			published: 'Aug 29, 2026',
			preview:
				'A quick look at Medusa, an open-source, client-side file encryption tool built for lossless decryption.',
			href: 'https://dev.to/js_cipher/i-built-medusa-a-lossless-password-based-file-encryption-tool-dip'
		},
		{
			id: 1,
			title: 'Are computers truly random? How chaos powers randomness.',
			publication: 'DEV Community',
			published: 'Jul 15, 2026',
			preview:
				'An exploration of how computers generate randomness and the role chaos plays in the process.',
			href: 'https://dev.to/js_cipher/are-computers-truly-random-how-chaos-powers-randomness-4d93'
		},
		{
			id: 2,
			title:
				'Under the Hood: How Hardware Wallets Keep Your Crypto Safe (Even Over USB and Bluetooth)',
			publication: 'CoderLegion',
			preview:
				'A look at how secure elements and carefully limited USB or Bluetooth connections let hardware wallets sign transactions without exposing private keys.',
			href: 'https://coderlegion.com/20141/how-do-web3-hardware-wallets-work'
		},
		{
			id: 3,
			title: 'Why I Built RivETH: A Bare-Metal Toolkit for Ethereum Devs',
			publication: 'CoderLegion',
			preview:
				'The story behind a lightweight, browser-based Ethereum toolkit that helps developers compile, deploy, and interact with smart contracts locally.',
			href: 'https://coderlegion.com/12311/why-i-built-riveth-a-bare-metal-toolkit-for-ethereum-devs'
		}
	];

	const publications = [
		{ name: 'Dev.to', href: 'https://dev.to/js_cipher' },
		{ name: 'Medium', href: 'https://medium.com/@temi_lolu0x0' },
		{ name: 'CoderLegion', href: 'https://coderlegion.com/user/temi_0x0' },
		{ name: 'Peerlist', href: 'https://peerlist.io/temi_lolu' }
	];
</script>

<section class="articles-section" id="articles">
	<div class="section-heading">
		<div>
			<span class="kicker">Writing &amp; ideas</span>
			<h2>Articles &amp; publications</h2>
			<p class="section-sub">Notes on software, security, and the ideas behind the things I build.</p>
		</div>
	</div>

	<ul class="articles-grid">
		{#each articles as article (article.id)}
			<li class="article-card">
				<div class="article-meta">
					<span>{article.publication}</span>
					{#if article.published}
						<span class="sep" aria-hidden="true">·</span>
						<time>{article.published}</time>
					{/if}
				</div>
				<h3>{article.title}</h3>
				<p>{article.preview}</p>
				<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
				<a href={article.href} target="_blank" rel="noreferrer" class="read-link">
					Read article
					<ArrowUpRight size={16} />
				</a>
			</li>
		{/each}
	</ul>

	<div class="publication-links" aria-label="More publications">
		<span class="pub-label">
			<BookOpen size={15} />
			Find me on
		</span>
		<div class="pub-items">
			{#each publications as publication, idx (publication.name)}
				{#if idx > 0}
					<span class="sep" aria-hidden="true">·</span>
				{/if}
				<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
				<a href={publication.href} target="_blank" rel="noreferrer">{publication.name}</a>
			{/each}
		</div>
	</div>
</section>

<style>
	.articles-section {
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

	.articles-grid {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 1.35rem;
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.article-card {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		padding: 1.45rem;
		border: 1px solid var(--border);
		border-radius: 0.9rem;
		background: var(--surface);
		transition:
			border-color 180ms cubic-bezier(0.16, 1, 0.3, 1),
			transform 180ms cubic-bezier(0.16, 1, 0.3, 1);
	}

	.article-card:hover {
		border-color: var(--border-strong);
		transform: translateY(-2px);
	}

	.article-meta {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 0.45rem;
		color: var(--subtle);
		font-size: 0.82rem;
	}

	.article-meta span:first-child {
		color: var(--primary-bright);
		font-weight: 600;
	}

	.article-meta time {
		font-family: var(--font-mono);
		font-variant-numeric: tabular-nums;
		font-size: 0.78rem;
	}

	.sep {
		color: var(--subtle);
	}

	.article-card h3 {
		margin: 0.8rem 0 0.55rem;
		font-size: 1.24rem;
		line-height: 1.32;
		letter-spacing: -0.02em;
	}

	.article-card p {
		margin: 0;
		color: var(--muted);
		font-size: 0.94rem;
		line-height: 1.65;
	}

	.read-link {
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
		margin-top: auto;
		padding-top: 1.25rem;
		color: var(--ink);
		font-size: 0.88rem;
		font-weight: 600;
		transition:
			color 160ms cubic-bezier(0.16, 1, 0.3, 1),
			transform 160ms cubic-bezier(0.16, 1, 0.3, 1);
	}

	.read-link:hover,
	.read-link:focus-visible {
		color: var(--primary-bright);
		transform: translateX(2px);
	}

	.publication-links {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 0.65rem 1rem;
		margin-top: 1.5rem;
		color: var(--muted);
		font-size: 0.88rem;
	}

	.pub-label {
		display: inline-flex;
		align-items: center;
		gap: 0.45rem;
		color: var(--subtle);
	}

	.pub-items {
		display: inline-flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 0.55rem;
	}

	.publication-links a {
		color: var(--ink);
		font-weight: 600;
		transition: color 160ms cubic-bezier(0.16, 1, 0.3, 1);
	}

	.publication-links a:hover,
	.publication-links a:focus-visible {
		color: var(--primary-bright);
		text-decoration: underline;
	}

	@media (max-width: 768px) {
		.articles-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
