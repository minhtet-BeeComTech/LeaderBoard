export interface EmitState {
  isAuth: string;
}

const initialState = {
  isAuth: 'signIn',
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case 'ISAUTH_KEY':
      return {
        ...state,
        isAuth: action.payload,
      };
    default:
      return state;
  }
};
