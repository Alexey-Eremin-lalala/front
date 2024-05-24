'use client';
import { CardsListSection } from "../components/CardsListSection/CardsListSection";
import { useGetDataByCategory } from "../api/api-hooks"
import { endpoints } from "../api/config"
import { Preloader } from "../components/Preloader/Preloader"

export default function New() {
    const popularGames = useGetDataByCategory(endpoints.games, 'popular')
    return (
        <main className='main'>
            {popularGames ? (<CardsListSection data={popularGames} id='popular' title='Популярные' />)
            : (<Preloader />)}
        </main>
    )
}