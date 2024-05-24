'use client';
import { useGetDataByCategory } from "../api/api-hooks";
import { endpoints } from "../api/config"
import { CardsListSection } from "../components/CardsListSection/CardsListSection";
import { Preloader } from "../components/Preloader/Preloader";

export default function New() {
    const ShooterGames = useGetDataByCategory(endpoints.games, 'shooter')
    return (
        <main className='main'>
            {ShooterGames ? (<CardsListSection data={ShooterGames} id='shooter' title='Шутеры' />) : (<Preloader />)}
        </main>
    )
}