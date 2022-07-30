import { useRoutes } from 'react-router-dom'

import { RouterPath } from '@app/router/router-path'

import { Default } from '@app/pages/default'
import { LiquidityPools } from '@app/pages/liquidity-pools'
import { FarmingPools } from '@app/pages/farming-pools'
import { StakingPools } from '@app/pages/staking-pools'

import type { ReactElement } from 'react'

export const Routes = (): ReactElement | null => {
  return useRoutes([
    {
      path: RouterPath.DEFAULT,
      element: <Default />
    },
    {
      path: RouterPath.LIQUIDITY_POOLS,
      element: <LiquidityPools />
    },
    {
      path: RouterPath.FARMING_POOLS,
      element: <FarmingPools />
    },
    {
      path: RouterPath.STAKING_POOLS,
      element: <StakingPools />
    }
  ])
}
