import { Avatar, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import { CgProfile } from "react-icons/cg";
import { PiArrowBendDoubleUpRightBold } from "react-icons/pi";
import { User } from "@/types";


type ProfileMenuProps = {
  user?: User;
  data?: User;
  onLogout: () => void;
  onSettings: () => void;
  onDashboard?: () => void;
  mode?: "desktop" | "mobile";
};

const ProfileMenu: React.FC<ProfileMenuProps> = ({
  user,
  data,
  onLogout,
  onSettings,
  onDashboard,
  mode = "desktop",
}) => {
 
  const displayName = [user?.first_name, user?.last_name].join(" ");
  console.log("ProfileMenu", { user, data, displayName });
  const email = user?.email || data?.email;
  const avatarSrc = user?.profile
    ? user.profile
    : `https://ui-avatars.com/api/?name=${user?.first_name || data?.first_name}+${user?.last_name || data?.last_name}`;

  // const hasName = !!(firstName || lastName);

  const items: Array<{
    key: string;
    content: React.ReactNode;
    action: (() => void) | null | undefined;
  }> = [
    {
      key: "profile_info",
      content: (
        <>
           <p className="font-semibold">{displayName}</p>
          <p className="text-sm text-gray-600">{email}</p>
        </>
      ),
      action: null,
    },
    ...(onDashboard ? [{
      key: "dashboard",
      content: (
        <div className="flex items-center gap-2">
          <PiArrowBendDoubleUpRightBold size={20} />
          <span>tableau de bord</span>
        </div>
      ),
      action: onDashboard,
    }] : []),
    {
      key: "settings",
      content: (
        <div className="flex items-center gap-2">
          <CgProfile size={20} />
          <span>Paramètres</span>
        </div>
      ),
      action: onSettings,
    },
    {
      key: "logout",
      content: <span className="text-red-500">Se déconnecter</span>,
      action: onLogout,
    },
  ];

  if (mode === "desktop") {
    return (
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <div className="flex gap-3 items-center cursor-pointer scale-95">
            <Avatar
              as="button"
              classNames={{
                base: "bg-gradient-to-br from-[#FFB457] to-[#FF705B]",
                icon: "text-black/80",
              }}
              isBordered
              size="sm"
              src={avatarSrc}
            />
            <div className="hidden sm:block">
              <div>{displayName}</div>
            </div>
          </div>
        </DropdownTrigger>
        <DropdownMenu aria-label="Profile Actions" variant="flat">
          {items.map((item) =>
            item ? (
              <DropdownItem
                key={item.key}
                className={item.key === "profile_info" ? "h-14 gap-2" : ""}
                color={item.key === "logout" ? "danger" : "default"}
                onPress={item.action ? item.action : undefined}
              >
                {item.content}
              </DropdownItem>
            ) : null
          )}
        </DropdownMenu>
      </Dropdown>
    );
  }

  // Mode mobile
  return (
    <div>
      <div className="flex items-center gap-3 px-4 py-2">
        <Avatar
          classNames={{
            base: "bg-gradient-to-br from-[#FFB457] to-[#FF705B]",
            icon: "text-black/80",
          }}
          isBordered
          size="md"
          src={avatarSrc}
        />
        <div>{items[0].content}</div>
      </div>
      <div className="flex flex-col px-4 pt-2">
        {items.slice(1).map((item) =>
          item ? (
            <button
              key={item.key}
              className="flex items-center py-2 text-left"
              onClick={item.action ? item.action : undefined}
            >
              {item.content}
            </button>
          ) : null
        )}
      </div>
    </div>
  );
};

export default ProfileMenu;

