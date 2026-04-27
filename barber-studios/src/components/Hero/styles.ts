export const HeroStyle = {
  section:     'bg-textured min-h-screen flex items-center justify-center relative overflow-hidden pt-20',
  inner:       'max-w-7xl mx-auto px-6 py-24 text-center',
  divider:     'w-16 h-px bg-amber-400 mx-auto mb-8 animate-fade-up delay-1',
  label:       'text-xs text-amber-400 font-medium tracking-widest uppercase mb-6 animate-fade-up delay-1',
  title:       'text-7xl md:text-9xl font-bold text-white font-display leading-none mb-6 animate-fade-up delay-2',
  subtitle:    'text-xl md:text-2xl text-zinc-400 font-light tracking-wide mb-4 animate-fade-up delay-3',
  description: 'text-zinc-500 text-base max-w-xl mx-auto mb-10 leading-relaxed animate-fade-up delay-3',
  actions:     'flex flex-col sm:flex-row gap-4 justify-center animate-fade-up delay-4',
  btnPrimary:  'px-8 py-4 bg-amber-400 text-zinc-950 text-sm font-semibold uppercase tracking-widest hover:bg-amber-300 transition-colors duration-300 cursor-pointer',
  btnOutline:  'px-8 py-4 border border-amber-400 text-amber-400 text-sm font-semibold uppercase tracking-widest hover:bg-amber-400 hover:text-zinc-950 transition-all duration-300 cursor-pointer',
  scrollHint:  'absolute bottom-8 left-1/2 -translate-x-1/2 text-zinc-600 text-xs uppercase tracking-widest flex flex-col items-center gap-2',
  scrollBar:   'w-px h-10 bg-gradient-to-b from-amber-400/60 to-transparent',
}
