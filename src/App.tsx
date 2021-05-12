import { FCC } from 'fcc_typescript';
import './App.scss';
import { useState } from 'react';
import SEO from './SEO';
const App = () => {
    const [numberPeople, setNumberPeople] = useState(0);
    const [money, setMoney] = useState(0);
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        switch (e.target.name) {
            case 'money':
                setMoney(Number(e.target.value));
                break;
            case 'Number_of_people':
                setNumberPeople(Number(e.target.value));
                break;
        }
    };
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
            <header>
                <h1>割り勘計算機</h1>
            </header>
            <main>
                <div style={{ width: '10rem', margin: '0px auto' }}>
                    <p>金額</p>
                    <input type="text" onChange={onChange} name="money" style={{ width: '10rem', margin: '0px auto' }} />
                </div>
                <div style={{ width: '10rem', margin: '0px auto' }}>
                    <p>人数</p>
                    <input
                        type="text"
                        onChange={onChange}
                        name="Number_of_people"
                        style={{ width: '10rem', margin: '0px auto' }}
                    />
                </div>
                <div>
                    {Number.isNaN(numberPeople) && Number.isNaN(money) ? (
                        <p>error</p>
                    ) : (
                        <>
                            <p>1人あたり{FCC.Maths.quotient(money, numberPeople).answer}</p>
                            <p>余り{FCC.Maths.quotient(money, numberPeople).surplus}</p>
                        </>
                    )}
                </div>
            </main>
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
