import { Link } from "react-router";
import { TConfig, themeConfig } from "../constants/config";
import { cn } from "../utils/classname";

import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigationMenu";
import { Icon } from "@iconify/react";

export interface TNavProps {
  config: TConfig;
}

const WebsiteView = ({ config }: TNavProps) => {
  return (
    <nav className="fixed top-0 bottom-0 left-0 right-0 z-10 h-20 p-6 hidden lg:flex justify-between shadow-md">
      <div className="flex gap-4 items-center">
        <Link to="/" className="flex gap-1 items-center">
          <img
            src={require("src/images/logo.png")}
            alt="Logo"
            height={50}
            width={50}
          />
          <p className="font-bold text-2xl text-primary">Hievents</p>
        </Link>

        <NavigationMenu className={cn("flex gap-4 items-center")}>
          {config.nav.map((item: any, index: number) => (
            <NavigationMenuList key={index}>
              <NavigationMenuLink
                href={item.href}
                className="text-gray-400 font-medium"
              >
                {item.title}
              </NavigationMenuLink>
            </NavigationMenuList>
          ))}
        </NavigationMenu>
      </div>

      <div className="flex gap-4 items-center">
        <Button variant="success">Buat Event</Button>
        <Button variant="default">Masuk</Button>
      </div>
    </nav>
  );
};

const MobileView = ({ config }: TNavProps) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white grid grid-cols-4 gap-4 lg:hidden">
      <Link to="/" className="p-4 flex flex-col justify-evenly items-center">
        <Icon
          icon="mingcute:home-6-line"
          width={20}
          color={config.theme.dark.muted}
        />
        <h1 className="text-gray-500 text-base font-medium">Beranda</h1>
      </Link>
      <Link
        to="/cari-event"
        className="p-4 flex flex-col justify-evenly items-center"
      >
        <Icon
          icon="ic:round-search"
          width={20}
          color={config.theme.dark.muted}
        />
        <h1 className="text-gray-500 text-base font-medium">Cari</h1>
      </Link>
      <div className="absolute p-4 bg-primary text-white rounded-full size-20 bottom-1 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center">
        <Icon icon="lets-icons:calendar-add-light" width={32} color="#FFF" />
        <h1 className="text-white text-base font-medium">Buat</h1>
      </div>
      <div className="p-4 flex flex-col justify-evenly items-center">
        <Icon
          icon="streamline:ticket-1"
          width={20}
          color={config.theme.dark.muted}
          className="-rotate-90"
        />
        <h1 className="text-gray-500 text-base font-medium">Tiket</h1>
      </div>
      <div className="p-4 flex flex-col justify-evenly items-center">
        <Icon
          icon="mdi:user-outline"
          width={20}
          color={config.theme.dark.muted}
        />
        <h1 className="text-gray-500 text-base font-medium">Akun</h1>
      </div>
    </nav>
  );
};

export default function Navbar() {
  const config = themeConfig;

  return (
    <>
      <WebsiteView config={config} />
      <MobileView config={config} />
    </>
  );
}
