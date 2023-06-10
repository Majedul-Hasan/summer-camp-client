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

export const userDelete = (course, refetch) => {
  swalWithBootstrapButtons
    .fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      //   confirmButtonColor: '#3085d6',
      //   cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    })
    .then((result) => {
      if (result.isConfirmed) {
        axiosInstance
          .delete(`${import.meta.env.VITE_API}/users/admin/${course._id}`, {
            headers,
          })

          .then((data) => {
            if (data.data.deletedCount > 0) {
              refetch();
              swalWithBootstrapButtons.fire(
                'Deleted!',
                `${course.name} has been deleted.`,
                'success'
              );
            }
          });
      }
    });
};