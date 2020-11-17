// Left Menu
const tlLeftMenu = gsap.timeline({
  defaults: { duration: 0.2, onComplete: onCompleteTlLeftmenuHandler },
});
tlLeftMenu
  .to(".left-side-wrapper", {
    duration: 0.6,
    width: "auto",
  })
  .to(".left-side-wrapper", { opacity: 1 })
  .to(".home-button", {
    opacity: 1,
  })
  .to(".followers", {
    opacity: 1,
  })
  .to(".likes", {
    opacity: 1,
  })
  .to(".hashtags", {
    opacity: 1,
  });

// Content
function onCompleteTlLeftmenuHandler(e) {
  const tlContent = gsap.timeline({ defaults: { duration: 1 } });
  tlContent
    .to(
      ".main-content",
      {
        opacity: 1,
      },
      "mainAndRight"
    )
    .to(
      ".right-side",
      {
        opacity: 1,
      },
      "mainAndRight"
    );
}

// Float Menu Button
$("#floatButtonNavs").click(function () {
  const liEl = $("#floatButtonNavs > li");
  const length = liEl.length,
    r = 80;
  const tlFloatButton = gsap.timeline({ defaults: { duration: 0.25 } });
  $(this).toggleClass("active");
  if ($(this).hasClass("active")) {
    tlFloatButton.to(`.float-menu-button-svg`, {
      transform: "rotateZ(45deg)",
    });
    for (let i = 2; i <= length; i++) {
      tlFloatButton.to(`#floatButtonNavs li:nth-child(${i})`, {
        transform: `translate(
            -${
              (r * Math.cos((90 / length) * (i - 2) * (Math.PI / 108))) / 12
            }vw,
            -${
              (r * Math.sin((90 / length) * (i - 2) * (Math.PI / 108))) / 12
            }vw)`,
      });
    }
  } else {
    for (let i = length; i >= 2; i--) {
      tlFloatButton.to(`#floatButtonNavs li:nth-child(${i})`, {
        transform: "translate(0,0)",
      });
    }
    tlFloatButton.to(`.float-menu-button-svg`, {
      transform: "rotateZ(0deg)",
    });
  }
});

//Login
function onClickShowLogin() {
  userLoginWindowEl.removeClass("off");
  const tlLogin = gsap.timeline({ defaults: { duration: 1 } });
  tlLogin.to(userLoginWindowEl, {
    transform: "translate(-50%, -50%)",
  });
}

function onClickCloseLogin() {
  const tlLogin = gsap.timeline({
    defaults: { duration: 1, onComplete: onCompleteCloseHandler },
  });
  tlLogin.to(userLoginWindowEl, {
    transform: "translate(-50%, -200%)",
  });
}

function onCompleteCloseHandler() {
  userLoginWindowEl.addClass("off");
  userPostWindowEl.addClass("off");
  location.reload();
}
//New Message
function onClickShowNewMessage() {
  userPostWindowEl.removeClass("off");
  const tlNewMessage = gsap.timeline({ defaults: { duration: 1 } });
  tlNewMessage.to(userPostWindowEl, {
    transform: "translate(-50%, -50%)",
  });
}

function onClickCloseNewMessage() {
  const tlNewMessage = gsap.timeline({
    defaults: { duration: 1, onComplete: onCompleteCloseHandler },
  });
  tlNewMessage.to(userPostWindowEl, {
    transform: "translate(-50%, -200%)",
  });
}
