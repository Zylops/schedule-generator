<script>
    import { PUBLIC_HEADER, PUBLIC_HEADER_URL, PUBLIC_STARTER_DAYS, PUBLIC_EXAMPLE_STRING } from '$env/static/public'
    import { sets } from '$lib/Sets.js'

    let days = PUBLIC_STARTER_DAYS;
    
    function addSet() {
        sets.update((s) => [...s, {content: PUBLIC_EXAMPLE_STRING, endOn: days}])
    }

</script>

<main class="p-8 flex justify-center items-center min-h-screen w-full gap-32">
    <div class="wrapper lg:w-96 text-center text-stone-400">
        <a class="header flex justify-center" href="{PUBLIC_HEADER_URL}">
            <img class="w-32" src="{PUBLIC_HEADER}" alt="zdv.es">
        </a>

        <h1 class="font-bold text-5xl mb-2">Schedule Generator</h1>
        <p>You have a total of <input type="number" name="days" class="p-2 text-center h-8 w-10 text-center bg-stone-400 text-zinc-900" id="" bind:value={days}> days.</p>

        <br>

        <form class="m-4" action="/schedule">
            {#each $sets as s, i}
                <div class="flex justify-between p-2 items-center">
                    <h6 class="font-extralight text-start text-3xl">Subject {i+1}</h6>
                    <div class=""><p class="text-xs">End on Day</p> <input type="number" class="bg-stone-400 text-zinc-900 p-2 w-16" name="dl" bind:value={s.endOn}></div>
                </div>
                <textarea rows="12" class="w-full bg-stone-400 text-zinc-900 p-4" name="chapters" bind:value={s.content}></textarea>
                <br>
            {/each}
            <div class="actions mt-4 flex gap-4">
                <button on:click|preventDefault={addSet} class="rounded p-3 bg-stone-400 text-zinc-900 font-bold w-full">➕</button>
                <button class="rounded p-3 bg-zinc-900 text-stone-400 font-bold w-full">✔</button>
            </div>
        </form>
    </div>
</main>