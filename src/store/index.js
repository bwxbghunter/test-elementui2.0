import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        curId: -1,
        preId: -1
    },
    getters: {
        getCurId(state){
            return state.curId;
        },
        getPreId(state) {
            return state.preId;
        }
    },
    mutations: {
        setCurId(state, data) {
            state.curId = data;
        },
        setPreId(state, data) {
            state.preId = data;
        }
    }
});