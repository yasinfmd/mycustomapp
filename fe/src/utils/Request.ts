const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export class Request {
    static async post<T>(url: string, body: T) {
        try {
            const response = await fetch(`${BASE_URL}${url}`, {
                method: 'POST',
                body: JSON.stringify(body),
            });
            const data=await  response.json()
            return data;
        } catch (e) {
            throw  e;
        }
    }

    static async get(url:string) {
        try {
            const response = await fetch(`${BASE_URL}${url}`, {
                method: 'GET',
            });
            const data=await  response.json()
            return data;
        } catch (e) {
            throw  e;
        }
    }
}
