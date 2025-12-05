import { useEffect } from 'react'

export const useInjectScripts = (
  items: { src?: string; children?: string }[],
) => {
  useEffect(() => {
    const els: HTMLElement[] = []
    for (const script of items) {
      const el = document.createElement('script')
      if (script.src) {
        el.setAttribute('src', script.src)
      }
      if (script.children) {
        el.innerText = script.children
      }
      document.body.appendChild(el)
    }
    return () => {
      for (const el of els) {
        document.body.removeChild(el)
      }
    }
  }, [items])
}
