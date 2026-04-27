export default function useScroll() {
  function handleScroll(href: string) {
    const target = document.querySelector<HTMLElement>(href)
    target?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  return { handleScroll }
}
