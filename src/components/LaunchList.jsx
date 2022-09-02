import { useState, useEffect } from 'react';
import * as API from '../services/launches.jsx';
import { Heading } from '@chakra-ui/react';
import { LaunchItem } from '../components/LaunchItem.jsx';

export function LaunchList() {
    const [launches, setLaunches] = useState([]);
    useEffect(() => {
        API.getAllLaunches().then(setLaunches);
    }, []);

    return (
        <>
            <Heading as="h1" size="lg" m={4}>
                SpaceX Launches
            </Heading>
            <section>
                {launches.map(launch => (
                    <LaunchItem key={launch.flight_number} {...launch} />
                ))}
            </section>
        </>
    )
}





