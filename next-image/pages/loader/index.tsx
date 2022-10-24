import { NextPage } from 'next';
import Image, { ImageLoader } from 'next/image';

import PNG_100_100 from '../../public/test/png/100x100.png';
import PNG_500_500 from '../../public/test/png/500x500.png';
import PNG_1000_1000 from '../../public/test/png/1000x1000.png';
import PNG_2000_2000 from '../../public/test/png/2000x2000.png';
import PNG_4000_4000 from '../../public/test/png/4000x4000.png';

const customLoader: ImageLoader = ({ src, width, quality }) => {
    console.log(src, width, quality);
    return `http://localhost:3000/${src}?w=${width}&q=${quality ?? 75}`;
};

const Loader: NextPage = () => {
    return (
        <>
            <h2>Custom Loader</h2>
            <Image loader={customLoader} src={PNG_4000_4000} width={500} height={500} layout={'fixed'} alt="" />
        </>
    );
};

export default Loader;
