const datas = require("../data.json");
const _ = require("lodash");


// Set All Datas --------------------^^^---------------------

exports.SetPostDatas = (req, res) => {
    res.status(200).json(datas);
}

// -------------------- Set All Datas --------------------- //


// One data of post ++++++++++++++++++++++++++

exports.PostDataOfPost = (req, res) => {
    const { id } = req.params;
    const data = _.filter(datas.data, (el, idx) => el.id === id);
    res.status(200).json(data);
}

// --------------- One data of post --------------- //