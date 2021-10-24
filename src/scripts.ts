const catchMyTag = document.querySelector(".form__userName__input");
const btn_submit = document.querySelector(".submit__input");
const form: HTMLFormElement = document.querySelector("form");
let classes = (classes: string) => document.getElementsByClassName(classes);

const validation = {
  form__userName: (value: string) => {
    return minMaxValid;
  },
  form__password__input: (value: string) => {
    return minMaxValid;
  },
  form__password__confirm__input: (value: string) => {
    return minMaxValid;
  },
};
const minMaxValid = (inputString: string): boolean => {
  let min = 4;
  let max = 12;
  return inputString.length >= min && inputString.length <= max ? true : false;
};

type inputKeys = keyof typeof validation;

form.addEventListener("submit", (e) => {
  //prevents default browser actions
  e.preventDefault();
  const formValues = new FormData(form);

  if (form.checkValidity()) {
    formValues.forEach((value: string, classNameKey: inputKeys) => {
      let isValidForm = validation[classNameKey];
      if (!isValidForm) {
        console.log(value);
        return;
      }

    });
  }
});

console.log("1234444");
