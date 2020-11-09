export interface Error {
	code: string;
	field: string;
	message: string;
	resource: string;
}

export type Pagination = {
	offset: null | number;
	page: number;
	results: number;
} | null;
export default interface SwaggerResponse<T> {
	body: {
		// This is for a gateway response error
		failure?: boolean;
		message?: string;
		// -------
		result: {
			errors: Error[];
			payload: T[];
			pagination: Pagination;
		};
	};
}
