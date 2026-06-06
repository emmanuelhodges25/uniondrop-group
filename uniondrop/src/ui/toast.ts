type ToastType = "success" | "error";

export function showToast(message: string, type: ToastType = "success") {
  const toast = document.createElement("div");

  toast.innerText = message;

  toast.className = `
    fixed bottom-6 right-6 px-6 py-3 rounded-xl text-white z-50
    ${type === "success" ? "bg-green-500" : "bg-red-500"}
  `;

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 2500);
}