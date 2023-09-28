"use client";

import { cn, month, shuffle } from "@/lib/utils";
import React from "react";
import { RequestType } from "../../types";
import { Card, CardContent, CardTitle } from "./ui/card";
import Image from "next/image";
import {
  CommentIcon,
  LocationOnIcon,
  ScheduleIcon,
  StarFilledIcon,
} from "./icons";
import { Button } from "./ui/button";
import Link from "next/link";

interface RequestsContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  requests: RequestType[];
}

// const RequestsContainer = React.forwardRef<
//   HTMLDivElement,
//   RequestsContainerProps
// >(async ({ className, ...props }, forwardRef) => {
//   const shuffledRequests = shuffle(props.requests);

//   return (
//     <>
//       <div
//         ref={forwardRef}
//         className={cn(
//           "mx-4 md:mx-0 mt-6 sm:columns-2 gap-6 md:hidden",
//           className
//         )}
//         {...props}
//       >
//         {props.requests.map((request, index) => {
//           const date = new Date(request.created_at);
//           return (
//             <Link href={`/request/${request.id}`} key={request.id}>
//               <Card
//                 variant="request"
//                 className={cn("w-full h-fit break-inside-avoid mb-6")}
//               >
//                 <CardContent>
//                   {request.image_url && (
//                     <Image
//                       width={358}
//                       height={344}
//                       alt={request.title}
//                       src={`https://${request.image_url}`}
//                       className="rounded-t-lg w-full h-auto"
//                     />
//                   )}

//                   <CardTitle
//                     className={cn(
//                       "mb-4 mx-3 text-center font-roboto font-semibold text-lg text-[#18212D]",
//                       !request.image_url && "pt-4"
//                     )}
//                   >
//                     {request.title}
//                   </CardTitle>

//                   <hr className="mt-3 mb-5 border-t border-[#EDECF0] border-r-4 bg-none mx-[2px]" />

//                   <div className="w-full px-3">
//                     <div className="flex justify-between items-center">
//                       <div className="flex items-center gap-4">
//                         <div className="flex justify-center items-center gap-1">
//                           <CommentIcon />
//                           <span className="font-roboto font-normal text-sm text-black">
//                             {request.num_of_responses}
//                           </span>
//                         </div>

//                         <div className="flex justify-center items-center gap-1">
//                           <ScheduleIcon />
//                           <span className="font-roboto font-normal text-xs text-[#5E5D7F]">
//                             {date.getDate()} {month(date.getMonth())}
//                           </span>
//                         </div>

//                         <div className="flex justify-center items-center gap-1">
//                           <LocationOnIcon />
//                           <span className="font-roboto font-normal text-xs text-[#5E5D7F]">
//                             {date.getDate()} {month(date.getMonth())}
//                           </span>
//                         </div>
//                       </div>

//                       <StarFilledIcon />
//                     </div>

//                     <Button
//                       variant="request_card_outlined"
//                       className="mt-5 mb-3"
//                     >
//                       Respond to Request
//                     </Button>
//                   </div>
//                 </CardContent>
//               </Card>
//             </Link>
//           );
//         })}
//       </div>

//       <div
//         ref={forwardRef}
//         className={cn(
//           "mx-4 md:mx-0 mt-6 md:columns-2 gap-6 hidden md:block",
//           className
//         )}
//         {...props}
//       >
//         {shuffledRequests.map((request, index) => {
//           const date = new Date(request.created_at);

//           return (
//             <Link href={`/request/${request.id}`} key={request.id}>
//               <Card
//                 variant="request"
//                 className={cn(
//                   "w-full h-fit break-inside-avoid mb-6",
//                   index % 2 ? "even" : "odd"
//                 )}
//                 key={request.id}
//               >
//                 <CardContent>
//                   {request.image_url && (
//                     <Image
//                       width={358}
//                       height={344}
//                       alt={request.title}
//                       src={`https://${request.image_url}`}
//                       className="rounded-t-lg w-full h-auto"
//                     />
//                   )}

//                   <CardTitle
//                     className={cn(
//                       "mb-4 mx-3 text-center font-roboto font-semibold text-lg text-[#18212D]",
//                       !request.image_url && "pt-4"
//                     )}
//                   >
//                     {request.title}
//                   </CardTitle>

//                   <hr className="mt-3 mb-5 border-t border-[#EDECF0] border-r-4 bg-none mx-[2px]" />

//                   <div className="w-full px-3">
//                     <div className="flex justify-between items-center">
//                       <div className="flex items-center gap-4">
//                         <div className="flex justify-center items-center gap-1">
//                           <CommentIcon />
//                           <span className="font-roboto font-normal text-sm text-black">
//                             {request.num_of_responses}
//                           </span>
//                         </div>

//                         <div className="flex justify-center items-center gap-1">
//                           <ScheduleIcon />
//                           <span className="font-roboto font-normal text-xs text-[#5E5D7F]">
//                             {date.getDate()} {month(date.getMonth())}
//                           </span>
//                         </div>

