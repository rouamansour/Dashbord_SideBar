import {
  Dashboard,
  PeopleAlt,
  MenuBook,
  ImportContacts,
  PostAdd,
} from "@material-ui/icons";

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
];
