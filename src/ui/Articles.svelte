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
		<span class="eyebrow">Writing &amp; ideas</span>
		<h2>Articles &amp; publications</h2>
		<p>Notes on software, security, and the ideas behind the things I build.</p>
	</div>

	<ul class="articles-grid">
		{#each articles as article (article.id)}
			<li class="article-card">
				<div class="article-meta">
					<span>{article.publication}</span>
					{#if article.published}
						<time>{article.published}</time>
					{/if}
				</div>
				<h3>{article.title}</h3>
				<p>{article.preview}</p>
				<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
				<a href={article.href} target="_blank" rel="noreferrer" class="read-link">
					Read article
					<ArrowUpRight />
				</a>
			</li>
		{/each}
	</ul>

	<div class="publication-links" aria-label="More publications">
		<BookOpen />
		<span>Find me on</span>
		{#each publications as publication (publication.name)}
			<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
			<a href={publication.href} target="_blank" rel="noreferrer">{publication.name}</a>
		{/each}
	</div>
</section>

<style>
	.articles-section {
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
		margin: 1rem 0 0.5rem;
		font-size: clamp(2rem, 3vw, 3rem);
		letter-spacing: -0.05em;
	}

	.section-heading p {
		margin: 0;
		color: var(--muted);
		line-height: 1.7;
	}

	.articles-grid {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 1.5rem;
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.article-card {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		padding: 1.5rem;
		border: 1px solid var(--border);
		border-radius: 1.5rem;
		background: rgba(255, 255, 255, 0.65);
		box-shadow: 0 14px 38px rgba(15, 23, 42, 0.04);
	}

	.article-card:hover {
		transform: translateY(-3px);
		box-shadow: var(--shadow);
	}

	.article-meta {
		display: flex;
		flex-wrap: wrap;
		gap: 0.4rem 0.75rem;
		color: var(--muted);
		font-size: 0.82rem;
	}

	.article-meta span {
		color: var(--primary);
		font-weight: 700;
	}

	.article-card h3 {
		margin: 1rem 0 0.6rem;
		font-size: 1.3rem;
		line-height: 1.35;
	}

	.article-card p {
		margin: 0;
		color: var(--muted);
		line-height: 1.7;
	}

	.read-link {
		display: inline-flex;
		align-items: center;
		gap: 0.45rem;
		margin-top: auto;
		padding-top: 1.25rem;
		color: var(--primary);
		font-weight: 700;
	}

	.read-link:hover,
	.read-link:focus-visible {
		color: #1e3a8a;
		transform: translateX(2px);
	}

	.read-link :global(svg),
	.publication-links :global(svg) {
		width: 1rem;
		height: 1rem;
	}

	.publication-links {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		gap: 0.75rem;
		margin-top: 1.5rem;
		color: var(--muted);
		font-size: 0.9rem;
	}

	.publication-links a {
		color: var(--primary);
		font-weight: 700;
	}

	.publication-links a:hover,
	.publication-links a:focus-visible {
		color: #1e3a8a;
		text-decoration: underline;
	}

	@media (max-width: 768px) {
		.articles-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
