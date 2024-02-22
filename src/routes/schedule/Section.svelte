<script>
    import { onMount } from 'svelte';

    export let set, i;
    let days = parseInt(set.endOn)
    let chapters = set.content
    $: portion = [];

    
    
    onMount(() => {
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

        return result;
    }
</script>


<div class="section">
    <div class="print:block flex justify-start">
        <h1 class="print:block font-extralight inline text-center mb-4 border-b-2 border-gray-200 p-2 border-opacity-25 text-3xl">Subject {i+1}</h1>
    </div>
    <div class="sm:grid grid-cols-3 gap-16 grid-flow-cols place-content-start">
        {#each portion as p}
            <div class="text-start lg:mb-0 mb-8">
                <h1 class="text-3xl font-semibold">Day {portion.indexOf(p) + 1}</h1>
                <ul>
                    {#each p as c}
                        <li class="opacity-75">- {c}</li>
                    {/each}
                </ul>
            </div>
        {/each}
    </div>
</div>