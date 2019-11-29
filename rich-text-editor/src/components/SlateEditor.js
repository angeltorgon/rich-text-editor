import React, { useMemo } from 'react';
import { withReact, Slate, Editable } from 'slate-react'
import { createEditor } from 'slate';
import initialValue from '../utils/value';

export default function SlateEditor() {
    const editor = useMemo(() => withReact(createEditor()), [])

    return (
        <div>
            <h1>The SlateEditor is supposed to go here!</h1>
            <Slate editor={editor} defaultValue={initialValue}>            
                <Editable />
            </Slate>
        </div>
    )
}
