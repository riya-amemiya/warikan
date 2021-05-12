import { FCC } from 'fcc_typescript';
import { useState } from 'react';
const Main = () => {
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
        <>
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
                {Number.isNaN(numberPeople) || Number.isNaN(money) ? (
                    <p>error</p>
                ) : (
                    <>
                        <p>1人あたり{FCC.Maths.quotient(money, numberPeople).answer}</p>
                        <p>余り{FCC.Maths.quotient(money, numberPeople).surplus}</p>
                    </>
                )}
            </div>
        </>
    );
};
export default Main;
