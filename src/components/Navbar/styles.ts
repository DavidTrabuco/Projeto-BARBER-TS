export const NavbarStyle = {
  wrapper:    'fixed top-0 w-full z-50 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800',
  inner:      'max-w-7xl mx-auto px-6 py-4 flex items-center justify-between',
  logo:       'text-xl font-bold tracking-widest text-amber-400 uppercase font-display cursor-pointer select-none',
  nav:        'hidden md:flex items-center gap-8',
  navLink:    'text-zinc-400 text-sm uppercase tracking-wider hover:text-amber-400 transition-colors duration-300 cursor-pointer',
  ctaBtn:     'px-5 py-2 bg-amber-400 text-zinc-950 text-sm font-semibold uppercase tracking-widest hover:bg-amber-300 transition-colors duration-300 cursor-pointer',
  menuBtn:    'md:hidden text-zinc-400 hover:text-amber-400 transition-colors cursor-pointer text-2xl leading-none',
  mobileMenu: 'md:hidden flex flex-col bg-zinc-950 border-t border-zinc-800 px-6 py-4 gap-4',
  mobileLink: 'text-zinc-400 text-sm uppercase tracking-wider hover:text-amber-400 transition-colors duration-300 cursor-pointer py-1',
}
