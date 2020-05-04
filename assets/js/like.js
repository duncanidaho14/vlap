// const axios = "https://unpkg.com/axios/dist/axios.min.js";

// function onClickBtnLike(event){
//     event.preventDefault();

//     const url = this.href;
//     const spanCount = this.querySelector('span.js-likes');

//     axios.get(url).then(function(response) {
//         spanCount.textContent = response.data.likes;

//         if(icone.classList.contains('fas')) {
//             icone.classList.replace('fas', 'far');
//         } else {
//             icone.classList.replace('far', 'fas');
//         }
//     }).catch(function(error) {
//         if(error.response.status == 403){
//             window.alert("vous ne pouvez pas liké un article si vous n'êtes pas connecté !")
//         }else {
//             window.alert("Une erreur s'est produite, réessayez plus tard !!!")
//         }
//     });
// }
// document.querySelectorAll('a.js-like').forEach(function(link) {
//     link.addEventListener('click', onClickBtnLike);
// });



