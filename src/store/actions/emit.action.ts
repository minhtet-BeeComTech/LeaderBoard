interface EmitAction<T> {
  type: string;
  payload: T;
}

const setEmit = <T>(type: string, payload: T): EmitAction<T> => {
  return {
    type,
    payload,
  };
};

export default {
  setEmit,
};
