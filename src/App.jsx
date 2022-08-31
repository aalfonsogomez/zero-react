import { useState, useEffect} from 'react';
import { Heading, Box, Image, Flex, Spacer, Text, Tag } from '@chakra-ui/react';
import * as API from './services/launches.jsx';
import logo from './assets/spaceX-logo.png';
import{ HiCalendar } from 'react-icons/hi';

export function App() {
    const [launches, setLaunches ] = useState([]);
    useEffect( () => {
        API.getAllLaunches().then(setLaunches);
    }, []);

    return (
        <>
            <Image m={4} src={logo} width={300} />
            <Heading as="h1" size="lg" m={4}>
                SpaceX Launches
            </Heading>
            <section>
                { launches.map(launch => (
                    <Box key={launch.flight_number }
                        bg="gray.200"
                        p={4}
                        m={4}
                        borderRadius="lg">
                            <Flex display="flex">
                                <Text fontSize="2x1">
                                    Mission <strong>{launch.mission_name}</strong> ({launch.launch_year})
                                </Text>
                                <Spacer />
                                <Tag p={4} colorScheme={launch.launch_success ? "green" : "red"}>
                                    {launch.launch_success ? "Success" : "Failure"}
                                </Tag>
                            </Flex>
                            <Flex>
                                <HiCalendar />
                                <Text fontSize="sm" ml={1}>
                                    {launch.launch_date_local.split("T")[0]}
                                </Text>
                            </Flex>
                    </Box>
                ))}
            </section>
        </>
    )
}

