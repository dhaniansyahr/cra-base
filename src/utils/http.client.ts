import queryString from "query-string";
import { TErrorResponse, TMethod, TParams } from "../types/http";

export async function http<R = unknown>(
  method: TMethod,
  path: string,
  params?: TParams
) {
  const headers = new Headers();

  headers.set("Accept", "application/json");
  headers.set("Content-Type", "application/json");

  if (params?.query) {
    const queryParams = queryString.stringify(params.query);

    path = `${path}?${queryParams}`;
  }

  if (params?.headers) {
    for (const [key, value] of Object.entries(params.headers)) {
      headers.set(key, value);
    }
  }

  const response = await fetch(process.env.REACT_PUBLIC_API_URL + path, {
    method,
    headers,
    body: params?.body,
    cache: params?.cache,
  });

  if (!response.ok && params?.throwError) {
    const error = (await response.json()) as TErrorResponse;

    throw new Error(error.message);
  }

  return (await response.json()) as R & TErrorResponse;
}
