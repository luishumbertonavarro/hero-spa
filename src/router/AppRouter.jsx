import { Route, Routes } from "react-router-dom"

import { Navbar } from '../ui'
import { HeroesRoutes } from '../heroes';
import { LoginPage } from '../auth';

export const AppRouter = () => {
    return (
        <>
            <Routes>

                <Route path="login" element={<LoginPage />} />
                <Route path="/*" element={<HeroesRoutes />} />

            </Routes>
        </>
    )
}
