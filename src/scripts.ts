const catchMyTag = document.querySelector(".form__userName__input");
const btn_submit = document.querySelector(".submit__input");
const form: HTMLFormElement = document.querySelector("form");
let classes = (classes: string) => document.getElementsByClassName(classes);

const validation = {
  username: (value: string): boolean => {
    return minMaxValid(value);
  },
  password: (value: string): boolean => {
    return minMaxValid(value);
  },
  password_confirm: (value: string): boolean => {
    return minMaxValid(value);
  },
};
type inputKeys = keyof typeof validation;

const minMaxValid = (inputString: string): boolean => {
  let min = 4;
  let max = 12;
  return inputString.length >= min && inputString.length <= max;
};

form.addEventListener("submit", (e) => {
  //prevents default browser actions
  e.preventDefault();
  const formValues = new FormData(form);

  if (form.checkValidity()) {
    formValues.forEach((value: string, classNameKey: inputKeys) => {
      let isValidForm = validation[classNameKey](value);
      if (!isValidForm) {
        console.error(value + "   was incorect");
      }
      // do the magic with css



    });
  }
});
