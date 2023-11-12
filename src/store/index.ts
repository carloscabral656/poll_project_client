import axios from 'axios'
import { createStore } from 'vuex'
import ApiResponse from '@/entities/ApiResponse';
import Poll from '@/entities/Poll';
import Question from '@/entities/Question';
import Alternative from '@/entities/Alternative';
import Answer from '@/entities/Answer';

export default createStore({

  /**
   * 
   * 
  */
  state: {

    // Data's System - Poll (All Polls from the server)
    polls: [] as Array<Poll>,

    // Data's System - Questions (All Questions from a specific Poll)
    questions: [] as Array<Question>,

    // Specific Poll from all Polls in list
    choosenPoll: {} as Poll,

    // All answers from the Choosen Poll
    answers: [] as Array<Answer>

  },


  /** 
   * 
   * 
  */
  getters: {
    /** 
     * 
     * 
    */
    getAllPolls(state) : Array<Poll>{
      return state.polls
    },

    /** 
     * 
     * 
    */
    choosenPoll(state) : Poll{
      return state.choosenPoll
    }
  },



  mutations: {

    /** 
     * Method for including all Polls in polls state
     * 
    */ 
    loadPolls(state, response : ApiResponse){
      if(response.statusCode === 200){
        
        // For each Poll
        response.content.forEach((resp, key) => {
          console.log(resp)

          // For each question in Poll
          const questions = resp.questions
          const computedQuestions = [] as Array<any>
          questions.forEach((question: any) => {
            
            // Constructing alternatives for each question
            const alternatives = question.alternatives
            const computedAlternatives = [] as Array<any>
            alternatives.forEach((alternative: any) => {
              // Instance of Alternative
              const computedAlternative = new Alternative(
                alternative.value,
                alternative.description
              );
              computedAlternatives.push(computedAlternative)
            })

            const computedQuestion = new Question(
              question.id,
              question.order_question,
              question.statement,
              question.has_comment,
              computedAlternatives
            );
            computedQuestions.push(computedQuestion)
          });
          // Creating poll object based in Poll entity
          
          const poll = new Poll(
              resp.id,
              resp.title, 
              resp.description, 
              resp.begin_at, 
              resp.finish_at,
              computedQuestions
            );

          // Pushing into state  
          state.polls.push(poll)

          console.log(poll)

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
    },


     /**
     * Method responsable for adding all the answer.
     * 
     * 
    */
    addAnswer(state, answer: Answer){
      const sameAnswer  = !state.answers.some(
        (a) => 
        (a.id === answer.id) &&
        (a.choosenAlternativeValues?.some((ca) => ca.value === answer.choosenAlternativeValues.va))
      ) 
      if(!sameAnswer){
        state.answers.push(answer)
      }
    }
  },



  actions: {

    /**
     * Method responsable for fetching all polls inserted in API.
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

    /**
     * Method responsable for.
     * 
     * 
    */
    choosePoll({commit}, poll: Poll){
      commit("choosePoll", poll)
    },

    /**
     * Method responsable for adding all the answer.
     * 
     * 
    */
    addAnswer({commit}, answer: Answer){
      commit("addAnswer", answer)
    }
  },



  modules: {
  }
})
