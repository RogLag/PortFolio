<script lang="ts">
    import { Avatar } from '@skeletonlabs/skeleton';
    import { TabGroup, Tab, TabAnchor } from '@skeletonlabs/skeleton';
    import Typing from '$lib/Typing.svelte'; 
    import { scrollTop, scrollRef, scrollTo } from 'svelte-scrolling';
    import Tag from '$lib/Tag.svelte';
    import ProgressLanguage from '$lib/ProgressLanguage.svelte';
    import ProjectBox from '$lib/ProjectBox.svelte';

    let tabSet: number = 0;
    let tabSet2: number = 2;

    $: outerWidth = 0;
	$: innerWidth = 0;
	$: outerHeight = 0;
	$: innerHeight = 0;
</script>

<svelte:window bind:innerWidth bind:outerWidth bind:innerHeight bind:outerHeight />

<main>
    <section class="flex flex-col w-full">
        <section class="flex flex-col justify-center font-bold h-[{innerHeight}px] min-h-screen items-center px-0 md:px-20 2xl:px-50 3xl:px-100">
            <div class="flex flex-col 940:flex-row items-center justify-center 940:justify-between 940:gap-0 gap-24 font-bold 940:px-32 w-full h-full">
                <h1 class="h1 flex flex-col gap-4 items-center 940:items-start">
                    <span class="text-white">Hi, I'm</span>
                    <Typing strings={['Hugo MERY.', 'A french student.', 'A full stack developper.', 'A python developper.']} loop=true typeSpeed={80} backSpeed={30} backDelay={2000} showCursor={false} smartBackspace={true} startDelay={0}>
                        <span class="min-h-12 bg-gradient-to-br from-blue-500 to-cyan-300 bg-clip-text text-transparent box-decoration-clone typing"></span>
                    </Typing>
                </h1>
                <div class="w-42 h-42 rounded-full bg-gradient-to-br from-blue-500 to-cyan-300 flex flex-row items-center justify-center myshadow">
                    <Avatar src="/img/avatar2.png" width="w-40" rounded="rounded-full"/>
                </div>
            </div>
        </section>
        <section use:scrollRef={'about'} class="h-[{innerHeight}px] min-h-screen flex flex-col justify-start items-center">
            <div class="text-white w-full flex flex-col items-center gap-12">
                <div class="w-full flex 940:p-15 940:flex-row justify-center pt-24 940:justify-start sm:pt-32">
                    <Tag>About</Tag>
                </div>
                <TabGroup class="w-full pt-8 px-12 940:px-40 xl:px-24">
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
                                        <p>My name is <span class="font-bold bg-gradient-to-br from-blue-500 to-cyan-300 bg-clip-text text-transparent box-decoration-clone">Hugo MERY</span>, I live in Tours, in France and I am 19 years old.</p>
                                        <p>My favorite hobby is tennis, I do it 3 hours a week since 2013.</p>
                                    </div>
                                </div>
                                <p class="text-white text-justify h4 leading-relaxed text-semibold xl:px-40"><span class="h2 font-medium">C</span>urrently in the 2nd year in the Polytech Engineering School Program in Tours, France. I am a young student wishing to specialize in artificial intelligence or cybersecurity. I am directing my studies in this area, guided by my desire to learn and my curiosity. As a computer enthusiast, I like to create personal projects in all types of fields, with the aim of increasing my skills.</p>
                            </div>
                        {:else if tabSet === 1}
                            <div class="w-full sm:px-6 pt-16 grid grid-cols-2 gap-32 justify-items-center h4">
                                <div class="w-full flex flex-row gap-10 justify-start items-center card">
                                    <img src="/img/polytech.png" alt="polytech" class="w-32 h-32 hidden xl:flex"/>
                                    <div class="flex flex-col gap-2">
                                        <div>09/2022 - In progress</div>
                                        <div><span class="font-bold bg-gradient-to-br from-blue-500 to-cyan-300 bg-clip-text text-transparent box-decoration-clone">Polytech Engineering School</span></div>
                                        <div>Tours, France, 37</div>
                                        <div>PeiP - 2nd year</div>
                                    </div>
                                </div>
                                <div class="w-full flex flex-row gap-10 justify-end items-center row-span-2">
                                    <img src="/img/vaucanson.jpg" alt="vaucanson" class="w-32 h-32 rounded-full hidden xl:flex"/>
                                    <div class="flex flex-col gap-2">
                                        <div>09/2019 – 07/2022</div>
                                        <div><span class="font-bold bg-gradient-to-br from-blue-500 to-cyan-300 bg-clip-text text-transparent box-decoration-clone">Jacques de Vaucanson high school</span></div>
                                        <div>High School Diploma - high honours:</div>
                                        <div class="flex flex-col pl-4">
                                            <span>- Mathematics</span>
                                            <span>- Digital and Computer Sciences</span>
                                            <span>- Chemical and Physics</span>
                                        </div>
                                        <div>PIX certification</div>
                                        <div>Tours, France, 37</div>
                                    </div>
                                </div>
                                <div class="w-full flex flex-row gap-10 justify-start items-center card">
                                    <img src="/img/JeanRoux.png" alt="polytech" class="w-32 h-32 rounded-lg hidden xl:flex"/>
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
                                        <span><span class="font-bold bg-gradient-to-br from-blue-500 to-cyan-300 bg-clip-text text-transparent box-decoration-clone">Themis Technologies</span> | Ambillou, France, 37 | Internship observation</span>
                                    </div>
                                </div>
                                <p class="px-16 h4 text-center xl:px-40">
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
        <section use:scrollRef={'skills'} class="h-[{innerHeight}px] min-h-screen flex flex-col justify-start items-center">
            <div class="w-full flex 940:p-15 940:flex-row justify-center pt-24 940:justify-start sm:pt-32">
                <Tag>Skills</Tag>
            </div>
            <TabGroup class="w-full pt-8 px-12 940:px-40 xl:px-24 text-white">
                    <Tab bind:group={tabSet2} name="tab2" value={0}>Langages</Tab>
                    <Tab bind:group={tabSet2} name="tab3" value={1}>FrameWorks</Tab>
                    <Tab bind:group={tabSet2} name="tab3" value={2}>Tools</Tab>
                    <!-- Tab Panels --->
                    <svelte:fragment slot="panel">
                        {#if tabSet2 === 0}
                        <div class="grid grid-cols-5 sm:gap-12 gap-x-6 gap-y-12 sm:px-6 pt-12">
                            <ProgressLanguage value={95} src={"/img/languages/python.png"} meter="stroke-[#3b78a8]/80" class="1220:mt-[-7rem] 1220:ml-[2rem] 1220:w-20 w-8 mt-[-3rem] ml-[1rem]" />
                            <ProgressLanguage value={80} src={"/img/languages/typescript.png"} meter="stroke-[#2d79c7]/80" class="1220:mt-[-7rem] 1220:ml-[2rem] 1220:w-20 w-8 mt-[-3rem] ml-[1rem] rounded-lg"/>
                            <ProgressLanguage value={85} src={"/img/languages/javascript.png"} meter="stroke-[#f0dc4e]/80" class="1220:mt-[-7rem] 1220:ml-[2rem] 1220:w-20 w-8 mt-[-3rem] ml-[1rem] rounded-lg"/>
                            <ProgressLanguage value={95} src={"/img/languages/html.png"} meter="stroke-[#e85823]/80" class="1220:mt-[-7rem] 1220:ml-[2rem] 1220:w-20 w-8 mt-[-3rem] ml-[1rem]"/>
                            <ProgressLanguage value={95} src={"/img/languages/css.png"} meter="stroke-[#214ce5]/80" class="1220:mt-[-6.7rem] 1220:ml-[2rem] 1220:w-20 w-8 mt-[-3rem] ml-[1rem]"/>
                            <ProgressLanguage value={65} src={"/img/languages/php.png"} meter="stroke-[#6181b6]/80" class="1220:mt-[-6.7rem] 1220:ml-[2rem] 1220:w-20 w-8 mt-[-3rem] ml-[1rem]"/>
                            <ProgressLanguage value={85} src={"/img/languages/sql.png"} meter="stroke-[#7dba01]/80" class="1220:mt-[-7rem] 1220:ml-[2.5rem] 1220:w-16 w-6 mt-[-3rem] ml-[1.25rem]"/>
                            <ProgressLanguage value={50} src={"/img/languages/java.png"} meter="stroke-[#e76f00]/80" class="1220:mt-[-7.5rem] 1220:ml-[2.5rem] 1220:w-16 w-6 mt-[-3rem] ml-[1.25rem]"/>
                            <ProgressLanguage value={45} src={"/img/languages/c.png"} meter="stroke-[#004482]/80" class="1220:mt-[-7.3rem] 1220:ml-[2rem] 1220:w-20 w-8 mt-[-3rem] ml-[1rem]"/>
                        </div>
                        {:else if tabSet2 === 1}
                        <div class="grid grid-cols-5 sm:gap-12 gap-x-6 gap-y-12 sm:px-6 pt-12">
                            <ProgressLanguage value={95} src={"/img/frameworks/svelte.png"} meter="stroke-[#DE4516]/80" class="1220:mt-[-7.5rem] 1220:ml-[2rem] 1220:w-20 w-6 mt-[-2.85rem] ml-[1.25rem]"/>
                            <ProgressLanguage value={90} src={"/img/frameworks/tailwind.png"} meter="stroke-[#35bef8]/80" class="1220:mt-[-6.5rem] 1220:ml-[1.5rem] 1220:w-24 w-8 mt-[-2.5rem] ml-[1.05rem]"/>
                            <ProgressLanguage value={70} src={"/img/frameworks/laravel.png"} meter="stroke-[#ff291a]/80" class="1220:mt-[-7rem] 1220:ml-[2.2rem] 1220:w-20 w-8 mt-[-2.85rem] ml-[1.05rem]"/>
                            <ProgressLanguage value={60} src={"/img/frameworks/pocketbase.png"} meter="stroke-[#000000]/80" class="1220:mt-[-7rem] 1220:ml-[2.2rem] 1220:w-20 w-8 mt-[-3rem] ml-[1.05rem]"/>
                            <ProgressLanguage value={60} src={"/img/frameworks/prisma.png"} meter="stroke-[#123a50]/80" class="1220:mt-[-7.5rem] 1220:ml-[2rem] 1220:w-20 w-8 mt-[-3.25rem] ml-[1.05rem]"/>
                        </div>
                        {:else if tabSet2 === 2}
                        <div class="grid grid-cols-3 sm:gap-12 gap-x-6 gap-y-12 sm:px-6 pt-12">
                            <ProgressLanguage value={65} src={"/img/tools/node.png"} meter="stroke-[#8bc500]/80" class="1220:mt-[-7.25rem] 1220:ml-[2rem] 1220:w-20 w-8 mt-[-3rem] ml-[1rem]"/>
                            <ProgressLanguage value={75} src={"/img/tools/git.png"} meter="stroke-[#f05030]/80" class="1220:mt-[-7.25rem] 1220:ml-[2rem] 1220:w-20 w-8 mt-[-3rem] ml-[1rem]"/>
                            <ProgressLanguage value={60} src={"/img/tools/jetbrains.png"} meter="stroke-[#000000]/80" class="1220:mt-[-7.25rem] 1220:ml-[2rem] 1220:w-20 w-8 mt-[-3rem] ml-[1rem]"/>
                        </div>
                        {/if}
                    </svelte:fragment>
            </TabGroup>
        </section>
        <section use:scrollRef={'projects'} class="h-[{innerHeight}px] min-h-screen w-screen flex flex-col justify-start items-center">
            <div class="w-full flex 940:p-15 940:flex-row justify-center pt-24 940:justify-start sm:pt-32">
                <Tag>Projects</Tag>
            </div>
            <div class="text-white w-full flex flex-col items-center justify-center gap-12 pt-8 md:px-28 xl:px-12">
                <div class="rounded-lg bg-gradient-to-br from-blue-500 to-cyan-300 p-px w-full ">
                    <div class="p-1 bg-[#0b171e] rounded-lg">
                        <div class="flex flex-col gap-28 items-center md:h-175 h-150 py-18 sm:px-18 overflow-x-hidden overflow-y-auto rounded-lg bg-[#0b171e]">
                            <div class="flex 1780:flex-row flex-col 1780:gap-20 gap-32 items-center justify-center p-0">
                                <ProjectBox src="/img/projects/cosmos.png" color="#395bff" gradient="57deg, #1b42ff, #45e0ff" title="Cosmos" status={false}>Comos is a design system, very elaborate, fully customizable and adapts to all available frameworks!</ProjectBox>  
                                <ProjectBox src="/img/projects/hippocampe.png" color="#1386C9" gradient="57deg, #1386C9, #13C9BE" title="Hippocampe" status={false}>Hippocampe is a brand new Discord bot. It provides a full leveling system, including role rewards and a custom economy!</ProjectBox>
                                <ProjectBox src="/img/projects/scheV2.jpg" color="#ded8d8" gradient="57deg, #ded8d8, #918d8d" title="ScheV2" status={false}>ScheV2 is the improved version of a discord robot made in typescript which manages the schedule of a college class every day!</ProjectBox>
                            </div>
                            <div class="flex 1780:flex-row flex-col 1780:gap-20 gap-32 items-center justify-center p-0">
                                <ProjectBox src="/img/projects/baryum.png" color="#ffd34e" gradient="57deg, #ffd34e, #b29336" title="Baryum" status={false}>Baryum is an AI from Deep Image Prior made in python with the following functions: super-resolution, restoration, inpainting and denoising!</ProjectBox>
                                <ProjectBox src="/img/projects/dramaquick.png" href="https://github.com/Dramaquick/DramaQuick" color="#93f891" gradient="57deg, #34ffad, #9cf690" title="DramaQuick" status={true}>DramaQuick is an accelerated quiz site; temporary questionnaires, quiz sessions... All of this was created with one idea: ephemerality!</ProjectBox>
                                <ProjectBox src="/img/projects/portfolio.png" href="https://github.com/RogLag/PortFolio.git" color="#4daae5" title="Portfolio" status={true}>This is the site you are on, it was developed with sveltekit, typescript and tailwindcss.</ProjectBox>
                            </div>
                            <div class="flex 1780:flex-row flex-col 1780:gap-20 gap-32 items-center justify-center p-0">
                                <ProjectBox src="/img/projects/niobium.png" href="https://github.com/RogLag/Niobium" color="#dc3522" gradient="57deg, #dc3522, #8f2216" title="Niobium" status={true}>Niobium is a very primary AI allowing you to know if the word emitted is a yes or a no.</ProjectBox>
                                <ProjectBox src="/img/projects/scheV1.png" href="https://github.com/RogLag/Sche" color="#ffffff" gradient="57deg, #ffffff, #b2b2b2" title="ScheV1" status={true}>ScheV1 is the first version of a discord robot made in python which manages the schedule of a college class every day!</ProjectBox>
                                <ProjectBox src="/img/projects/robot.png" href="https://github.com/RogLag/Robot" color="#ff7f27" gradient="57deg, #ff7f27, #b2581b" title="PolyRobot" status={true}>The Poly Robot is the micropython operating code of a robot allowing movement and taking information from sensors!</ProjectBox>
                            </div>
                        </div>
                    </div>
                </div>
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