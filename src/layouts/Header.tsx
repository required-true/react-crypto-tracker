import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { isDarkAtom } from '../atoms'

function Header() {
  const [isDark, setIsDark] = useRecoilState(isDarkAtom)
  const toggleDarkAtom = () => setIsDark((prev) => !prev)

  return (
    <>
      <HeaderStyle>
        <NavLinkStyle to="/">HOME</NavLinkStyle>
        <ThemeToggleBtn onClick={toggleDarkAtom}>
          {isDark ? 'LIGHT' : 'DARK'}
        </ThemeToggleBtn>
      </HeaderStyle>
    </>
  )
}
export default Header

const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
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

const ThemeToggleBtn = styled.button`
  border: none;
  font-weight: 700;
  font-size: 18px;
  color: ${(props) => props.theme.textColor};
  background: none;
  cursor: pointer;
`
