import './App.scss';
import Main from './components/Main';
import Maths from './components/Math';
import SEO from './SEO';
import { useState } from 'react';
const App = () => {
    const [click, setClick] = useState(0);
    return (
        <div className="App" style={{ width: '100%', margin: '0px auto' }}>
            <SEO
                title="割り勘計算機"
                description="割り勘計算サイト"
                keywords="割り勘 計算 無料 わりかん けいさん"
                // eslint-disable-next-line no-restricted-globals
                siteUrl={location.href}
                siteName="割り勘"
            />
            <header onClick={() => (click ? setClick(0) : setClick(1))}>
                <h1>{click ? 'なんか色々できる隠し機能' : '割り勘計算機'}</h1>
            </header>
            <main>{click ? <Maths /> : <Main />}</main>
            <footer>
                <div>
                    <a href="https://twitter.com/manyuta06" style={{ padding: '20px' }}>
                        <i className="fab fa-twitter fa-2x white"></i>
                    </a>
                    <a href="https://github.com/riya81" style={{ padding: '20px' }}>
                        <i className="fab fa-github fa-2x white"></i>
                    </a>
                </div>
            </footer>
        </div>
    );
};

export default App;
