import { typesetMath } from '@/mathjax'
import { useEffect } from 'react'

export const useTypesetOnLoad = () => {
  useEffect(() => {
    ;(async () => {
      await typesetMath()
    })()
  }, [])
}
