import React from 'react';

export type CheckboxProps = {
    key: React.Key;
    label: React.ReactNode;
    checked: boolean
    handleChange: React.ChangeEventHandler<HTMLInputElement>;
    handleClick: React.MouseEventHandler;
}
export type NavLinkProps = {
    children: React.ReactNode;
    href: string;
    target: string;
    className: string;
}
// export type EntryProps = {
//     index: number;
//     docLink: string;
//     demoLink: string;
// }
export type EntryProps = {
    id: string;
    title: string;
    details: string;
    demoLink: string
    docuLink: string;
}