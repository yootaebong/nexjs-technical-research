import { NextPage } from 'next';
import Image from 'next/image';

import PNG_100_100 from '../../public/test/png/100x100.png';
import PNG_500_500 from '../../public/test/png/500x500.png';
import PNG_1000_1000 from '../../public/test/png/1000x1000.png';
import PNG_2000_2000 from '../../public/test/png/2000x2000.png';
import PNG_4000_4000 from '../../public/test/png/4000x4000.png';

const Layout: NextPage = () => {
    return (
        <>
            <h2>기본형 intrinsic</h2>
            <div style={{ width: '100px', height: '100px' }}>
                <Image src={PNG_500_500} alt="" />
            </div>

            <h2>Fixed</h2>
            <div>
                <Image src={PNG_100_100} layout="fixed" width={250} height={250} alt="" />
                <Image src={PNG_500_500} layout="fixed" width={250} height={250} alt="" />
            </div>

            <h2>Responsive</h2>
            <div style={{ width: '100vw', display: 'block' }}>
                <Image src={PNG_4000_4000} layout="responsive" alt="" />
            </div>

            <h2>Fill</h2>
            <div style={{ width: '250px', height: '300px', position: 'relative' }}>
                <Image src={PNG_500_500} layout="fill" alt="" />
            </div>
        </>
    );
};

export default Layout;
