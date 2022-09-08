import * as React from "react"

const HtmlSVG = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} {...props}>
    <path fill="#e7a42b" d="M8 5h34l-4 34-13 4-14-4z" />
    <path fill="#f2bf22" d="m38.63 8-3.38 28.71L25 39.86V8z" />
    <path
      fill="#faf9f8"
      d="m25 21 1 2-1 2h-9.21l.85-13H25l1 2-1 2h-3.97l-.33 5z"
    />
    <path
      fill="#ebebeb"
      d="m24.9 32.57.1-.03L26 35l-1 1.72-.06.02-8.33-2.38-.56-6.36h4.02l.28 3.27z"
    />
    <path
      fill="#fff"
      d="M34.07 21 32.5 34.42l-7.5 2.3v-4.18l3.83-1.18.74-6.36H25v-4zM34.92 18h-3.99l-.26-2H25v-4h9.13l.17 1.26z"
    />
  </svg>
)

export default HtmlSVG
