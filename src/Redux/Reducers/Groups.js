import { FETCHG_ALL } from '../../constants/actionTypes';

export default (groups = [], action) => {
  switch (action.type) {
    case FETCHG_ALL:
      return action.payload;
    default:
      return groups;
  }
};

