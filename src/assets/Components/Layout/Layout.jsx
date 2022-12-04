import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { children } from 'react';
import Article from '../Article/Article';
import Navbar from '../Navbar/Navbar';
import './Layout.scss'



export default function Layout({ children }) {
    return (
        <>
            <Header />
            <main>
                <Navbar />
                <div className="container medium ">
                    <Article />
                    {children}
                </div>
            </main>

            <Footer />

        </>
    )
}
