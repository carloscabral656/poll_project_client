import Alternative from "./Alternative";

export default class Question {
    orderQuestion: number;
    statement: string;
    hasComment: boolean;
    alternatives: Array<Alternative>;

    constructor(
        orderQuestion: number,
        statement: string,
        hasComment: boolean,
        alternatives: Array<Alternative>
    ){
        this.orderQuestion = orderQuestion;
        this.statement = statement;
        this.hasComment = hasComment;
        this.alternatives = alternatives;
    }
}