const userModel = require("../model/user.model")

const bcrypt = require("bcrypt")
const findAll = (req, res) => {
    userModel.findAll().then(data => {
        res.send(data)
    }).catch(err => {
        res.send("error happened")
    })

}

const findOne = (req, res) => {
    const id = req.params.id
    userModel.findOne({where:{
         id:id
    }}).then((data) => {
        res.send(data)

    }).catch((error) => {
        console.log(error)
        res.send("Error happened")

    })

}

const create = (req, res) => {
    const password = req.body.password
    const salt = bcrypt.genSaltSync()
    const user = {
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(password, salt)

    }
    userModel.create(user).then((data) => {
        res.send(data)

    }).catch((error) => {
        res.send("unable to create")
    })

}
const update = (req, res) => {
    const id = req.params.id
    userModel.update(req.body, { where: { id: id } }).then(data => {
        if(data[0]==1){
            res.send("updated successfully")
        }
        else{
            res.send(`there is no user with the id of ${id}`)
        }
        console.log("the returned one is ",data)
    }).catch(err => {
        res.send(err)
    })

}
const deletebyPk = (req, res) => {
    const id = req.params.id
    userModel.destroy({ where: { id: id } }).then((data) => {
        if(data==1){
            res.send("deleted successfully")
        }
        else {
            res.send(`unable to delete user with this ${id}`)
        }
        console.log("the delted one is",data)

    }).catch((error) => {
        console.log(error)
        res.send("unable to delete")

    })

}

module.exports = {findAll,findOne,deletebyPk,update,create}