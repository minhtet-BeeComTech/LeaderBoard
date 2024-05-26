interface RequestAction<T> {
  type: string;
  data?: T;
}
interface ErrorAction<T> {
  type: string;
  error: T;
}
interface SuccessAction<T> {
  type: string;
  data: T;
}

export const ToDoRequest = <T>(type: string, data?: T): RequestAction<T> => ({
  type,
  data,
});
export const ToDoError = <T>(type: string, error: T): ErrorAction<T> => ({
  type,
  error,
});
export const ToDoSuccess = <T>(type: string, data: T): SuccessAction<T> => ({
  type,
  data,
});
