<script>
    export let p, day
</script>

<div class="text-start lg:mb-0 mb-8">
    <h1 class="text-3xl font-semibold">Day {day + 1}</h1>
    <ul>
        {#each p as c}
            <li class="opacity-75">- {c}</li>
        {/each}
    </ul>
</div>