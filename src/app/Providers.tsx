"use client"

import React from 'react'
import { ThemeProvider } from 'next-themes'

export default function Providers({children}:any) {
  return (
    <ThemeProvider>
      {children}
      </ThemeProvider>
  )
}
