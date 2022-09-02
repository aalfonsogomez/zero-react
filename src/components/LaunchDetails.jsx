import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as API from '../services/launches.jsx';
import { Box, Flex, Text, Spacer, Tag, Button } from '@chakra-ui/react';


export function LaunchDetails() {
    const [launch, setLaunch] = useState({});

    const { launchId } = useParams();

    useEffect(() => {
        API.getLaunchByFlightNumber(launchId)
            .then(res => setLaunch(res))
            .catch(err => console.log(err));
    }, [launchId]);

    return (
        <Box
            bg="gray.200"
            p={4}
            m={4}
            borderRadius="lg">
            <Flex display="flex">
                <Text fontSize="2x1">
                    Mission <strong>{launch.mission_name}</strong> ({launch.launch_year})
                </Text>
                <Spacer />
                <Tag p={2} colorScheme={launch.launch_success ? "green" : "red"}>
                    {launch.launch_success ? "Success" : "Failure"}
                </Tag>
            </Flex>
            <Box>
                Rocket: {launch.rocket?.rocket_name}
            </Box>
        </Box>
    )
};
