<template>
    <div class="font-ubuntu p-6 text-center">
        <img src="@/assets/img/NoResults.svg" class="inline h-52 mb-8" />
        <slot name="noResults">
            <p class="font-bold text-xl text-slate-500">No results found</p>
            <p class="font-bold text-slate-500">
                Go back
                <span
                    class="hover:scale-150 underline scale-0 transition duration-300 ease-in-out"
                    ><router-link to="/">home</router-link></span
                >
            </p>
        </slot>
    </div>
</template>
