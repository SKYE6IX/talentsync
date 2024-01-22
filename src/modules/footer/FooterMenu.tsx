import React from "react";
import Image from "next/image";
import SiteLogo from "../icons/SiteLogo";
import AppleAppIcon from "../icons/AppleAppIcon";
import googleAppIcon from "./assets/google-app.svg";
import "./footer-menu.scss";

function FooterMenu() {
  const menuLists = [
    {
      title: "Product",
      lists: [
        { name: "Overview", url: "#" },
        { name: "Features", url: "#" },
        { name: "Solutions", url: "#" },
        { name: "Tutorials", url: "#" },
        { name: "Pricing", url: "#" },
      ],
    },
    {
      title: "Company",
      lists: [
        { name: "About us", url: "#" },
        { name: "Careers", url: "#" },
        { name: "Press", url: "#" },
        { name: "News", url: "#" },
        { name: "Contact", url: "#" },
      ],
    },
    {
      title: "Resources",
      lists: [
        { name: "Blog", url: "#" },
        { name: "Events", url: "#" },
        { name: "Help centre", url: "#" },
        { name: "Tutorials", url: "#" },
        { name: "Support", url: "#" },
      ],
    },
    {
      title: "Legal",
      lists: [
        { name: "Terms", url: "#" },
        { name: "Privacy", url: "#" },
        { name: "Cookies", url: "#" },
        { name: "Licenses", url: "#" },
        { name: "Contact", url: "#" },
      ],
    },
  ];

  return (
    <section className="footer-menu">
      <div className="footer-menu__header">
        <div className="site-logo">
          <SiteLogo />
          <h2>
            ClearLink<span>.</span>
          </h2>
        </div>
        <p>
          ClearLink is your gateway to effortless, high-quality video
          conferencing. Join us in shaping the future of communication!
        </p>
      </div>
      <div className="footer-menu__body">
        {menuLists.map((menu) => (
          <div key={menu.title} className="footer-menu__item">
            <h5>{menu.title}</h5>
            <ul className="footer-menu__item-lists">
              {menu.lists.map((list) => (
                <li key={list.name}>{list.name}</li>
              ))}
            </ul>
          </div>
        ))}
        <div className="footer-menu__item">
          <h5>Get the app</h5>
          <ul className="footer-menu__item-lists">
            <li>
              <AppleAppIcon />
            </li>
            <li>
              <Image src={googleAppIcon} alt="icon" />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
export default FooterMenu;
