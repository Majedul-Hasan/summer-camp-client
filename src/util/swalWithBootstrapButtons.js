import Swal from 'sweetalert2';

const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-primary mr-2',
    cancelButton: 'btn btn-error',
  },
  buttonsStyling: false,
});

export { swalWithBootstrapButtons };