//                         <div className="flex justify-center items-center gap-1">
//                           <LocationOnIcon />
//                           <span className="font-roboto font-normal text-xs text-[#5E5D7F]">
//                             {date.getDate()} {month(date.getMonth())}
//                           </span>
//                         </div>
//                       </div>

//                       <StarFilledIcon />
//                     </div>

//                     <Button
//                       variant="request_card_outlined"
//                       className="mt-5 mb-3"
//                     >
//                       Respond to Request
//                     </Button>
//                   </div>
//                 </CardContent>
//               </Card>
//             </Link>
//           );
//         })}
//       </div>
//     </>
//   );
// });

// RequestsContainer.displayName = "RequestsContainer";

// export default RequestsContainer;

export default async function RequestsContainer({
  className,
  ...props
}: RequestsContainerProps) {
  const shuffledRequests = shuffle(props.requests);

  return (
    <>
      <div
        className={cn(
          "mx-4 md:mx-0 mt-6 sm:columns-2 gap-6 md:hidden",
          className
        )}
        {...props}
      >
        {props.requests.map((request, index) => {
          const date = new Date(request.created_at);
          return (
            <Link href={`/request/${request.id}`} key={request.id}>
              <Card
                variant="request"
                className={cn("w-full h-fit break-inside-avoid mb-6")}
              >
                <CardContent>
                  {request.image_url && (
                    <Image
                      width={358}
                      height={344}
                      alt={request.title}
                      src={`https://${request.image_url}`}
                      className="rounded-t-lg w-full h-auto"
                    />
                  )}

                  <CardTitle
                    className={cn(
                      "mb-4 mx-3 text-center font-roboto font-semibold text-lg text-[#18212D]",
                      !request.image_url && "pt-4"
                    )}
                  >
                    {request.title}
                  </CardTitle>

                  <hr className="mt-3 mb-5 border-t border-[#EDECF0] border-r-4 bg-none mx-[2px]" />

                  <div className="w-full px-3">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-4">
                        <div className="flex justify-center items-center gap-1">
                          <CommentIcon />
                          <span className="font-roboto font-normal text-sm text-black">
                            {request.num_of_responses}
                          </span>
                        </div>

                        <div className="flex justify-center items-center gap-1">
                          <ScheduleIcon />
                          <span className="font-roboto font-normal text-xs text-[#5E5D7F]">
                            {date.getDate()} {month(date.getMonth())}
                          </span>
                        </div>

                        <div className="flex justify-center items-center gap-1">
                          <LocationOnIcon />
                          <span className="font-roboto font-normal text-xs text-[#5E5D7F]">
                            {date.getDate()} {month(date.getMonth())}
                          </span>
                        </div>
                      </div>

                      <StarFilledIcon />
                    </div>

                    <Button
                      variant="request_card_outlined"
                      className="mt-5 mb-3"
                    >
                      Respond to Request
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>

      <div
        className={cn(
          "mx-4 md:mx-0 mt-6 md:columns-2 gap-6 hidden md:block",
          className
        )}
        {...props}
      >
        {shuffledRequests.map((request, index) => {
          const date = new Date(request.created_at);

          return (
            <Link href={`/request/${request.id}`} key={request.id}>
              <Card
                variant="request"
                className={cn(
                  "w-full h-fit break-inside-avoid mb-6",
                  index % 2 ? "even" : "odd"
                )}
                key={request.id}
              >
                <CardContent>
                  {request.image_url && (
                    <Image
                      width={358}
                      height={344}
                      alt={request.title}
                      src={`https://${request.image_url}`}
                      className="rounded-t-lg w-full h-auto"
                    />
                  )}

                  <CardTitle
                    className={cn(
                      "mb-4 mx-3 text-center font-roboto font-semibold text-lg text-[#18212D]",
                      !request.image_url && "pt-4"
                    )}
                  >
                    {request.title}
                  </CardTitle>

                  <hr className="mt-3 mb-5 border-t border-[#EDECF0] border-r-4 bg-none mx-[2px]" />

                  <div className="w-full px-3">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-4">
                        <div className="flex justify-center items-center gap-1">
                          <CommentIcon />
                          <span className="font-roboto font-normal text-sm text-black">
                            {request.num_of_responses}
                          </span>
                        </div>

                        <div className="flex justify-center items-center gap-1">
                          <ScheduleIcon />
                          <span className="font-roboto font-normal text-xs text-[#5E5D7F]">
                            {date.getDate()} {month(date.getMonth())}
                          </span>
                        </div>

                        <div className="flex justify-center items-center gap-1">
                          <LocationOnIcon />
                          <span className="font-roboto font-normal text-xs text-[#5E5D7F]">
                            {date.getDate()} {month(date.getMonth())}
                          </span>
                        </div>
                      </div>

                      <StarFilledIcon />
                    </div>

                    <Button
                      variant="request_card_outlined"
                      className="mt-5 mb-3"
                    >
                      Respond to Request
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </>
  );
}
