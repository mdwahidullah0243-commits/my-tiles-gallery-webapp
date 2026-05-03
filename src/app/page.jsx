import Banner from '@/components/home/Banner';
import FeaturedTiles from '@/components/home/FeaturedTiles';
import MarqueeContent from '@/components/home/MarqueeContent';
import Marquee from 'react-fast-marquee';

const Home = () => {
    return (
        <div>
            <Banner />

            <div className='bg-red-100 space-x-8 py-3 px-5 flex items-center '>
                <button className='btn text-white bg-[#89c401] text-xl font-medium'>Latest</button>
                
                <Marquee pauseOnHover={true} speed={100}>
                    <MarqueeContent />
                </Marquee>
            </div>

            <FeaturedTiles />
        </div>
    );
};

export default Home;