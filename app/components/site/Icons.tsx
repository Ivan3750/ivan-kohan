import { Github, Instagram, Linkedin, Mail, Globe } from "lucide-react";
import { links } from "@/app/lib/site";

export const socialLinks = [
  { id: "linkedin", label: "LinkedIn", href: links.linkedin, Icon: Linkedin, handle: "ivan-kohan" },
  { id: "instagram-wh", label: "Instagram @WebHjerte", href: links.instagramBusiness, Icon: Instagram, handle: "@webhjerte" },
  { id: "instagram", label: "Instagram @ivan.kohan.ua", href: links.instagram, Icon: Instagram, handle: "@ivan.kohan.ua" },
  { id: "github", label: "GitHub", href: links.github, Icon: Github, handle: "Ivan3750" },
  { id: "webhjerte", label: "webhjerte.dk", href: links.webhjerte, Icon: Globe, handle: "webhjerte.dk" },
  { id: "email", label: "Email", href: `mailto:${links.email}`, Icon: Mail, handle: links.email },
] as const;
