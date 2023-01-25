import React from 'react';
import { StyledLinkSidebar } from './styles';

type LinkSidebarProps = React.ComponentProps<typeof StyledLinkSidebar>;

export const LinkSidebar = ({ children, ...props }: LinkSidebarProps) => {
  return (
    <StyledLinkSidebar {...props}>
      <span>{children}</span>
    </StyledLinkSidebar>
  );
};
