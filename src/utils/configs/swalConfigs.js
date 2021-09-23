export const setSwalOptions = (type, text) => {
  if (type === "toast") {
    return {
      toast: {
        title: "Warning",
        text: `${text}. Couldn't get all results`,
        icon: "warning",
        toast: true,
        timer: 2000,
        showConfirmButton: false,
      },
    };
  }
  if (type === "error") {
    return {
      errorAlert: {
        title: "Error",
        text: text,
        icon: "error",
      },
    };
  }
};
