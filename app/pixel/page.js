'use client';
import { useGetDataByCategory } from "../api/api-hooks"
import { CardsListSection } from "../components/CardsListSection/CardsListSection";
import { endpoints } from "../api/config"
import { Preloader } from "../components/Preloader/Preloader"

export default function New() {
    const PixelGames = useGetDataByCategory(endpoints.games, 'pixel')
    return (
        <main className='main'>
            {PixelGames ? (<CardsListSection data={PixelGames} id='pixel' title='Пиксельные' />)
                : (
                    <Preloader />
                )}
        </main>
    )
}