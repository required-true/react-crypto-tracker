import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import Header from './Header'

const LayoutWrapper = styled.div`
  overflow: hidden;
  width: 375px;
  padding: 20px;
  min-height: 500px;
  margin: 100px auto 0;
  border: 1px solid #eee;
  border-radius: 10px;
`

function Layout() {
  return (
    <LayoutWrapper>
      <Header />
      <Outlet />
    </LayoutWrapper>
  )
}

export default Layout
