"use client";

import { Fragment, useContext } from "react";
import BlogPopup from "./BlogPopup";
import EmbedPopup from "./EmbedPopup";
import ProjectPopup from "./ProjectPopup";
import { context } from "../../context/context";
const Popup = () => {
  const { modal, portfolioModal, blogModal } = useContext(context);
  return (
    <Fragment>
      <EmbedPopup />
      {modal && portfolioModal && <ProjectPopup />}
      {modal && blogModal && <BlogPopup />}
    </Fragment>
  );
};
export default Popup;
