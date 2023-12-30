// import { useState } from 'react';
// import classNames from 'classnames/bind';
// import styles from './Course.module.scss';
// import Button from '~/components/Button';

// import config from '~/config';
// import request from '~/utils/axios';

// const cx = classNames.bind(styles);

// function CreateCourse() {
//   const [newCourse, setNewCourse] = useState({});
//   //const history = useHistory();
//   const handleInputChange = (e) => {
//     setNewCourse({
//       ...newCourse,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleCreateCourse = (e) => {
//     e.preventDefault();
//     request
//       .post('/courses/store', newCourse)
//       .then((res) => {
//         console.log('Success:', res.data);
//         //history.push('/courses/stored');
//       })
//       .catch((error) => {
//         console.error('Error:', error.res ? error.res.data : error.message);
//       });
//   };

//   return (
//     <div className={cx('form-container')}>
//       <div className={cx('mt-5')}>
//         <h3>Thêm Khóa Học</h3>

//         <form onSubmit={handleCreateCourse}>
//           <div className={cx('form-group')}>
//             <div className="mb-3">
//               <label htmlFor="name" className="form-label">
//                 Tên
//               </label>
//               <input
//                 onChange={handleInputChange}
//                 value={newCourse.name || ''}
//                 type="text"
//                 className={cx('form-control')}
//                 id="name"
//                 name="name"
//               />
//             </div>

//             <div className="mb-3">
//               <label htmlFor="description" className="form-label">
//                 Mô tả
//               </label>
//               <textarea
//                 onChange={handleInputChange}
//                 value={newCourse.description || ''}
//                 rows="3"
//                 className={cx('form-control')}
//                 id="description"
//                 name="description"
//               ></textarea>
//             </div>

//             <div className={cx('form-group')}>
//               <label htmlFor="instructor">Người Hướng Dẫn</label>
//               <input
//                 onChange={handleInputChange}
//                 value={newCourse.instructor || ''}
//                 type="text"
//                 className={cx('form-control')}
//                 id="instructor"
//                 name="instructor"
//               />
//             </div>

//             <div className={cx('form-group')}>
//               <label htmlFor="image">Ảnh</label>
//               <input
//                 onChange={handleInputChange}
//                 value={newCourse.image || ''}
//                 type="text"
//                 className={cx('form-control')}
//                 id="image"
//                 name="image"
//               />
//             </div>

//             <div className={cx('form-group')}>
//               <label htmlFor="status">Trạng thái</label>
//               <input
//                 onChange={handleInputChange}
//                 value={newCourse.status || ''}
//                 type="text"
//                 className={cx('form-control')}
//                 id="status"
//                 name="status"
//               />
//             </div>

//             <Button
//               blue
//               onClick={handleCreateCourse}
//               to={config.routes.storedCourse}
//             >
//               Thêm
//             </Button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default CreateCourse;
// import React from 'react';
// import classNames from 'classnames/bind';
// import styles from './MyCourses.module.scss';
// import { useState, useEffect } from 'react';

// import * as courseServices from '~/services/courseServices';

// const cx = classNames.bind(styles);

// function StoredCourse() {
//   const [courseResult, setCourseResult] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const result = await courseServices.storedCourse();
//         setCourseResult(result);
//       } catch (error) {
//         console.error('Error in component:', error);
//       }
//     };

//     fetchData();
//   }, []); // [] useEffect chỉ chạy một lần

//   return (
//     <div className={cx('form-container')}>
//       <form className={cx('mt-5')} name="container-form">
//         <h3>Danh Sách</h3>
//         <div className={cx('row')}>
//           <div
//             className={cx('mt-4', 'd-flex', 'align-items-center', 'col-md-5')}
//           >
//             <div className="form-check">
//               <input
//                 className="form-check-input"
//                 type="checkbox"
//                 value=""
//                 id="checkbox-all"
//               />
//               <label
//                 className={cx('form-check-label', 'select-all')}
//                 htmlFor="checkbox-all"
//               >
//                 Chọn tất cả
//               </label>
//             </div>

//             <select
//               className={cx(
//                 'form-select',
//                 'form-select-lg',
//                 'checkbox-select-all',
//               )}
//               aria-label="Default select example"
//               name="action"
//               defaultValue="-- Hành động --"
//               required
//             >
//               <option disabled>-- Hành động --</option>
//               <option value="delete">Xóa</option>
//             </select>

//             <button
//               className={cx(
//                 'btn',
//                 'btn-primary',
//                 'btn-lg',
//                 'check-all-submit-btn',
//               )}
//               disabled
//             >
//               Thực hiện
//             </button>
//           </div>

//           <a
//             className={cx('col-md-3', 'ms-md-auto', 'underline')}
//             href="/courses/trash"
//           >
//             Thùng Rác(0)
//           </a>
//         </div>

