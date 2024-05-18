import { Button } from "@nextui-org/react";
import { IconMenu2, IconX } from "@tabler/icons-react";
import React from "react";

export default function NavigationMobileScreen(props) {
  return (
    <div className="block lg:hidden">
      <Button
        type="button"
        size="sm"
        className="bg-transparent"
        onClick={() => props.setIsResponsiveScreen(!props.isResponsiveScreen)}
      >
        {!props.isResponsiveScreen ? (
          <IconMenu2 size={28} color="#010E80" />
        ) : (
          <IconX size={28} color="#010E80" />
        )}
      </Button>
    </div>
  );
}
