<script lang="ts">
	import About from "../ui/About.svelte";
	import Projects from "../ui/Projects.svelte";
	import Spotlights from "../ui/Spotlights.svelte";
	import Articles from "../ui/Articles.svelte";
	import Contacts from "../ui/Contacts.svelte";
	import Header from "../ui/Header.svelte";
	import Heart from 'lucide-svelte/icons/heart';
	import { browser } from '$app/environment';
	import { base } from '$app/paths';

	const defaultSiteUrl = 'https://temi-tade.github.io/portfolio-website/';
	const siteUrl =
		browser && window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1'
			? `${window.location.origin}${base ? `${base}/` : '/'}`
			: defaultSiteUrl;

	const title = 'Temiloluwa Akintade | Software Developer';
	const description =
		'Temiloluwa Akintade is a software developer with 5+ years building web apps, blockchain tooling, smart contracts, systems, and embedded software.';
	const socialImage = `${siteUrl}images/temiloluwa-peerlist.jpg`;

	const schemaGraph = {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'WebSite',
				'@id': `${siteUrl}#website`,
				url: siteUrl,
				name: 'Temiloluwa Akintade Portfolio',
				description,
				inLanguage: 'en',
				author: { '@id': `${siteUrl}#person` }
			},
			{
				'@type': 'ProfilePage',
				'@id': `${siteUrl}#profilepage`,
				url: siteUrl,
				name: title,
				description,
				dateModified: '2026-11-27',
				isPartOf: { '@id': `${siteUrl}#website` },
				mainEntity: { '@id': `${siteUrl}#person` }
			},
			{
				'@type': 'Person',
				'@id': `${siteUrl}#person`,
				name: 'Temiloluwa Akintade',
				alternateName: ['Temiloluwa', 'Temi-Tade', 'temi_0x0'],
				url: siteUrl,
				image: {
					'@type': 'ImageObject',
					url: socialImage,
					caption: 'Temiloluwa Akintade, software developer'
				},
				email: 'mailto:akintadetemi19@gmail.com',
				jobTitle: 'Software Developer',
				description:
					'Software developer with 5+ years of experience building web applications, blockchain products, smart contracts, systems, and embedded software.',
				knowsAbout: [
					'Web Application Development',
					'Blockchain Engineering',
					'Ethereum Smart Contracts',
					'Systems Programming',
					'Embedded Software',
					'React',
					'Next.js',
					'Svelte',
					'TypeScript',
					'Tailwind CSS',
					'Node.js',
					'Supabase',
					'Solidity',
					'Hardhat',
					'Foundry',
					'C',
					'Arduino'
				],
				sameAs: [
					'https://github.com/Temi-Tade',
					'https://x.com/Temi_tade2805',
					'https://linkedin.com/in/temiloluwa-akintade-4b6798254',
					'https://dev.to/js_cipher',
					'https://medium.com/@temi_lolu0x0',
					'https://coderlegion.com/user/temi_0x0',
					'https://peerlist.io/temi_lolu',
					'https://discord.com/users/1061727196953190440'
				]
			},
			{
				'@type': 'ItemList',
				'@id': `${siteUrl}#projects`,
				name: 'Featured Software Projects',
				itemListElement: [
					{
						'@type': 'ListItem',
						position: 1,
						item: {
							'@type': 'WebApplication',
							name: 'ShipTok',
							url: 'https://shiptok-app.vercel.app',
							applicationCategory: 'DeveloperApplication',
							description:
								'A social discovery platform for makers and builders to share builds, explore trending projects, and connect with creators.',
							author: { '@id': `${siteUrl}#person` }
						}
					},
					{
						'@type': 'ListItem',
						position: 2,
						item: {
							'@type': 'SoftwareSourceCode',
							name: 'Ohm-E',
							url: 'https://github.com/Temi-Tade/Ohm-E',
							codeRepository: 'https://github.com/Temi-Tade/Ohm-E',
							programmingLanguage: ['TypeScript', 'React'],
							description:
								'An interactive browser-based circuit simulator with a component library, real-time current flow, voltage coloring, and oscilloscope.',
							author: { '@id': `${siteUrl}#person` }
						}
					},
					{
						'@type': 'ListItem',
						position: 3,
						item: {
							'@type': 'SoftwareSourceCode',
							name: 'RivETH',
							url: 'https://temi-tade.github.io/RivETHDocs',
							codeRepository: 'https://github.com/Temi-Tade/RivETH',
							programmingLanguage: ['JavaScript', 'Node.js', 'Solidity'],
							description:
								'An open source Ethereum smart contract infrastructure for deploying and interacting with smart contracts. Alchemy-listed.',
							author: { '@id': `${siteUrl}#person` }
						}
					},
					{
						'@type': 'ListItem',
						position: 4,
						item: {
							'@type': 'SoftwareSourceCode',
							name: 'qodon',
							url: 'https://github.com/Temi-Tade/qodon',
							codeRepository: 'https://github.com/Temi-Tade/qodon',
							programmingLanguage: 'C',
							description: 'A CLI-based genomics tool written in C.',
							author: { '@id': `${siteUrl}#person` }
						}
					},
					{
						'@type': 'ListItem',
						position: 5,
						item: {
							'@type': 'SoftwareSourceCode',
							name: 'Medusa',
							url: 'https://temi-tade.github.io/medusa',
							codeRepository: 'https://github.com/Temi-Tade/medusa',
							programmingLanguage: 'JavaScript',
							description: 'A password-based file encryption tool with lossless decryption.',
							author: { '@id': `${siteUrl}#person` }
						}
					},
					{
						'@type': 'ListItem',
						position: 6,
						item: {
							'@type': 'SoftwareSourceCode',
							name: 'Skaylar',
							url: 'https://temi-tade.github.io/Skaylar',
							codeRepository: 'https://github.com/Temi-Tade/Skaylar',
							programmingLanguage: 'JavaScript',
							description:
								"A tool for analysing and visualizing first-digit distributions using Benford's Law.",
							author: { '@id': `${siteUrl}#person` }
						}
					}
				]
			},
			{
				'@type': 'ItemList',
				'@id': `${siteUrl}#publications`,
				name: 'Spotlights, Interviews, and Technical Articles',
				itemListElement: [
					{
						'@type': 'ListItem',
						position: 1,
						item: {
							'@type': 'Article',
							headline: 'Coinpedia Ethereum Builder Spotlight',
							url: 'https://coinpedia.org',
							publisher: { '@type': 'Organization', name: 'Coinpedia' },
							about: { '@id': `${siteUrl}#person` }
						}
					},
					{
						'@type': 'ListItem',
						position: 2,
						item: {
							'@type': 'VideoObject',
							name: 'Developer Spotlight Interview with Tom Smith',
							description:
								'In-depth video interview discussing systems programming, web3 infrastructure, building RivETH, and developer workflows.',
							url: 'https://youtu.be/RZbiTxeRFCg?si=RffGqBimDspATWG4',
							thumbnailUrl: `${siteUrl}images/coderlegion-interview.jpg`,
							publisher: { '@type': 'Organization', name: 'CoderLegion' }
						}
					},
					{
						'@type': 'ListItem',
						position: 3,
						item: {
							'@type': 'TechArticle',
							headline: 'I built Medusa - A lossless password-based file encryption tool',
							url: 'https://dev.to/js_cipher/i-built-medusa-a-lossless-password-based-file-encryption-tool-dip',
							datePublished: '2026-08-29',
							publisher: { '@type': 'Organization', name: 'DEV Community' },
							author: { '@id': `${siteUrl}#person` }
						}
					},
					{
						'@type': 'ListItem',
						position: 4,
						item: {
							'@type': 'TechArticle',
							headline: 'Are computers truly random? How chaos powers randomness.',
							url: 'https://dev.to/js_cipher/are-computers-truly-random-how-chaos-powers-randomness-4d93',
							datePublished: '2026-07-15',
							publisher: { '@type': 'Organization', name: 'DEV Community' },
							author: { '@id': `${siteUrl}#person` }
						}
					},
					{
						'@type': 'ListItem',
						position: 5,
						item: {
							'@type': 'TechArticle',
							headline:
								'Under the Hood: How Hardware Wallets Keep Your Crypto Safe (Even Over USB and Bluetooth)',
							url: 'https://coderlegion.com/20141/how-do-web3-hardware-wallets-work',
							publisher: { '@type': 'Organization', name: 'CoderLegion' },
							author: { '@id': `${siteUrl}#person` }
						}
					},
					{
						'@type': 'ListItem',
						position: 6,
						item: {
							'@type': 'TechArticle',
							headline: 'Why I Built RivETH: A Bare-Metal Toolkit for Ethereum Devs',
							url: 'https://coderlegion.com/12311/why-i-built-riveth-a-bare-metal-toolkit-for-ethereum-devs',
							publisher: { '@type': 'Organization', name: 'CoderLegion' },
							author: { '@id': `${siteUrl}#person` }
						}
					}
				]
			}
		]
	};

	const jsonLdScript =
		'<script type="application/ld+json">' +
		JSON.stringify(schemaGraph).replace(/</g, '\\u003c') +
		'</' +
		'script>';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta name="author" content="Temiloluwa Akintade" />
	<meta
		name="keywords"
		content="Temiloluwa Akintade, Temi-Tade, Software Developer, Full-Stack Developer, Blockchain Developer, Ethereum, Smart Contracts, Systems Programming, Embedded Software, ShipTok, Ohm-E, RivETH, qodon, Medusa, Skaylar, OneKey Partner"
	/>
	<meta
		name="robots"
		content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
	/>
	<meta
		name="googlebot"
		content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
	/>
	<link rel="canonical" href={siteUrl} />
	<link rel="sitemap" type="application/xml" title="Sitemap" href={`${base}/sitemap.xml`} />
	<link rel="alternate" type="text/plain" title="LLMs.txt" href={`${base}/llms.txt`} />
	<link rel="alternate" type="text/plain" title="Full AI Agent Dossier" href={`${base}/llms-full.txt`} />

	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Temiloluwa Akintade" />
	<meta property="og:locale" content="en_US" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={siteUrl} />
	<meta property="og:image" content={socialImage} />
	<meta property="og:image:width" content="400" />
	<meta property="og:image:height" content="500" />
	<meta property="og:image:alt" content="Temiloluwa Akintade, software developer" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@Temi_tade2805" />
	<meta name="twitter:creator" content="@Temi_tade2805" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={socialImage} />
	<meta name="twitter:image:alt" content="Temiloluwa Akintade, software developer" />

	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html jsonLdScript}
