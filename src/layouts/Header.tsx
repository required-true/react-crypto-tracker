import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

function Header() {
  return (
    <>
      <HeaderStyle>
        <NavLinkStyle to="/">Home</NavLinkStyle>
      </HeaderStyle>
    </>
  )
}
export default Header

const HeaderStyle = styled.header`
  display: flex;
  margin-bottom: 10px;
`

const NavLinkStyle = styled(NavLink)`
  position: relative;
  padding: 10px;
  font-weight: 700;
  font-size: 18px;
  color: ${(props) => props.theme.textColor};

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background-color: ${(props) => props.theme.textColor};
  }

  &.active {
    color: ${(props) => props.theme.accentColor};

    &::after {
      background-color: ${(props) => props.theme.accentColor};
    }
  }
`
