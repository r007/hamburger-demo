# Hamburger Menu Demo (React + Styled-components)

![Hamburger menu](https://user-images.githubusercontent.com/78280/65647099-94ac6200-e00e-11e9-9732-ca29761eb2d5.gif)

There are several components in this app - ```HamburgerButton```, ```MainMenu``` and ```SideMenu```. When user clicks on hamburger button, context state is being updated. This way other components will know menu is open. If user clicks again, context state changes back to ```false```.

Hamburger button has two kinds of visual states: on hover and active. Both states were done manually, using CSS styling only. No SVGs or fonts.

```scss
:hover {
  span:nth-of-type(1) {
    width: 33px;
  }

  span:nth-of-type(2) {
    width: 40px;
  }

  span:nth-of-type(3) {
    width: 30px;
  }
}

&.active {
  span:nth-of-type(1) {
    transform: rotate(45deg) translate(10px, 10px);
    width: 40px;
  }

  span:nth-of-type(2) {
    opacity: 0;
    pointer-events: none;
  }

  span:nth-of-type(3) {
    transform: rotate(-45deg) translate(7px, -7px);
    width: 40px;
  }
}  
```

On hover the top and bottom bars are getting shorter. When button is active, two things are happening: rotation of top and bottom bars (45 degrees) + moving. At the same time the middle bar is fading.

Also, menu tracks outside clicks. If menu is open and user clicked outside the ref, it will be closed. 

```jsx
import { useEffect } from 'react';

const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = event => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, [ref, handler]);
};

export default useOnClickOutside;
```