</svelte:head>

<div class="page-shell" id="top">
	<Header />
	<main class="content-shell">
		<About />
		<Projects />
		<Spotlights />
		<Articles />
		<Contacts />
	</main>

	<footer class="site-footer">
		<div class="footer-inner">
			<p>
				Made with <Heart fill="#ef4444" color="#ef4444" size={15} /> by Temiloluwa. All rights reserved.
			</p>
			<a href="#top" class="back-top">Back to top</a>
		</div>
	</footer>
</div>

<style>
	.page-shell {
		min-height: 100vh;
	}

	.content-shell {
		width: min(1180px, calc(100% - 2rem));
		margin: 0 auto;
	}

	.site-footer {
		width: min(1180px, calc(100% - 2rem));
		margin: 1rem auto 0;
		padding: 1.5rem 0 2.5rem;
		border-top: 1px solid var(--border);
		color: var(--subtle);
		font-size: 0.875rem;
	}

	.footer-inner {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		gap: 0.75rem 1.5rem;
	}

	.site-footer p {
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
		margin: 0;
	}

	.back-top {
		color: var(--muted);
		font-weight: 500;
		transition: color 180ms cubic-bezier(0.16, 1, 0.3, 1);
	}

	.back-top:hover,
	.back-top:focus-visible {
		color: var(--ink);
	}
</style>