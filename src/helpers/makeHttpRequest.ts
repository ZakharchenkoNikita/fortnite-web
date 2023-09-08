export interface RequestConfig {
  url: string;
  method?: string;
  headers?: HeadersInit;
  body?: BodyInit;
}

export async function makeHttpRequest<T>(
  requestConfig: RequestConfig
): Promise<T> {
  const response = await fetch(requestConfig.url, {
    method: requestConfig.method ? requestConfig.method : "GET",
    headers: requestConfig.headers ? requestConfig.headers : {},
    body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
  });

  const body = await response.json();

  return body;
}
