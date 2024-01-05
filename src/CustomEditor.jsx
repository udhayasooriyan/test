import { useLayoutEffect, useRef } from "react";
import ToastUIEditor from "@toast-ui/editor";
import '@toast-ui/editor/dist/toastui-editor.css';


function CustomEditor() {

    const editorContainerRef = useRef(null);

    // Initialize toastUI editor after mount
    useLayoutEffect(() => {
        const editorContainer = editorContainerRef.current;
        let editor = null;

        if (editorContainer) {
            editor = new ToastUIEditor({
                el: editorContainerRef.current,
                height: "100vh",
                initialEditType: "markdown",
                hideModeSwitch: true,
                previewStyle: "vertical",
                initialValue: "asdfasdfaf",
            });
        }

        return () => {
            if (editor) editor.destroy();
        };
    }, []);

    return (
        <div
            id="single-prompt-editor"
            className="flex flex-col h-full bg-white shadow-md rounded-xl"
        >
            <header id="editor-header" className="flex items-center gap-2 px-6 py-4">
                <h1 className="flex-1 text-lg font-medium">Play Ground</h1>
            </header>

            <div
                ref={editorContainerRef}
                id="editor-container"
                className="flex flex-col-reverse flex-1 h-full overflow-y-auto"
            >

            </div>
        </div>
    );
}


export default CustomEditor;