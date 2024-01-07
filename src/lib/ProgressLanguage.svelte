<script lang="ts">
    import { ProgressRadial } from '@skeletonlabs/skeleton';

    let className = "";

    export { className as class };

    export let value: number = 50;
    export let meter: string = 'gray-500';
    export let src: string = '/img/languages/python.png';

    let objet: string = src.split('/')[3].split('.')[0];

    function strUcFirst(a: string) {
        return (a+'').charAt(0).toUpperCase() + (a+'').substr(1);
    }
</script>

<div class="grid grid-rows-2 justify-items-center 1220:mb-[-4rem]">
    <div class="1220:h-36 h-28 mb-[-3rem] 1220:mb-0">
        <ProgressRadial width="1220:w-36 w-16" stroke={40} {meter} track="stroke-[#4B4B4B]/80" strokeLinecap='butt' value={value}></ProgressRadial>
        <img {src} alt="python" class="{className}">
    </div>
    <div>
        <p class="1220:h4 text-sm font-semibold h-12 flex justify-center items-center">{strUcFirst(objet)}</p>
        <p class="1220:h4 font-semibold h-4 flex justify-center items-center">{value}%</p>
    </div>
</div>