// MyComponent.tsx
import React from 'react';
import Image from 'next/image';
import styles from './serviceCardholder.module.scss'; // Import your Sass module

interface MyComponentProps {
  text: string;
}

const ServiceCardholder: React.FC<MyComponentProps> = ({ text}) => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default ServiceCardholder;
