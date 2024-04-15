import Link from "next/link";
import styled from "styled-components";

export default function Navigation() {
  const Navigation = styled.ul`
    display: flex;
    justify-content: space-around;
    bottom: 0;
    background-color: #282828;
  `;

  const NavigationLink = styled(Link)`
    text-decoration: none;
    color: #f1f1f1;
  `;

  return (
    <Navigation>
      <NavigationLink href="/art-pieces/">Art Pieces</NavigationLink>
      <NavigationLink href="/">Spotlight</NavigationLink>
    </Navigation>
  );
}
