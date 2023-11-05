import axios from 'axios'
import { createStore } from 'vuex'
import ApiResponse from '@/entities/ApiResponse';
import Poll from '@/entities/Poll';
import Question from '@/entities/Question';

export default createStore({

  // 
  state: {

    // Data's System - Poll (All Polls from the server)
    polls: [] as Array<Poll>,

    // Data's System - Questions (All Questions from a specific Poll)
    questions: [] as Array<Question>,

    // Specific Poll from all Polls in list
    choosenPoll: {} as Poll

  },



  getters: {
    getAllPolls(state) : Array<Poll>{
      return state.polls
    }
  },



  mutations: {

    // Method for including all Polls in polls state
    loadPolls(state, response : ApiResponse){
      if(response.statusCode === 200){
        response.content.forEach((resp, key) => {
          // Creating poll object based in Poll entity
          const poll = new Poll(
              resp.id,
              resp.title, 
              resp.description, 
              resp.begin_at, 
              resp.finish_at
            );

          // Pushing into state  
          state.polls.push(poll)
        })
      }
    },

    /**
     * Method responsable 
     * 
     * 
    */
    choosePoll(state, poll : Poll){
      state.choosenPoll = poll;
    }

  },



  actions: {

    /**
     * Method responsable 
     * 
     * 
    */
    loadPolls({commit}){
      axios
      .get('http://127.0.0.1:8000/api/v1/polls')
      .then((response) => {
        commit("loadPolls", response.data);
      })
    },

    choosePoll({commit}, poll: Poll){
      commit("choosePoll", poll)
    }
  },



  modules: {
  }
})
