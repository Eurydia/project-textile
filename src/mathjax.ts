export async function typesetMath(root?: HTMLElement | null) {
  const w = window as any
  const MJ = w.MathJax
  if (!MJ) return

  await MJ.startup.promise // wait until MathJax is ready
  await MJ.typesetPromise(root ? [root] : undefined)
}
