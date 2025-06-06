import Ads from '@components/Ads';
import Layout from '@components/Layout';
import gameData from 'data/gameData';
import { useRouter } from 'next/router'
import React, { Fragment } from 'react'


function WeaponsDetails() {
    const router = useRouter()
    const { item } = router.query;

    const data = gameData.weapons.find((weapon) => weapon.name === item)
    function goToWeaponsDetails(name, img, type) {
        router.push({
            pathname: `/tools/characters/${name}`,
            query: { item: name, category: type, url: img },
        })
    }
    return (
        <Layout>

            <div className="flex flex-col gap-5 mx-auto h-max ls:w-[360px] pt-[100px] pb-10">
                <div className='pb-10'>
                    <Ads
                        data-ad-slot="3391625680"
                        data-ad-format="auto"
                        data-full-width-responsive="true" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    {data?.subItems?.map((weapon) => (
                        <div key={weapon.id} className="flex cursor-pointer justify-center relative" onClick={() => goToWeaponsDetails(weapon.name, weapon.url, "weapons")}>
                            <div className="h-28 w-full bg-transparent relative z-20">
                                <img
                                    className="h-full w-full object-contain bg-transparent"
                                    src={weapon.url}
                                    alt={weapon.name}
                                />
                            </div>

                            <div className="z-10 absolute left-0 bottom-0 border border-white/50 bg-white/15 backdrop-blur-[6px] w-full h-[95px] rounded-2xl overflow-hidden"></div>

                            <div className="border border-t-0 border-white/50 rounded-b-2xl z-30 absolute w-full bottom-0 left-0 py-1 text-center text-white text-base leading-5 tracking-[0.64px] uppercase font-normal bg-type-name">
                                {weapon.name}
                            </div>
                        </div>
                    ))}
                </div>


            </div>
        </Layout>

    )
}

export default WeaponsDetails
