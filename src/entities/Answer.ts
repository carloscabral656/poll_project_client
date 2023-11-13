import Alternative from "./Alternative";

export default class Answer {
    private idQuestion: number;
    private choosenAlternative: Array<Alternative> | null;
    private comment: string | null;

    constructor(
        idQuestion: number
    ){
        this.idQuestion = idQuestion;
        this.choosenAlternative = new Array<Alternative>();
        this.comment = null;
    }

    get id() : number{
        return this.idQuestion
    }

    get choosenAlternativeValues() : Array<Alternative> | null{
        return this.choosenAlternative
    }

    setChoosenAlternative(alternative: Alternative){
        this.choosenAlternative!.push(alternative)
    }

    setChoosenAlternatives(choosenAlternatives: Array<Alternative> | null){
        this.choosenAlternative = choosenAlternatives
    }

    setComment(comment: string){
        this.comment = comment
    }

}