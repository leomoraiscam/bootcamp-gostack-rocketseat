import React from 'react';

function Header({title, children}) {
  return (
    <header>
      {title}
      {children}
    </header>
  )
}

export default Header;