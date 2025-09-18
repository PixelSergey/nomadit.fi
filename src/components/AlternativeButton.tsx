import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

const alternativeButtonVariants = cva(
  "relative inline-flex items-center justify-center text-sm font-medium transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 overflow-hidden group",
  {
    variants: {
      variant: {
        nav: "bg-transparent border border-border hover:border-neon-green text-foreground hover:text-neon-green hover:shadow-[0_0_15px_hsl(var(--neon-green)/0.3)] transform hover:scale-105 hover:rotate-1 transition-all duration-300",
        skull: "bg-gradient-to-r from-muted to-secondary border border-neon-red hover:border-neon-green text-foreground hover:text-neon-green hover:animate-glitch transform hover:scale-110 hover:shadow-[0_0_20px_hsl(var(--neon-green)/0.5)]",
        hero: "bg-gradient-to-r from-neon-green/20 to-neon-red/20 border-2 border-neon-green hover:border-neon-red text-neon-green hover:text-neon-red hover:animate-neon-pulse transform hover:scale-105"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "nav",
      size: "default",
    },
  }
);

export interface AlternativeButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof alternativeButtonVariants> {}

const AlternativeButton = forwardRef<HTMLButtonElement, AlternativeButtonProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <button
        className={cn(alternativeButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        <span className="relative z-10">{children}</span>
        <div className="absolute inset-0 bg-gradient-to-r from-neon-green/10 to-neon-red/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </button>
    );
  }
);

AlternativeButton.displayName = "AlternativeButton";

export { AlternativeButton, alternativeButtonVariants };