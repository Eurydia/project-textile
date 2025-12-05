export async function typesetMath() {
  await (window.MathJax as any).typesetPromise()
}
