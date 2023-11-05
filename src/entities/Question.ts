import Alternative from "./Alternative";

export default class Question {
    orderQuestion: number;
    statement: string;
    has_comment: boolean;
    alternatives: Array<Alternative>;

    constructor(
        orderQuestion: number,
        statement: string,
        has_comment: boolean,
        alternatives: Array<Alternative>
    ){
        this.orderQuestion = orderQuestion;
        this.statement = statement;
        this.has_comment = has_comment;
        this.alternatives = alternatives;
    }
}