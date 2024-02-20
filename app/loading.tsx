import { Skeleton } from"@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="">
    <h1 className="flex justify-center my-10 text-xl md:text-5xl text-white">TMDB API</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 m-20">

    {Array.from({length: 12}, (_, i) => i + 1).map((id) => (
      <div key={id} className="text-white">
      
        <div className="aspect-square relative rounded-md bg-gray-600 border border-orange-500">
            <Skeleton className="object-cover" />
        </div>
        <div className="flex flex-col justify-center mt-3 mb-10">
              <Skeleton className="h-6 my-2 w-1/2 bg-gray-500 rounded-md border border-orange-500"></Skeleton>
              <Skeleton className="h-6 my-2 w-1/2 bg-gray-500 rounded-md border border-orange-500"></Skeleton>
              <Skeleton className="h-6 my-2 w-1/2 bg-gray-500 rounded-md border border-orange-500"></Skeleton>
              <Skeleton className="h-6 my-2 w-1/2 bg-gray-500 rounded-md border border-orange-500"></Skeleton>
              <Skeleton className="h-6 my-2 w-1/2 bg-gray-500 rounded-md border border-orange-500"></Skeleton>
              <Skeleton className="h-6 my-2 w-1/2 bg-gray-500 rounded-md border border-orange-500"></Skeleton>
            </div>
      </div>
    ))}
    </div>
  </div>
  )
}
