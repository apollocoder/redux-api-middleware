/* very basic implementation, extend to your needs */
export const apiMiddleware =
	({ getState, dispatch }) =>
	next =>
	async action => {
		const result = next(action)

		if (action.type !== 'API_REQUEST') {
			return result
		}

		const response = await fetch(action.path, { method: action.method })
		const json = await response.json()

		if (response.ok) {
			if (action.resultAction) {
				dispatch(action.resultAction(json))
			}
			if (action.callback) {
				action.callback(json)
			}
		}

		return result
	}
