import { combineReducers } from 'redux';

import Groups from './Groups';
import Auth from './Auth';

export const reducers = combineReducers({ Groups, Auth });
