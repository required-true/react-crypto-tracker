import { NavLink, useMatch, useNavigate } from 'react-router-dom'
import styled from 'styled-components'

function Header() {
  const isHome = useMatch('/')
  const navigate = useNavigate()
  console.log(isHome)

  return (
    <>
      <HeaderStyle>
        {isHome ? (
          <NavLinkStyle to="/">Home</NavLinkStyle>
        ) : (
          <BtnBack onClick={() => navigate(-1)}>&larr;</BtnBack>
        )}
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
`

const BtnBack = styled.button`
  padding: 10px;
  border: none;
  font-weight: 700;
  font-size: 18px;
  color: #fff;
  background: none;
  outline: none;
`
