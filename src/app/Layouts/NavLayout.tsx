import React from "react";
import Add from "../Components/Add/add";
import Footer from "../Components/Footer/footer";
const NavLayout = ({ children }: any) => {
  return (
    <div className="mx-auto">
      <Add />
      {children}
      <Footer />
    </div>
  );
};

export default NavLayout;
