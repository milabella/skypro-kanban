import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
@keyframes card-animation {
  0% {
    height: 0;
    opacity: 0;
  }

  100% {
    height: auto;
    opacity: 1;
  }
}

* {
    margin: 0;
  padding: 0;
  box-sizing: border-box;
}

*::before, *::after {
    box-sizing: border-box;
}

ul li {
  list-style: none;
}

html,
body {
  width: 100%;
  height: 100%;
  font-family: "Roboto", Arial, Helvetica, sans-serif;
  color: #000000;
}

._dark {
  display: none;
}

._light {
  display: block;
}

._active-category {
  opacity: 1 !important;
}

@media screen and (max-width: 1200px) {
  .main__block {
    width: 100%;
    margin: 0 auto;
    padding: 40px 0 64px;
  }

  .main__content {
    display: block;
  }
}
`
