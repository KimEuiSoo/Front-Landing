import React from "react";
import { Route, Routes } from 'react-router-dom';
import Main from "./main/Main";

export const AppRouter = () => {
    return(
        <div>
            <Routes>
                <Route path="/" element={<Main/>}/>
            </Routes>
        </div>
    )
}