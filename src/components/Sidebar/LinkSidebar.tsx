import React from 'react';
import { useLocation } from 'react-router-dom';
import { StyledLinkSidebar } from './styles';

export type LinkSidebarProps = React.ComponentProps<typeof StyledLinkSidebar> & {
  icon: React.ReactNode;
  to: string;
};

export const LinkSidebar = ({ children, icon, to, ...props }: LinkSidebarProps) => {
  const location = useLocation();

  return (
    <StyledLinkSidebar
      to={to}
      active={location.pathname === `/dashboard/${to}` || location.pathname === to ? `true` : undefined}
      {...props}
    >
      {icon}
      <span>{children}</span>
    </StyledLinkSidebar>
  );
};
