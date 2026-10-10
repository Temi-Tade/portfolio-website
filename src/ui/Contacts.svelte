<script lang="ts">
	import Mail from 'lucide-svelte/icons/mail';
	import TwitterX from 'lucide-svelte/icons/x';
	import Linkedin from 'lucide-svelte/icons/linkedin';
	import GitHub from 'lucide-svelte/icons/github';
	import { Icon as IconType } from 'lucide-svelte';

	type ContactType = {
		id: number;
		icon: typeof IconType;
		link: string;
		name: string;
	};

	const contactIcons: ContactType[] = [
		{ id: 0, icon: Mail, link: 'mailto:akintadetemi19@gmail.com', name: 'Mail' },
		{ id: 1, icon: TwitterX, link: 'https://x.com/Temi_tade2805', name: 'X' },
		{
			id: 2,
			icon: Linkedin,
			link: 'https://linkedin.com/in/temiloluwa-akintade-4b6798254',
			name: 'LinkedIn'
		},
		{ id: 3, icon: GitHub, link: 'https://github.com/Temi-Tade', name: 'GitHub' }
	];
</script>

<section class="contact-section" id="contacts">
	<div class="contact-panel">
		<div class="contact-copy">
			<span class="eyebrow">Contact</span>
			<h2>Let’s build something meaningful.</h2>
			<p>I work across product, web, blockchain, and platform engineering - from frontend experiences to robust backend and systems work.</p>
		</div>

		<div class="contact-actions">
			<a class="primary-contact" href="mailto:akintadetemi19@gmail.com">Book a call</a>
			<div class="social-links">
				{#each contactIcons as contact (contact.id)}
					{@const Icon = contact.icon}
					<a href={contact.link} title={contact.name} aria-label={contact.name} target={contact.link.startsWith('http') ? '_blank' : undefined} rel={contact.link.startsWith('http') ? 'noreferrer' : undefined}>
						{#if contact.name === 'X'}
							<svg viewBox="0 0 24 24" aria-hidden="true">
								<path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932zm-1.292 19.493h2.039L6.486 3.24H4.298z" />
							</svg>
						{:else}
							<Icon />
						{/if}
					</a>
				{/each}
			</div>
		</div>
	</div>
</section>

<style>
	.contact-section {
		padding: 2.5rem 0 3rem;
	}

	.contact-panel {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1.25rem;
		padding: clamp(1.25rem, 2vw, 2rem);
		border-radius: 1.75rem;
		border: 1px solid var(--border);
		background: linear-gradient(135deg, rgba(15, 23, 42, 0.98), rgba(29, 78, 216, 0.92));
		box-shadow: var(--shadow);
		color: white;
	}

	.contact-copy {
		max-width: 40rem;
	}

	.eyebrow {
		display: inline-flex;
		padding: 0.45rem 0.8rem;
		border-radius: 999px;
		background: rgba(255, 255, 255, 0.12);
		color: rgba(255, 255, 255, 0.8);
		font-size: 0.72rem;
		font-weight: 700;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	.contact-copy h2 {
		margin: 0.8rem 0 0.5rem;
		font-size: clamp(2rem, 3vw, 3rem);
		letter-spacing: -0.05em;
	}

	.contact-copy p {
		margin: 0;
		color: rgba(255, 255, 255, 0.72);
		line-height: 1.7;
	}

	.contact-actions {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		gap: 1rem;
	}

	.primary-contact {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 0.9rem 1.3rem;
		border-radius: 999px;
		background: white;
		color: var(--primary-strong);
		font-weight: 700;
	}

	.primary-contact:hover,
	.primary-contact:focus-visible {
		background: #e2e8f0;
		transform: translateY(-1px);
	}

	.social-links {
		display: flex;
		align-items: center;
		gap: 0.75rem;
	}

	.social-links a {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 2.8rem;
		height: 2.8rem;
		border-radius: 999px;
		background: rgba(255, 255, 255, 0.08);
		color: white;
		border: 1px solid rgba(255, 255, 255, 0.08);
	}

	.social-links a:hover,
	.social-links a:focus-visible {
		background: rgba(255, 255, 255, 0.18);
		transform: translateY(-2px);
		outline: 2px solid rgba(255, 255, 255, 0.25);
		outline-offset: 2px;
	}

	.social-links svg {
		width: 1.25rem;
		height: 1.25rem;
		fill: currentColor;
	}

	@media (max-width: 768px) {
		.contact-panel {
			flex-direction: column;
			align-items: flex-start;
		}

		.contact-actions {
			align-items: flex-start;
		}
	}
</style>