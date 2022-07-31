import {
  Dashboard,
  PeopleAlt,
  MenuBook,
  PersonAdd,
  PostAdd,
  Subject,
  ExitToApp,
} from "@material-ui/icons";
import { IoLockOpenSharp, IoPersonAddSharp,IoReaderSharp} from "react-icons/io5";
// import LockOpenIcon from '@mui/icons-material/LockOpen';
// import HowToRegIcon from '@mui/icons-material/HowToReg';
// import ArticleIcon from '@mui/icons-material/Article';
export const mainNavigation = [
  {
    name: "Dashboard",
    icon: Dashboard,
    url: `/dashboard`,
  },
  {
    name: "Requests",
    icon: Subject ,
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
    icon: PersonAdd ,
    url: `/register`,
  },
  {
    name: "Login",
    icon: ExitToApp ,
    url: `/login`,
  },
];
// const renderContent = (
//     <Box sx={{ mb: 5, mx: 2.5 }}>
//       <Link underline="none" component={RouterLink} to="#">
//         <AccountStyle>
//           <Avatar src={account.photoURL} alt="photoURL" />
//           <Box sx={{ ml: 2 }}>
//             <Typography variant="subtitle2" sx={{ color: 'text.primary' }}>
//               {account.displayName}
//             </Typography>
//             <Typography variant="body2" sx={{ color: 'text.secondary' }}>
//               {account.role}
//             </Typography>
//           </Box>
//         </AccountStyle>
//       </Link>
//     </Box>
// )

