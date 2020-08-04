import React from 'react';
import { render } from '@testing-library/react';
import MockDate from 'mockdate';
import { parseISO } from '../../../util/date';
import { Countdown } from '..';

describe('countdown', () => {
  test('renders countdown', async () => {
    MockDate.set(parseISO('2025-03-01T09:00:00'));
    const toDate = parseISO('2025-03-25T14:30:00');

    const { container, queryByText } = render(<Countdown to={toDate} />);

    expect(container).toMatchSnapshot();
    expect(queryByText('24')).toBeInTheDocument();
    expect(queryByText('dagar')).toBeInTheDocument();
    expect(queryByText('5')).toBeInTheDocument();
    expect(queryByText('timmar')).toBeInTheDocument();
    expect(queryByText('30')).toBeInTheDocument();
    expect(queryByText('minuter')).toBeInTheDocument();
  });

  test('renders without days', async () => {
    MockDate.set(parseISO('2025-03-25T09:00:00'));
    const toDate = parseISO('2025-03-25T14:30:00');

    const { container, queryByText } = render(<Countdown to={toDate} />);

    expect(container).toMatchSnapshot();
    expect(queryByText('dagar')).toBe(null);
    expect(queryByText('5')).toBeInTheDocument();
    expect(queryByText('timmar')).toBeInTheDocument();
    expect(queryByText('30')).toBeInTheDocument();
    expect(queryByText('minuter')).toBeInTheDocument();
  });

  test('renders without hours', async () => {
    MockDate.set(parseISO('2025-03-25T14:00:00'));
    const toDate = parseISO('2025-03-25T14:30:00');

    const { container, queryByText } = render(<Countdown to={toDate} />);

    expect(container).toMatchSnapshot();
    expect(queryByText('dagar')).toBe(null);
    expect(queryByText('timmar')).toBe(null);
    expect(queryByText('30')).toBeInTheDocument();
    expect(queryByText('minuter')).toBeInTheDocument();
  });
});
