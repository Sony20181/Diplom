import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { 
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
//import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import AsyncStorage from '@react-native-async-storage/async-storage';

import todoReducer from './NotesSlice'
import profileReducer from './ProfileSlice'; 
import arrowReducer from './ArrowSlice'
import bowReducer from './BowSlice'
import trainigReducer from './TrainingSlice'


const rootReducer = combineReducers({//любой новый редьюсер добавляется  сюда как ключ значение
  todos: todoReducer,
  profile: profileReducer,
  arrow:arrowReducer,
  bows:bowReducer,
  trainings:trainigReducer,
  
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);// преобразовать редьюсеры для возможности из удобного хранения

const store = configureStore({  // теперь здесь больше не описывается редьюсер,он передается заранее подготовленные
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store); //чтобы приложение могло работать с redux-persist так как оно умеет работать (некая обертка над сторем мы его экспортируем во внешний мир)
export default store;


/*
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
 
import rootReducer from "../Profile/reducer";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer
});

export const persistor = persistStore(store);*/