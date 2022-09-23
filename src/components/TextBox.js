import { useState } from 'react';
import styled from 'styled-components';
import {
  AiOutlineAlignCenter,
  AiOutlineAlignLeft,
  AiOutlineAlignRight,
} from 'react-icons/ai';

const TextBoxContainer = styled.div`
  position: relative;
  width: 90%;
  height: 6rem;
  border-radius: 0.5rem;
  display: inline-block;
`;

const TextBoxText = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border: 1px solid transparent;
  font-size: 5rem;
  text-align: left;
  border-radius: 0.5rem;
  resize: none;
  &:focus {
    outline: none;
    background-color: lightgray;
  }
  :empty:before {
    content: attr(placeholder);
    opacity: 0.5;
  }
`;

const AlignContainer = styled.div`
  position: absolute;
  width: 90px;
  height: 30px;
  top: -32px;
  right: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Align = styled.div`
  position: relative;
  width: 30px;
  height: 100%;
  border: 1px solid black;
  border-radius: 5px;
  cursor: pointer;
`;

const TextBox = ({ color, pHolder }) => {
  const [isAlignVisible, setIsAlignVisible] = useState(false);
  const [textAlign, setTextAlign] = useState('left');

  const handleFocus = (state) => {
    setIsAlignVisible(state);
  };

  const handleMouse = (e, align) => {
    e.preventDefault();
    setTextAlign(align);
  };

  return (
    <TextBoxContainer>
      <TextBoxText
        contentEditable={true}
        placeholder={pHolder}
        spellCheck={false}
        style={{ textAlign: textAlign, color: color }}
        onFocus={() => handleFocus(true)}
        onBlur={() => handleFocus(false)}
      />
      {isAlignVisible && (
        <AlignContainer>
          <Align onMouseDown={(e) => handleMouse(e, 'left')}>
            <AiOutlineAlignLeft size={30} />
          </Align>
          <Align onMouseDown={(e) => handleMouse(e, 'center')}>
            <AiOutlineAlignCenter size={30} />
          </Align>
          <Align onMouseDown={(e) => handleMouse(e, 'right')}>
            <AiOutlineAlignRight size={30} />
          </Align>
        </AlignContainer>
      )}
    </TextBoxContainer>
  );
};

export default TextBox;
