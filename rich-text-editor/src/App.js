import React from 'react';
import './App.css';
import { Editor  } from 'slate-react';
import { Value } from 'slate';

const initialValue = Value.fromJSON({
  document: {
    nodes: [
      {
        object: 'block',
        type: 'paragraph',
        nodes: [
          {
            object: 'text',
            text: 'A line of text in a paragraph.'
          }
        ]
      }
    ]
  }
})

function App() {
  return (
    <div className="App">
      <Editor value={initialValue} />
    </div>
  );
}

export default App;
