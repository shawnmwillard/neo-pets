// async function newFormHandler(event) {
//   event.preventDefault();

//   const text = document.querySelector('input[name="post-text"]').value;
//   const place = document.querySelector('input[name="post-place"]').value;
//   const user_id = window.location.toString().split("/")[
//     window.location.toString().split("/").length - 1
//   ];
//   console.log(user_id);
//   const response = await fetch(`/api/posts`, {
//     method: "POST",
//     body: JSON.stringify({
//       text,
//       place,
//     }),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });

//   if (response.ok) {
//     document.location.replace("/dashboard");
//   } else {
//     alert(response.statusText);
//   }
// }

// document
//   .querySelector(".new-post-form")
//   .addEventListener("submit", newFormHandler);

// const form = document.getElementById("form");

// form.addEventListener("submit", submitForm);

async function submitForm(event) {
  event.preventDefault();
  console.log("--------------------------");
  const name = document.getElementById("name");
  const files = document.getElementById("files");
  const formData = new FormData();

  console.log(files.files[0]);
  formData.append("text", name.value);

  for (let i = 0; i < files.files.length; i++) {
    formData.append("image", files.files[i]);
    console.log(files.files[i]);
  }
  console.log(formData);
  console.log(name.value);
  //const response = await fetch("/api/posts", {
  const response = await fetch(`/api/posts`, {
    method: "POST",
    body: formData,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
}

document.addEventListener("submit", submitForm);
