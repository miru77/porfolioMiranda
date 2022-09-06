import React from "react"
import IcTwitter from "../../../images/icons/twitter.svg"
import IcFacebook from "../../../images/icons/facebook.svg"
import IcWeb from "../../../images/icons/web.svg"
import IcLink from "../../../images/icons/linkedin.svg"
import IcGit from "../../../images/icons/github.svg"

import "./Social.scss"

const socialMedia = [
  {
    icon: <IcTwitter />,
    link: "https://twitter.com/jorgemiru",
  },
  {
    icon: <IcFacebook />,
    link: "https://www.facebook.com/jorge.miranda.18062",
  },
  {
    icon: <IcWeb />,
    link: "https://github.com/miru77",
  },
  {
    icon: <IcLink />,
    link: "https://www.linkedin.com/in/jorge-miranda-92a87a101/",
  },
  {
    icon: <IcGit />,
    link: "https://github.com/miru77",
  },
]

export default function Social() {
  return (
    <div className="social">
      {socialMedia.map((social, index) => (
        <a
          key={index}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
        >
          {social.icon}
        </a>
      ))}
    </div>
  )
}
