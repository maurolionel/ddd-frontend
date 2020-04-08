export interface APIConfiguration {
  baseURL?: string;
}

const DEFAULT_CONFIG: APIConfiguration = {
  baseURL: 'https://api.ua-stg.etermax.net',
};

export class APIService {
  constructor(private config: APIConfiguration = DEFAULT_CONFIG) {}

  public async delete(url: RequestInfo, options?: RequestInit): Promise<any> {
    const invokeDelete = this.makeFetchWithMethod('DELETE');
    return await invokeDelete(url, options);
  }

  public async get(url: RequestInfo, options?: RequestInit): Promise<any> {
    const invokeGet = this.makeFetchWithMethod('GET');
    return await invokeGet(url, options);
  }

  public async getJSON<T>(url: RequestInfo, options?: RequestInit): Promise<T> {
    const response = await this.get(url, options);
    return (await response.json()) as T;
  }

  public async post(url: RequestInfo, options?: RequestInit): Promise<any> {
    const invokePost = this.makeFetchWithMethod('POST');
    return await invokePost(url, options);
  }

  public async put(url: RequestInfo, options?: RequestInit): Promise<any> {
    const invokePut = this.makeFetchWithMethod('PUT');
    return await invokePut(url, options);
  }

  private makeURL(endpoint: RequestInfo): RequestInfo {
    return `${this.config.baseURL}/${endpoint}`;
  }

  private makeFetchWithMethod(method: RequestInit['method']) {
    return async (url: RequestInfo, options?: RequestInit) => {
      return await fetch(this.makeURL(url), { ...options, method });
    };
  }
}
