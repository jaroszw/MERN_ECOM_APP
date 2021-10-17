export const getUser = async (req, res) => {
  res.send({ User: 'User launched' });
};

export const postUser = async (req, res) => {
  console.log(req.body);
  res.send({ User: 'user posted' });
};
