const footerData = [
  {
    title: "Người tạo",
    inf: ["Name: Truong", "mail: masterfeed47@gmail.com"],
  },
  {
    title: "Mục tiêu",
    inf: ["Project nhỏ - sử dụng backend, frontend, database."],
  },
  {
    title: "Thông tin về web",
    inf: [
      "Ngày tạo: 2/1/2026",
      "Web: Storage",
      "Mục đích: lưu giữ các chi tiêu(web gần giống note)",
    ],
  },
];

const getLinks = (user) => {
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
      label: "Chi tiêu",
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
      label: user.userNickName,
      path: "/profile",
      roles: ["user", "admin"],
    });
  }

  return links;
};

export { footerData, getLinks };
