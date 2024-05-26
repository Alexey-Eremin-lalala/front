'use client';
import { useGetDataByCategory } from "../api/api-hooks"
import { CardsListSection } from "../components/CardsListSection/CardsListSection";
import { endpoints } from "../api/config"
import { Preloader } from "../components/Preloader/Preloader";
export default function New() {
    const TDSGames = useGetDataByCategory(endpoints.games, 'tds')
    return (
        <main className='main-inner'>
            {TDSGames ? (<CardsListSection data={TDSGames} id='tds' title='TDS' />) : (<Preloader />)}
        </main>
    )
    
}