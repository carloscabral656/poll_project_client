export default class Poll {
    title: string;
    description: string;
    beginAt: Date;
    finishAt: Date;

    constructor(title: string, description: string, beginAt: Date, finishAt: Date){
		this.title       = title;
		this.description = description;
		this.beginAt     = new Date(beginAt);
        this.finishAt    = new Date(finishAt);
	}
}