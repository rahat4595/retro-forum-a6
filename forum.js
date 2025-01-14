const searchInput = document.getElementById('search-category-input');
const searchBtn = document.getElementById('search-category-btn');
// load data from API
const loadData = async (valueInput) =>{
  let url;
   if(valueInput){
  url = `https://openapi.programming-hero.com/api/retro-forum/posts?category=${valueInput}`
 }
 else{
  url = "https://openapi.programming-hero.com/api/retro-forum/posts"
 }
    const res = await fetch(url);
    const data = await res.json();
    const allPosts = data.posts; 
    displayData(allPosts);
}

// display data
  const displayData = (allPosts) => {
    
  const dataContainer = document.getElementById("category-container");
  dataContainer.innerHTML=""

  setTimeout(() => {
    toggleLoadingSpinner(false)
  }, 2000);
  
  allPosts.forEach(singleData => {
    console.log(singleData);
   
    // create a div
    const div = document.createElement('div');

    // set innerHtml
    div.innerHTML = `
    
    <div class="bg-[#797DFC1A] p-10 rounded-2xl gap-5 w-full">
    <div class="flex flex-col lg:flex-row gap-7">
    <div>
    <div class="h-20 w-20  lg:text-left lg:m-0 text-center m-auto bg-[#f9f9fafd] rounded-lg">
        <img class="rounded-xl" src="${singleData.image}" alt="">
    </div>
        <div id="active-status" class="h-5 w-5 lg:m-0 text-center m-auto ${singleData?.isActive?"bg-[#10B981]":"bg-red-600"} relative rounded-full left-9 lg:left-16 bottom-20 border-gray-200 border-2"></div>
    </div>
    <div>
    <div class="flex gap-10 justify-center lg:justify-start text-[#12132D99] font-bold">
    <div><span id="#"># ${singleData.category}</span> </div>
        <div><span id="Author">Author : </span>${singleData.author.name}</div>
    </div>

  <!-- text -->
  <div class="text-center lg:text-left">
  <h1 class="font-bold text-xl my-2">${singleData.title}</h1>
  <p class="max-w-xl text-base font-medium text-[#12132D99] border-b-2 border-dashed pb-4 pt-2">${singleData.description}</p>
  </div>

  <!-- icons -->
  <div class="flex flex-col lg:flex-row space-y-4 lg:space-y-0 justify-center items-center lg:justify-between my-4 text-base font-medium text-[#12132D99]">
  <div class="flex gap-10">
  <div class="flex gap-2 "><i class="fa fa-envelope mt-1" style="font-size:20px"></i> <span id="message">${singleData.comment_count}</span></div>
  <div class="flex gap-2"> 
    <i class="fa fa-eye mt-1" style="font-size:20px"></i> <span id="view">${singleData.view_count}</span></div>
  <div class="flex gap-2"> 
    <i class='far fa-clock mt-1' style='font-size:20px'></i> <span id="time">${singleData.posted_time}</span></div>
  </div>
  <div>
    <button id="increment-button" onclick='titledata("${singleData.title.replace("'","")}--${singleData.view_count}")' class=" px-2 rounded-full bg-[#10B981] font-bold text-center  text-xl text-white"><i class="fa fa-envelope" style="font-size:15px"></i></button>
  </div>
  </div>

  <!-- empty one -->
     <div></div>
  </div>
  </div>
  

  </div>`

//   appendChild
  dataContainer.appendChild(div);

 
  });

  

}


// right side data showing
const titleContainer = document.getElementById('title-container');
const incrementNumber = document.getElementById('number-display');
const titledata = (value) => {

  
  const increaseNumber = Number(incrementNumber.innerText)+1
 incrementNumber.innerText =  increaseNumber;




   const splitToArray = value.split("--")
   const [title, view_count] = splitToArray
    // creating a div
    const div3 = document.createElement('div');

    // setting innerHtml

    div3.innerHTML =`
    <div class="flex  bg-white px-10 py-4 rounded-lg mt-7 flex-col lg:flex-row lg:justify-center items-center">
               <div>
                   <h1 class="w-52 mt-auto my-3 lg:my-0 lg:text-left text-center text-base font-semibold text-black">${title}</h1>
               </div>
               <div>
               <div class="flex text-[#12132D99] font-medium space-x-2"> 
                   <i class="fa fa-eye mt-1" style="font-size:20px"></i> 
               <span id="view-count">${view_count}</span>
                           </div>
                       </div>
                   </div>
    
    ` 
    // append child
    titleContainer.appendChild(div3)
} 




// load data from API
const loadLatestPost = async () =>{
    const res = await fetch("https://openapi.programming-hero.com/api/retro-forum/latest-posts");
    const data = await res.json();
    const latestAllPosts = data;
    displayLatestData(latestAllPosts);
}

// display data
  const displayLatestData = (latestAllPosts) => {
    
  const dataContainer2 = document.getElementById("latest-posts");
  
  latestAllPosts.forEach(singleLatestPost => {
    console.log(singleLatestPost);

    // create a div
    const div2 = document.createElement('div');
    // set innerHtml
    div2.innerHTML = `<div class="flex  gap-3 w-full m-auto">
 <div class="p-4 border lg:h-[29rem] rounded-xl">
 <div class="lg:w-72 lg:h-44 w-full  2xl:gap-28 bg-[#12132D0D] rounded-2xl"><img class ="rounded-2xl" src="${singleLatestPost.cover_image}" alt=""></div>
 <div class="flex gap-2 my-6 text-[#12132D99] font-semibold justify-center lg:justify-start"><img src="./images/calender.png" alt="">${singleLatestPost.author && singleLatestPost.author.posted_date ? singleLatestPost.author.posted_date : "No publish date" }</div>
 <div class="lg:w-80 space-y-3 text-center lg:text-left">
    <h1 class="text-[#12132D] text-lg font-bold">${singleLatestPost.title}</h1>
    <p class="text-base text-[#12132D99]">${singleLatestPost.description}</p>
</div>
 <div class="flex justify-center lg:justify-start gap-5 my-4">
 <div class="w-11 h-11 rounded-lg">
    <img class="rounded-full" src="${singleLatestPost.profile_image}" alt="">
</div>
     <div>
        <div class="flex lg:text-left text-center flex-col text-base font-bold">${singleLatestPost.author.name}<span class="text-sm text-[#12132D80]" id="person">${singleLatestPost.author && singleLatestPost.author.designation ? singleLatestPost.author.designation : 'No author found'}</span></div> 
    </div>
</div>
</div>`

//   appendChild
  dataContainer2.appendChild(div2);


  });
  
}

loadLatestPost();



// creating search category

searchBtn.addEventListener('click', () =>{
  toggleLoadingSpinner(true)
  const valueInput = searchInput.value
  loadData(valueInput)
  
})


// loading spinner

const toggleLoadingSpinner = (isLoading) => {
  const loadingSpinner = document.getElementById('loading-spiner');
  if (isLoading) {
      loadingSpinner.classList.remove('hidden')
  }
  else {
      loadingSpinner.classList.add('hidden');
  }
}

loadData();








