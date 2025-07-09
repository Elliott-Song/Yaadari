import clsx from 'clsx'
import React from 'react'
import Image from 'next/image'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
}

export const Logo = (props: Props) => {
  const { loading: loadingFromProps, priority: priorityFromProps, className } = props

  const loading = loadingFromProps || 'lazy'
  const priority = priorityFromProps || 'low'

  return (
    /* eslint-disable @next/next/no-img-element */
    <Image
      alt="YAADARI Logo"
      width={4800}
      height={2700}
      loading={loading}
      fetchPriority={priority}
      decoding="async"
      className={clsx('h-full w-auto object-contain', className)}
      src="/YAADARI.png"
    />
  )
}
