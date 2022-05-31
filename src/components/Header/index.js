import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { Content } from './styles';

export default function Header() {
  return (
    <>
      <Content>
        <a href="/">
          {' '}
          <AiFillHome />
        </a>
      </Content>
    </>
  );
}
