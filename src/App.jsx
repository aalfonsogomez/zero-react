import logo from './assets/spaceX-logo.png';
import { Routes, Route, Link } from 'react-router-dom';
import { Image } from '@chakra-ui/react';
import { LaunchList } from './components/LaunchList.jsx';
import { LaunchDetails } from './components/LaunchDetails';

export function App() {
    return (
        <>
            <Image m={4} src={logo} width={300} />
            <Routes>
                <Route path="/" element={<LaunchList />} />
                <Route path="launch/:launchId" element={<LaunchDetails />} />
            </Routes>
        </>
    )
}

