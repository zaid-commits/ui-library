import React, { createContext, useContext, useState } from 'react';
import { cn } from '../../lib/utils';

type DropdownMenuContextType = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const DropdownMenuContext = createContext<DropdownMenuContextType | undefined>(undefined);

export const DropdownMenu: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownMenuContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </DropdownMenuContext.Provider>
  );
};

export const DropdownMenuTrigger: React.FC<{ children: React.ReactNode; asChild?: boolean }> = ({
  children,
  asChild = false,
}) => {
  const context = useContext(DropdownMenuContext);
  if (!context) throw new Error('DropdownMenuTrigger must be used within a DropdownMenu');

  const { isOpen, setIsOpen } = context;

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  if (asChild) {
    return React.cloneElement(children as React.ReactElement, {
      onClick: handleClick,
      'aria-expanded': isOpen,
      'aria-haspopup': true,
    });
  }

  return (
    <button onClick={handleClick} aria-expanded={isOpen} aria-haspopup={true}>
      {children}
    </button>
  );
};

export const DropdownMenuContent: React.FC<{
  children: React.ReactNode;
  align?: 'start' | 'end' | 'center';
}> = ({ children, align = 'center' }) => {
  const context = useContext(DropdownMenuContext);
  if (!context) throw new Error('DropdownMenuContent must be used within a DropdownMenu');

  const { isOpen } = context;

  if (!isOpen) return null;

  return (
    <div
      className={cn(
        'absolute z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md',
        {
          'left-0': align === 'start',
          'left-1/2 -translate-x-1/2': align === 'center',
          'right-0': align === 'end',
        }
      )}
    >
      {children}
    </div>
  );
};

export const DropdownMenuItem: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & { inset?: boolean }
> = ({ className, inset, ...props }) => (
  <button
    className={cn(
      'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      inset && 'pl-8',
      className
    )}
    {...props}
  />
);

