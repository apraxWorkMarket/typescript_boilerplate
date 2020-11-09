//TODO(aprax) use swagger-ts-client (https://github.com/kjayasa/swagger-ts-client)
/*@ts-ignore*/
import Swagger from 'swagger-client';
import Credentials from '../credentials';

let apiToken: string;
export const API_HOST = process.env.NODE_ENV === 'development' ? 'https://dev.workmarket.com' : '';

const SPEC_URL = `${API_HOST}/api-docs/latest`;

export const getToken = async () => {
	if (typeof apiToken !== 'undefined') {
		return apiToken;
	}

	let response;

	try {
		response = await Swagger.http({
			url: `${API_HOST}/v3/oauth/token`,
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: `username=${encodeURIComponent(Credentials.USERNAME)}&password=${encodeURIComponent(Credentials.PASSWORD)}&grant_type=password`,
		});
	} catch (error) {
		throw error;
	}

	apiToken = response.body.result.payload[0].accessToken;

	return apiToken;
};

const requestInterceptor = async (originalReq: {
    credentials: string;
  headers: {
    Authorization: string;
    'Content-Type': string;
  };
  url: string;
}) => {
	const req = originalReq;
	let token;

	try {
		token = await getToken();
		req.headers.Authorization = `Bearer ${token}`;
	} catch (error) {
		console.error('No Bearer token!', error); // eslint-disable-line no-console
	}

	req.headers['Content-Type'] = 'application/json; charset=utf-8';

	return req;
};

Swagger.prototype.http = (obj: any) => Swagger.http({
	requestInterceptor,
	...obj,
});

const getSwagger = async () => {
	await getToken();
	return Swagger(SPEC_URL);
};

export default getSwagger;
