import Swal from 'sweetalert2';

const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton:
      'btn bg-cyan-600  hover:bg-cyan-300 hover:text-cyan-700 text-cyan-200 px-4 py-2 font-semibold uppercase rounded',
    cancelButton:
      'btn btn bg-red-600  hover:bg-red-300 hover:text-red-700 text-red-200 px-4 py-2 font-semibold uppercase rounded',
  },
  buttonsStyling: false,
});

export { swalWithBootstrapButtons };
