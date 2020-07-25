import React, { InputHTMLAttributes, useCallback, useState } from 'react';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input: React.FC<InputProps> = ({ label, ...rest }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  return (
    <Container isFocused={isFocused}>
      <span>{label}</span>
      <input
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        {...rest}
        type="text"
      />
    </Container>
  );
};

export default Input;
