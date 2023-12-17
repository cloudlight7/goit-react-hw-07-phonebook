import { configureStore } from '@reduxjs/toolkit';

import { reducer } from './reducer';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

export const store = configureStore({reducer});

//export const persistor = persistStore(store);
