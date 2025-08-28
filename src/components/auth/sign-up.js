import {AuthUtils} from "../../utils/auth-utils";
import {ValidationUtils} from "../../utils/validation-utils";
import {AuthService} from "../../services/auth-service";
import {CommonUtils} from "../../utils/common-utils";
import {KeyboardUtils} from "../../utils/keyboardUtils";

export class SignUp {
   constructor(openNewRoute) {
      this.openNewRoute = openNewRoute;

      if (AuthUtils.getAuthInfo(AuthUtils.accessTokenKey)) {
         return this.openNewRoute('/')
      }

      this.findElements();
      this.sugnUpBtn = document.getElementById('btn-sign-up')
      this.commonErrorElement.style.display = 'none';
      this.validations = [{element: this.nameElement, options: {pattern: /^[A-ZА-ЯЁ][a-zA-Zа-яёА-ЯЁ]+\s*$/g}}, {element: this.lastNameElement,options: {pattern: /^[A-ZА-ЯЁ][a-zA-Zа-яёА-ЯЁ]+\s*$/g}}, {
         element: this.repeatPasswordElement,
         options: {compareTo: this.passwordElement}
      },  {
         element: this.emailElement,
         options: {pattern: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i}
      }, {
         element: this.passwordElement,
         options: {pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/}
      },]
      KeyboardUtils.setEnterHandler(() => {
         this.signUp().then();
      });
      this.sugnUpBtn.addEventListener('click', this.signUp.bind(this));
   }

   findElements() {
      this.nameElement = document.getElementById('nameInput');
      this.lastNameElement = document.getElementById('last-nameInput');
      this.emailElement = document.getElementById('emailInput');
      this.passwordElement = document.getElementById('passwordInput');
      this.repeatPasswordElement = document.getElementById('repeat-passwordInput');
      this.commonErrorElement = document.getElementById('input-error-common');
   }



   async signUp() {


      for (let i = 0; i < this.validations.length; i++) {
         if (this.validations[i].element.value === this.repeatPasswordElement) {
            this.validations.options.compareTo = this.passwordElement;
         }
      }

      if (ValidationUtils.validateForm(this.validations)) {


         const result = await AuthService.signup({
            name: this.nameElement.value.trim(),
            lastName: this.lastNameElement.value.trim(),
            email: this.emailElement.value,
            password: this.passwordElement.value,
            passwordRepeat: this.repeatPasswordElement.value,
         })

         if (result.hasOwnProperty('message')) {
            this.commonErrorElement.style.display = 'block';
            this.commonErrorElement.innerText = CommonUtils.translateMessage(result.message);
            return;
         }
         const resultLogin = await AuthService.login({
            email: this.emailElement.value,
            password: this.passwordElement.value,
            rememberMe: true,
         });
         AuthUtils.setUserInfo(resultLogin);

         this.openNewRoute('/')
      }

   }
}