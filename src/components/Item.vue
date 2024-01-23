<template>
<div class="item">
    <div class="item-title">这是测试的</div>
    <div class="item-content">
        <ItemList :item="val" v-for="(val, index) in newList" :key="index" :index="index" />
        <el-popover popper-class="popover-item-list">
            <div class="popover-list-box">
                <div class="item-title">这是测试的标题</div>
                <el-scrollbar>
                    <ItemList :item="val" v-for="(val,index) in list" :key="index" :index="index" />
                </el-scrollbar>
                <!-- v-if="subjectData.isShowMore && activeCurId === subjectData.id" -->
                <div class="item-more-pop pickup" @click="hiddenMore">
                    收起
                    <i class="el-icon-arrow-up"></i>
                </div>
            </div>
            <div slot="reference" class="popover-item more-item" v-show="hasMore" @click="showMore">
                还有{{ count }}个班级
                <i class="el-icon-arrow-down"></i>
            </div>
        </el-popover>
    </div>
</div>
</template>

<script>
import ItemList from './ItemList.vue';
export default {
    name: 'item-page',
    components: { ItemList },
    props: {
        list: {
            type: Array,
            default: () => ([])
        }
    },
    data() {
        return {
            
        }
    },
    computed: {
        newList() {
            if (this.list.length > 9) {
                return this.list.slice(0, 8);
            }
            return this.list;
        },
        count() {
            return this.list.length - 8;
        },
        hasMore() {
            return this.list.length > 9;
        },
    },
    methods: {
        showMore() {
            
        },
        hiddenMore() {},
    },
}
</script>

<style>
.item {
    width: 100%;
    height: 40px;
    display: flex;
    flex-direction: column;
}
.item-title {
    height: 40px;
    line-height: 40px;
    padding: 0 16px;
    box-sizing: border-box;
    color: #222;
    background-color: #f8f8f8;
}
.item-content {
    flex: 1;
}
.popover-item {
    height: 40px;
    line-height: 40px;
    padding: 0 16px;
    color: #666;
    cursor: pointer;
}
.popover-item.more-item {
    height: 32px;
    line-height: 32px;
    color: #00b388;
    font-size: 12px;
    margin-top: 8px;
}
.more-item:hover {
    background-color: transparent;
}
.el-popper.popover-item-list {
    padding: 0;
}
.popover-list-box {
    min-width: 380px;
    max-height: 400px;
    box-sizing: border-box;
}
.popover-list-box .item-title {
    background-color: #fff;
    font-size: 16px;
}
.el-scrollbar {
    max-height: 328px;
}
.el-scrollbar__wrap {
    max-height: 328px;
}
.el-scrollbar__bar {
    z-index: 999;
}
.item-more-pop {
    cursor: pointer;
    height: 32px;
    line-height: 32px;
    color: #00b388;
    font-size: 12px;
    padding: 0 16px;
}
</style>