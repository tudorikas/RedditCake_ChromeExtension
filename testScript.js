

elements = document.querySelectorAll('[data-testid="comment_author_link"]');


for (let element of elements) {
  
//send the Http request
fetch(`https://www.reddit.com/user/${element.textContent}/about.json`)
.then(response => {
 // indicates whether the response is successful (status code 200-299) or not
 if (!response.ok) {
   throw new Error(`Request failed with status ${reponse.status}`)
 }
 return response.json()
})
.then(data => {
 console.log(data.data.created)
 var a = new Date(data.data.created * 1000);
 var year = a.getFullYear();
 var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

 var month = months[a.getMonth()];
 var date = a.getDate();
 var time = date + ' ' + month + ' ' + year + ' ' ;

 element.textContent=element.textContent+ " 🎂 " + time 

})
.catch(error => console.log(error))

  
}