import leadersReducer from 'store/reducer/leader.reducer';
import {actionTypes} from 'store/actions/leader.action';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('leadersReducer', () => {
  it('should return the initial state', () => {
    expect(leadersReducer(undefined, {})).toEqual({
      error: null,
      isLoading: false,
      isBottomReach: false,
      limit: 10,
      offset: 0,
      leader_list: {total: 0, data: []},
      searchedLeader: '',
    });
  });

  it('should handle GETLEADER_SUCCESS', () => {
    const leaders = {total: 1, data: [{name: 'John Doe', bananas: 50}]};
    expect(
      leadersReducer(undefined, {
        type: actionTypes.GETLEADER_SUCCESS,
        data: leaders,
      }),
    ).toEqual({
      error: null,
      isLoading: false,
      isBottomReach: false,
      limit: 10,
      offset: 0,
      leader_list: leaders,
      searchedLeader: '',
    });
  });
});
