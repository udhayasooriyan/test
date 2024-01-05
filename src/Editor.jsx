// import React, { useRef, useState } from 'react';
// import { Editor } from '@toast-ui/react-editor';
// import '@toast-ui/editor/dist/toastui-editor.css'; // Editor's stylesheet


// const ContentEditor = ({ dummyData }) => {

//   const [text, setText] = useState('create a short blog');
//   const editorRef = useRef();

//   async function main() {
//     const chatCompletion = await openai.chat.completions.create({
//       messages: [{ role: 'user', content: text }],
//       // model: 'gpt-3.5-turbo',
//       model: 'gpt-4',
//       temperature: 0.5
//     });

//     await editorRef.current
//       .getInstance()
//       .setMarkdown(chatCompletion.choices[0].message.content);
//   }

//   return (
//     <>
//       <div id="editor">
//         <Editor
//           ref={editorRef}
//           initialValue={dummyData}
//           previewStyle="vertical"
//           height="600px"
//           // initialEditType="markdown"
//           initialEditType="wysiwyg"
//           useCommandShortcut={true}
//         />
//       </div>
//     </>
//   );
// };

// export default ContentEditor;