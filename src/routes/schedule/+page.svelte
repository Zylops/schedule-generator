<script>
    import Section from './Section.svelte';
    import { sets } from '$lib/Sets.js'
    import { PUBLIC_HEADER, PUBLIC_PRINTABLE_HEADER, PUBLIC_HEADER_URL } from '$env/static/public'
    import { onMount } from 'svelte';

    let days = 0;
    let chapters = 0;

    let trimmedSets = []

    $sets.forEach((s) => {
        let temp = s
        let spl = temp.content.split('\n')
        spl = spl.filter((s) => {return s.trim() != ""})
        if (spl != []) {
            trimmedSets.push({content: spl, endOn: s.endOn})
        }
    })

    $sets.forEach((s) => {
        chapters += s.content.split("\n").length
        if (s.endOn > days) { days = s.endOn }
    })
    
</script>

<div class="portion text-zinc-400 p-8 text-center sm:text-start">
    <div class=" sm:flex justify-between items-center">
        <div>
            <a class="header flex sm:block justify-center" href="{PUBLIC_HEADER_URL}">
                <img class="w-32 print:hidden block" src="{PUBLIC_HEADER}" alt="zdv.es">
                <img class="w-32 print:block hidden" src="{PUBLIC_PRINTABLE_HEADER}" alt="zdv.es">
            </a>
            <h1 class="text-5xl font-bold mb-8">Schedule</h1>
        </div>
        <div class="meta sm:text-end flex sm:block justify-between">
            <p>{days} days</p>
            <p>{chapters} Chapters</p>
            <button on:click={() => { print() }} class="rounded p-2 m-2 print:hidden hidden sm:block bg-zinc-900 text-stone-400 font-bold w-full">Print</button>
        </div>
    </div>
    <hr class="opacity-25 mb-4">
    <br>
    {#each trimmedSets as set, i}
        <Section {set} {i}></Section>
        <br>
    {/each}
</div>