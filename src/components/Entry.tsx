import "Entry.css";
import { EntryProps } from "./types";

const Entry = ({ id, title, details, demoLink, docuLink }: EntryProps) => {
    return (
        <div className="entry">
            <div className="subheader">
                <h3>task `{id}`</h3>
            </div>
            <div className="details">
                <h2>`{title}`</h2>
                <p>
                    `{details}`
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
};
export default Entry;