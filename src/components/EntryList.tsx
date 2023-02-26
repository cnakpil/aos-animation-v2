import './EntryList.css';
import assignments from '../json/assignments.json';
import Entry from './Entry';

const EntryList = () => {
    return (
        <div className="list-wrapper">
            {assignments.map((entry, index) => {
                return (
                    <Entry
                        key={index}
                        id={entry.id}
                        title={entry.title}
                        details={entry.details}
                        demoLink={entry.demoLink}
                        docuLink={entry.docuLink}
                    />
                );
            })}
        </div>
    );
}

export default EntryList;