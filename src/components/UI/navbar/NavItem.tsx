'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import cn from 'clsx'

import type { IMenuItem } from './menu.interface'

interface INavItem {
  item: IMenuItem
}

const NavItem = ({ item }: INavItem) => {
  const pathname = usePathname()

  return (
    <div>
      <Link
        href={item.link}
        className={cn(
          'text-base font-medium transition duration-100 hover:text-violet-600',
          pathname === item.link ? 'text-violet-600' : 'text-gray-600'
        )}
      >
        {item.name}
      </Link>
    </div>
  )
}

export default NavItem