//         <table className={cx('table', 'mt-4')}>
//           <thead>
//             <tr>
//               <th scope="col">#</th>
//               <th scope="col">Stt</th>
//               <th scope="col">Tên</th>
//               <th scope="col">Người hướng dẫn</th>
//               <th scope="col">Trạng thái</th>
//               <th scope="col" colSpan="2">
//                 Thời gian tạo
//               </th>
//             </tr>
//           </thead>

//           {courseResult.length === 0 ? (
//             <tr>
//               <td colSpan="5" className={cx('text-center')}>
//                 Bạn chưa đăng gì cả!
//                 <a href="/courses/create">Đăng ngay</a>
//               </td>
//             </tr>
//           ) : (
//             courseResult.map((course, index) => (
//               <tbody>
//                 <tr key={course._id}>
//                   <td>
//                     <div className={cx('form-check')}>
//                       <input
//                         className={cx('form-check-input')}
//                         type="checkbox"
//                         name="courseId[]"
//                       />
//                     </div>
//                   </td>
//                   <th scope="row">{index + 1}</th>
//                   <td className={cx('name')}>{course.name}</td>
//                   <td className={cx('number')}>{course.instructors}</td>
//                   <td className={cx('number')}>{course.status}</td>
//                   <td className={cx('duration')}>{course.createdAt}</td>
//                   <td>
//                     <a
//                       style={{ fontSize: '16px' }}
//                       href={`/courses/${course._id}/edit`}
//                       className={cx('btn', 'btn-lg', 'btn-link', 'underline')}
//                     >
//                       Sửa
//                     </a>
//                     <a
//                       href="123"
//                       style={{ fontSize: '16px' }}
//                       className={cx('btn', 'btn-lg', 'btn-link', 'underline')}
//                       data-id={`${course._id}`}
//                       data-toggle="modal"
//                       data-target="#delete-course-model"
//                     >
//                       Xóa
//                     </a>
//                   </td>
//                 </tr>
//               </tbody>
//             ))
//           )}
//         </table>
//       </form>

//       {/* {{!-- confim --}}  */}

//       <div
//         className={cx('modal')}
//         id="delete-course-model"
//         tabIndex="-1"
//         role="dialog"
//       >
//         <div className={cx('modal-dialog')} role="document">
//           <div className={cx('modal-content')}>
//             <div className={cx('modal-header')}>
//               <h5 className={cx('modal-title')}>Xóa hả?</h5>
//               <button
//                 type="button"
//                 className={cx('btn-close')}
//                 data-dismiss="modal"
//                 aria-label="Close"
//               ></button>
//             </div>
//             <div className={cx('modal-body')}>
//               <p>Bạn chắc chắn muốn xóa?</p>
//             </div>
//             <div className={cx('modal-footer')}>
//               <button
//                 type="button"
//                 id="btn-delete-course"
//                 className={cx('btn', 'btn-danger')}
//               >
//                 Xóa bỏ
//               </button>
//               <button
//                 type="button"
//                 className={cx('btn', 'btn-secondary')}
//                 data-dismiss="modal"
//               >
//                 Hủy
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* {{!--Delete hidden form  --}} */}
//       <form name="delete-course-form" method="POST"></form>
//     </div>
//   );
// }

// export default StoredCourse;

// import { Course } from '../models/Course.js';
// import { mutipleMongooseToObject } from '../util/mongoose.js';
// class CourseController {
//   constructor() {}

//   // courses/get
//   async getCourse(req, res) {
//     try {
//       // const a = new Course({
//       //   name: 'Cơ sở dữ liệu',
//       //   description: 'dau het ca dau',
//       //   image:
//       //     'https://i.ytimg.com/vi/79rF9BS0xvE/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLC1vPTpnHMz4iaoK-Y8iNdAtM-M4A',
//       //   instructors: 'Le Van A',
//       //   status: 'new',
//       //   slug: 'anpha',
//       // });
//       // a.save();

//       const courses = await Course.find();
//       res.status(200).json(courses);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   }

//   // [GET] /courses/:slug

//   async show(req, res, next) {
//     try {
//       const courses = await Course.find();
//       res.json(courses);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   }

//   // [POST] /courses/store
//   async store(req, res) {
//     try {
//       const newCourse = req.body;

//       if (!newCourse || Object.keys(newCourse).length === 0) {
//         return res
//           .status(400)
//           .json({ error: 'Invalid data. Course data is required.' });
//       }

//       const course = new Course(newCourse);
//       const savedCourse = await course.save();

//       res.status(201).json(savedCourse);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   }

//   // [GET] /courses/:id/edit
//   async edit(req, res) {
//     try {
//       const courseId = req.params.id;

//       if (!mongoose.Types.ObjectId.isValid(courseId)) {
//         return res.status(400).json({ error: 'Invalid course ID' });
//       }

//       const course = await Course.findById(courseId);

//       // Check if the course exists
//       if (!course) {
//         return res.status(404).json({ error: 'Course not found' });
//       }

//       res.render('edit-course', { course });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   }

//   // [GET] courses/stored
//   async storeCourses(req, res, next) {
//     try {
//       const courses = await Course.find();
//       res.json(courses);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   }
// }

// export default new CourseController();
