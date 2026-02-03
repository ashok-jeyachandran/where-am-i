import { render } from '@testing-library/react';

import OrgFeatureCricket from './feature-cricket';

describe('OrgFeatureCricket', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<OrgFeatureCricket />);
    expect(baseElement).toBeTruthy();
  });
});
