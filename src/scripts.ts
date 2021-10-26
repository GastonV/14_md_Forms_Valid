const catchMyTag = document.querySelector(".form__userName__input");
const btn_submit = document.querySelector(".submit__input");
const form: HTMLFormElement = document.querySelector("form");
//let classes = (classes: string) => document.getElementsByClassName(classes);
//const button__dropdown = document.querySelector(".button__dropdown");
//const dropdwon = document.querySelector(".js_dropdown");
//const dropdownClassList = dropdwon.classList;
let errorMessage = "";
let checkValue = "";
const validation = {
  username: (value: string): boolean => {
    if (!minMaxValid(value)) {
      errorMessage =
        "Your username is too short or too long pleace choose between 4 < length > 12 chars long";
      return false;
    }
    return true;
  },
  password: (value: string): boolean => {
    checkValue = value;
    if (!minMaxValid(value)) {
      errorMessage =
        "Your password is too short or too long pleace choose between 4 < length > 12 chars long";
      return false;
    }
    return true;
  },
  password_confirm: (value: string): boolean => {
    if (checkValue !== value) {
      errorMessage = "Your password does not match";
      return false;
    }
    if (value.length < 4) {
      errorMessage = "Too short";
      return false;
    }
    return true;
  },
  selective_choice: (): boolean => {
    return true;
  },
  radio: (value: string): boolean => {
    return value !== "";
  },
};

type inputKeys = keyof typeof validation;

// button__dropdown.addEventListener("click", (e) => {
//   dropdwon.classList.toggle("show");
// });
// window.addEventListener("click", (event) => {
//   if (event.target !== button__dropdown) {
//     if (dropdownClassList.contains("show")) {
//       dropdownClassList.remove("show");
//     }
//   }
// });

const minMaxValid = (inputString: string): boolean => {
  let min = 4;
  let max = 12;
  return inputString.length >= min && inputString.length <= max;
};

form.addEventListener("submit", (e) => {
  //prevents default browser actions
  e.preventDefault();
  let selectInputSpanTags =
    document.getElementsByClassName("input__span__info");
  const formValues = new FormData(form);
  let index = 0;
  formValues.forEach((value: string, classNameKey: inputKeys) => {
    let isValidForm = validation[classNameKey](value);
    if (isValidForm) {
      const popup = document.querySelector(".pop_up_sucess");
      popup.classList.add("popup_show");
     
    }
    if (!isValidForm) {
      selectInputSpanTags[index].innerHTML = errorMessage;
      selectInputSpanTags[index].classList.add("show", "show--red");
    } else {
      //@ts-ignore
      selectInputSpanTags[index].classList.remove("show", "show--red");
    }
    index++;
  });
});
window.addEventListener("click", e =>{
  const outsideClick = document.querySelector(".sucess__screen");
  outsideClick.classList.contains("popup_show");
  
});
