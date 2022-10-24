import { NextPage } from 'next';
import Image, { ImageLoader } from 'next/image';

import PNG_100_100 from '../../public/test/png/100x100.png';
import PNG_500_500 from '../../public/test/png/500x500.png';
import PNG_1000_1000 from '../../public/test/png/1000x1000.png';
import PNG_2000_2000 from '../../public/test/png/2000x2000.png';
import PNG_4000_4000 from '../../public/test/png/4000x4000.png';

const Sizes: NextPage = () => {
    return (
        <>
            <h2>Sizes</h2>
            <div className="wrap">
                <Image src={PNG_4000_4000} layout={'responsive'} width={50} height={50} sizes="(min-width: 1000px) 400px, (min-width: 500px) 200px, 50px" alt="" />
            </div>
            <style jsx>{`
                img {
                    width: 100%;
                }
                .wrap {
                    width: 50px;
                }
                @media (min-width: 500px) {
                    .wrap {
                        width: 200px;
                    }
                }
                @media (min-width: 1000px) {
                    .wrap {
                        width: 400px;
                    }
                }
            `}</style>
        </>
    );
};

export default Sizes;
