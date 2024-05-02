import { appReduser } from './reduser';
import { createStore } from 'redux';

export const store = createStore(appReduser);
