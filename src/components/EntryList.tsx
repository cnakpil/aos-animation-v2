import './EntryList.css';
import assignments from '../json/assignments.json';
// import { EntryProps } from './types';
import Entry from './Entry';
// import { useState, useEffect } from 'react';

const EntryList = () => {

    // const [entryList, setEntryList] = useState<Entry[]>([]);

    // useEffect(()=> {

    // })

    return (
        <div className="list-wrapper">
            {assignments.map((entry, index) => {
                return (
                    <Entry
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