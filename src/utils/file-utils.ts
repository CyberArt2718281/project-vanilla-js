export class FileUtils{
  static loadPageScript(src:string){
    return new Promise((resolve, reject)=>{
      const script = document.createElement('script')
      script.src = src;
      script.onload = ()=> resolve('Script loaded' + src);
      script.onerror = ()=> reject(new Error('Script load error for:' + src));

      document.body.appendChild(script)
    })
  }
  static loadPageStyle(src:string, insertBeforeElement:HTMLElement){
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
}