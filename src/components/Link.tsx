import "./NavLink.scss";
import { NavLinkProps } from "./types";

const Link = ({ className, href, target, children }: NavLinkProps) => {
    return (
        <a className={className} href={href} target={target}>
            {children}
        </a>
    );
};

export default Link;