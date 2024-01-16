import React from 'react';

interface MultiLineTextProps {
  text: string;
}

const MultiLineText: React.FC<MultiLineTextProps> = ({ text }) => {
  const lines = text.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));

  return <p>{lines}</p>;
};

export default MultiLineText;
