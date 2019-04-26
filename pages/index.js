
const MyContext = React.createContext();

function Home() {

    return <MyContext.Provider value={{ x: "123" }}>
        <MyContext.Consumer>
            {value => "123 expected: " + value.x}
        </MyContext.Consumer>
    </MyContext.Provider>
}

export default Home;