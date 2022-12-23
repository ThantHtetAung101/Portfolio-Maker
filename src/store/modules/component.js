export default {
  state: {
    components: {},
    componentsNames: [],
    componentCount: 0,
  },
  getters: {
    components(state) {
      Object.fromEntries(Object.entries(state.components).filter((component, index)=> {
        state.components[index == 0 ? component[0] : component[0]+index]
      }))
      return state.components
    },
    componentsNames(state) {
      return state.componentsNames;
    },
    componentCount(state) {
      return state.componentCount;
    },
  },
  mutations: {
    addComponent(state, data) {
      if (data.component) {
        if (state.componentsNames.length === 0) {
          const dataName = data.component.componentName;
          state.components[dataName] = data.component;
          state.components[dataName].id = state.componentCount;
          state.componentCount++;
          console.log("first");
        } else {
          if (state.componentsNames.includes(data.component.componentName)) {
            const extraName = `${data.component.componentName}${state.componentCount}`;
            state.components[extraName] = data.component;
            state.components[extraName].id = state.componentCount;
            state.componentCount++;
            console.log("extra");
          } else {
            const dataName = `${data.component.componentName}`;
            state.components[dataName] = data.component;
            state.components[dataName].id = state.componentCount;
            state.componentCount++;
            console.log("new");
          }
        }
      }
      const keys = Object.keys(state.components);
      keys.forEach((key) => {
        const dataName = data.component.componentName;
        if (key == dataName) {
          state.componentsNames.push(key);
        }
      });
    },
    delComponent(state, component) {
      if(state.componentCount > 0) {
        state.componentCount = state.componentCount - 1
        const convertArr = Object.entries(state.components)
        const filtered = convertArr.filter(([key,value])=> key !== component)
        state.components = Object.fromEntries(filtered)
        const newFilter = state.componentsNames.filter(componentName => componentName !== component)
        state.componentsNames = newFilter
      }
    }
  },
  actions: {
    newComponent({ commit }, data) {
      commit("addComponent", data);
    },
    delete({commit}, component) {
      commit("delComponent", component);
    }
  },
};
