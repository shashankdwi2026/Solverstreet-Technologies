import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <main className="section-pad">
      <div className="container grid gap-5">
        <Skeleton className="h-12 max-w-lg" />
        <Skeleton className="h-6 max-w-2xl" />
        <div className="grid gap-5 md:grid-cols-3">
          <Skeleton className="h-44" />
          <Skeleton className="h-44" />
          <Skeleton className="h-44" />
        </div>
      </div>
    </main>
  );
}
