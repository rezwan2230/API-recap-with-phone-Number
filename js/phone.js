

const phoneLoad = async (searchText,isShowAll) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    const data = await res.json()
    const phones = data.data
    displayPhones(phones, isShowAll)
}


const displayPhones = (phones, isShowAll) => {

    const showAllBtn = document.getElementById('show-all-btn')

    if(phones.length >12 && !isShowAll){
        showAllBtn.classList.remove('hidden')
    }
    else{
        showAllBtn.classList.add('hidden')
    }

    if(!isShowAll){
        phones = phones.slice(0,12)
    }


    const phoneContainer = document.getElementById('phone-container')
    phoneContainer.textContent=''
    phones.forEach(phone => {
        // console.log(phone)

        const phnCard = document.createElement('div')
        phnCard.classList = `card w-80 bg-base-100 shadow-xl pt-8`
        phnCard.innerHTML = `
        <figure><img src="${phone.image}" alt="Shoes" /></figure>
        <div class="card-body">
            <h2 class="card-title">${phone.phone_name}</h2>
            <p>If a dog chews shoes whose shoes does he choose</p>
            <div class="card-actions justify-end">
                <button class="btn btn-primary">Buy Now</button>
            </div>
        </div>
        `
        phoneContainer.appendChild(phnCard)
    });
    toggleLoading(false)
}


const searchHandle = (isShowAll)=>{
    toggleLoading(true)
    const inputField = document.getElementById('search-input-field')
    const searchText = inputField.value
    phoneLoad(searchText, isShowAll)
}



const toggleLoading = (isloading) =>{
    lodingSpinner = document.getElementById('loding-spinner')
    if(isloading){
    lodingSpinner.classList.remove('hidden')
    }
    else{
        lodingSpinner.classList.add('hidden')
    }
}



const handleShowAll = ()=>{
    searchHandle(true)
}














phoneLoad()
