//import _ from "lodash";
const paginate = (items, currentPage, pageSize) => {
  const from = (currentPage - 1) * pageSize;
  const to = currentPage * pageSize;
  return [...items].slice(from, to);
};

export default paginate;
