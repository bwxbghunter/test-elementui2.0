<template>
<div class="list">
    <div class="list-item" v-for="(arr, index) in list" :key="index">
        <Item :list="arr" />
    </div>
</div>
</template>

<script>
import Item from './Item.vue';
export default {
    name: 'list-page',
    components: { Item },
    data() {
        return {
            list: []
        }
    },
    mounted() {
        const obj = {
            0: '张三',
            1: '李四',
            2: '王五'
        }
        for(let i = 0; i < 3; i++) {
            const arr = [];
            const len = i === 1 ? 9 : 20;
            for(let j = 0; j < len; j++) {
                const num = Math.floor(Math.random() * 1000000);
                arr.push({
                    name: `${obj[i]}-${num}`,
                    gender: num % 2 === 0 ? '男' : '女',
                    id: `${i}_${j + 1}`
                });
            }
            this.list.push(arr);
        }
        console.log(this.list, '7890-=')
    },
}
</script>

<style scoped>
.list {
    width: 100%;
    display: flex;
    align-items: stretch;
}
.list-item {
    width: 380px;
    height: 400px;
    border: 1px solid #ddd;
    box-sizing: border-box;
    border-radius: 4px;
    margin-right: 12px;
}
</style>