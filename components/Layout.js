import Nav from './Nav'

export default function Layout({ children }) {
    return (
        <>
            <header>
                <Nav />
            </header>
            <main>{children}</main>
            <footer>footer @2022</footer>
        </>
    )
}
