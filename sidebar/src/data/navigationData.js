import {
  Dashboard,
  PeopleAlt,
  MenuBook,
  ImportContacts,
  PostAdd,
} from "@material-ui/icons";
import LockOpenIcon from '@mui/icons-material/LockOpen';
import HowToRegIcon from '@mui/icons-material/HowToReg';
export const mainNavigation = [
  {
    name: "Dashboard",
    icon: Dashboard,
    url: `/dashboard`,
  },
  {
    name: "Requests",
    icon: ImportContacts,
    url: `/Requests`,
    navigationData: [
      {
        name: "All Requests",
        icon: MenuBook,
        url: `/requests/all`,
      },
      {
        name: "Editor",
        icon: PostAdd,
        url: `/requests/editor`,
      },
    ],
  },
  {
    name: "Users",
    icon: PeopleAlt,
    url: `/users`,
  },
  {
    name: "Register",
    icon: HowToRegIcon,
    url: `/register`,
  },
  {
    name: "Login",
    icon: LockOpenIcon,
    url: `/login`,
  },
];
