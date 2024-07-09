import Link from 'next/link'
import { Button, buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="min-h-[500px] flex flex-col items-center justify-center">
      <div className="text-center space-y-4">
        <h2 className="text-6xl font-bold mb-4 text-radical-600">404</h2>
        <p className="text-lg font-medium text-neutral-500">
          Page is not available right now.
        </p>

        <Link
          className={buttonVariants({ variant: "default" })}
          href={'/'}
        >
          Go to Home
        </Link>
      </div>
    </section>
  );
}
