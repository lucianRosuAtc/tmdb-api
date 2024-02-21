import { Skeleton } from"@/components/ui/skeleton"

export default function Loading() {
  return (
<div className="">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 px-4">

    {Array.from({length: 12}, (_, i) => i + 1).map((id) => (
      <div key={id}>
      
        <div className="h-[450px] w-[300px] relative rounded-md bg-gray-600 border border-orange-500 mx-auto">
          
            <Skeleton className="object-cover"/>
        </div>
        <div className="flex flex-col justify-center items-center md:items-start mt-3 mb-10">
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



