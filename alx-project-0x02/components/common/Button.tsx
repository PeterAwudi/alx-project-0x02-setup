import type { ButtonProps } from '../interfaces';
import { Button as ChakraButton } from '@chakra-ui/react';
import type { ButtonProps } from '@/interfaces';

const Button: React.FC<ButtonProps> = ({ size, shape, children, onClick }) => {
  return (
    <ChakraButton size={size} borderRadius={shape} onClick={onClick}>
      {children}
    </ChakraButton>
  );
};

export default Button;

