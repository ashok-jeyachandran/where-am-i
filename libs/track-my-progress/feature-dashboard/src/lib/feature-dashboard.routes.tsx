import { RouteObject } from 'react-router-dom';
import OrgFeatureDashboard from './feature-dashboard';

export const dashboardRoutes: RouteObject[] = [
    {
        path: 'dashboard',
        element: < OrgFeatureDashboard/>,
        children: [

        ]
    }
]