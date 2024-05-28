import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ScrollToTop } from './ui/ScrollToTop';

describe('ScrollToTop', () => {
  it('scrolls to top when pathname changes', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/']} initialIndex={0}>
        <ScrollToTop />
      </MemoryRouter>
    );
    expect(window.scrollY).toBe(0);
    fireEvent.click(container.querySelector('button')!);
    expect(window.scrollTo).toHaveBeenCalledWith(0, 0);
  });
});
