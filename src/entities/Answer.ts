import Alternative from "./Alternative";

export default class Answer {
    private idQuestion: number;
    private answers: Array<Alternative> | null;
    private comment: string | null;

    constructor(
        idQuestion: number
    ){
        this.idQuestion = idQuestion;
        this.answers = new Array<Alternative>();
        this.comment = "";
    }

    set setAnswer(alternative: Alternative){
        this.answers!.push(alternative)
    }

    set setComment(comment: string){
        this.comment = comment
    }
}