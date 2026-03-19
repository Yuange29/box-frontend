const homeFeatures = [
  {
    icon: "fa-solid fa-plus",
    title: "Thêm chi tiêu",
    desc: "Ghi lại các khoản chi tiêu của bạn đi.",
    direct: "/fee#add",
  },
  {
    icon: "fa-solid fa-list",
    title: "Xem chi tiêu",
    desc: "Xem lại chi tiêu của bạn.",
    direct: "/fee#view",
  },
  {
    icon: "fa-solid fa-list",
    title: "Các danh mục",
    desc: "Xem lại các danh mục chi tiêu của bạn.",
    direct: "/categories#list",
  },
  {
    icon: "fa-solid fa-magnifying-glass",
    title: "Tìm kiếm chi tiêu",
    desc: "Tìm kiếm chi tiêu theo các tiêu chí bạn chọn.",
    direct: "/fee#search",
  },
];

const categoryFeatures = [
  {
    icon: "fa-solid fa-list",
    title: "Các danh mục chi tiêu",
    desc: "Các danh mục chi tiêu bạn đã tạo.",
    direct: "#list",
  },
  {
    icon: "fa-solid fa-plus",
    title: "Thêm danh mục chi tiêu",
    desc: "Tạo thêm các danh mục chi tiêu mới.",
    direct: "#add",
  },
  {
    icon: "fa-solid fa-magnifying-glass",
    title: "Tìm kiếm danh mục chi tiêu",
    desc: "Tìm kiếm danh mục chi tiêu theo tên.",
    direct: "#find",
  },
];

const feeFeatures = [
  {
    id: 1,
    icon: "fa-solid fa-magnifying-glass",
    title: "Tìm kiếm nhanh",
    desc: "Tìm kiếm các chi phí nhanh chóng và dễ dàng",
    direct: "#search",
  },
  {
    id: 2,
    icon: "fa-solid fa-plus",
    title: "Thêm chi tiêu mới",
    desc: "Thêm một chi tiêu mới vào danh sách chi phí",
    direct: "#add",
  },
  {
    id: 3,
    icon: "fa-solid fa-list",
    title: "Thống kê chi phí",
    desc: "Thống kê các chi phí trong một khoảng thời gian nhất định",
    direct: "#statistics",
  },
  {
    id: 4,
    icon: "fa-solid fa-list-ul",
    title: "Xem các chi tiêu gần nhất",
    desc: "Xem các chi tiêu gần nhất trong danh sách chi phí",
    direct: "#recent",
  },
];

export { homeFeatures, categoryFeatures, feeFeatures };
