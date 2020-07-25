import React, { SelectHTMLAttributes, useCallback, useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

import { Container, SelectGroup } from './styles';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  data: string[];
}

const Input: React.FC<SelectProps> = ({ label, data, ...rest }) => {
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
      <SelectGroup isFocused={isFocused}>
        <select onFocus={handleInputFocus} onBlur={handleInputBlur} {...rest}>
          {data.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        <div>
          <FiChevronDown size={24} color="#fdfdfd" />
        </div>
      </SelectGroup>
    </Container>
  );
};

export default Input;
