import { swalWithBootstrapButtons } from '../../../util/swalWithBootstrapButtons';

export const handleAddToCartAction = (item, user, refetch, navigate) => {
  console.log(item);
  const { name, image, price, _id } = item;

  if (user && user.email) {
    const cartItem = {
      courseId: _id,
      name,
      image,
      price,
      email: user.email,
    };
    fetch(`${import.meta.env.VITE_API}/carts`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(cartItem),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          refetch(); // refetch cart to update the number of items in the cart
          swalWithBootstrapButtons.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Food added on the cart.',
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  } else {
    swalWithBootstrapButtons
      .fire({
        title: 'Please login to order the food',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Login now!',
      })
      .then((result) => {
        if (result.isConfirmed) {
          navigate('/login', { state: { from: location } });
        }
      });
  }
};
