'use client';
import { useGetDataByCategory } from "../api/api-hooks"
import { CardsListSection } from "../components/CardsListSection/CardsListSection";
import { endpoints } from "../api/config"
import { Preloader } from "../components/Preloader/Preloader"


export default function New() {
    const RunnerGames = useGetDataByCategory(endpoints.games,'runner')
    return (
        <main className='main'>
            {RunnerGames ? (<CardsListSection data={RunnerGames} id='runner' title='Раннеры' />) : (<Preloader />)}
        </main>
    )
}