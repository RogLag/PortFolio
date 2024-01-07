<script lang="ts">
    export let src: string = "/img/x.png";
    export let status: boolean = false;
    export let href: string | undefined = undefined;
    export let title: string | undefined = undefined;
    export let color: string = "#EEEEEE";
    export let gradient: string = "57deg, #3877d3, #65e3f9";

    function colorHexaDarken(hex: string, lum: number) {
        hex = String(hex).replace(/[^0-9a-f]/gi, '');
        if (hex.length < 6) {
            hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
        }
        lum = lum || 0;
        let rgb = "#", c, i;
        for (i = 0; i < 3; i++) {
            c = parseInt(hex.substr(i*2,2), 16);
            c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
            rgb += ("00"+c).substr(c.length);
        }
        return rgb;
    }

    let colorHexaDarkenValue = colorHexaDarken(color, -0.5);
    let colorHexaLightenValue = colorHexaDarken(color, 0.1);

</script>

<div class="card rounded-lg bg-[#262b30] md:w-120 sm:w-100 w-100 myshadow md:h-140 sm:h-120" style="--theme-colorlight: {colorHexaLightenValue}; --theme-colordark: {colorHexaDarkenValue};">
	<header class="card-header p-0">
        <div class="md:w-120 md:h-67.5 w-100 h-64 rounded-t-lg" style="background-image: url('{src}'); background-size: cover; background-position: center;"></div>
    </header>
	<section class="p-6 flex flex-col md:gap-12 sm:gap-4 py-8">
        <div class="flex flex-row gap-4">
            <h2 class="h2 h-fit bg-clip-text text-transparent box-decoration-clone font-semibold flex flex-row items-center" style="background: -webkit-linear-gradient({gradient}); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">{title}</h2>
            {#if status}
                <!-- svelte-ignore a11y-missing-attribute -->
                <a {href} target="_blank" class="w-8 h-8 rounded-full bg-[#d7d7d7]/20 flex flex-row justify-center items-center hover:bg-[#d7d7d7]/50 duration-200 hover:cursor-pointer opacity-50">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.230287 0.840139L0.230733 1.12092C0.231027 1.30679 0.381543 1.4573 0.567412 1.4576L7.6245 1.4668L0.203495 8.88782C0.0731982 9.01811 0.0735366 9.23166 0.204247 9.36237L0.402294 9.56042C0.533004 9.69113 0.746556 9.69147 0.876853 9.56117L8.29786 2.14016L8.30905 9.19924C8.30934 9.38511 8.45986 9.53562 8.64573 9.53592L8.92651 9.53636C9.11238 9.53665 9.26242 9.38662 9.26212 9.20075L9.25087 0.854433C9.25058 0.668564 9.10006 0.518049 8.91419 0.517754L0.567882 0.506506C0.378058 0.506205 0.229993 0.65427 0.230287 0.840139Z" fill="currentColor"></path></svg>
                </a>
            {:else}
                <div class="py-1 px-2 h-fit rounded-full bg-[#d7d7d7]/20 flex flex-row justify-start items-center hover:bg-[#d7d7d7]/50 duration-200 hover:cursor-pointer opacity-50">
                    <p class="text-xs text-[#F0F0F0]">IN PROGRESS</p>
                </div>
            {/if}
        </div>
        <p class="h4 text-[#F0F0F0]"><slot /></p>
    </section>
    <footer class="card-footer"></footer>
</div>

<style>
    .myshadow {
        animation: pulse 10s infinite;
    }
    @keyframes pulse {
        0% {
            box-shadow: 0 0 18px 0 var(--theme-colorlight);
        }

        50% {
            box-shadow: 0 0 18px 0 var(--theme-colordark);
        }

        100% {
            box-shadow: 0 0 18px 0 var(--theme-colorlight);
        }
    }
</style>