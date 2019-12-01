import React, { useMemo } from 'react';
import { withReact, Slate, Editable } from 'slate-react'
import { createEditor } from 'slate';
import initialValue from '../utils/value';
import CodeElemeng from './elements/CodeElement';
import DefaultElement from './elements/DefaultElement';

export default function SlateEditor() {
    const editor = useMemo(() => withReact(createEditor()), [])
    const keyDown = (e) => {
        if (e.key === "&") {
            e.preventDefault()
            editor.exec({type:"insert_text", text:"and"})
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
            <Slate editor={editor} renderElement={renderElement} defaultValue={initialValue}>            
                <Editable onKeyDown={keyDown}/>
            </Slate>
        </div>
    )
}
