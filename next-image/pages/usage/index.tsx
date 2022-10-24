import { NextPage } from 'next';
import Image from 'next/image';

import PNG_100_100 from '../../public/test/png/100x100.png';
import PNG_500_500 from '../../public/test/png/500x500.png';
import PNG_1000_1000 from '../../public/test/png/1000x1000.png';
import PNG_2000_2000 from '../../public/test/png/2000x2000.png';
import PNG_4000_4000 from '../../public/test/png/4000x4000.png';

//! 사용법 가드
const Usage: NextPage = () => {
    return (
        <>
            {/* //? width ,height */}
            <div>
                <Image src={PNG_100_100} width={100} height={100} alt={''} />
            </div>
            <div>
                <Image src={PNG_100_100} width={'55rem'} height={'55rem'} alt={''} />
            </div>
            <div>
                <Image src={PNG_100_100} width={'65rem6'} height={'65rem'} alt={''} />
            </div>
            {/* //? width , height 없을 때 */}
            <div style={{ width: '100px', height: '100px' }}>
                <Image src={PNG_500_500} alt={''} />
            </div>
            <div style={{ width: '1000px', height: '1000px' }}>
                <Image src={PNG_500_500} alt={''} />
            </div>
        </>
    );
};

export default Usage;
