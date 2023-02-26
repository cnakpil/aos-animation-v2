import React from 'react';

export type NavLinkProps = {
    children: React.ReactNode;
    href: string;
    target: string;
    className: string;
}

export type EntryProps = {
    key: React.Key;
    id: string;
    title: string;
    details: string;
    demoLink: string;
    docuLink: string;
}
export type NoDemoEntryProps = {
    key: React.Key;
    id: string;
    title: string;
    details: string;
    docuLink: string;
}
export type NoDocuEntryProps = {
    key: React.Key;
    id: string;
    title: string;
    details: string;
    demoLink: string;
}
export type NoLinksEntryProps = {
    key: React.Key;
    id: string;
    title: string;
    details: string;
}