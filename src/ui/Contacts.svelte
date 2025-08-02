<script lang="ts">
    import Mail from 'lucide-svelte/icons/mail';
    import TwitterX from 'lucide-svelte/icons/x';
    import Linkedin from 'lucide-svelte/icons/linkedin';
    import GitHub from 'lucide-svelte/icons/github';
    import { Icon  as IconType } from 'lucide-svelte';
    
    type ContactType = {
        id: number;
        icon: typeof IconType;
        link: string;
        name: string;
    }

    const contactIcons: ContactType[] = [
       { id: 0, icon: Mail, link: "", name: "Mail" },
       { id: 1, icon: TwitterX, link: "", name: "X" },
       { id: 2, icon: Linkedin, link: "", name: "LinkedIn" },
       { id: 3, icon: GitHub, link: "", name: "GitHub" },
    ]
</script>

<section class="p-3 bg-[#dedede99]">
    <div class="p-2">
        <h2 class="text-2xl font-bold">Contacts</h2>
        <div class="p-2 flex items-center justify-between">
            <p class="text-xl font-bold">Got a project? Let's talk!</p>

            <div class="flex">
                {#each contactIcons as contact (contact.id)}
                    {@const Icon = contact.icon}
                    <p class="p-1">
                        <a href={contact.link} class="inline-block p-2 rounded-[50%] bg-blue-900 text-[#fff] hover:bg-[#fff] hover:text-blue-900" title={contact.name}>
                            <Icon class='inline'/>
                        </a>
                    </p>
                {/each}
            </div>
        </div>
    </div>
</section>