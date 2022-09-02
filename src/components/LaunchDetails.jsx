import { useParams } from 'react-router-dom';


export function LaunchDetails() {
    let params = useParams();
    return <div>Hola {params.launchId}</div>
};
