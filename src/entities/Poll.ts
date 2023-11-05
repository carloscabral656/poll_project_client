export default class Poll {
    id: number;
    title: string;
    description: string;
    beginAt: Date;
    finishAt: Date;

    constructor(id: number, title: string, description: string, beginAt: Date, finishAt: Date){
      this.id          = id;
      this.title       = title;
      this.description = description;
      this.beginAt     = new Date(beginAt);
      this.finishAt    = new Date(finishAt);
	}
}