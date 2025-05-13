export type SuccessResponse<T> = {
  ok: true;
  data: T;
};

export type ErrorResponse = {
  ok: false;
  error: Error;
};
export type ServiceResponse<T> = SuccessResponse<T> | ErrorResponse;
