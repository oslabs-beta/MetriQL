import React from 'react';
import Link from 'next/link'
import GithubIcon from './assets/GithubIcon';
import LinkedinIcon from './assets/LinkedinIcon';


const Team = (props) => {
    return (
        <div>
            <div class="relative bg-primary-500 text-gray-100 -mb-8 -mx-8 px-8 py-20 lg:py-24">
                <div class="container flex justify-center mx-auto pt-12">
                    <div>
                        <h5 class="font-bold text-primary-500">Our Team</h5>
                        <h1 class="text-4xl sm:text-5xl font-black tracking-wide text-center">Meet the Team</h1>
                    </div>
                </div>
                <div class = "flex flex-wrap flex-row justify-center sm:max-w-2xl lg:max-w-5xl mx-auto">
                    <div class="mt-24 w-full sm:w-1/2 lg:w-1/3 flex flex-col items-center">
                        <img src="https://media-exp1.licdn.com/dms/image/C4E03AQHw1txEKIYo7w/profile-displayphoto-shrink_200_200/0/1553035247275?e=1652918400&v=beta&t=w4sJfcAwdAmWWVkyz-BG0SF-qBT1_0n4LItgvGJh2jk" alt="Alfonso Zamarripa" width="100" height="100" className="w-64 h-64 bg-contain bg-center rounded"></img>
                        <h1 class="text-lg text-gray-700"> Alfonso Zamarripa </h1>
                        <h3 class="text-sm text-gray-600 "> Software Engineer </h3>
                        <div class="w-full flex justify-center pt-5 pb-5">
                            <Link href='https://github.com/alfonsozam93'>
                                <a target="_blank" class="px-8 tracking-wide"><GithubIcon dark={true}/></a>
                            </Link>
                            <Link href='https://www.linkedin.com/in/alfonso-zamarripa-63120789/'>
                                <a target="_blank" class="px-8 tracking-wide"><LinkedinIcon /></a>
                            </Link>
                        </div>
                    </div>
                    <div class="mt-24 w-full sm:w-1/2 lg:w-1/3 flex flex-col items-center">
                        <img src="https://media-exp1.licdn.com/dms/image/C5603AQHE8N7n8Jr0Xw/profile-displayphoto-shrink_800_800/0/1642965707789?e=1652918400&v=beta&t=ZFhwgZT84clFfE8tiIJ-g0gwY6Kz2zgvUgkhMAw61OY" alt="Diana Li" width="100" height="100" className="w-64 h-64 bg-contain bg-center rounded"></img>
                        <h1 class="text-lg text-gray-700"> Diana Li </h1>
                        <h3 class="text-sm text-gray-600 "> Software Engineer </h3>
                        <div class="w-full flex justify-center pt-5 pb-5">
                            <Link href='https://github.com/deedoodee'>
                                <a target="_blank" class="px-8 tracking-wide"><GithubIcon dark={true}/></a>
                            </Link>                            
                            <Link href='https://www.linkedin.com/in/diana-li-791b96193/'>
                                <a target="_blank" class="px-8 tracking-wide"><LinkedinIcon /></a>
                            </Link>
                        </div>
                    </div>
                    <div class="mt-24 w-full sm:w-1/2 lg:w-1/3 flex flex-col items-center">
                        <img src="https://media-exp1.licdn.com/dms/image/D4D35AQF0Xy2nHoeIlA/profile-framedphoto-shrink_200_200/0/1633641299793?e=1647532800&v=beta&t=YJVVOLxH2FMLtN61Lg8zZIgpH9pTA2CFAlsc-tEO7mg" alt="Eric Rodgers" width="100" height="100" className="w-64 h-64 bg-contain bg-center rounded"></img>
                        <h1 class="text-lg text-gray-700"> Eric Rodgers </h1>
                        <h3 class="text-sm text-gray-600 ">Software Engineer </h3>
                        <div class="w-full flex justify-center pt-5 pb-5">
                            <Link href='https://github.com/ericerodgers'>
                                <a target="_blank" class="px-8 tracking-wide"><GithubIcon dark={true}/></a>
                            </Link>                        
                            <Link href='https://www.linkedin.com/in/erodgers/'>
                                <a target="_blank" class="px-8 tracking-wide"><LinkedinIcon /></a>
                            </Link>
                        </div>
                    </div>
                    <div class="mt-24 w-full sm:w-1/2 lg:w-1/3 flex flex-col items-center">
                        <img src="https://media-exp1.licdn.com/dms/image/C5603AQFPB4oIfZ-IxQ/profile-displayphoto-shrink_800_800/0/1525638728139?e=1652918400&v=beta&t=wpKfkaZrKp9j-KB367fQPGiEqD8hLQ8JGj88-e0gohI" alt="Raymond Huang" width="100" height="100" className="w-64 h-64 bg-contain bg-center rounded"></img>
                        <h1 class="text-lg text-gray-700"> Raymond Huang </h1>
                        <h3 class="text-sm text-gray-600 "> Software Engineer </h3>
                        <div class="w-full flex justify-center pt-5 pb-5">
                            <Link href='https://github.com/HeyoRay'>
                                <a target="_blank" class="px-8 tracking-wide"><GithubIcon dark={true}/></a>
                            </Link>                        
                            <Link href='https://www.linkedin.com/in/raymond-huang-7aa23272/'>
                                <a target="_blank" class="px-8 tracking-wide"><LinkedinIcon /></a>
                            </Link>
                        </div>
                    </div>
                    <div class="mt-24 w-full sm:w-1/2 lg:w-1/3 flex flex-col items-center">
                        <img src="https://media-exp1.licdn.com/dms/image/C4D03AQE99sLMyKpDqA/profile-displayphoto-shrink_800_800/0/1517072415081?e=1652918400&v=beta&t=XG12PkGgbdZaqCIm6DrPRWECRAZyg4C4oACqk-nfusE" alt="Rehema Armorer" width="100" height="100" className="w-64 h-64 bg-contain bg-center rounded"></img>
                        <h1 class="text-lg text-gray-700"> Rehema Armorer </h1>
                        <h3 class="text-sm text-gray-600 "> Software Engineer </h3>
                        <div class="w-full flex justify-center pt-5 pb-5">
                            <Link href='https://github.com/rsa0810'>
                                <a target="_blank" class="px-8 tracking-wide"><GithubIcon dark={true}/></a>
                            </Link>                        
                            <Link href='https://www.linkedin.com/in/rehema-armorer-523914133/'>
                                <a target="_blank" class="px-8 tracking-wide"><LinkedinIcon /></a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Team;