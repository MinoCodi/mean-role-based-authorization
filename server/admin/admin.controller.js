
// const authorize = require('../_helpers/authorize');
// const Role = require('../_helpers/role');
const express = require('express');
const router = express.Router();
const adminService = require('./admin.service');
// routes
  
 router.post('/createRole', createRole);
 router.post('/addMenuItem', addMenuItem);
 router.get('/getRole', getRole); 
 router.get('/getMenuItem', getMenuItem); 
 

module.exports = router;


function createRole(req, res, next) {

    adminService.createRole(req.body)
        .then(() => res.end({}))
        .catch(err => next(err));
    }



function addMenuItem(req, res, next) {

        adminService.addMenuItem(req.body)
            .then(() => res.end({}))
            .catch(err => next(err));
    
    
        }

function getRole(req, res, next) {
    adminService.getRole()
            .then(roles => res.json(roles))
            .catch(err => next(err));
    }

function getMenuItem(req, res, next) {
        adminService.getMenuItem()
                .then(items => res.json(items))
                .catch(err => next(err));
        }