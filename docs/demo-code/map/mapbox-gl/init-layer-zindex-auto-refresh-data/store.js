export let state = Vue.observable({
    refreshRequest: 0,
    parentTypeDescMap: {},// 父类型映射
    childTypeDescMap: {},
});

const mutation = {
    setRefreshRequest(value) {
        state.refreshRequest = value;
    },
    setParentTypeDescMap(value) {
        state.parentTypeDescMap = value;
    },
    setChildTypeDescMap(value) {
        state.childTypeDescMap = value;
    },
}

export const getter = {
    
};

export const action = {
    // 刷新
    updateRefreshRequest: mutation.setRefreshRequest,
    updateParentTypeDescMap: mutation.setParentTypeDescMap,
    updateChildTypeDescMap: mutation.setChildTypeDescMap,
}
