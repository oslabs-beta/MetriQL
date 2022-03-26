import React from 'react';
import Link from 'next/link'
import GithubIcon from './assets/GithubIcon';
import LinkedinIcon from './assets/LinkedinIcon';


const Team = (props) => {
    return (
        <div>
            <div className="relative max-w-screen-2xl mx-auto py-20 lg:py-24">
                <div className="container flex justify-center mx-auto pt-12">
                    <div>
                        <h5 className="font-bold text-purple flex justify-center">Our Team</h5>
                        <h1 className="text-4xl sm:text-5xl font-black text-blue tracking-wide text-center">Meet the Team</h1>
                    </div>
                </div>
                <div className = "flex flex-wrap flex-row justify-center sm:max-w-2xl lg:max-w-5xl mx-auto">
                    <div className="mt-24 w-full sm:w-1/2 lg:w-1/3 flex flex-col items-center">
                        <img src="https://media-exp1.licdn.com/dms/image/C4E03AQHw1txEKIYo7w/profile-displayphoto-shrink_200_200/0/1553035247275?e=1652918400&v=beta&t=w4sJfcAwdAmWWVkyz-BG0SF-qBT1_0n4LItgvGJh2jk" alt="Alfonso Zamarripa" width="100" height="100" className="w-64 h-64 bg-contain bg-center rounded"></img>
                        <div className="flex flex-col items-center mt-6">
                        <h3 className="uppercase font-bold tracking-widest text-xs text-purple"> Software Engineer </h3>
                        <h1 className="mt-1 text-xl font-medium text-gray"> Alfonso Zamarripa </h1>
                        </div>
                        <div className="mt-6 flex space-x-10">
                            <Link className="mr-8 last:mr-0 text-gray hocus:text-purple transition duration-300"  href='https://github.com/alfonsozam93'>
                                <a target="_blank" className="fill-current w-6 h-6"><GithubIcon/></a>
                            </Link>
                            <Link className="mr-8 last:mr-0 text-gray hocus:text-purple transition duration-300" href='https://www.linkedin.com/in/alfonso-zamarripa-63120789/'>
                                <a target="_blank" className="fill-current w-6 h-6"><LinkedinIcon /></a>
                            </Link>
                        </div>
                    </div>
                    <div className="mt-24 w-full sm:w-1/2 lg:w-1/3 flex flex-col items-center">
                        <img src="/dee.jpg" alt="Diana Li" width="100" height="100" className="w-64 h-64 bg-contain bg-center rounded"></img>
                        <div className="flex flex-col items-center mt-6">
                        <h3 className="uppercase font-bold tracking-widest text-xs text-purple"> Software Engineer </h3>
                        <h1 className="mt-1 text-xl font-medium text-gray"> Diana Li </h1>
                        </div>
                        <div className="mt-6 flex space-x-10">
                            <Link className="mr-8 last:mr-0 text-gray hocus:text-purple transition duration-300" href='https://github.com/deedoodee'>
                                <a target="_blank" className="fill-current w-6 h-6"><GithubIcon/></a>
                            </Link>                            
                            <Link className="mr-8 last:mr-0 text-gray hocus:text-purple transition duration-300" href='https://www.linkedin.com/in/dianalicarrasco/'>
                                <a target="_blank" className="fill-current w-6 h-6"><LinkedinIcon /></a>
                            </Link>
                        </div>
                    </div>
                    <div className="mt-24 w-full sm:w-1/2 lg:w-1/3 flex flex-col items-center">
                        <img src="https://media-exp1.licdn.com/dms/image/C4D03AQEqp1dkCPqVMw/profile-displayphoto-shrink_800_800/0/1633641298732?e=1652918400&v=beta&t=X41YdRGPPJxy-pi3755iX7f5QhQ4-xKECLjQ7ILpHIQ" alt="Eric Rodgers" width="100" height="100" className="w-64 h-64 bg-contain bg-center rounded"></img>
                        <div className="flex flex-col items-center mt-6">
                        <h3 className="uppercase font-bold tracking-widest text-xs text-purple"> Software Engineer </h3>
                        <h1 className="mt-1 text-xl font-medium text-gray"> Eric Rodgers </h1>
                        </div>
                        <div className="mt-6 flex space-x-10">
                            <Link className="mr-8 last:mr-0 text-gray hocus:text-purple transition duration-300" href='https://www.github.com/ericerodgers'>
                                <a target="_blank" className="fill-current w-6 h-6"><GithubIcon/></a>
                            </Link>                        
                            <Link className="mr-8 last:mr-0 text-gray hocus:text-purple transition duration-300"  href='https://www.linkedin.com/in/erodgers/'>
                                <a target="_blank" className="fill-current w-6 h-6"><LinkedinIcon /></a>
                            </Link>
                        </div>
                    </div>
                    <div className="mt-24 w-full sm:w-1/2 lg:w-1/3 flex flex-col items-center">
                        <img src="https://media-exp1.licdn.com/dms/image/C5603AQFPB4oIfZ-IxQ/profile-displayphoto-shrink_800_800/0/1525638728139?e=1652918400&v=beta&t=wpKfkaZrKp9j-KB367fQPGiEqD8hLQ8JGj88-e0gohI" alt="Raymond Huang" width="100" height="100" className="w-64 h-64 bg-contain bg-center rounded"></img>
                        <div className="flex flex-col items-center mt-6">
                        <h3 className="uppercase font-bold tracking-widest text-xs text-purple"> Software Engineer </h3>
                        <h1 className="mt-1 text-xl font-medium text-gray"> Raymond Huang </h1>
                        </div>
                        <div className="mt-6 flex space-x-10">
                            <Link className="mr-8 last:mr-0 text-gray hocus:text-purple transition duration-300" href='https://github.com/HeyoRay'>
                                <a target="_blank" className="fill-current w-6 h-6"><GithubIcon/></a>
                            </Link>                        
                            <Link className="mr-8 last:mr-0 text-gray hocus:text-purple transition duration-300" href='https://www.linkedin.com/in/raymond-huang-7aa23272/'>
                                <a target="_blank" className="fill-current w-6 h-6"><LinkedinIcon /></a>
                            </Link>
                        </div>
                    </div>
                    <div className="mt-24 w-full sm:w-1/2 lg:w-1/3 flex flex-col items-center">
                        <img src="/rehema.jpg" alt="Rehema Armorer" width="100" height="100" className="w-64 h-64 bg-contain bg-center rounded"></img>
                        <div className="flex flex-col items-center mt-6">
                        <h3 className="uppercase font-bold tracking-widest text-xs text-purple"> Software Engineer </h3>
                        <h1 className="mt-1 text-xl font-medium text-gray"> Rehema Armorer </h1>
                        </div>
                        <div className="mt-6 flex space-x-10">
                            <Link className="mr-8 last:mr-0 text-gray hocus:text-purple transition duration-300" href='https://github.com/rsa0810'>
                                <a target="_blank" className="fill-current w-6 h-6"><GithubIcon /></a>
                            </Link>                        
                            <Link className="mr-8 last:mr-0 text-gray hocus:text-purple transition duration-300"  href='https://www.linkedin.com/in/rehema-armorer-523914133/'>
                                <a target="_blank" className="fill-current w-6 h-6"><LinkedinIcon /></a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Team;