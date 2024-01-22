import Swal from "sweetalert2";

export const saveJobs = item => {
  fetch(`http://localhost:5000/add-jobs`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(item),
  })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if (data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Jobs Item Save Success",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
};

export const updateJobs=(data, id)=>{
  fetch(`http://localhost:5000/update-jobs/${id}`, {
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if (data.modifiedCount > 0) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Jobs Item Update Success",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
}

export const deleteJobs = id => {
  Swal.fire({
    title: "Are you sure?",
    text: "Want to Delete This Job",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then(result => {
    if (result.isConfirmed) {
      fetch(`http://localhost:5000/job/${id}`, {
        method: "DELETE",
      })
        .then(res => res.json())
        .then(data => {
          if (data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Job has been deleted.",
              icon: "success",
            });
          }
        });
    }
  });
};
