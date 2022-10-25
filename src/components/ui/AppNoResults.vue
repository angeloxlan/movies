<template>
    <div class="p-6 text-center">
        <slot name="noResults">
            <p class="font-bold text-xl text-slate-500">No results found.</p>
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
