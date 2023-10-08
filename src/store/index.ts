import axios from 'axios'
import { createStore } from 'vuex'
import ApiResponse from '@/entities/ApiResponse';
import Poll from '@/entities/Poll';

export default createStore({
  state: {

    questions: [{
      id: 1,
      statement: 'Questão Teste',
      alternatives: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      hasComent: true
    }],

    polls: [] as Array<Poll>

  },
  getters: {
    getAllPolls(state){
      return state.polls
    }
  },
  mutations: {

    loadPolls(state, response : ApiResponse){
      if(response.statusCode === 200){
        response.content.forEach((r, key) => {
          const poll = new Poll(r.title, r.description, r.begin_at, r.finish_at);
          state.polls.push(poll)
        })
      }
    }

  },
  actions: {

    loadPolls({commit}){
      axios
      .get('http://127.0.0.1:8000/api/v1/polls')
      .then((response) => {
        commit("loadPolls", response.data);
      })
    }

  },
  modules: {
  }
})
