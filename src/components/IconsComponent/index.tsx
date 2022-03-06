import Link from "next/link";
import { ReactElement, cloneElement } from "react";
interface IconsComponentProps {
    slug: string;
    children: ReactElement;
    section: string;
}
export function IconsComponent({ slug, children, section }: IconsComponentProps) {
    const className = section === 'footer' ? 'iconsFooter' : 'iconsAbout';
    return (
        <Link href={slug}>
            <a target="_blank">{cloneElement(children, { className })}</a>
        </Link>
    )
}