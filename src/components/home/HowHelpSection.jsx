
import mobileFramePic from "@/asset/mobile-frame.png";
import mobilePic from "@/asset/mobile.png";
import OptimizedVideo from "@/components/OptimizedVideo";
import Image from "next/image";


export default function HowHelpSection (){
    return(
        <section className="">
                  <div className="mx-auto kiddo-container">
                    <h2 className="text-center text-5xl xl:text-6xl font-extrabold leading-[46px] tracking-[-0.018em] xl:leading-[63px] xl:tracking-[-0.018em] py-24 xl:py-64">
                      See How Kiddo Can Help <span className="align-[-2px]">⚡</span>
                    </h2>
        
                    <div className="space-y-24 xl:space-y-64 mb-40 xl:mb-64">
                      {/* 1) Scheduled Time Blocks */}
                      <div className="grid items-center gap-12 md:grid-cols-2">
                        <div className="md:order-2">
                          <span className="inline-flex items-center rounded-full bg-[#F5F5F5] px-4 py-2 text-base font-semibold tracking-wide text-kiddo-muted">
                            Smart Scheduling
                          </span>
                          <h3 className="my-4 text-3xl md:text-5xl font-bold leading-[46px] tracking-[-0.018em] xl:leading-[63px] xl:tracking-[-0.018em]">
                            Scheduled Time Blocks
                          </h3>
                          <p className="text-kiddo-muted max-w-prose text-xl">
                            Block distracting apps during school, homework, or family time. Automatic enforcement - no manual monitoring needed.
                          </p>
                        </div>
        
                         <OptimizedVideo
                            srcWebm="/media/blocked1.webm"
                            poster={mobilePic}
                            width={640}
                          height={480}
                            className="w-full h-auto object-contain motion-reduce:hidden"
                          />
                        <Image
                          src={mobilePic}
                          alt="Scheduled Time Blocks"
                          width={640}
                          height={480}
                          className="w-full h-auto object-contain hidden motion-reduce:block"
                          priority={false}
                        />
                      </div>
        
                      {/* 2) Time Limit / Bank */}
                      <div className="grid items-center gap-12 md:grid-cols-2">
                        <div>
                          <span className="inline-flex items-center rounded-full bg-[#F5F5F5] px-4 py-2 text-base font-semibold tracking-wide text-kiddo-muted">
                            Smart Scheduling
                          </span>
                          <h3 className="my-4 text-4xl md:text-5xl font-bold leading-[46px] tracking-[-0.018em] xl:leading-[63px] xl:tracking-[-0.018em]">
                            Time Limit / Bank
                          </h3>
                          <p className="text-kiddo-muted max-w-prose text-xl">
                            Block distracting apps during school, homework, or family time. Automatic enforcement - no manual monitoring needed.
                          </p>
                        </div>
        
                         <OptimizedVideo
                            srcWebm="/media/blocked2.webm"
                            poster={mobilePic}
                            width={640}
                          height={480}
                            className="w-full h-auto object-contain motion-reduce:hidden"
                          />
            
                        <Image
                          src={mobilePic}
                          alt="Time Limit / Bank"
                          width={640}
                          height={480}
                          className="w-full h-auto object-contain hidden motion-reduce:block"
                          priority={false}
                        />
        
                        
                      </div>
        
                      {/* 3) Distraction Alerts — centered variant */}
                      <div className="space-y-6 md:space-y-8 mt-58 mb-24 lg:mt-0 lg:mb-0">
                        <div className="text-center mb-12">
                          <span className="inline-flex items-center rounded-full bg-[#F5F5F5] px-4 py-2 text-base font-semibold tracking-wide text-kiddo-muted">
                            Smart Scheduling
                          </span>
                          <h3 className="my-4 text-4xl md:text-5xl font-bold leading-[46px] tracking-[-0.018em] xl:leading-[63px] xl:tracking-[-0.018em]">
                            Distraction Alerts
                          </h3>
                          <p className=" text-kiddo-muted max-w-[667px] mx-auto text-xl">
                        Block distracting apps during school, homework, or family time. Automatic enforcement - no manual monitoring needed.
                          </p>
                        </div>
        
                        {/* image card */}
                        <div className="mx-auto overflow-hidden">
            
                           <OptimizedVideo
                            srcWebm="/media/notification.webm"
                            poster={mobileFramePic}
                              width={903}
                              height={507}
                            className="h-full w-full xl:w-[903px] justify-self-center motion-reduce:hidden"
                          />
            
                          <Image
                              src={mobileFramePic}      
                              alt="Distraction Alerts preview"
                              width={903}
                              height={507}
                              className="justify-self-center hidden motion-reduce:block"
                              priority={false}
                            />
                        </div>
                      </div>
        
                    </div>
                  </div>
                </section>
    );
}