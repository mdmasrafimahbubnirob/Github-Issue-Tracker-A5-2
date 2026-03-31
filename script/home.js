// console.log("ok");

let currentTab="all";

const tabActive=["bg-violet-600", "text-white"];
const tabInActive=["bg-white", "text-black" ,"hover:bg-gray-100"];

const allContenar=document.getElementById("all-section")
const openContenar=document.getElementById("open-section")
const closedContenar=document.getElementById("closed-section")

// console.log(allContenar);
console.log(allContenar,"--------------",openContenar ,"--------------",closedContenar);

function Tab(tab){
    // console.log(tab);

    const tabs=["all", "open", "closed"];

    for(const t of tabs){
        const tabName=document.getElementById("tab-" + t)
        // console.log(tabName);

        if(t === tab){
            tabName.classList.remove(...tabInActive)
            tabName.classList.add(...tabActive)
        }
        else{
            tabName.classList.remove(...tabActive)
            tabName.classList.add(...tabInActive)
        }
    }

    const pages=[allContenar, openContenar, closedContenar];

    for(const page of pages){
        page.classList.add("hidden");
    }

    if(tab === "all"){
        allContenar.classList.remove("hidden");
    }
    else if(tab === "open"){
        openContenar.classList.remove("hidden");
        // allContenar.classList.add("hidden");
    }
    else{
        closedContenar.classList.remove("hidden");
    }
}

Tab(currentTab);

// document.getElementById("Sign-In-btn").addEventListener("click", function () {})