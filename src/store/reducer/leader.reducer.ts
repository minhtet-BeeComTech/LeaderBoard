import {actionTypes} from '../actions/leader.action';

export interface LeaderState {
  error: string | null;
  isLoading: boolean;
  isBottomReach: boolean;
  limit: number;
  offset: number;
  leader_list: {total: number; data: any[]};
  searchedLeader: string;
}

const initialState = {
  error: null,
  isLoading: false,
  isBottomReach: false,
  limit: 10,
  offset: 0,
  leader_list: {total: 0, data: []},
  searchedLeader: '',
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.GETLEADER_REQUEST: // getLeader
      return {
        ...state,
        leader_list: action?.data?.isStateClean ? null : state.leader_list,
        isLoading: action.data?.offset <= 1,
        isBottomReach: true,
      };
    case actionTypes.GETLEADER_SUCCESS:
      let led_arr = state.leader_list?.data || [];
      return {
        ...state,
        isLoading: false,
        isBottomReach: false,
        limit: action.data?.limit || 10,
        offset: action.data?.offset || 0,
        searchedLeader: action.data.search || '',
        leader_list: {
          total: action.data.total,
          data:
            action.data.offset > 1
              ? [...led_arr, ...action.data.data]
              : action.data.data,
        },
      };
    case actionTypes.GETLEADER_ERROR:
      return {
        ...state,
        isLoading: false,
        isBottomReach: false,
        error: action.error,
      };
    default:
      return state;
  }
};
