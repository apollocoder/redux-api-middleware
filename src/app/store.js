import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import usersReducer from '../features/users/usersSlice'
import { apiMiddleware } from '../middleware/api'

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		users: usersReducer
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: ['API_REQUEST']
			}
		}).concat(apiMiddleware)
})
