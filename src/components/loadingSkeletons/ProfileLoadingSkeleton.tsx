import { Skeleton } from "@nextui-org/skeleton";

export default function ProfileLoadingSkeleton() {
  return (
    <div className="flex flex-col items-center m-auto gap-3 max-w-[500px]">
      <Skeleton className="rouded-lg">
        <div className="w-[100px] h-[100px] rounded-full"></div>
      </Skeleton>
      <Skeleton className="rouded-lg">
        <div className="w-[500px] h-[113px] rounded-full"></div>
      </Skeleton>
      <Skeleton className="rouded-lg">
        <div className="w-[500px] h-[226px] rounded-full"></div>
      </Skeleton>
    </div>
  );
}
