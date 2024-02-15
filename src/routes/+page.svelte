<script>
    let days = 3;
    let chapters = "example.\nchapter 1\nchapter 2\nchapter 3\n...etc"

    function fixBlanks() {
        let newPortion = []
        let temp = chapters.split("\n")
        temp.forEach(name => {
            if (name.trim() != "") {
                newPortion.push(name.trim())
            } 
        });
        chapters = newPortion.join("\n")
    }

</script>

<main class="p-8 lg:flex justify-center items-center lg:min-h-screen lg:w-full gap-32">
    <div class="wrapper lg:w-96 text-center text-stone-400">
        <p class="text-xs">zdv.es</p>
        <h1 class="font-bold text-5xl">Schedule Generator</h1>
        <form class="m-4" action="/schedule">
            <label for="days" class="text-sm ">how many days do you have:</label>
            <br>
            <input type="number" name="days" class="rounded p-2 text-center mb-4 bg-stone-400 text-zinc-900" id="" bind:value={days}>
            <br>
            <label for="chapters" class="text-sm">drop your portion, each chapter on a new line:</label>
            <br>
            <textarea rows="12" class="w-full bg-stone-400 text-zinc-900 p-4" name="chapters" bind:value={chapters}></textarea>
            <br>
            <div class="actions flex justify-center gap-2 mt-4">
                <button class="rounded p-3 bg-zinc-900 text-stone-400 font-bold w-full" on:click|preventDefault={fixBlanks}>Fix Blank Lines</button>
                <button class="rounded p-3 bg-zinc-900 text-stone-400 font-bold w-full">Generate</button>
            </div>
        </form>
    </div>
</main>