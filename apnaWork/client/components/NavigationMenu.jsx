import React from 'react'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"
import Link from 'next/link'

  const NavMenu = () => {
    return (
        <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-xl font-bold text-[#fada5e]">Find Work</NavigationMenuTrigger>
            <NavigationMenuContent>
                <div className='flex flex-wrap h-full max-w-[300px] w-max px-6 py-4'>
              <NavigationMenuLink>
                <ul className='flex flex-col gap-4'>
                    <li><Link href="/byskill">By Skill</Link></li>
                    <hr />
                    <li><Link href="/">By Location</Link></li>
                    <hr />
                    <li><Link href="/">By Category</Link></li>


                </ul>
                
              </NavigationMenuLink>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-xl font-bold text-[#fada5e] ">Hire Freelancer</NavigationMenuTrigger>
            <NavigationMenuContent>
                <div className='flex flex-wrap h-full max-w-[300px] px-6 py-4 w-max'>
                <NavigationMenuLink>
                <ul className='flex flex-col gap-4'>
                    <li><Link href="/">By Skill</Link></li>
                    <hr />
                    <li><Link href="/">By Language</Link></li>
                    <hr />
                    <li><Link href="/">Featured Jobs</Link></li>

                </ul>
                
              </NavigationMenuLink>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

         
        </NavigationMenuList>
      </NavigationMenu>
      
    )
  }
  
  export default NavMenu