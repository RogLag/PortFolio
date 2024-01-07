<script lang="ts">
    import "../app.css";
    import { scrollTop, scrollRef, scrollTo } from 'svelte-scrolling';
    import { base } from '$app/paths';

    const data: any = [
        {
            name: "Home",
            href: "top",
        },
        {
            name: "About",
            href: "about",
        },
        {
            name: "Skills",
            href: "skills",
        },
        {
            name: "Projects",
            href: "projects",
        },
    ];
</script>
  
<main>
    <nav class="fixed inset-x-0 top-0 flex flex-row pt-4 sm:pt-8 items-center justify-center z-40 text-white">
        <div class="bg-gradient-to-br from-blue-500 to-cyan-300 p-px rounded-full">
            <div class="rounded-full sm:px-4 sm:py-3 px-3 py-2 flex flex-row justify-between items-center gap-3 bg-[#262B30] backdrop-blur-sm">
                <div class="hover:bg-gradient-to-br hover:from-blue-500 hover:to-cyan-300 rounded-full p-0.5 duration-200">
                    <button on:click={() => scrollTop()} class="px-4 py-1 bg-[#262B30] rounded-full w-22.75">{data[0].name}</button>
                </div>
                {#each data.slice(-(data.length - 1)) as link}
                    <p class="border border-[#7EACC9] h-4"></p>
                    <div class="hover:bg-gradient-to-br hover:from-blue-500 hover:to-cyan-300 rounded-full p-0.5 duration-200">
                        <button use:scrollTo={link.href} class="px-4 py-1 bg-[#262B30] rounded-full w-22.75">{link.name}</button>
                    </div>
                {/each}
            </div>
        </div>
    </nav>
    <div class="fixed 940:flex 940:flex-row 940:justify-end 940:items-center pb-4 pt-10 pr-4 z-50 top-0 right-0 hidden ">
            <div class="flex flex-col xl:flex-row justify-center items-center gap-6 pb-3 xl:pt-4 rounded-full px-10">
                <a class="" href="https://github.com/RogLag" target="_blank">
                    <img src="{base}/img/github.png" alt="github" class="w-6 h-6"/>
                </a>
                <p class="border border-[#7EACC9] xl:w-0 xl:h-4 w-4 h-0"></p>
                <!-- svelte-ignore a11y-missing-attribute -->
                <a class="">
                    <img src="{base}/img/x.png" alt="x" class="w-5 h-5"/>
                </a>
                <p class="border border-[#7EACC9] xl:w-0 xl:h-4 w-4 h-0"></p>
                <!-- svelte-ignore a11y-missing-attribute -->
                <a class="">
                    <img src="{base}/img/discord.png" alt="discord" class="w-7 h-5"/>
                </a>
            </div>
    </div>
    <slot />
</main>