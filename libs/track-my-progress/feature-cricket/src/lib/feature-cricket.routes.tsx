import { RouteObject } from 'react-router-dom';
import OrgFeatureCricket from './feature-cricket';

export const cricketRoutes: RouteObject[] = [
    {
        path: '/cricket',
        element: <OrgFeatureCricket />,
        children: []
    }
]