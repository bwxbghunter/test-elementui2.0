<template>
<div class="item-list" @click="handleChange">
    <el-popover 
        placement="right" 
        trigger="click" 
        popper-class="class-list-tip" 
        :ref="`pop-item-${item.id}`"
    >
        <div class="list-item-details">
            <Card :item="item" />
        </div>
        <div slot="reference" class="class-item-title">
            <span class="index">{{ index + 1  }}</span>
            <span class="name">{{ item.name }} </span>
            <span class="gender">{{ item.gender }}</span>
        </div>
    </el-popover>
</div>
</template>

<script>
import Card from './Card.vue';
import { mapGetters, mapMutations } from 'vuex';
export default {
    name: 'item-list',
    components: { Card },
    props: {
        index: {
            type: Number,
            default: 0
        },
        item: {
            type: Object,
            default: () => ({})
        }
    },
    data() {
        return {
           
        }
    },
    watch: {
        getCurId(val) {
            this.$nextTick(() => {
                const dom = this.$refs[`pop-item-${this.getPreId}`];
                dom && dom.doClose();
            });
        },
    },
    computed: {
        ...mapGetters(['getCurId', 'getPreId']),
    },
    methods: {
        ...mapMutations(['setCurId', 'setPreId']),
        handleChange() {
            this.setPreId(this.getCurId);
            this.setCurId(this.item.id);
        }
    },
}
</script>

<style scoped>
.item-list {
    height: 40px;
    line-height: 40px;
    padding: 0 16px;
    color: #666;
    cursor: pointer;
}
.index {
    color: #222;
    margin-right: 8px;
}
.name {
    color: #00b388;
    display: inline-block;
    width: 120px;
    margin-left: 12px;
}
.gender {
    color: #666;
}
.item-list:hover {
    background-color: rgba(0, 179,136, 0.16);
}
.item-list:first-child {
    /* margin-top: 8px; */
}
</style>