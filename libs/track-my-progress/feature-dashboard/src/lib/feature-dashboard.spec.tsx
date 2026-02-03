import { render } from '@testing-library/react';

import OrgFeatureDashboard from './feature-dashboard';

describe('OrgFeatureDashboard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<OrgFeatureDashboard />);
    expect(baseElement).toBeTruthy();
  });
});
