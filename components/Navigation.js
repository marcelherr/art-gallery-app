import Link from "next/link";
import styled from "styled-components";

export default function Navigation() {
  const Navigation = styled.ul`
    display: flex;
    justify-content: space-around;
    position: fixed;
    z-index: 1;
    bottom: 0;
    width: 100vw;
    height: 4rem;
    background-color: #282828;
  `;

  const NavigationLink = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    font-size: 1.5rem;
    color: #f1f1f1;
  `;

  return (
    <Navigation>
      <NavigationLink href="/art-pieces/">Art Pieces</NavigationLink>
      <NavigationLink href="/">Spotlight</NavigationLink>
    </Navigation>
  );
}
