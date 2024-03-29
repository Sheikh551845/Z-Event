import React from 'react'

export default function TeamCard() {
    
  // const {image,name,position, email}=member
  return (
    
    <div className="mx-auto">
      {/* <div className="relative flex w-80 flex-col rounded-xl bg-transparent  text-gray-700 shadow-md border-white border-solid border-2">
  <div className="relative mx-4 mt-4 h-80 overflow-hidden rounded-xl bg-transparent text-gray-700 shadow-lg">
    <img src={image} alt="profile-picture" />
  </div>
  <div className="p-6 text-center">
    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-white antialiased">
     {name}
    </h4>
    <p className="block  font-sans text-white font-medium leading-relaxed text-transparent antialiased">
      {position}
    </p>
  </div>
  
</div> */}
<div className="container flex justify-center mx-auto pt-16">
                    <div>
                        <p className="text-gray-500 dark:text-gray-200 text-lg text-center font-normal pb-3">BUILDING TEAM</p>
                        <h1 className="xl:text-4xl text-3xl text-center text-gray-800 dark:text-white font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">The Talented People Behind the Scenes of the Organization</h1>
                    </div>
                </div>
                <div className="w-full bg-gray-100 dark:bg-gray-800 px-10 pt-10">
                    <div className="container mx-auto">
                        <div role="list" aria-label="Behind the scenes People " className="flex items-center justify-center flex-wrap gap-4 ">
                            <div role="listitem" className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                                <div className="rounded overflow-hidden shadow-md bg-white dark:bg-gray-900">
                                    <div className="absolute -mt-20 w-full flex justify-center">
                                        <div className="h-32 w-32">
                                            <img src="https://i.ibb.co/mXj3NcD/CEO.jpg" alt="Display Picture of Andres Berlin" role="img" className="rounded-full object-cover h-full w-full shadow-md" />
                                        </div>
                                    </div>
                                    <div className="px-6 mt-16">
                                        <h1 className="font-bold dark:text-white text-3xl text-center mb-1">ZIA</h1>
                                        <p className="text-gray-800 dark:text-white text-sm text-center">Chief Executive Officer</p>
                                        <p className="text-center text-gray-600 dark:text-gray-200 text-base pt-3 font-normal">The CEO's role in raising a company's corporate IQ is to establish an atmosphere that promotes knowledge sharing and collaboration.</p>
                                        <div className="w-full flex justify-center pt-5 pb-5">
                                            <a href="javascript:void(0)" className="mx-5">
                                                <div aria-label="Github" role="img">
                                                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg1.svg" alt="github" />
                                                </div>
                                            </a>
                                            <a href="javascript:void(0)" className="mx-5">
                                                <div aria-label="Twitter" role="img">
                                                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg2.svg" alt="twitter" />
                                                </div>
                                            </a>
                                            <a href="javascript:void(0)" className="mx-5">
                                                <div aria-label="Instagram" role="img">
                                                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg3.svg" alt="instagram" />
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div role="listitem" className="xl:w-1/3 lg:mx-3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                                <div className="rounded overflow-hidden shadow-md bg-white dark:bg-gray-900">
                                    <div className="absolute -mt-20 w-full flex justify-center">
                                        <div className="h-32 w-32">
                                            <img src="https://i.ibb.co/5KxHr5X/jhankar.jpg" alt="Display Picture of Silene Tokyo" role="img" className="rounded-full object-cover h-full w-full shadow-md" />
                                        </div>
                                    </div>
                                    <div className="px-6 mt-16">
                                        <h1 className="font-bold dark:text-white text-3xl text-center mb-1">John Smith Jhanker</h1>
                                        <p className="text-gray-800 dark:text-white text-sm text-center">Product Design Head</p>
                                        <p className="text-center text-gray-600 dark:text-gray-200 text-base pt-3 font-normal">The emphasis on innovation and technology in our companies has resulted in a few of them establishing global benchmarks in product design and development.</p>
                                        <div className="w-full flex justify-center pt-5 pb-5">
                                            <a href="javascript:void(0)" className="mx-5">
                                                <div aria-label="Github" role="img">
                                                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg1.svg" alt="github" />
                                                </div>
                                            </a>
                                            <a href="javascript:void(0)" className="mx-5">
                                                <div aria-label="Twitter" role="img">
                                                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg2.svg" alt="twitter" />
                                                </div>
                                            </a>
                                            <a href="javascript:void(0)" className="mx-5">
                                                <div aria-label="Instagram" role="img">
                                                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg3.svg" alt="instagram" />
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div role="listitem" className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                                <div className="rounded overflow-hidden shadow-md bg-white dark:bg-gray-900">
                                    <div className="absolute -mt-20 w-full flex justify-center">
                                        <div className="h-32 w-32">
                                            <img src="https://i.ibb.co/F4m9ctz/Gias.jpg" alt="Display Picture of Johnson Stone" role="img" className="rounded-full object-cover h-full w-full shadow-md" />
                                        </div>
                                    </div>
                                    <div className="px-6 mt-16">
                                        <h1 className="font-bold dark:text-white text-3xl text-center mb-1">Johnson Gias</h1>
                                        <p className="text-gray-800 dark:text-white text-sm text-center">Manager Development</p>
                                        <p className="text-center text-gray-600 dark:text-gray-200 text-base pt-3 font-normal">Our services encompass the assessment and repair of property damage caused by water, fire, smoke, or mold. We can also be a part of the restoration.</p>
                                        <div className="w-full flex justify-center pt-5 pb-5">
                                            <a href="javascript:void(0)" className="mx-5">
                                                <div aria-label="Github" role="img">
                                                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg1.svg" alt="github" />
                                                </div>
                                            </a>
                                            <a href="javascript:void(0)" className="mx-5">
                                                <div aria-label="Twitter" role="img">
                                                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg2.svg" alt="twitter" />
                                                </div>
                                            </a>
                                            <a href="javascript:void(0)" className="mx-5">
                                                <div aria-label="Instagram" role="img">
                                                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg3.svg" alt="instagram" />
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div role="listitem" className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                                <div className="rounded overflow-hidden shadow-md bg-white dark:bg-gray-900">
                                    <div className="absolute -mt-20 w-full flex justify-center">
                                        <div className="h-32 w-32">
                                            <img src="https://i.ibb.co/n37sBm4/Farhan.jpg" alt="Display Picture of Dean Jones" role="img" className="rounded-full object-cover h-full w-full shadow-md" />
                                        </div>
                                    </div>
                                    <div className="px-6 mt-16">
                                        <h1 className="font-bold dark:text-white text-3xl text-center mb-1">Farhan Jones</h1>
                                        <p className="text-gray-800 dark:text-white text-sm text-center">Entertainment Coordinator</p>
                                        <p className="text-center text-gray-600 dark:text-gray-200 text-base pt-3 font-normal">An avid open-source coordinator who loves to be creative and inventive. I have 20 years of experience in the field.<br/><br/></p>
                                        <div className="w-full flex justify-center pt-5 pb-5">
                                            <a href="javascript:void(0)" className="mx-5">
                                                <div aria-label="Github" role="img">
                                                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg1.svg" alt="github" />
                                                </div>
                                            </a>
                                            <a href="javascript:void(0)" className="mx-5">
                                                <div aria-label="Twitter" role="img">
                                                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg2.svg" alt="twitter" />
                                                </div>
                                            </a>
                                            <a href="javascript:void(0)" className="mx-5">
                                                <div aria-label="Instagram" role="img">
                                                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg3.svg" alt="instagram" />
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div role="listitem" className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                                <div className="rounded overflow-hidden shadow-md bg-white dark:bg-gray-900">
                                    <div className="absolute -mt-20 w-full flex justify-center">
                                        <div className="h-32 w-32">
                                            <img src="https://cdn.tuk.dev/assets/blond-man-happy-expression_1194-2873.jpg" alt="Display Picture of Rachel Adams" role="img" className="rounded-full object-cover h-full w-full shadow-md" />
                                        </div>
                                    </div>
                                    <div className="px-6 mt-16">
                                        <h1 className="font-bold dark:text-white text-3xl text-center mb-1">Rachel Adams</h1>
                                        <p className="text-gray-800 dark:text-white text-sm text-center">Product Design Head</p>
                                        <p className="text-center text-gray-600 dark:text-gray-200 text-base pt-3 font-normal">Product designer with interests in immersive computing and XR, political ventures, and emerging technologies. Able to take ideas and give them a life.</p>
                                        <div className="w-full flex justify-center pt-5 pb-5">
                                            <a href="javascript:void(0)" className="mx-5">
                                                <div aria-label="Github" role="img">
                                                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg1.svg" alt="github" />
                                                </div>
                                            </a>
                                            <a href="javascript:void(0)" className="mx-5">
                                                <div aria-label="Twitter" role="img">
                                                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg2.svg" alt="twitter" />
                                                </div>
                                            </a>
                                            <a href="javascript:void(0)" className="mx-5">
                                                <div aria-label="Instagram" role="img">
                                                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg3.svg" alt="instagram" />
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div role="listitem" className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                                <div className="rounded overflow-hidden shadow-md bg-white dark:bg-gray-900">
                                    <div className="absolute -mt-20 w-full flex justify-center">
                                        <div className="h-32 w-32">
                                            <img src="https://cdn.tuk.dev/assets/photo-1570211776045-af3a51026f4a.jfif" alt="Display Picture of Charles Keith" role="img" className="rounded-full object-cover h-full w-full shadow-md" />
                                        </div>
                                    </div>
                                    <div className="px-6 mt-16">
                                        <h1 className="font-bold dark:text-white text-3xl text-center mb-1">Charles Keith</h1>
                                        <p className="text-gray-800 dark:text-white text-sm text-center">UX Designer</p>
                                        <p className="text-center text-gray-600 dark:text-gray-200 text-base pt-3 font-normal">A UX designer is the voice of the customer. Our job is to look beyond the business goals. We don't just experience user interface but also questions it.</p>
                                        <div className="w-full flex justify-center pt-5 pb-5">
                                            <a href="javascript:void(0)" className="mx-5">
                                                <div aria-label="Github" role="img">
                                                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg1.svg" alt="github" />
                                                </div>
                                            </a>
                                            <a href="javascript:void(0)" className="mx-5">
                                                <div aria-label="Twitter" role="img">
                                                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg2.svg" alt="twitter" />
                                                </div>
                                            </a>
                                            <a href="javascript:void(0)" className="mx-5">
                                                <div aria-label="Instagram" role="img">
                                                   <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg3.svg" alt="instagram" />
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

    </div>
  )
}
