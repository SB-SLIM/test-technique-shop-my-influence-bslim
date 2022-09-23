import { List } from "@mui/material";
import React from "react";
import NavItem from "../NavItem";

function Nav({ items }) {
  return (
    <nav className="flex flex-col">
      <List>
        {items?.map((item, index) => {
          return <NavItem key={index} {...item} />;
        })}
      </List>
    </nav>
  );
}

export default Nav;
