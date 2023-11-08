// api url
var url = 'https://jsonplaceholder.typicode.com/users/1';

// dom
var username = document.querySelector('#username');
var email = document.querySelector('#email');
var address = document.querySelector('#address');

// user data
var user = {};

/**
 * @typedef {object} Address
 * @property {string} street
 * @property {string} city
 */

/**
 * @typedef {object} Data
 * @property {string} email
 * @property {string} name
 * @property {Address} address
 */

/**
 * @typedef {object} User
 * @property {Data} data
 * 
 */

/**
 * @returns {Promise<User>}
 */

function fetchUser() {
  return axios.get(url);
}

function startApp() {
  // axios
  //   .get(url)
  fetchUser()
    .then(function (response) {
      console.log(response);
      // TODO: 이름, 이메일, 주소 표시하기
      username.innerText = response.data.name;
      email.innerText = response.data.email;
      address.innerText = response.data.address.city;
    })
    .catch(function (error) {
      console.log(error);
    });
}

startApp();
