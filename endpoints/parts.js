const models  = require('../models');


var search = function(req, res) {
  models.sequelize.query(constructQuery(req.body),
    { type: models.sequelize.QueryTypes.SELECT }
  ).then(function(parts) {
    res.json(parts)
  })
}


var create = function(req, res) {
  models.Parts.create({
    manufacturer: req.body.manufacturer,
    parttype: req.body.parttype,
    rotation: req.body.rotation,
    power: req.body.power,
    current: req.body.current,
    voltage: req.body.voltage,
    cosfi: req.body.cosfi,
    capacity: req.body.capacity,
    stator_0: req.body.stator_0,
    stator_1: req.body.stator_1,
    stator_2: req.body.stator_2,
    stator_3: req.body.stator_3,
    stator_4: req.body.stator_4,
    stator_5: req.body.stator_5,
    stator_6: req.body.stator_6,
    stator_7: req.body.stator_7,
    rotor_0: req.body.rotor_0,
    rotor_1: req.body.rotor_1,
    rotor_2: req.body.rotor_2,
    rotor_3: req.body.rotor_3,
    partnote: req.body.partnote,
    img_path: "req.body.img_path"
  }).then(function(part) {
      res.json({
        id:part.dataValues.id, 
        manufacturer: part.dataValues.manufacturer,
        parttype: part.dataValues.parttype 
      })
  }).catch(function(err) {
      res.json(err);
  });
}

/**HELPER FUNCTIONS**/
function findQueryObjects(body){
  var q = []
  Object.keys(body).forEach(function(key){
    if(!!body[key] && body[key] !== ''){
      q.push(key)
    }
  })
  return q;
}

function constructQuery(body){
  var keys = findQueryObjects(body);
  console.log('keys')
  console.log(keys)
  var QUERY =  'SELECT * FROM parts WHERE ' + keys[0] + ' LIKE "%' + body[keys[0]] + '%"'
  for (var i=1; i< keys.length;i++){
    QUERY += (' AND ' + keys[i] + ' LIKE "%' + body[keys[i]] + '%"');
  }
  QUERY += ';'
  return QUERY;
}

/********************/

module.exports.bindRoutes = function(collection, elem, rest){
  collection
    .post(create);
  rest.search.post(search) 
}

