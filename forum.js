// load data from API
const loadData = async () =>{
    const res = await fetch("https://openapi.programming-hero.com/api/retro-forum/posts");
    const data = await res.json();
    const allPosts = data.posts;
    displayData(allPosts);
}

// display data
  const displayData = (allPosts) => {

  const dataContainer = document.getElementById("discuss-section-container");

  allPosts.forEach(singleData => {
    console.log(singleData);

    // create a div
    const div = document.createElement('div');

    // set innerHtml
//     div.innerHTML = `
    
//     <div class="flex flex-col lg:flex-row lg:justify-center gap-5 mb-5 mt-10">
//         <!-- left side card -->
//         <div class="bg-[#797DFC1A] p-10 rounded-2xl gap-5 lg:w-2/4">
//         <div class="flex flex-col lg:flex-row gap-7">
//         <div>
//         <div class="h-20 w-20  lg:text-left lg:m-0 text-center m-auto bg-[#f9f9fafd] rounded-lg">
//         <img src="${singleData.image}" alt="">
// </div>
//          <div class="h-5 w-5 lg:m-0 text-center m-auto bg-[#10B981] relative rounded-full left-9 lg:left-16 bottom-20 border-gray-200 border-2">
// </div>
// </div>
//         <div>
//         <div class="flex gap-10 justify-center lg:justify-start text-[#12132D99] font-bold">
//         <div><span id="#">#</span> ${singleData.category}</div>
//         <div><span id="Author">Author : </span>${singleData.author.name}</div>
// </div>
//     <!-- text -->
//     <div class="text-center lg:text-left">
//     <h1 class="font-bold text-xl my-2">${singleData.title}</h1>
//     <p class="max-w-xl text-base font-medium text-[#12132D99] border-b-2 border-dashed pb-4 pt-2">${singleData.description}</p>
// </div>
//     <!-- icons -->
//     <div class="flex flex-col lg:flex-row space-y-4 lg:space-y-0 justify-center items-center lg:justify-between my-4 text-base font-medium text-[#12132D99]">
//     <div class="flex gap-10">
//     <div class="flex gap-2"> <i class="fa fa-envelope mt-1" style="font-size:20px"></i> <span id="message">${singleData.comment_count}</span></div>
//     <div class="flex gap-2"> 
//     <i class="fa fa-eye mt-1" style="font-size:20px"></i> <span id="view">${singleData.view_count}</span></div>
//     <div class="flex gap-2"> 
//     <i class='far fa-clock mt-1' style='font-size:20px'></i> <span id="time">${singleData.posted_time}</span></div>
// </div>
//     <div>
//     <button class=" px-2 rounded-full bg-[#10B981] font-bold text-center  text-xl text-white"><i class="fa fa-envelope" style="font-size:15px"></i></button>
// </div>
// </div>
//  <!-- empty one -->
//          <!-- <div></div> -->
// </div>
// </div>

// </div>
//         <!-- right side card -->
//         <div class="bg-[#12132D0D] p-6 rounded-lg mt-5 lg:mt-0">
//          <!-- correct mark -->
//         <div class="flex gap-6 justify-between">
//         <div class="text-xl font-extrabold">Title</div>
//         <div class="flex gap-2 font-normal">
//         <div><img src="./images/correct-mark.png" alt=""></div>
//         <div>
//         <h2 class="text-base text-[#12132D99] font-medium">Mark as read <span id="">(4)</span></h2>
// </div>
// </div>
// </div>
//         <!-- views -->
//         <div class="flex  bg-white px-10 py-4 rounded-lg mt-7 flex-col lg:flex-row lg:justify-center items-center">
//         <div>
//         <h1 class="w-52 mt-auto my-3 lg:my-0 lg:text-left text-center text-base font-semibold text-black">${singleData.title}</h1>
// </div>
//         <div>
//         <div class="flex text-[#12132D99] font-medium space-x-2"> 
//         <img src="./images/tabler-icon-eye.png" alt=""> 
//         <span id="view-count">${singleData.view_count}</span>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>`

//   appendChild
  dataContainer.appendChild(div);


  })
}

loadData();