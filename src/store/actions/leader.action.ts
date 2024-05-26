import {Dispatch} from 'redux';

// import serviceController, {routes, routeFilter} from 'controller';
import {tmpLeaderData} from 'assets/data/leaderboard';
import {ToDoRequest, ToDoSuccess} from './typehandle.action';

export const actionTypes = {
  // getLeader
  GETLEADER_REQUEST: 'GETLEADER_REQUEST',
  GETLEADER_ERROR: 'GETLEADER_ERROR',
  GETLEADER_SUCCESS: 'GETLEADER_SUCCESS',
};

const getLeaders =
  (
    params: {limit: number; offset: number; sortBy?: string; search?: string},
    isStateClean = true,
  ) =>
  async (dispatch: Dispatch) => {
    const {limit, offset, sortBy, search} = params;

    dispatch(
      ToDoRequest(actionTypes.GETLEADER_REQUEST, {...params, isStateClean}),
    );

    let filteredData = [...tmpLeaderData];
    if (sortBy === 'name') {
      filteredData.sort((a, b) => a.name.localeCompare(b.name));
    }

    if (sortBy === 'stars') {
      filteredData.sort(
        (a, b) => a.bananas - b.bananas || a.name.localeCompare(b.name),
      );
    }

    if (search) {
      filteredData = filteredData.filter((item: any) =>
        item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()),
      );
    }

    setTimeout(() => {
      const paginatedData = filteredData.slice(offset, offset + limit);

      dispatch(
        ToDoSuccess(actionTypes.GETLEADER_SUCCESS, {
          ...params,
          total: filteredData.length,
          data: paginatedData,
        }),
      );
    }, 500);

    return filteredData;
    // dispatch(ToDoError(actionTypes.GETLEADER_ERROR, error.message))
  };

export default {
  getLeaders,
};
