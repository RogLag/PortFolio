<script lang="ts">
    import { Avatar } from '@skeletonlabs/skeleton';
    import { TabGroup, Tab, TabAnchor } from '@skeletonlabs/skeleton';
    import Typing from '$lib/Typing.svelte'; 
    import { scrollTop, scrollRef, scrollTo } from 'svelte-scrolling';
    import Tag from '$lib/Tag.svelte';
    import ProgressLanguage from '$lib/ProgressLanguage.svelte';

    let tabSet: number = 0;
    let tabSet2: number = 0;

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
        {
            name: "Contact",
            href: "contact",
        },
    ];
</script>

<main>
    <nav class="fixed w-full flex flex-row pt-8 items-center justify-center z-50 text-white">
        <div class="rounded-full px-4 py-3 flex flex-row justify-between items-center gap-3 bg-[#262B30] backdrop-blur-sm">
            <div class="hover:bg-gradient-to-br hover:from-blue-500 hover:to-cyan-300 rounded-full p-0.5 duration-200">
                <button on:click={() => scrollTop()} class="px-4 py-1 bg-[#262B30] rounded-full">{data[0].name}</button>
            </div>
            {#each data.slice(-(data.length - 1)) as link}
                <p class="border border-[#7EACC9] h-4"></p>
                <div class="hover:bg-gradient-to-br hover:from-blue-500 hover:to-cyan-300 rounded-full p-0.5 duration-200">
                    <button use:scrollTo={link.href} class="px-4 py-1 bg-[#262B30] rounded-full">{link.name}</button>
                </div>
            {/each}
        </div>
    </nav>
    <section class="flex flex-col px-100 w-full">
        <section class="flex flex-row items-center justify-between font-bold h-screen px-32">
            <h1 class="h1 flex flex-col gap-4">
                <span class="text-white">Hi, I'm</span>
                <Typing strings={['Hugo MERY.', 'A french student.', 'A full stack developper.', 'A python developper.']} loop=true typeSpeed={80} backSpeed={30} backDelay={2000} showCursor={false} smartBackspace={true} startDelay={0}>
                    <span class="min-h-12 bg-gradient-to-br from-blue-500 to-cyan-300 bg-clip-text text-transparent box-decoration-clone typing"></span>
                </Typing>
            </h1>
            <div class="w-42 h-42 rounded-full bg-gradient-to-br from-blue-500 to-cyan-300 flex flex-row items-center justify-center myshadow">
                <Avatar src="/img/avatar2.png" width="w-40" rounded="rounded-full"/>
            </div>
        </section>
        <section use:scrollRef={'about'} class="h-screen flex flex-col justify-start items-center pt-36">
            <div class="text-white w-full flex flex-col items-center gap-12">
                <Tag>About</Tag>
                <TabGroup class="w-full ">
                    <Tab bind:group={tabSet} name="presentation" value={0}><span>Presentation</span></Tab>
                    <Tab bind:group={tabSet} name="Formation" value={1}><span>Formation</span></Tab>
                    <Tab bind:group={tabSet} name="experience" value={2}><span>Experience</span></Tab>
                    <!-- Tab Panels --->
                    <svelte:fragment slot="panel">
                        {#if tabSet === 0}
                            <div class="w-full px-6 pt-16 flex flex-col gap-8 items-center h4">
                                <div class="flex flex-row gap-8 items-center">
                                    <Avatar src="/img/avatar.png" width="w-32" rounded="rounded-2xl"/>
                                    <div class="flex flex-col gap-4">
                                        <p>My name is <span class="font-bold bg-gradient-to-br from-blue-500 to-cyan-300 bg-clip-text text-transparent box-decoration-clone">Hugo MERY</span>, I live in Tours and I am 18 years old.</p>
                                        <p>My favorite hobby is tennis, I do it 3 hours a week since 2013.</p>
                                    </div>
                                </div>
                                <p class="text-white text-justify h4 leading-relaxed text-semibold"><span class="h2 font-medium">C</span>urrently in the 2nd year in the Polytech Engineering School Program in Tours, France. I am a young student wishing to specialize in artificial intelligence or cybersecurity. I am directing my studies in this area, guided by my desire to learn and my curiosity. As a computer enthusiast, I like to create personal projects in all types of fields, with the aim of increasing my skills.</p>
                            </div>
                        {:else if tabSet === 1}
                            <div class="w-full px-6 pt-16 grid grid-cols-2 gap-32 justify-items-center h4">
                                <div class="w-full flex flex-row gap-10 justify-start items-center card">
                                    <img src="/img/polytech.png" alt="polytech" class="w-32 h-32"/>
                                    <div class="flex flex-col gap-2">
                                        <div>09/2022 - In progress</div>
                                        <div><span class="font-bold bg-gradient-to-br from-blue-500 to-cyan-300 bg-clip-text text-transparent box-decoration-clone">Polytech Engineering School</span></div>
                                        <div>Tours, France, 37</div>
                                        <div>PeiP - 2nd year</div>
                                    </div>
                                </div>
                                <div class="w-full flex flex-row gap-10 justify-end items-center row-span-2">
                                    <img src="/img/vaucanson.jpg" alt="vaucanson" class="w-32 h-32 rounded-full"/>
                                    <div class="flex flex-col gap-2">
                                        <div>09/2019 – 07/2022</div>
                                        <div><span class="font-bold bg-gradient-to-br from-blue-500 to-cyan-300 bg-clip-text text-transparent box-decoration-clone">Jacques de Vaucanson high school</span></div>
                                        <div>High School Diploma - high honours:</div>
                                        <div class="flex flex-col pl-4">
                                            <span>- Mathematics</span>
                                            <span>- Digital and Computer Sciences</span>
                                            <span>- Chemical and Physics</span>
                                        </div>
                                        <div>Certification PIX</div>
                                        <div>Tours, France, 37</div>
                                    </div>
                                </div>
                                <div class="w-full flex flex-row gap-10 justify-start items-center card">
                                    <img src="/img/JeanRoux.png" alt="polytech" class="w-32 h-32 rounded-lg"/>
                                    <div class="flex flex-col gap-2">
                                        <div>09/2015 – 07/2019</div>
                                        <div><span class="font-bold bg-gradient-to-br from-blue-500 to-cyan-300 bg-clip-text text-transparent box-decoration-clone">Jean Roux Middle School</span></div>
                                        <div>Fondettes, France, 37</div>
                                        <div>GCSE - highest honors</div>
                                    </div>
                                </div>
                            </div>
                        {:else if tabSet === 2}
                            <div class="flex flex-col gap-12 w-full h4 items-center pt-16">
                                <div class="flex flex-row gap-12">
                                    <img src="/img/themis.png" alt="prisma" class="bg-white border-4 border-white w-46 h-16 rounded-lg"/>
                                    <div class="flex flex-col gap-2 w-full justify-center">
                                        <span>02/2019 - 02/2019</span>
                                        <span><span class="font-bold bg-gradient-to-br from-blue-500 to-cyan-300 bg-clip-text text-transparent box-decoration-clone">Themis Technologies</span> | Ambillou, France, 37 | Stage</span>
                                    </div>
                                </div>
                                <p class="px-16 h4 text-center">
                                    This 3rd year internship aimed to discover the business world.
                                    I was able to observe a developer and engineers working in an office
                                    study, it was very beneficial to me and allowed me to validate my choice of myself
                                    direct towards computer engineering studies.
                                </p>
                            </div>
                        {/if}
                    </svelte:fragment>
                </TabGroup>
            </div>
        </section>
        <section use:scrollRef={'skills'} class="h-screen flex flex-col justify-start items-center pt-36">
            <div class="text-white w-full flex flex-col items-center gap-12">
                <Tag>Skills</Tag>
                <TabGroup class="w-full ">
                    <Tab bind:group={tabSet2} name="tab2" value={0}>Langages</Tab>
                    <Tab bind:group={tabSet2} name="tab3" value={1}>FrameWorks</Tab>
                    <Tab bind:group={tabSet2} name="tab3" value={2}>Tools</Tab>
                    <!-- Tab Panels --->
                    <svelte:fragment slot="panel">
                        {#if tabSet2 === 0}
                        <div class="grid grid-cols-5 gap-12 px-6 pt-12">
                            <ProgressLanguage value={95} src={"/img/languages/python.png"} meter="stroke-[#3b78a8]/80" class="mt-[-7rem] ml-[2rem] w-20" />
                            <ProgressLanguage value={80} src={"/img/languages/typescript.png"} meter="stroke-[#2d79c7]/80" class="mt-[-7rem] ml-[2rem] w-20 rounded-lg"/>
                            <ProgressLanguage value={85} src={"/img/languages/javascript.png"} meter="stroke-[#f0dc4e]/80" class="mt-[-7rem] ml-[2rem] w-20 rounded-lg"/>
                            <ProgressLanguage value={95} src={"/img/languages/html.png"} meter="stroke-[#e85823]/80" class="mt-[-7rem] ml-[2rem] w-20"/>
                            <ProgressLanguage value={95} src={"/img/languages/css.png"} meter="stroke-[#214ce5]/80" class="mt-[-6.7rem] ml-[2rem] w-20"/>
                            <ProgressLanguage value={75} src={"/img/languages/php.png"} meter="stroke-[#6181b6]/80" class="mt-[-6.7rem] ml-[2rem] w-20"/>
                            <ProgressLanguage value={85} src={"/img/languages/sql.png"} meter="stroke-[#7dba01]/80" class="mt-[-7rem] ml-[2.5rem] w-16"/>
                            <ProgressLanguage value={50} src={"/img/languages/java.png"} meter="stroke-[#e76f00]/80" class="mt-[-7.5rem] ml-[2.5rem] w-16"/>
                            <ProgressLanguage value={45} src={"/img/languages/c.png"} meter="stroke-[#004482]/80" class="mt-[-7.3rem] ml-[2rem] w-20"/>
                        </div>
                        {:else if tabSet2 === 1}
                        <div class="grid grid-cols-4 gap-12 px-6 pt-12">
                            <ProgressLanguage value={95} src={"/img/frameworks/svelte.png"} meter="stroke-[#DE4516]/80" class="mt-[-7.5rem] ml-[2rem] w-20 rounded-lg"/>
                            <ProgressLanguage value={80} src={"/img/frameworks/laravel.png"} meter="stroke-[#ff291a]/80" class="mt-[-7rem] ml-[2.2rem] w-20 rounded-lg"/>
                            <ProgressLanguage value={60} src={"/img/frameworks/pocketbase.png"} meter="stroke-[#000000]/80" class="mt-[-7rem] ml-[2rem] w-20 rounded-lg"/>
                            <ProgressLanguage value={60} src={"/img/frameworks/prisma.png"} meter="stroke-[#123a50]/80" class="mt-[-7.5rem] ml-[2rem] w-20 rounded-lg"/>
                        </div>
                        {:else if tabSet2 === 2}
                        <div class="grid grid-cols-3 gap-12 px-6 pt-12">
                            <ProgressLanguage value={65} src={"/img/tools/node.png"} meter="stroke-[#8bc500]/80" class="mt-[-7rem] ml-[2rem] w-20 rounded-lg"/>
                            <ProgressLanguage value={75} src={"/img/tools/git.png"} meter="stroke-[#f05030]/80" class="mt-[-7rem] ml-[2rem] w-20 rounded-lg"/>
                            <ProgressLanguage value={60} src={"/img/tools/jetbrains.png"} meter="stroke-[#000000]/80" class="mt-[-7rem] ml-[2rem] w-20 rounded-lg"/>
                        </div>
                        {/if}
                    </svelte:fragment>
                </TabGroup>
            </div>
        </section>
    </section>
</main>

<style>
    .myshadow:hover {
        box-shadow: 0 0px 30px -15px #54bcf8;
        transition: box-shadow 0.1s ease-in-out 0s;
    }
</style>