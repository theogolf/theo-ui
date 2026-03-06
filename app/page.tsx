import { ArrowUpRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <main className="relative min-h-svh overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,oklch(0.92_0.04_95),transparent_40%),radial-gradient(circle_at_80%_15%,oklch(0.93_0.03_150),transparent_38%),linear-gradient(to_bottom,transparent,oklch(0.94_0.01_95/0.35))]" />
      <div className="relative mx-auto flex min-h-svh w-full max-w-5xl flex-col px-6 py-8 sm:px-10 sm:py-12">
        <header className="flex items-center justify-between border-b border-border/70 pb-5">
          <p className="font-display text-2xl tracking-[0.08em] text-foreground/95 uppercase">
            Theo
          </p>
        </header>

        <section className="mx-auto flex w-full max-w-3xl flex-1 flex-col justify-center py-14 sm:py-16">
          <p className="mb-5 text-xs tracking-[0.22em] text-muted-foreground uppercase">
            Crafted for the golf & personalized products aesthetic
          </p>
          <h1 className="font-display text-5xl leading-[0.95] text-balance text-foreground sm:text-7xl">
            Personalized products that stand out.
          </h1>
          <p className="mt-7 max-w-2xl text-pretty text-base leading-relaxed text-foreground/75 sm:text-lg">
            Theo is a premium Etsy storefront offering refined,
            golf-inspired & personalized products designed with a minimalist point of view.
            Every release is intentional, elevated, and made to feel timeless.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button asChild size="lg" className="px-5">
              <a
                href="https://www.etsy.com/shop/theogolfstudio"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Etsy Store
                <ArrowUpRight className="size-4" />
              </a>
            </Button>
          </div>
        </section>

        <footer className="border-t border-border/70 pt-5">
          <p className="text-xs tracking-[0.15em] text-muted-foreground uppercase">
            Theo LLC, 2020
          </p>
        </footer>
      </div>
    </main>
  )
}
