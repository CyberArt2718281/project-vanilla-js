import {AuthUtils} from "../../utils/auth-utils";
import {ValidationUtils} from "../../utils/validation-utils";
import {AuthService} from "../../services/auth-service";

export class SignUp {
   constructor(openNewRoute) {
      this.openNewRoute = openNewRoute;

      if (AuthUtils.getAuthInfo(AuthUtils.accessTokenKey)) {
         return this.openNewRoute('/')
      }

      this.findElements();

      this.validations = [{element: this.nameElement}, {element: this.lastNameElement}, {
         element: this.repeatPasswordElement,
         options: {compareTo: this.passwordElement}
      }, {element: this.agreeElement, options: {checked: this.agreeElement}}, {
         element: this.emailElement,
         options: {pattern: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i}
      }, {
         element: this.passwordElement,
         options: {pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/}
      },]

      document.getElementById('process-button').addEventListener('click', this.signUp.bind(this));
   }

   findElements() {
      this.nameElement = document.getElementById('name');
      this.lastNameElement = document.getElementById('last-name');
      this.emailElement = document.getElementById('email');
      this.passwordElement = document.getElementById('password');
      this.repeatPasswordElement = document.getElementById('repeat-password');
      this.agreeElement = document.getElementById('agree');
      this.commonErrorElement = document.getElementById('common-error');
   }


   async signUp() {
      this.commonErrorElement.style.display = 'none';

      for (let i = 0; i < this.validations.length; i++) {
         if (this.validations[i].element.value === this.repeatPasswordElement) {
            this.validations.options.compareTo = this.passwordElement;
         }
      }

      if (ValidationUtils.validateForm(this.validations)) {


         const result = await AuthService.signup({
            name: this.nameElement.value,
            lastName: this.lastNameElement.value,
            email: this.emailElement.value,
            password: this.passwordElement.value,
         })

         if (result.hasOwnProperty('message')) {
            this.commonErrorElement.style.display = 'block';
            this.commonErrorElement.innerText = result.message;
            return;
         }
         AuthUtils.setAuthInfo(result.accessToken, result.refreshToken, {
            id: result.id, name: result.name,
         });

         this.openNewRoute('/')
      }

   }
}