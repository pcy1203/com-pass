exports.renderMain = (req, res, next) => {
  res.render('main/main');
};

exports.renderLogin = (req, res, next) => {
  const originalUrl = req.headers.referer;
  const maintainUrl = ["login", "signup", "setprofile", "findid", "findpassword"]
    .filter((word) => originalUrl?.includes(word)).length !== 0;
  if (req.session.redirectToLogin || maintainUrl) {
	req.session.redirectToLogin = false;
  } else {
	req.session.redirectURL = null;  // redirect to "/"
  }
  res.render('main/login');
};

exports.renderSignup = (req, res, next) => {
  res.render('main/signup');
};

exports.renderSignupSuccess = (req, res, next) => {
  res.render('main/signupsuccess');
};

exports.renderMyProfile = (req, res, next) => {
  res.render('main/myprofile');
};

exports.renderMyProfileLike = (req, res, next) => {
  res.render('main/myprofilelike');
};

exports.renderMyProfileGame = (req, res, next) => {
  res.render('main/myprofilegame');
};

exports.renderSetProfile = (req, res, next) => {
  res.render('main/setprofile');
};

exports.renderChangePassword = (req, res, next) => {
  res.render('main/changepassword');
};

exports.renderFindId = (req, res, next) => {
  res.render('main/findid');
};

exports.renderFindIdSuccess = (req, res, next) => {
  let name, email = '';
  if (req.session.findId) {
	name = req.session.findId.name;
	email = req.session.findId.email;
  }
  res.render('main/findidsuccess', { name, email });
};

exports.renderFindPassword = (req, res, next) => {
  res.render('main/findpassword');
};

exports.renderSetPassword = (req, res, next) => {
  res.render('main/setpassword');
};

exports.renderAbout = (req, res, next) => {
  res.render('main/about');
};

exports.renderNotice = (req, res, next) => {
  res.render('main/notice');
};

exports.renderFaq = (req, res, next) => {
  res.render('main/faq');
};