import Answer from "@/entities/Answer";

/**
 * All responses sent to API must implement this struct.
 * 
*/
export default interface IAnswer {
    idUser: number
    dateAnswer: Date
    answers: Array<Answer>
}