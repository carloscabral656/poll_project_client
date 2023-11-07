import Alternative from "./Alternative";

export default class Question {
    id: number;
    orderQuestion: number;
    statement: string;
    hasComment: boolean;
    alternatives: Array<Alternative>;

    constructor(
        id: number,
        orderQuestion: number,
        statement: string,
        hasComment: boolean,
        alternatives: Array<Alternative>
    ){
        this.id = id;
        this.orderQuestion = orderQuestion;
        this.statement = statement;
        this.hasComment = hasComment;
        this.alternatives = alternatives;
    }
}