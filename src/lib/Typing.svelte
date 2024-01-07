<div class="typed-element" bind:this={typedElement}>
    <slot></slot>
</div>

<script lang="ts">

  import Typed from 'typed.js'
  
  import { onMount } from 'svelte';
  import { onDestroy } from 'svelte';


  let typedObj : Typed | null = null;
  let typedElement : HTMLDivElement | null = null;

  function throwError(message : string) {
      throw new TypeError(message)
  }

  function initTypedJS() {
      
      const $typed = typedElement?.querySelector('.typing')

      if ($$slots.default == undefined) {
          throwError(`Just one child element allowed inside  component.`)
      } else if ($$slots.default == true) {
          typedObj = new Typed($typed, $$props)
      }
  }

  onMount(() => {initTypedJS()});
  onDestroy(() => {typedObj?.destroy()});

</script>

<style>

  .typed-element {
      display: flex;
      align-items: center;
  }

  :global(.typed-element .typed-cursor) {
      opacity: 1;
      animation: typedjsBlink 0.7s infinite;
  }

  @keyframes typedjsBlink {
      50% {
          opacity: 0;
      }
  }
</style>