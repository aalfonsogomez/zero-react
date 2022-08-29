import { useState, useEffect} from 'react';
import * as API from './services/launches.jsx';
import logo from './assets/spaceX-logo.png';

export function App() {
    const [launches, setLaunches ] = useState([]);
    useEffect( () => {
        API.getAllLaunches().then(setLaunches);
    }, []);

    return (
        <>
            <img src={logo} width={300} />
            <h1>SpaceX Launches</h1>
            <ul>
                { launches.map(launch => (
                    <li key={launch.flight_number }>
                        {launch.mission_name} ({launch.launch_year})
                    </li>
                ))}
            </ul>
        </>
    )
}

