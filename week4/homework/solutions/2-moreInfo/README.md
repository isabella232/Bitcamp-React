# Changes Made

- Created `Info.js`

- Changes in `SnippetInput.js`

  - At top added

    ```jsx
    import Info from './Info'
    ```

  - At bottom of `<div>` with  `className="app__halfbottom"` added

    ```jsx
    <div className="app__halfbottom">
        ...
        <Info />
    </div>
    ```


- Additions in `App.js`

  - added links to documentation for each editor within their respective object within `AllModeProperties` 

    ```jsx
    const allModeProperties = {
        "VS Code": {
          ...
          docs: 'https://code.visualstudio.com/docs/editor/userdefinedsnippets',
        },
        "Atom": {
          ...
          docs: 'http://flight-manual.atom.io/using-atom/sections/snippets/',
        },
        "Sublime Text": {
          ...
          docs: 'http://docs.sublimetext.info/en/latest/extensibility/snippets.html',
        },
      }
    ```

    