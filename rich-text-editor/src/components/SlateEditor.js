import React from 'react';
import { Editor } from 'slate-react';
import initialValue from './utils/value';

export default function SlateEditor() {
    return (
        <div>
            <Editor value={initialValue}/>            
        </div>
    )
}
