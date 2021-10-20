import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	entities: []
}

export const counterSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		setUsers: (state, action) => {
			state.entities = action.payload
		}
	}
})

// very simple to add new requests
// use this as a template:
export const fetchUsers = callback => ({
	type: 'API_REQUEST',
	method: 'get',
	path: 'https://jsonplaceholder.typicode.com/users',
	resultAction: setUsers /* put the response inside the store... */,
	callback: callback /* ...or handle it directly in the component */
})

export const { setUsers } = counterSlice.actions

export const selectUsers = state => state.users.entities

export default counterSlice.reducer
