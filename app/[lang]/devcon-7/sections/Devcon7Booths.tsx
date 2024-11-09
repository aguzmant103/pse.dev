import Image from "next/image"
import { booths } from "@/data/events/devcon-7"

import { AppContent } from "@/components/ui/app-content"
import { Icons } from "@/components/icons"

export const Devcon7Booths = () => {
  return (
    <AppContent>
      <div className="flex flex-col gap-10 lg:gap-14">
        <h2 className="lg:max-w-[700px] mx-auto font-bold text-black text-lg lg:text-[32px] leading-[110%] font-display text-center px-6">
          {`We're excited to connect and collaborate on building meaningful tools
        with cryptography.`}
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14">
          {booths?.map((booth, index) => {
            return (
              <div
                key={index}
                className="lg:grid lg:grid-cols-[1.5fr_1fr] flex flex-col rounded-lg overflow-hidden border border-[rgba(8, 27, 26, 0.15)]"
              >
                <div className="min-h-[160px] bg-slate-50 relative order-1 lg:order-2 bg-[lightgray 50% / cover no-repeat]">
                  <Image
                    src={booth.image}
                    alt={`booth image ${index + 1}`}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="flex flex-col gap-3 bg-anakiwa-50 p-4 lg:p-7 order-2 lg:order-1">
                  <span className="text-anakiwa-500 text-xs font-sans leading-5 tracking-[2.5px] uppercase font-bold">
                    BOOTH
                  </span>
                  <span className="text-[22px] leading-[24px] text-tuatara-950 font-display font-bold">
                    {booth?.title}
                  </span>
                  <span className="text-xs lg:text-base lg:leading-6 text-tuatara-950 font-sans font-normal">
                    {booth?.description}
                  </span>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-[6px]">
                      <Icons.time className="text-tuatara-500" />
                      <span className="font-sans text-tuatara-500 text-xs lg:text-sm  leading-5 font-normal">
                        {booth?.date}
                      </span>
                    </div>
                    <div className="flex  gap-[6px] items-center">
                      <Icons.eventLocation className="text-tuatara-500" />
                      <span className="font-sans text-tuatara-500 text-xs lg:text-sm leading-5 font-normal">
                        {booth?.location}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </AppContent>
  )
}
