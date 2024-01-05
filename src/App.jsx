import React from 'react';
import CustomEditor from './CustomEditor';

let dummyData = `
# Title: FileStack Picker Tutorial
## Summary: 
This tutorial provides step-by-step instructions on how to set up and use the FileStack picker in less than 3 minutes. It covers creating an HTML file, adding a button to open the picker, integrating the FileStack script, and implementing the necessary JavaScript code. The tutorial also demonstrates how to upload files from various sources and manage them in the developer portal.

## Transcript:
Welcome to FileStack, my name is Rodrigo and together we'll get the FileStack picker running in less than 3 minutes. Please feel free to pause the video to check out the code at your own pace.

We'll start with a simple HTML file. Now let's add a button to open the picker, and our FileStack script. We'll now add the controller for this HTML page.

With our page done, let's move to JavaScript. We'll start with a listener that runs the script once the document loads. com. With our API key in place, let's create a constant to initialize the FileStack object, and another one to initialize our picker. Let's just call our previous constant and use the picker function.

Now let's create a constant for our button and add its listener. To finish, we'll call the open function so the button opens the picker window.

Let's open our page in Chrome. When we click the open button, it shows the picker window. We can now upload files from Links, Web Search, Facebook, Instagram, or Google Drive. Let's upload a sample file. I just select it and click on Upload.

Once uploaded, we can easily find the files in our developer portal clicking on Content Browser. In here we can download the file or copy its handle, which is used to identify any file.

Thanks for using FileStack. Please feel free to contact us if you have any questions. Have a great day!

## Additional Info:
### Main Points:
- Setting up an HTML file for the FileStack picker
- Adding a button and the FileStack script to the HTML file
- Implementing the JavaScript code for initializing the FileStack object and picker
- Adding a listener to the button and calling the open function
- Uploading files from various sources and managing them in the developer portal

### Stories, Examples, and Citations:
- The tutorial provides step-by-step instructions and code snippets for each stage of the setup process.
- It demonstrates how to upload a sample file and access it in the developer portal.

### Potential Action Items:
- Follow the tutorial to set up the FileStack picker in your own project.
- Customize the HTML file and button to fit your application's design.
- Explore the FileStack API documentation for additional features and options.

### Follow-Up Questions:
- How can I customize the appearance of the FileStack picker?
- Can I restrict the types of files that can be uploaded?
- Are there any limitations on file size or storage capacity?

### Arguments and Areas for Improvement:
- The tutorial assumes prior knowledge of HTML, JavaScript, and web development concepts.
- It would be helpful to include troubleshooting tips for common issues that may arise during the setup process.

### Related Topics:
- FileStack API
- File uploading and management
- Web development frameworks

### Sentiments: Neutral
`;

const App = () => {

  return (
    <div>
      {/* <ContentEditor dummyData={dummyData} /> */}
      <CustomEditor />
    </div>
  );
};

export default App;