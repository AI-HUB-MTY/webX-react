import Navigation from './components/navigation'
import NavigationBar from './components/navigation-bar'
import HeaderNavigation from './components/header-navigation'
import NavigationDashboard from './components/navigation-dashboard'

import { Outlet, useLocation } from 'react-router-dom'

const PathLocation = () => {
  return useLocation().pathname
}

export function Layout({ dropdownSetters, triggerFetch }) {
  return (
    <>
      {PathLocation() === '/barchart' ? (
        <NavigationDashboard
          dropdownSetters={dropdownSetters}
          triggerFetch={triggerFetch}
        />
      ) : (
        <HeaderNavigation />
      )}

      <main>
        <Outlet />
      </main>
    </>
  )
}
