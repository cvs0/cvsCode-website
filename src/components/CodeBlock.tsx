import React, { useState } from 'react';

interface CodeBlockProps {
  children: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ children }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(children);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="bg-gray-200 p-4 rounded-lg mt-4 dark:bg-customDark" style={{ borderTop: '2px solid #ccc', paddingTop: '24px', position: 'relative' }}>
      <button
        style={{
          position: 'absolute',
          top: '8px',
          right: '8px',
          backgroundColor: '#ccc',
          border: 'none',
          padding: '4px 8px',
          borderRadius: '4px',
          fontSize: '12px',
          cursor: 'pointer',
        }}
        onClick={handleCopy}
      >
        {isCopied ? 'Copied!' : 'Copy'}
      </button>
      <pre className="whitespace-pre-wrap">{children}</pre>
    </div>
  );
};

export default CodeBlock;
