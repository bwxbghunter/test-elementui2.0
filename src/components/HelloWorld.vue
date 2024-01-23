<template>
<div class="hello">
    <List />
</div>
</template>

<script>
import List from './List.vue';
export default {
    name: "HelloWorld",
    components: { List },
    data() {
        return {
            
        }
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
    margin: 40px 20px;
}
</style>
