<script setup lang="ts">
const { name } = useAppConfig()

useHead({
    title: name,
    titleTemplate(title) {
        return title === name ? name : `${name} · ${title}`
    }
})
</script>

<template>
    <header class="p-2 flex justify-between items-center">
        <h1 class="text-lg">
            {{ name }}
        </h1>
        <section>
            <Theme />
        </section>
    </header>
    <slot />
</template>