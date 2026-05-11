import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, Terminal, X } from 'lucide-react';
import { navItems } from '../data/navigation.js';
import { profile } from '../data/profile.js';

export function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const location = useLocation();

  function closeNav() {
    setNavOpen(false);
  }

  const navClassName = navOpen
    ? 'absolute left-4 right-4 top-[74px] flex flex-col items-stretch gap-2 border-2 border-black bg-white/95 p-3 shadow-[8px_8px_0_#000] backdrop-blur min-[941px]:static min-[941px]:flex min-[941px]:flex-row min-[941px]:items-center min-[941px]:border-0 min-[941px]:bg-transparent min-[941px]:p-0 min-[941px]:shadow-none min-[941px]:backdrop-blur-0'
    : 'hidden absolute left-4 right-4 top-[74px] flex-col items-stretch gap-2 border-2 border-black bg-white/95 p-3 shadow-[8px_8px_0_#000] backdrop-blur min-[941px]:static min-[941px]:flex min-[941px]:flex-row min-[941px]:items-center min-[941px]:border-0 min-[941px]:bg-transparent min-[941px]:p-0 min-[941px]:shadow-none min-[941px]:backdrop-blur-0';

  return (
    <header className="sticky top-0 z-20 flex min-h-[76px] items-center justify-between gap-5 border-b-2 border-black bg-white/90 px-[clamp(16px,5vw,64px)] py-4 backdrop-blur">
      <NavLink className="inline-flex items-center justify-center gap-2.5 font-black lowercase" to="/" aria-label={`${profile.name} home`} onClick={closeNav}>
        <Terminal size={22} aria-hidden="true" />
        <span>{profile.handle}</span>
      </NavLink>
      <button
        className="inline-flex h-[42px] w-[42px] items-center justify-center border-2 border-black bg-white text-black shadow-[4px_4px_0_#22d3ee] min-[941px]:hidden"
        onClick={() => setNavOpen((open) => !open)}
        aria-expanded={navOpen}
        aria-controls="site-navigation"
        aria-label="Toggle navigation"
        type="button"
      >
        {navOpen ? <X size={21} aria-hidden="true" /> : <Menu size={21} aria-hidden="true" />}
      </button>
      <nav id="site-navigation" className={navClassName} aria-label="Main navigation">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isCurrentPage = location.pathname === item.path;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                [
                  'inline-flex min-h-10 items-center justify-start gap-2 border-2 px-3 text-[13px] font-extrabold min-[941px]:justify-center',
                  isActive ? 'border-black bg-black text-white shadow-[4px_4px_0_#22d3ee]' : 'border-transparent hover:border-black hover:bg-black hover:text-white'
                ].join(' ')
              }
              aria-current={isCurrentPage ? 'page' : undefined}
              onClick={closeNav}
            >
              <Icon size={16} aria-hidden="true" />
              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </nav>
    </header>
  );
}
