<script lang="ts">
    import ArrowOut from 'lucide-svelte/icons/arrow-up-right';
    import GitHub from 'lucide-svelte/icons/github';

    type ProjectType = {
        id: number;
        name: string;
        link: string;
        github: string;
        description: string;
        tags: string[];
        image: string;
    }

    const projects: ProjectType[] = [
        { 
            id: 0, 
            name: "efIQo", 
            link: "https://efiqo-app.web.app/", 
            github: "https://github.com/Temi-Tade/Efiqo",
            description: "Study with flashcards and quizzes",
            tags: ["HTML", "CSS", "JS", "AI", "Firebase"],
            image: "/efiqo_screen.png"
        },
        { 
            id: 1, 
            name: "KeyMaster", 
            link: "https://temi-tade.github.io/KeyMaster/", 
            github: "https://github.com/Temi-Tade/KeyMaster",
            description: "Start typing like a pro",
            tags: ["HTML", "CSS", "JS", "API"],
            image: "/keymaster_screen.png"
        },
        { 
            id: 2, 
            name: "SVG Text Editor", 
            link: "https://temi-tade.github.io/svg-editor/", 
            github: "https://github.com/Temi-Tade/svg-editor",
            description: "Create custom SVGs right inside your browser",
            tags: ["HTML", "CSS", "JS"],
            image: "/svg_editor_screen.png"

        },
        { 
            id: 3, 
            name: "VerbotAI", 
            link: "https://verbot-ai.web.app/",
            github: "https://github.com/Temi-Tade/verbot.ai",
            description: "Can't type in your prompt? Tell AI and let it respond with speech!",
            tags: ["HTML", "CSS", "JS", "AI"],
            image: "/verbot_screen.png"

        },
        { 
            id: 4, 
            name: "Keyword Encoder", 
            link: "https://temi-tade.github.io/keyword-encoder/",
            github: "https://github.com/Temi-Tade/keyword-encoder",
            description: "A tool for encoding plain text and decoding enciphered text with a keyword.",
            tags: ["HTML", "CSS", "JS"],
            image: "/keyword_encoder_screen.png"
        },
    ];
</script>

<section class="p-3">
    <div class="p-2">
        <h2 class="text-center text-3xl font-bold">Projects</h2>
        <ul class="md:grid grid-cols-2 gap-1 w-[100%]">
            {#each projects as project (project.id)}
                <li class="m-[1px auto] p-1 w-[100%] flex justify-around items-center">
                    <div class="grid place-items-center w-[45%] h-[100%]">
                        <img
                            src={project.image}
                            alt={project.description}
                            width="350"
                            loading="lazy" 
                            class="cursor-pointer hover:scale-[1.1]"
                        >
                    </div>

                    <div class="mt-2 py-1 text-center w-[50%]">
                        <span class="block mb-1">{project.name}</span>
                        <p>
                            {#each project.tags as tag}
                                <span class="m-1 p-1 inline-block rounded-sm bg-[#d3d3d3] text-sm">{tag}</span>
                            {/each}
                        </p>
                        <em class="block text-center text-xs">{project.description}</em>
                        <p class="p-2 mt-1 md:flex">
                            <a href={project.github} class="bg-blue-900 text-[#fff] hover:bg-[#fff] hover:text-blue-900">View GitHub <GitHub class='inline'/></a>
                            <a href={project.link} class="hover:text-blue-900 hover:underline decoration-2">View Project <ArrowOut class='inline'/></a>
                        </p>
                    </div>
                </li>
            {/each}
            <li>
                <div class="grid place-items-center h-[100%]">
                    <a href="https://github.com/Temi-Tade" class="bg-blue-900 text-[#fff] hover:bg-[#fff] hover:text-blue-900">Visit my GitHub <ArrowOut class='inline'/></a>
                </div>
            </li>
        </ul>
    </div>
</section>

<style>
    a{
        display: block;
        padding: .5rem;
        border-radius: .3rem;
    }
</style>