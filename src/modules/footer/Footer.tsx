import React from "react";
import FooterMenu from "./FooterMenu";
import Linkinde from "../icons/Linkinde";
import Twitter from "../icons/Twitter";
import Facebook from "../icons/Facebook";
import Instagram from "../icons/Instagram";
import Github from "../icons/Github";
import Youtube from "../icons/Youtube";
import "./footer.scss";

function Footer() {
  const socialLinks = [
    { name: "linkedin", icon: Linkinde, href: "#" },
    { name: "twitter", icon: Twitter, href: "#" },
    { name: "facebook", icon: Facebook, href: "#" },
    { name: "instagram", icon: Instagram, href: "#" },
    { name: "github", icon: Github, href: "#" },
    { name: "youtube", icon: Youtube, href: "#" },
  ];
  const year = new Date().getFullYear().toString();
  return (
    <footer className="footer-block">
      <FooterMenu />
      <section className="footer-block__bottom">
        <p>© {year} ClearLink. All rights reserved.</p>
        <div className="footer-block__bottom-social">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return <Icon key={link.name} />;
          })}
        </div>
      </section>
    </footer>
  );
}

export default Footer;
