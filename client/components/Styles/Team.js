import React from 'react';
import Link from 'next/link'
import GithubIcon from './assets/GithubIcon';
import LinkedinIcon from './assets/LinkedinIcon';


const Team = (props) => {
    return (
        <div>
            <div class="bg-gradient-to-br from-gray-500 to-gray-800 max-w-10xl mx-auto py-28">
                <div class="container flex justify-center mx-auto pt-12">
                    <div>
                        <h1 class="xl:text-4xl text-3xl text-center text-white font-bold mx-auto">Team</h1>
                    </div>
                </div>
                {/* <div class = "flex items-center justify-center shrink flex-wrap">
                    <div class="bg-white font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs m-8 bg-gray-200">
                        <img src="./assets/circle.png" alt="Alfonso Zamarripa" width="100" height="100" className="mb-3 w-32 h-32 rounded-full mx-auto"></img>
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
                    <div class="bg-white font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs m-8 bg-gray-200">
                        <img src="./assets/circle.png" alt="Diana Li" width="100" height="100" className="mb-3 w-32 h-32 rounded-full mx-auto"></img>
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
                    <div class="bg-white font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs m-8 bg-gray-200">
                        <img src="./assets/circle.png" alt="Eric Rodgers" width="100" height="100" className="mb-3 w-32 h-32 rounded-full mx-auto"></img>
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
                    <div class="bg-white font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs m-8 bg-gray-200">
                        <img src="./assets/circle.png" alt="Raymond Huang" width="100" height="100" className="mb-3 w-32 h-32 rounded-full mx-auto"></img>
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
                    <div class="bg-white font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs m-8 bg-gray-200">
                        <img src="./assets/circle.png" alt="Rehema Armorer" width="100" height="100" className="mb-3 w-32 h-32 rounded-full mx-auto"></img>
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
                </div> */}
            </div>
        </div>
    );
}

export default Team;