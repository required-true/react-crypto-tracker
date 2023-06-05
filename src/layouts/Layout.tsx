import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import Header from './Header'

function Layout() {
  return (
    <LayoutWrapper>
      <LayoutContianer>
        <Header />
        <Outlet />
      </LayoutContianer>
    </LayoutWrapper>
  )
}

export default Layout

const LayoutWrapper = styled.div`
  overflow: hidden;
  min-width: 375px;
  width: 100%;
  padding: 20px;
  margin: 50px auto 0;
  box-sizing: border-box;
`

const LayoutContianer = styled.div`
  width: 100%;
  min-height: 500px;
  padding: 10px;
  border: 1px solid #eee;
  border-radius: 10px;
  box-sizing: border-box;
`
