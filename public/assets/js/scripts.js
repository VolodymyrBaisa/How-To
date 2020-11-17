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
// Events
userIconEl.click(onClickShowLogin);
userCloseLoginWindowEl.click(onClickCloseLogin);
newMessageButtonEl.click(onClickShowNewMessage);
closePostEl.click(onClickCloseNewMessage);
submitButtonEl.click(onClickSubmitButton);
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
