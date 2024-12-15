export type TMethod = "GET" | "POST" | "PUT" | "DELETE";

export type TQuery<T = unknown> = Record<string, unknown> & T;

export interface TParams {
  query?: TQuery;
  headers?: HeadersInit;
  body?: string | FormData | null;
  cache?: RequestCache;
  throwError?: boolean;
}

export interface TBaseResponse {
  error: boolean;
  code: number;
  message: string;
}

export type TErrorResponse = TBaseResponse;

export interface TPagination {
  limit: number;
  page: number;
  totalRows: string;
  totalPages: number;
}

export type TPaginationParams<T = object> = T &
  Partial<{
    limit: number;
    page: number;
    sort: string;
    dir: number;
    search: string;
    filter: string;
    filterIn: string;
  }>;

export type TSuccessResponse<R> = TBaseResponse & {
  data: R;
};

export type TSuccessResponseWithPagination<R> = TSuccessResponse<R> & {
  pagination: TPagination;
};
