<template>
<div class="card">
    <div class="title">这是测试测试测试</div>
    <div class="name">姓名: {{ item.name }}</div>
    <div class="name">性别: {{ item.gender }}</div>
</div>
</template>

<script>
export default {
    name: 'card-page',
    props: {
        item: {
            type: Object,
            default: () => ({})
        }
    },
}
</script>

<style lang="scss" scoped>
.card {
    background-color: #fff;
    line-height: 24px;
    border-radius: 2px;
    font-size: 12px;
    color: #666;
    line-height: 32px;
    .title {
        font-size: 16px;
        color: #222;
        line-height: 48px;
    }
}
</style>