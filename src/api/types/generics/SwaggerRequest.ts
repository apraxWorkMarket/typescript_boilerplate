/**
 * This is the structure for all Swagger requests.
 * The parameters to the swagger endpoint should be passed into T
 */
export default interface SwaggerRequest<T> {
	req: T;
}
