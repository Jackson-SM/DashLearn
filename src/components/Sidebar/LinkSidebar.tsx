import React from 'react';
import { StyledLinkSidebar } from './styles';

type LinkSidebarProps = React.ComponentProps<typeof StyledLinkSidebar> & {
  icon: React.ReactNode;
};

export const LinkSidebar = ({ children, icon, ...props }: LinkSidebarProps) => {
  return (
    <StyledLinkSidebar {...props}>
      {icon}
      <span>{children}</span>
    </StyledLinkSidebar>
  );
};
