import React, { Children } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
  href: string;
}

const NavLink: React.FC<Props> = ({ href, children }) => {
  const child = Children.only(children);
  const { pathname } = useRouter();
  let className: string;
  if (child && React.isValidElement(child)) {
    className = child.props.className || "";
    if (pathname === href) {
      className = `${className} active`;
    }
    return <Link href={href}>{React.cloneElement(child, { className })}</Link>;
  }
  return <Link href={href}>{children}</Link>;
};

export default NavLink;
