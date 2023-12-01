#!/bin/bash

# Read component name
read -p "Enter component name (in kebab-case, snake_case, or single word): " rawName

# Convert to PascalCase (Single word or multiple words)
pascalCaseName=$(echo "$rawName" | sed -r 's/(^|_|-)(\w)/\U\2/g' | sed -r 's/(_|-)//g')

# Check if the input was a single lowercase word
if [[ $rawName =~ ^[a-z]+$ ]]; then
    pascalCaseName=$(echo "${rawName:0:1}" | tr '[:lower:]' '[:upper:]')${rawName:1}
fi

# Convert component name to camelCase for the CSS class
camelCaseName=$(echo "${pascalCaseName:0:1}" | tr '[:upper:]' '[:lower:]')${pascalCaseName:1}

# Create directory structure
mkdir -p "./$camelCaseName/img" "./$camelCaseName/css"

# Create the TSX file with the specified content
cat <<EOF >"./$camelCaseName/$pascalCaseName.tsx"
import React from 'react';
import styles from './css/$pascalCaseName.module.scss';

const $pascalCaseName = () => {
  return <div className={styles.$camelCaseName}></div>;
};

export default $pascalCaseName;
EOF

# Create an empty SCSS module file
touch "./$camelCaseName/css/$pascalCaseName.module.scss"

echo "Component $pascalCaseName created successfully."

