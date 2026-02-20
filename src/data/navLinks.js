export const getLinks = (user) => {
  const links = [
    {
      id: "home",
      label: "Trang chủ",
      path: "/",
      roles: ["user", "admin"],
    },
    {
      id: "category",
      label: "Danh mục",
      path: "/categories",
      roles: ["user", "admin"],
    },
    {
      id: "fee",
      label: "Fee",
      path: "/fee",
      roles: ["user", "admin"],
    },
  ];

  if (!user) {
    links.push({
      id: "signin",
      label: "Đăng nhập",
      path: "/signin",
      roles: ["guest"],
    });
  } else {
    links.push({
      id: "profile",
      label: user.userName,
      path: "/profile",
      roles: ["user", "admin"],
    });
  }

  return links;
};
