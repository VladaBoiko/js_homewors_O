const box=document.querySelector('.box');
const sessions = JSON.parse(window.localStorage.getItem('visited'))
box.insertAdjacentHTML('beforeend',sessions.map(session=>`<p>${session}</p>`).join(''))
