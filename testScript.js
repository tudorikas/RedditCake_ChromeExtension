

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
 var date=new Date();
 var dif=date.getTime()-a.getTime()
 
 var one_day = 1000 * 60 * 60 * 24
 var Result = Math.round(dif) / (one_day);
 var Final_Result = Result.toFixed(0);
 var year = a.getFullYear();
 var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

 var month = months[a.getMonth()];
 var date = a.getDate();
 var time = date + ' ' + month + ' ' + year + ' ' ;
 
 element.textContent=element.textContent+ " 🎂 " + time 
 if( Final_Result < 15)
 {
 element.style.color="red";
 }
 else if(Final_Result < 21)
 {
	  element.style.color="orange";
 }
 else if(Final_Result < 365)
 {
	  element.style.color="yellow";
 }
 else{
	  element.style.color="green";
 }

	
})
.catch(error => console.log(error))

  
}