const homeFeatures = [
  {
    title: "Thêm chi tiêu",
    desc: "Ghi lại các khoản chi tiêu của bạn đi.",
    direct: "/fee/#add",
  },
  {
    title: "Xem chi tiêu",
    desc: "Xem lại chi tiêu của bạn.",
    direct: "/fee/#view",
  },
  {
    title: "Các danh mục",
    desc: "Xem lại các danh mục chi tiêu của bạn.",
    direct: "/categories/#list",
  },
  {
    title: "Tìm kiếm chi tiêu",
    desc: "Tìm kiếm chi tiêu theo các tiêu chí bạn chọn.",
    direct: "/fee/#search",
  },
];

const categoryFeatures = [
  {
    title: "Các danh mục chi tiêu",
    description: "Các danh mục chi tiêu bạn đã tạo.",
    direct: "#list",
  },
  {
    title: "Thêm danh mục chi tiêu",
    description: "Tạo thêm các danh mục chi tiêu mới.",
    direct: "#add",
  },
  {
    title: "Tìm kiếm danh mục chi tiêu",
    description: "Tìm kiếm danh mục chi tiêu theo tên.",
    direct: "#find",
  },
];

const feeFeatures = [
  {
    id: 1,
    title: "Tìm kiếm nhanh",
    desc: "Tìm kiếm các chi phí nhanh chóng và dễ dàng",
    direct: "#search",
  },
  {
    id: 2,
    title: "Thêm chi tiêu mới",
    desc: "Thêm một chi tiêu mới vào danh sách chi phí",
    direct: "#add",
  },
  {
    id: 3,
    title: "Thống kê chi phí",
    desc: "Thống kê các chi phí trong một khoảng thời gian nhất định",
    direct: "#statistics",
  },
  {
    id: 4,
    title: "Xem các chi tiêu gần nhất",
    desc: "Xem các chi tiêu gần nhất trong danh sách chi phí",
    direct: "#recent",
  },
];

export { homeFeatures, categoryFeatures, feeFeatures };
