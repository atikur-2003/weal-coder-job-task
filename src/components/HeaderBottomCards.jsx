import React from 'react';
import headerBottom1 from '../../dist/images/header-bottom1.png'
import headerBottom2 from '../../dist/images/header-bottom2.png'
import headerBottom3 from '../../dist/images/header-bottom3.png'

const HeaderBottomCards = () => {
    return (
        <div className='hidden lg:grid grid-cols-1 lg:grid-cols-3 gap-7 px-4 md:px-10 lg:px-24 absolute -bottom-48 w-full'>
            <div className='bg-white shadow-md py-5 rounded-xl flex flex-col items-center'>
                <div>
                    <img src={headerBottom1} alt="" />
                </div>
                <div className='text-center mt-3'>
                    <h3 className='text-2xl text-[#282E33] font-semibold mb-2'>property for buy</h3>
                    <p className='text-[#4F575C]'>1500+ variety of property available</p>
                </div>
            </div>
            <div className='bg-white shadow-md py-5  rounded-xl flex flex-col items-center'>
                <div>
                    <img src={headerBottom2} alt="" />
                </div>
                <div className='text-center'>
                    <h3 className='text-2xl text-[#282E33] font-semibold mb-2'>property for Rent</h3>
                    <p className='text-[#4F575C]'>1500+ variety of property available</p>
                </div>
            </div>
            <div className='bg-white shadow-md py-5  rounded-xl flex flex-col items-center'>
                <div>
                    <img src={headerBottom3} alt="" />
                </div>
                <div className='text-center'>
                    <h3 className='text-2xl text-[#282E33] font-semibold mb-2'>property for Sale</h3>
                    <p className='text-[#4F575C]'>1500+ variety of property available</p>
                </div>
            </div>
        </div>
    );
};

export default HeaderBottomCards;