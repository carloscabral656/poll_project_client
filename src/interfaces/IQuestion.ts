import IAlternative from "./IAlternative";

export default interface IQuestion {
    id: number,
    statement: string,
    alternatives: Array<IAlternative>,
    hasComent: boolean,
    comment: string
}