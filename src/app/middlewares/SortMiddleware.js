// module.exports = function SortMiddleware(req, res, next) {
//   if (req.query && req.query.hasOwnProperty('_sort')) {
//     // Sử dụng req.query và kiểm tra thuộc tính _sort
//     res.locals._sort = {
//       enabled: true,
//       type: req.query.type,
//       column: req.query.column,
//     }
//   } else {
//     // Nếu không có _sort trong req.query, tạo một giá trị mặc định cho res.locals._sort
//     res.locals._sort = {
//       enabled: false,
//       type: 'default',
//       column: 'default',
//     }
//   }

//   next()
// }

module.exports = function SortMiddleware(req, res, next) {
  res.locals._sort = {
    enabled: false,
    type: 'default',
  }

  if (req.query && req.query.hasOwnProperty('_sort')) {
    // Sử dụng req.query và kiểm tra thuộc tính _sort
    res.locals._sort = {
      enabled: true,
      type: req.query.type,
      column: req.query.column,
    }
  }

  next()
}
