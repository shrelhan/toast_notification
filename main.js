let toastBox = document.getElementById("toastBox");
let successMsg =
  '<i class="fa-solid fa-circle-check"></i> Successfully submitted !';
let invalidMsg =
  '<i class="fa-solid fa-circle-exclamation"></i> Invalid request !';
let errorMsg = '<i class="fa-solid fa-circle-xmark"></i> Fix the error !';

function showToast(msg) {
  let toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerHTML = msg;
  toastBox.appendChild(toast);

  if (msg.includes("error")) {
    toast.classList.add("error");
  }
  if (msg.includes("Invalid")) {
    toast.classList.add("invalid");
  }
  setTimeout(() => {
    toast.remove();
  }, 4000);
}
