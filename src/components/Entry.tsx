import "./Entry.css";
import { EntryProps, NoDemoEntryProps, NoDocuEntryProps, NoLinksEntryProps } from "./types";

const HasLinks = ({ id, title, details, demoLink, docuLink }: EntryProps) => {
    return (
        <div className="entry">
            <div className="subheader">
                <h3>task {id}</h3>
            </div>
            <div className="details">
                <h2>{title}</h2>
                <p>
                    {details}
                </p>
                <div className="detail-links">
                    <p>
                        <a href={demoLink} target="_blank">LIVE DEMO</a>
                    </p>
                    <p>
                        <a href={docuLink} target="_blank">DOCUMENTATION</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

const NoDemoLink = ({ id, title, details, docuLink }: NoDemoEntryProps) => {
    return (
        <div className="entry">
            <div className="subheader">
                <h3>task {id}</h3>
            </div>
            <div className="details">
                <h2>{title}</h2>
                <p>
                    {details}
                </p>
                <div className="detail-links">
                    <p><s>LIVE DEMO</s></p>
                    <p>
                        <a href={docuLink} target="_blank">DOCUMENTATION</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

const NoDocuLink = ({ id, title, details, demoLink }: NoDocuEntryProps) => {
    return (
        <div className="entry">
            <div className="subheader">
                <h3>task {id}</h3>
            </div>
            <div className="details">
                <h2>{title}</h2>
                <p>
                    {details}
                </p>
                <div className="detail-links">
                    <p>
                        <a href={demoLink} target="_blank">LIVE DEMO</a>
                    </p>
                    <p><s>DOCUMENTATION</s></p>
                </div>
            </div>
        </div>
    );
}

const NoLinks = ({ id, title, details }: NoLinksEntryProps) => {
    return (
        <div className="entry">
            <div className="subheader">
                <h3>task {id}</h3>
            </div>
            <div className="details">
                <h2>{title}</h2>
                <p>
                    {details}
                </p>
                <div className="detail-links">
                    <p><s>LIVE DEMO</s></p>
                    <p><s>DOCUMENTATION</s></p>
                </div>
            </div>
        </div>
    );
}

const Entry = ({ id, title, details, demoLink, docuLink }: EntryProps) => {
    if ((demoLink === "/") && (docuLink === "/")) {
        return (
            <NoLinks
                id={id}
                title={title}
                details={details}
            />
        );
    } else if ((demoLink !== "/") && (docuLink === "/")) {
        return (
            <NoDemoLink
                id={id}
                title={title}
                details={details}
                docuLink={docuLink}
            />
        );
    } else if ((demoLink === "/") && (docuLink !== "/")) {
        return (
            <NoDocuLink
                id={id}
                title={title}
                details={details}
                demoLink={demoLink}
            />
        );
    } else {
        return (
            <HasLinks
                id={id}
                title={title}
                details={details}
                demoLink={demoLink}
                docuLink={docuLink}
            />
        );
    }
};

export default Entry;