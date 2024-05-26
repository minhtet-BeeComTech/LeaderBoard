import emitReducer from 'store/reducer/emit.reducer';

describe('emitReducer', () => {
  it('should return the initial state', () => {
    expect(emitReducer(undefined, {})).toEqual({
      isAuth: 'signIn',
    });
  });

  it('should handle ISAUTH_KEY action', () => {
    const action = {
      type: 'ISAUTH_KEY',
      payload: 'authenticated',
    };

    const newState = emitReducer(undefined, action);

    expect(newState).toEqual({
      isAuth: 'authenticated',
    });
  });

  it('should return the current state for unknown action', () => {
    const currentState = {
      isAuth: 'signIn',
    };

    const action = {
      type: 'UNKNOWN_ACTION',
      payload: 'some value',
    };

    const newState = emitReducer(currentState, action);

    expect(newState).toEqual(currentState);
  });
});
