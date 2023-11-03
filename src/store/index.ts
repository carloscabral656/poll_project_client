import axios from 'axios'
import { createStore } from 'vuex'
import ApiResponse from '@/entities/ApiResponse';
import Poll from '@/entities/Poll';
import Question from '@/entities/Question';

export default createStore({
  state: {

    // Data's System - Poll (All Polls from the server)
    polls: [] as Array<Poll>,

    // Data's System - Questions (All Questions from a specific Poll)
    questions: [] as Array<Question>,

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
