document.getElementById('searchBtn').addEventListener('click', () => {
    fetch('https://randomuser.me/api/?results=100')
        .then(response => response.json())
        .then(data => countryUser(data.results));
})

const countryUser = users => {
    const searchBox = document.getElementById('searchField');
    let userContainer = document.getElementById('userContainer');
    if (searchBox.value != '') {
        userContainer.textContent = '';
        users.forEach(user => {
            if (user.location.country == searchBox.value) {
                userContainer.innerHTML += `
            <div class="card text-white bg-danger my-5 mx-3" style="max-width: 540px;">
                <div class="row g-0">
                    <div class="col-md-5">
                        <img src="${user.picture.large}" class="img-fluid rounded-start rounded-circle" alt="...">
                    </div>
                    <div class="col-md-7">
                        <div class="card-body">
                            <h3 class="card-title">${user.name.title} ${user.name.first} ${user.name.last}</h3>
                            <p class="card-text">Country: <span class="fs-5 fw-bold lh-lg">${user.location.country}</span></p>
                            <p class="card-text">Hi! I am ${user.name.first} ${user.name.last} from ${user.location.country}. I am very intersted to be a Volunteer worker in 
                            any kind of charity mission.
                            </p>
                        </div>
                    </div>
                    <div class="card-footer d-flex justify-content-between flex-wrap">
                        <div class="col-md-6">
                            <p class="card-text"><span class="fw-bold">Address</span> => ${user.location.street.number}, ${user.location.street.name}</p>
                            <p class="card-text"><span class="fw-bold">City</span> => ${user.location.city}</p>
                            <p class="card-text"><span class="fw-bold">State</span> => ${user.location.state}</p>
                            <p class="card-text"><span class="fw-bold">Age</span> => ${user.dob.age}</p>
                        </div>
                        <div class="col-md-6">
                            <p class="card-text"><span class="fw-bold">Postcode</span> => ${user.location.postcode}</p>
                            <p class="card-text"><span class="fw-bold">Email</span> => ${user.email}</p>
                            <p class="card-text"><span class="fw-bold">Phone</span> => ${user.phone}</p>
                            <p class="card-text"><span class="fw-bold">Cell</span> => ${user.cell}</p>
                        </div>
                    </div>
                </div>
            </div>
            `
            }
        })
        searchBox.value = '';
    }
}

const fetchUser = () => {
    fetch('https://randomuser.me/api/?results=100')
        .then(response => response.json())
        .then(data => displayUser(data.results));
};

fetchUser();

const displayUser = users => {
    let userContainer = document.getElementById('userContainer');
    users.forEach(user => {
        userContainer.innerHTML += `
        <div class="card text-white bg-danger my-5 mx-3" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-5">
                    <img src="${user.picture.large}" class="img-fluid rounded-start rounded-circle" alt="...">
                </div>
                <div class="col-md-7">
                    <div class="card-body">
                        <h3 class="card-title">${user.name.title} ${user.name.first} ${user.name.last}</h3>
                        <p class="card-text">Country: <span class="fs-5 fw-bold lh-lg">${user.location.country}</span></p>
                        <p class="card-text">Hi! I am ${user.name.first} ${user.name.last} from ${user.location.country}. I am very intersted to be a Volunteer worker in 
                        any kind of charity mission.
                        </p>
                    </div>
                </div>
                <div class="card-footer d-flex justify-content-between flex-wrap">
                    <div class="col-md-6">
                        <p class="card-text"><span class="fw-bold">Address</span> => ${user.location.street.number}, ${user.location.street.name}</p>
                        <p class="card-text"><span class="fw-bold">City</span> => ${user.location.city}</p>
                        <p class="card-text"><span class="fw-bold">State</span> => ${user.location.state}</p>
                        <p class="card-text"><span class="fw-bold">Age</span> => ${user.dob.age}</p>
                    </div>
                    <div class="col-md-6">
                        <p class="card-text"><span class="fw-bold">Postcode</span> => ${user.location.postcode}</p>
                        <p class="card-text"><span class="fw-bold">Email</span> => ${user.email}</p>
                        <p class="card-text"><span class="fw-bold">Phone</span> => ${user.phone}</p>
                        <p class="card-text"><span class="fw-bold">Cell</span> => ${user.cell}</p>
                    </div>
                </div>
            </div>
        </div>
        `
    });
};