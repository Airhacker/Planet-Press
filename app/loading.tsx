import { Skeleton } from "../@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="flex flex-col w-full h-full gap-4 text-black">
      {Array.from({ length: 12 }, (_, i) => i + 1).map((id) => (
        <div key={id} className="p-4 bg-black">
          <Skeleton className="w-12 h-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      ))}
    </div>
  );
}
