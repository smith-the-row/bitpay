import {
  MdDashboard,
  MdAccountCircle,
  MdPayment,
  MdDownload,
  MdCreditScore,
  MdBusinessCenter,
} from "react-icons/md";

export const links = [
  {
    text: "Dashboard",
    path: "/dashboard",
    icon: <MdDashboard size="18px" />,
  },
  {
    text: "Account Settings",
    path: "/account",
    icon: <MdAccountCircle />,
  },
  {
    text: "Fund Wallet",
    path: "/deposit",
    icon: <MdPayment />,
  },
  {
    text: "Invest",
    path: "/invest",
    icon: <MdDownload />,
  },
  {
    text: "Withdraw",
    path: "/withdraw",
    icon: <MdCreditScore />,
  },
  {
    text: "Signals",
    path: "/signals",
    icon: <MdCreditScore />,
  },
  {
    text: "Transactions",
    path: "/transactions",
    icon: <MdBusinessCenter />,
  },
];
