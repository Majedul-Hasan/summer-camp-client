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

export const courseDenied = (course, refetch) => {
  swalWithBootstrapButtons
    .fire({
      title: 'Admin feedback',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off',
      },
      showCancelButton: true,
      confirmButtonText: 'feedback',
      showLoaderOnConfirm: true,
      //   confirmButtonColor: '#3085d6',
      //   cancelButtonColor: '#d33',
    })
    .then((result) => {
        console.log(result);

      if (result.isConfirmed) {
        axiosInstance
          .patch(
            `${import.meta.env.VITE_API}/course/decline/${course._id}`,
            {
              feedback: result.value,
            },
            {
              headers,
            }
          )

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
/*
Swal.fire({
  title: 'admin feedback',
  input: 'text',
  inputAttributes: {
    autocapitalize: 'off',
  },
  showCancelButton: true,
  confirmButtonText: 'Look up',
  showLoaderOnConfirm: true,
  preConfirm: (login) => {
    return fetch(`//api.github.com/users/${login}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .catch((error) => {
        Swal.showValidationMessage(`Request failed: ${error}`);
      });
  },
  allowOutsideClick: () => !Swal.isLoading(),
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire({
      title: `${result.value.login}'s avatar`,
      imageUrl: result.value.avatar_url,
    });
  }
});
*/