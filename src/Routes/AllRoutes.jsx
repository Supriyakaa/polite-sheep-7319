import React from 'react';
import { Routes, Route } from 'react-router-dom'
import HomePage from '../Pages/Home_Page';
import SearchPage from '../Pages/SearchPage';
import SingleMovie from '../Pages/SingleMovie';



const AllRoutes = () => {

    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/search' element={<SearchPage/>} />
            <Route path='/SingleMovie/:id' element={<SingleMovie/>}></Route>
        </Routes>

    );
    
}

export default AllRoutes;
