<template>
    <div>Blog</div>
    <div>router path: {{ props.router.path }}</div>
    <div>router query: {{ JSON.stringify(props.router.query) }}</div>
</template>
<script lang="ts" setup>
const props = defineProps<{
    router: { path: string; query: Record<string, string> };
}>();
</script>