export class Expense {
   constructor(openNewRoute) {
      this.openNewRoute = openNewRoute;
      document.body.style.position = 'relative';
      document.body.classList.remove('popup-open');
      const deleteLinkElements = document.querySelectorAll('.delete-link');

      this.showPopup(deleteLinkElements);

   }

   showPopup(deleteLinks){
      deleteLinks.forEach(deleteLink => {
         deleteLink.addEventListener('click', function() {
            const popupElement = document.querySelector('.popup');

            document.body.classList.add('popup-open');
            popupElement.classList.remove('d-none');

            document.querySelector('#not-delete').addEventListener('click', ()=>{
               popupElement.classList.add('d-none');
               document.body.classList.remove('popup-open');
            });
         });
      });
   }


}