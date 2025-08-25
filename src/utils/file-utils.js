export class FileUtils{
  static loadPageScript(src){
    return new Promise((resolve, reject)=>{
      const script = document.createElement('script')
      script.src = src;
      script.onload = ()=> resolve('Script loaded' + src);
      script.onerror = ()=> reject(new Error('Script load error for:' + src));

      document.body.appendChild(script)
    })
  }
  static loadPageStyle(src,insertBeforeElement){
    return new Promise((resolve, reject)=>{
      const link = document.createElement('link')
      link.rel = "stylesheet";
      link.type= "text/css"
      link.href = src;
      link.onload = ()=> resolve('Link loaded' + src);
      link.onerror = ()=> reject(new Error('Link load error for:' + src));
      insertBeforeElement.insertAdjacentElement('afterbegin', link)
    })
  }

  static convertFileToBase64(file){
   return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = ()=> reject(new Error('Can not convert file to base64'));
    });
  }
}