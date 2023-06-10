import axiosInstance from '../../../../util/axiosInstance';
import { swalWithBootstrapButtons } from '../../../../util/swalWithBootstrapButtons';
const token = localStorage.getItem('school-access-token');

const headers = {
  Authorization: `Bearer ${token}`,
};

export const courseMakeActive = (course, refetch) => {
  axiosInstance
    .patch(
      `${import.meta.env.VITE_API}/course/active/${course._id}`,
      {},
      { headers }
    )
    .then((data) => {
      console.log(data);
      if (data.data.modifiedCount) {
        refetch();
        swalWithBootstrapButtons.fire({
          position: 'center',
          icon: 'success',
          title: `${course.name} is active Now!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
};

export const courseMakePending = (course, refetch) => {
  axiosInstance
    .patch(
      `${import.meta.env.VITE_API}/course/pending/${course._id}`,
      {},
      { headers }
    )
    .then((data) => {
      if (data.data.modifiedCount) {
        refetch();
        swalWithBootstrapButtons.fire({
          position: 'center',
          icon: 'success',
          title: `${course.name} is pending again!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
};
