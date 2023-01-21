import styled from 'styled-components/native';


interface TextProps {
  weight?: 'Bold' | 'Medium' | 'Regular' ;
  color?: string;
  size?: number;
  opacity?: number;
  font?: 'Imbue' | 'Poppins';
}

export const Text = styled.Text<TextProps>`
  font-family: ${({ weight, font }) => weight ? `${font}-${weight}` : 'Poppins-Regular'};
  color: ${({ color }) => color || '#fff'};
  font-size: ${({ size }) => size ? `${size}px` : '16px'};
  opacity: ${({ opacity }) => opacity || 1};
`;
