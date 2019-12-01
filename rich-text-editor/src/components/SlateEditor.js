import React, { useMemo, useCallback } from 'react';
import { withReact, Slate, Editable } from 'slate-react'
import { createEditor, Editor } from 'slate';
import initialValue from '../utils/value';
import CodeElement from './elements/CodeElement';
import DefaultElement from './elements/DefaultElement';

export default function SlateEditor() {
    const editor = useMemo(() => withReact(createEditor()), [])
    const keyDown = (e) => {
        if (e.key === "&") {
            e.preventDefault()
            editor.exec({type:"insert_text", text:"and"})
        }
        if (e.key === "`" && e.ctrlKey) {
            e.preventDefault();
            Editor.setNodes(editor, {type: 'code'}, {match: "block"})
        }
    } 

    const renderElement = useCallback((props) => {
        switch (props.element.type) {
            case 'code':
                return <CodeElement {...props} />
            default:
                return <DefaultElement {...props} />
        }
        },[])

    return (
        <div>
            <h1>The SlateEditor is supposed to go here!</h1>
            <Slate editor={editor} defaultValue={initialValue}>            
                <Editable renderElement={renderElement} onKeyDown={keyDown}/>
            </Slate>
        </div>
    )
}
