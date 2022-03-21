import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Switch } from 'react-router-dom'
import history from './core/history.js'
import { getRoutes } from './core/routes'
import { renderRoutes } from 'react-router-config'

const routes = getRoutes()
ReactDOM.render(
	<Router history={history}>{renderRoutes(routes)}</Router>,document.getElementById('root')
)

function renderRoutes(routes) {
	return routes.map(({ path, exact, component: RouteComponent, route: childrenRoutes = [] }) => {
		return (
			<Route
				path={path}
				exact={exact}
				render={
					routeProps => (
						<RouteComponent {...routeProps}>
							<Switch>
								{renderRoutes(childrenRoutes)}
							</Switch>
						</RouteComponent>
					)
				}
			/>
		)
	})
}