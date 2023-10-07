import { createStore } from 'vuex'

export default createStore({
  state: {
    questions: [{
      id: 1,
      statement: 'Questão Teste',
      alternatives: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      hasComent: true
    }]
  },
  getters: {
  },
  mutations: {

  },
  actions: {

  },
  modules: {
  }
})
