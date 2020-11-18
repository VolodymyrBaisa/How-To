// Variables
// Selectors
const userIconEl = $("#user-icon");
const userLoginWindowEl = $("#userLoginWindow");
const userCloseLoginWindowEl = $("#closeLogin");
const newMessageButtonEl = $("#newMessageButton");
const userPostWindowEl = $("#userPostWindow");
const closePostEl = $("#closePost");
const submitButtonEl = $("#submitButton");
const messageTextEl = $("#newMessageText");
const tagsEl = $("#tags");

const searchIconEl = $("#searchIcon");
const searchInputEl = $("#searchInput");

// Events
userIconEl.click(onClickShowLogin);
userCloseLoginWindowEl.click(onClickCloseLogin);
newMessageButtonEl.click(onClickShowNewMessage);
closePostEl.click(onClickCloseNewMessage);
submitButtonEl.click(onClickSubmitButton);

searchIconEl.click(onClickSearch);
searchInputEl.on("keyup", (e) => {
  if (e.keyCode === 13) {
    e.preventDefault();
    onClickSearch();
  }
});
// Functions
function onClickSubmitButton() {
  $.ajax({
    url: "/api/posts",
    type: "POST",
    data: {
      u_text: messageTextEl.val(),
      tags: tagsEl.val(),
      likes_count: 0,
      comments_count: 0,
      share_count: 0,
      userprofileId: 1,
    },
  }).done(function (data) {
    onClickCloseNewMessage();
    messageTextEl.val("");
  });
}

function onClickSearch() {
  const val = searchInputEl.val();
  console.log(val);
  $.ajax({
    url: "/search",
    type: "GET",
  }).done(function (data) {
    searchInputEl.val("");
  });
}
