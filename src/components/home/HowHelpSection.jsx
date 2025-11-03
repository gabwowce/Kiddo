"use client";
import mobileFramePic from "@/asset/mobile-frame.png";
import mobilePic from "@/asset/mobile.png";
import OptimizedVideo from "@/components/OptimizedVideo";
import Lottie from "lottie-react";
import Image from "next/image";

import clickAnim from "@/asset/Hand Click.json";
import adminAnim from "@/asset/computer-guy.json";

export default function HowHelpSection (){
    return(
        <section className="">
                  <div className="mx-auto kiddo-container">
                    <div className="flex flex-col gap-4 justify-center items-center py-24 xl:py-64 u-stagger">
                       <h2 className="u-reveal  text-4xl md:text-5xl font-bold max-w-[520px] xl:max-w-6xl text-center leading-[46px] tracking-[-0.018em] xl:leading-[63px] xl:tracking-[-0.018em]">
                        Kaip tai veikia
                        </h2>
                        <p className="u-reveal  text-kiddo-muted text-center leading-7 tracking-[-0.003em] text-lg md:text-xl">
                          Ramybė klasėje prasideda jau dabar
                        </p>
            
                    </div>
                    
                    <div className="space-y-24 xl:space-y-64 mb-40 xl:mb-64">
                      {/* 1) Scheduled Time Blocks */}
                      <div className="grid items-center gap-12 md:grid-cols-2 u-stagger">
                        <div className="md:order-2  u-stagger">
                          <span className="u-reveal inline-flex items-center  rounded-full bg-[#F5F5F5] px-4 py-2 text-base font-semibold tracking-[0.03em] text-kiddo-muted">
                            1. Mokykla nustato taisykles
                          </span>
                          <h3 className="u-reveal my-4 text-3xl md:text-5xl font-bold leading-[46px] tracking-[-0.018em] xl:leading-[63px] xl:tracking-[-0.018em]">
                           Susikonfigūruokite taisykles patys!
                          </h3>
                          <p className="u-reveal text-kiddo-muted max-w-prose text-xl">
                            Mokyklos administracija arba mokytojas nustato leidžiamų programėlių rinkinį pamokų metu (pvz. skambučiai, SMS, galerija, e. dienynas) ir nustato zonas/laiko periodus – pamokos, pertraukos, po pamokų. Taip taisyklės prisitaiko prie skirtingų klasių ir mokinių, o nereikalingos programėlės lieka užrakintos.
                          </p>
                        </div>
                         <div className="u-reveal w-full max-w-[600px] h-[500px]">
                          <Lottie animationData={adminAnim} loop autoplay />
                        </div>
        
                       
                        <Image
                          src={mobilePic}
                          alt="Scheduled Time Blocks"
                          width={640}
                          height={480}
                          className="u-reveal w-full h-auto object-contain hidden motion-reduce:block"
                          priority={false}
                        />
                      </div>
        
                      {/* 2) Time Limit / Bank */}
                      <div className="grid items-center gap-12 md:grid-cols-2 u-stagge">
                        <div className="u-stagger">
                          <span className="u-reveal inline-flex items-center rounded-full bg-[#F5F5F5] px-4 py-2 text-base font-semibold tracking-[0.03em] text-kiddo-muted">
                            2. Programėlė aktyvuojasi automatiškai
                          </span>
                          <h3 className="u-reveal my-4 text-4xl md:text-5xl font-bold leading-[46px] tracking-[-0.018em] xl:leading-[63px] xl:tracking-[-0.018em]">
                            Sistema veikia be rankinio įsikišimo
                          </h3>
                          <p className="u-reveal text-kiddo-muted max-w-prose text-xl">
                           Mokytojo sukonfigūruotos taisyklės automatiškai taikomos per apibrėžtus laikotarpius ir nutraukiamos jiems pasibaigus.
                          </p>
                        </div>
        
                         <OptimizedVideo
                            srcWebm="/media/blocked2.webm"
                            poster={mobilePic}
                            width={640}
                          height={480}
                            className="u-reveal w-full h-auto object-contain motion-reduce:hidden"
                          />
            
                        <Image
                          src={mobilePic}
                          alt="Time Limit / Bank"
                          width={640}
                          height={480}
                          className="u-reveal w-full h-auto object-contain hidden motion-reduce:block"
                          priority={false}
                        />
        
                        
                      </div>
        
                      {/* 3) Distraction Alerts — centered variant */}
                      <div className="space-y-6 md:space-y-8 mt-58 mb-24 lg:mt-0 lg:mb-0 u-stagger">
                        <div className="text-center mb-12 u-stagger">
                          <span className="u-reveal inline-flex items-center rounded-full bg-[#F5F5F5] px-4 py-2 text-base font-semibold tracking-[0.03em] text-kiddo-muted">
                          3. Mokytojo valdymas čia ir dabar
                          </span>
                          <h3 className="u-reveal my-4 text-4xl md:text-5xl font-bold leading-[46px] tracking-[-0.018em] xl:leading-[63px] xl:tracking-[-0.018em]">
                            Vienas mygtukas – visai klasei
                          </h3>
                          <p className="u-reveal text-kiddo-muted max-w-[667px] mx-auto text-xl">
                        Mokytojas gali akimirksniu įjungti/išjungti režimą arba padaryti „10 minučių langą“. Visi pakeitimai akimirksniu pasiekia mokinių telefonus — tiek Android, tiek iOS
                          </p>
                        </div>
        
                        {/* image card */}
                        <div className="mx-auto overflow-hidden u-stagger">
  <div className="u-reveal mx-auto w-full max-w-[500px]">
    <Lottie animationData={clickAnim} loop autoplay />
  </div>
        
                          
            
                          {/* <OptimizedVideo
                            srcWebm="/media/notification.webm"
                            poster={mobileFramePic}
                              width={903}
                              height={507}
                            className="u-reveal h-full w-full xl:w-[903px] justify-self-center motion-reduce:hidden"
                          /> */}
            
                          <Image
                              src={mobileFramePic}      
                              alt="Distraction Alerts preview"
                              width={903}
                              height={507}
                              className="u-reveal justify-self-center hidden motion-reduce:block"
                              priority={false}
                            />
                        </div>
                      </div>
        
                    </div>
                  </div>
                </section>
    );
}