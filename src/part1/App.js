import React from 'react'

const Header = (props) => {
    return (
        <p>Hello! It is now {new Date().toString()}</p>
    )
}

const Hello = (props) => {
    return (
        <p>
            Hello {props.name} you are {props.age}
        </p>
    )
}

const Footer = (props) => {
    return (
        <p>
            This greeting app made by <a href="https://github.com/VixenKasai">VixenKasai</a>
        </p>
    )
}

const App = () => {
    const name = "Peter"
    const age = 35

    return (
        <>
            <Header />
            <Hello name="Maya" age={26} />
            <Hello name={name} age={age} />
            <Footer />
        </>
    )
}

export default App
