import { FCC } from 'fcc_typescript';
import { useState } from 'react';
const Maths = () => {
    const [x, setX] = useState(1);
    const [y, setY] = useState(2);
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        switch (e.target.name) {
            case 'x':
                e.target.value !== undefined || e.target.value === 0 ? setX(Number(e.target.value)) : setX(Number(1));
                break;
            case 'y':
                e.target.value !== undefined || e.target.value === 0 ? setY(Number(e.target.value)) : setX(Number(2));
                break;
        }
    };
    const s = (x: number, y: number) => {
        return FCC.Maths.Spec(x, y);
    };
    return (
        <div>
            <div style={{ width: '10rem', margin: '0px auto' }}>
                <p>x</p>
                <input type="text" onChange={onChange} name="x" style={{ width: '10rem', margin: '0px auto' }} />
            </div>
            <div style={{ width: '10rem', margin: '0px auto' }}>
                <p>y</p>
                <input type="text" onChange={onChange} name="y" style={{ width: '10rem', margin: '0px auto' }} />
            </div>
            <div>
                {Number.isNaN(x) || Number.isNaN(y) || x === 0 || y === 0 ? (
                    <p>error</p>
                ) : (
                    (() => {
                        const n = s(x, y);
                        return (
                            <>
                                <p>min{n.min}</p>
                                <p>max{n.max}</p>
                                <p>和{n.sum}</p>
                                <p>差{n.difference}</p>
                                <p>積{n.product}</p>
                                <p>
                                    商{n.quotient.answer},{n.quotient.surplus}
                                </p>
                                <p>最大約数{n.gcd}</p>
                                <p>最小公倍数{n.lcm}</p>
                                <p>xのy乗{n.pow}</p>
                                <p>階上{n.fact}</p>
                            </>
                        );
                    })()
                )}
            </div>
        </div>
    );
};
export default Maths;
