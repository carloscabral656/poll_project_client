export default class ApiResponse {
    content: Array<any>;
    statusCode: number;
    success: boolean;

    constructor(content: Array<any>, statusCode: number, success: boolean){
		this.content    = content;
		this.statusCode = statusCode;
		this.success    = success;
	}
}