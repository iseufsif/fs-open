import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react"

const Hello = (props: { name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; age: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined }) => {
  console.log(props)
  return (
    <div>
      <p>Hello {props.name}, your are {props.age} y/o.</p>
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      greeting app created by <a href='https://github.com/mluukkai'>mluukkai</a>
    </div>
  )
}

const App = () => {
  const friends = [ 'Peter', 'Maya']

  return (
    <div>
      <p>{friends}</p>
    </div>
  )
}

export default App