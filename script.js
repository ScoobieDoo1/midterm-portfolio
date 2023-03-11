let url;

fetch('https://upadhayay.github.io/db.json')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('ERROR!. Status Code: ' +
          response.status);
        return;
      }
      

      // Testing the text in the response
      response.json().then(function(url) {
        console.log(url)
        console.log(url.books[0].title)
        const  test=["./images/vol1.png","./images/vol2.png","./images/vol3.png","./images/vol4.png","./images/vol5.png"]
        const link=["https://riskservices.com/the-universe-and-dr-einstein-by-barnett-1948/","https://en.wikipedia.org/wiki/Political_views_of_Albert_Einstein","https://physicstoday.scitation.org/doi/10.1063/1.2117822","https://www.scribd.com/book/344419660/Einstein-on-Peace","https://pdfgoes.com/download/1017002-Einstein%20The%20Life%20And%20Times.pdf"]
        for(let i=0;i<url.books.length; i++){
            const elmt=document.createElement("div");

            const logo=document.createElement("img");
            logo.setAttribute("src",test[i]);
            logo.setAttribute("class","logo");
            elmt.appendChild(logo);

            const title=document.createElement("span");
           
            title.innerHTML=url.books[i].title;
            elmt.appendChild(title);

            const readMore=document.createElement("a");
            readMore.innerHTML="Read More";
            readMore.setAttribute("href",link[i]);
            readMore.setAttribute("id","readMoreID");
            elmt.appendChild(readMore);
            document.getElementById("paper1").appendChild(elmt);
            
            elmt.classList.add("paperClass");
            //elmt.setAttribute("id","paper"+i);
            
    }});
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });





    