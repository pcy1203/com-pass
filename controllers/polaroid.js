const Polaroid = require('../models/polaroid');

exports.renderMain = (req, res, next) => {
  res.render('polaroid/main');
};

exports.renderPolaroids = async (req, res, next) => {
  const polaroids = await Polaroid.findAll({
	where: { writer: req.user.dataValues.id },
	order: [[ 'createdAt', 'DESC' ]],
  });
  res.render('polaroid/viewall', { polaroids });
};


exports.renderPolaroid = async (req, res, next) => {
  const id = req.params.id;
  const polaroid = await Polaroid.findOne({
	where: { id },
  });
  res.render('polaroid/view', { polaroid });
};

exports.renderWrite = (req, res, next) => {
  res.render('polaroid/write');
};

exports.writePolaroid = async (req, res, next) => {
  // TODO - 유효성 검사 추가하기
  const { content } = req.body;
  try {
	const polaroid = await Polaroid.create({
	  image: `polaroid/${req.file.filename}`,
	  content,
	  writer: req.user.dataValues.id,
	});
    return res.redirect(`/myself/polaroid/${polaroid.id}`);
  } catch (error) {
	console.error(error);
	return next(error);
  }
};