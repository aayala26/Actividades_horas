import {
  IconAperture,
  IconCopy,
  IconLayoutDashboard,
  IconLogin,
  IconMoodHappy,
  IconTypography,
  IconUserPlus,
} from "@tabler/icons-react";

import { uniqueId } from "lodash";

const Menuitems = [
  {
    navlabel: true,
    subheader: "Inicio",
  },

  {
    id: uniqueId(),
    title: "Dashboard",
    icon: IconLayoutDashboard,
    href: "/",
  },
  {
    navlabel: true,
    subheader: "Proyectos",
  },
  {
    id: uniqueId(),
    title: "Usuario",
    icon: IconTypography,
    href: "/usuarios",
  },
  {
    id: uniqueId(),
    title: "Historias Usuario",
    icon: IconTypography,
    href: "/historias-usuario",
  },
  // {
  //   id: uniqueId(),
  //   title: "Shadow",
  //   icon: IconCopy,
  //   href: "/utilities/shadow",
  // },
  // {
  //   navlabel: true,
  //   subheader: "Auth",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Login",
  //   icon: IconLogin,
  //   href: "/authentication/login",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Register",
  //   icon: IconUserPlus,
  //   href: "/authentication/register",
  // },
  {
    navlabel: true,
    subheader: "Consulta",
  },
  // {
  //   id: uniqueId(),
  //   title: "Tiempos",
  //   icon: IconMoodHappy,
  //   href: "/icons",
  // },
  {
    id: uniqueId(),
    title: "Tiempos",
    icon: IconAperture,
    href: "/sample-page",
  },
];

export default Menuitems;
