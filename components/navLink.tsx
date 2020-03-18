import React, { Children } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const NavLink: React.FC<{ href: string }> = props => {
  const { href, children } = props;
  const child = Children.only(children);
  const router = useRouter();
  let className: string;
  if (child && React.isValidElement(child)) {
    className = child.props.className || "";
    if (router.pathname === href) {
      className = `${className} active`;
    }
    return <Link href={href}>{React.cloneElement(child, { className })}</Link>;
  }
  return <Link href={href}>{children}</Link>;
};

export default NavLink;
