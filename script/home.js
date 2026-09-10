// console.log("ok");

let currentTab = "all";

const tabActive = ["bg-violet-600", "text-white"];
const tabInActive = ["bg-white", "text-black", "hover:bg-gray-100"];

const allContenar = document.getElementById("all-section")

const openContenar = document.getElementById("open-section")
const closedContenar = document.getElementById("closed-section")


const totalIssues = document.getElementById("total-Issues")

const loadingS = document.getElementById("loading")
let isloading = true;

console.log(totalIssues);
// console.log(allContenar,"--------------",openContenar ,"--------------",closedContenar);

function Tab(tab) {
    // console.log(tab);

    const tabs = ["all", "open", "closed"];

    for (const t of tabs) {
        const tabName = document.getElementById("tab-" + t)
        // console.log(tabName);

        if (t === tab) {
            tabName.classList.remove(...tabInActive)
            tabName.classList.add(...tabActive)
        }
        else {
            tabName.classList.remove(...tabActive)
            tabName.classList.add(...tabInActive)
        }
    }

    const pages = [allContenar, openContenar, closedContenar];

    for (const page of pages) {
        page.classList.add("hidden");
    }

    if (tab === "all") {
        allContenar.classList.remove("hidden");
    }
    else if (tab === "open") {
        openContenar.classList.remove("hidden");
        // allContenar.classList.add("hidden");
    }
    else {
        closedContenar.classList.remove("hidden");
    }
}

Tab(currentTab);

// document.getElementById("Sign-In-btn").addEventListener("click", function () {})

const fetchProblems = () => {

    // isloading.style.display = false;
    isloading = true;
    loadingS.style.display = "flex";

    fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
        .then((res) => res.json())
        .then((data) => {
            displayProblems(data.data);
            isloading = false;
            loadingS.style.display = "none";
            // console.log(data.data);
        })
    // return (data.data);
}

const displayProblems = (problems) => {
    // console.log(problem);
    problems.forEach(problem => {
        // console.log(problem);

        let labels2;
        if (problem.labels[1]) {
            labels2 = problem.labels[1];
        } else {
            labels2 = "";
        }

        const card = document.createElement("div");

        // <div class="h-1.5 w-full bg-green-400 absolute top-0 left-0"></div>

        card.innerHTML = `
        <div
                    class="bg-white border border-gray-300 rounded-md p-5 shadow-sm hover:shadow-md transition-shadow  max-w-80 w-fit h-full mx-auto relative">
                    
                    ${problem.status === "open" ? `
                        <div class="h-1.5 w-full bg-green-400 absolute top-0 left-0 rounded-t-lg"></div>
                        ` : problem.status === "closed" ? `<div class="h-1.5 w-full bg-purple-400 absolute top-0 left-0 rounded-t-lg"></div>` : ""}

                        
                       ${problem.status === "open" ? ` 
                        <div class="flex justify-between items-start mb-4 mt-2 ">

                            <div class="w-7 h-7 rounded-full border-2 border-green-400 flex items-center justify-center">
                            <img src="./assets/Open-Status.png" alt="" srcset="">
                            </div> ` :

                            `
                            <div class="flex justify-between items-start mb-4 mt-2 ">

                                <div class="w-7 h-7 rounded-full border-2 border-purple-400 flex items-center justify-center">
                                <img src="./assets/Closed- Status .png" alt="" srcset="">
                            </div>`
                        }


                        ${problem.priority === "high" ? `
                            <span
                            class="text-center text-[12px] font-bold py-1.5 w-20 rounded-2xl bg-red-100 text-red-500 uppercase">${problem.priority}</span>
                            ` :
                            problem.priority === "medium" ? `<span
                            class="text-center text-[12px] font-bold py-1.5 w-20 rounded-2xl bg-orange-100 text-orange-500 uppercase">${problem.priority}</span>` : problem.priority === "low" ? `<span
                            class="text-center text-[12px] font-bold py-1.5 w-20 rounded-2xl bg-gray-100 text-gray-500 uppercase">${problem.priority}</span>` : ""
            }
                    </div>

                    <h3 class="font-bold text-[#1f2328] text-[15px] mb-2 leading-tight">${problem.title}</h3>
                    <p class="text-xs text-[#636c76] mb-4 line-clamp-2 leading-relaxed">${problem.description}</p>



                    <div class="flex flex-wrap gap-2 mb-4">

                        ${problem.labels.map((label) => {

                            // console.log(label);

                            return label === "bug" ? `
                        
                            <span
                            class="text-[10px] font-bold px-2 py-1 rounded-full bg-red-100 text-red-500 flex items-center gap-1 border-2 border-red-200 uppercase">
                            <i class="fa-solid fa-bug"></i> ${label}
                            </span>

                            ` :

                            label === "help wanted" ? `
                            <span
                            class="text-[10px] font-bold px-2 py-1 rounded-full bg-yellow-100 text-yellow-600 flex items-center gap-1 border-2 border-yellow-200 uppercase">
                            <i class="fa-solid fa-life-ring"></i> ${label}
                            </span>
                            
                            ` :

                            label === "enhancement" ? `
                            <span
                            class="text-[10px] font-bold px-2 py-1 rounded-full bg-green-100 text-green-600 flex items-center gap-1 border-2 border-green-200 uppercase">
                             <i class="fa-solid fa-wand-magic-sparkles"></i> ${label}
                            </span>
                            `:

                            label === "good first issue" ? `
                            <span
                            class="text-[10px] font-bold px-2 py-1 rounded-full bg-fuchsia-100 text-fuchsia-600 flex items-center gap-1 border-2 border-fuchsia-200 uppercase">
                            <i class="fa-solid fa-star"></i> ${label}
                            </span>
                            ` :

                            label === "documentation" ? `
                            <span
                            class="text-[10px] font-bold px-2 py-1 rounded-full bg-blue-100 text-blue-600 flex items-center gap-1 border-2 border-blue-200 uppercase">
                            <i class="fa-solid fa-file-lines"></i> ${label}
                            </span>
                            ` :


                        ""
                        }).join('')}
                        
                        
                        
                    </div>

                    <div class="pt-4 border-t-2 border-gray-200 flex flex-col gap-1 text-[11px] text-gray-400">
                        <p class="font-medium text-gray-500">#1 by ${problem.author}</p>
                        <p>${new Date(problem.createdAt).toLocaleDateString('en-US')}</p>
                    </div>

                    <div />
        `;

        allContenar.appendChild(card);
        // console.log(card);
        // console.log(allContenar);
    });
}

fetchProblems();

console.log(fetchProblems());