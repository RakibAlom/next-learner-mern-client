import React from 'react';

const FAQ = () => {
  return (
    <div className='shadow p-4 p-lg-5'>
      <h1 className='text-center mb-4 fw-bold'>Frequently Asked Questions (FAQ)</h1>
      <hr />
      <div>
        <h4>1. What is JSX?</h4>
        <p>JSX is a syntax extension of JavaScript. It is used with React to describe what the user interface should look like. By using JSX, we can write HTML structures in the same file that contains JavaScript code.</p>
        <h4>2. Can web browsers read JSX directly? </h4>
        <ul>
          <li>Web browsers cannot read JSX directly. This is because they are built to only read regular JS objects and JSX is not a regular JavaScript object</li>
          <li>For a web browser to read a JSX file, the file needs to be transformed into a regular JavaScript object. For this, we use Babel</li>
        </ul>
        <h4>3. What is the virtual DOM?</h4>
        <p>DOM stands for Document Object Model. The DOM represents an HTML document with a logical tree structure. Each branch of the tree ends in a node, and each node contains objects.</p>
        <img className='img-fluid' src="https://www.simplilearn.com/ice9/free_resources_article_thumb/virtualdom.JPG" alt="" />
        <p>React keeps a lightweight representation of the real DOM in the memory, and that is known as the virtual DOM. When the state of an object changes, the virtual DOM changes only that object in the real DOM, rather than updating all the objects. The following are some of the most frequently asked react interview questions.</p>
        <h4>4. How do you create a React app?</h4>
        <p>Install NodeJS on the computer because we need npm to install the React library. Npm is the node package manager that contains many JavaScript libraries, including React.</p>
        <img className='img-fluid' src="https://www.simplilearn.com/ice9/free_resources_article_thumb/node-js.JPG" alt="" />
        <p>Install the create-react-app package using the command prompt or terminal.</p>
        <p>Install a text editor of your choice, like VS Code or Sublime Text.</p>
      </div>
    </div>
  );
};

export default FAQ;