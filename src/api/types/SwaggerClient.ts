export default interface SwaggerClient {
	execute: (
		request: {
			operationId: string;
			parameters: {
				req?: { [index: string]: string | object };
			};
		},
	) => Promise<any>;  
}