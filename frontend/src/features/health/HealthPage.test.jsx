import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import HealthPage from './HealthPage'

vi.mock('./useHealth', () => ({
  useHealth: () => ({ data: { status: 'UP' }, isLoading: false, isError: false }),
}))

describe('HealthPage', () => {
  it('shows backend status', () => {
    render(<HealthPage />)
    expect(screen.getByText('UP')).toBeInTheDocument()
  })
})