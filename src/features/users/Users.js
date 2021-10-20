import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers, selectUsers } from './usersSlice'

export function Users() {
	const users = useSelector(selectUsers)
	const [count, setCount] = useState(0)
	const dispatch = useDispatch()

	const handleResponseDirectly = useCallback(json => {
		setCount(json.length)
	}, [])

	useEffect(() => {
		dispatch(fetchUsers(handleResponseDirectly))
	}, [dispatch, handleResponseDirectly])

	return (
		<div>
			<div>There are {count} users:</div>
			{users.map(user => (
				<div key={user.id}>{user.name}</div>
			))}
		</div>
	)
}
