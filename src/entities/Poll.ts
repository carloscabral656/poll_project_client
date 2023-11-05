import Question from "./Question";

export default class Poll {
    id: number;
    title: string;
    description: string;
    beginAt: Date;
    finishAt: Date;
    questions: Array<Question>;

    constructor(
        id: number, 
        title: string, 
        description: string, 
        beginAt: Date, 
        finishAt: Date,
        questions: Array<Question>
      ){
      this.id          = id;
      this.title       = title;
      this.description = description;
      this.beginAt     = new Date(beginAt);
      this.finishAt    = new Date(finishAt);
      this.questions   = questions;
	}
}