<script>
    import { onMount } from 'svelte';
    import { PUBLIC_HEADER, PUBLIC_PRINTABLE_HEADER, PUBLIC_HEADER_URL } from '$env/static/public'
    export let data;
    let chapters = data.chapters;
    let days = parseInt(data.days);
    $: portion = [];

    console.log(chapters)
    console.log(days)

    onMount(() => {
        chapters = chapters.split('\n')
        // Shuffle the chapters to get a random order
        chapters.sort(() => Math.random() - 0.5);

        portion = splitArrayIntoParts(chapters, days)
        
    })

    function splitArrayIntoParts(a, parts) {
        // Ensure parts is a valid positive integer
        if (typeof parts !== "number" || parts <= 0 || Math.floor(parts) !== parts) {
            throw new Error("Invalid number of parts");
        }

        const result = [];
        const partSize = Math.ceil(a.length / parts); // Use Math.ceil to ensure leftovers go to last part
        let remaining = a.length;

        for (let i = 0; i < parts; i++) {
            const currentPartSize = Math.min(partSize, remaining);
            const start = i * partSize;
            const end = start + currentPartSize;
            result.push(a.slice(start, end));
            remaining -= currentPartSize;
        }

        console.log(result)
        chapters = chapters.join("\n")
        return result;
    }
</script>

<div class="portion text-zinc-400 p-8 text-center sm:text-start">
    <div class=" sm:flex justify-between items-center">
        <div>
            <a class="header" href="{PUBLIC_HEADER_URL}">
                <img class="w-32 print:hidden block" src="{PUBLIC_HEADER}" alt="zdv.es">
                <img class="w-32 print:block hidden" src="{PUBLIC_PRINTABLE_HEADER}" alt="zdv.es">
            </a>
            <h1 class="text-5xl font-bold mb-8">Schedule</h1>
        </div>
        <div class="meta sm:text-end flex sm:block justify-between">
            <p>{days} days</p>
            <p>{chapters.split('\n').length} Chapters</p>
            <button on:click={() => { print() }} class="rounded p-2 m-2 print:hidden hidden sm:block bg-zinc-900 text-stone-400 font-bold w-full">Print</button>
        </div>
    </div>
    <hr class="opacity-25 mb-4">
    <div class="sm:grid grid-cols-3 gap-16 grid-flow-cols">
        {#each portion as p}
            <div>
                <h1 class="text-3xl font-semibold">Day {portion.indexOf(p) + 1}</h1>
                <ul>
                    {#each p as c}
                        <li class="opacity-75">- {c}</li>
                    {/each}
                </ul>
            </div>
            <br class="lg:hidden">
        {/each}
    </div>
</div>