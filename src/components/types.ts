import React from 'react';

export type NavLinkProps = {
    children: React.ReactNode;
    href: string;
    target: string;
    className: string;
}

export type EntryProps = {
    id: string;
    title: string;
    details: string;
    demoLink: string;
    docuLink: string;
}
export type NoDemoEntryProps = {
    id: string;
    title: string;
    details: string;
    docuLink: string;
}
export type NoDocuEntryProps = {
    id: string;
    title: string;
    details: string;
    demoLink: string;
}
export type NoLinksEntryProps = {
    id: string;
    title: string;
    details: string;
}