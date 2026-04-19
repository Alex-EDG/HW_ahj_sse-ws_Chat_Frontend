import API from './Rest';
import Chat from './Chat';
import PageController from './PageController';

const serverURL = 'https://hw-ahj-sse-ws-chat-backend.onrender.com';
const api = new API(serverURL, '/contacts');
const chat = new Chat(document.querySelector('.container'), serverURL);
const pageCtrl = new PageController(api, chat);
pageCtrl.bindToDOM(document.querySelector('.container'));
pageCtrl.init();
