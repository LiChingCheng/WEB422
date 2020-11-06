/*********************************************************************************
 * WEB422 – Assignment 2
 * I declare that this assignment is my own work in accordance with Seneca Academic Policy.
 * No part of this assignment has been copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Name: Li-Ching, Cheng  Student ID: 143292175  Date: 2019/05/28
 *
 *
 ********************************************************************************/

// Import jQuery, which will also expose $ on the global `window` Object.
import $ from './jquery-es';
//const $ = require('./jquery-es');

// After jQuery is loaded, we can load the Bootstrap JS, which depends on jQuery.
import 'bootstrap';
//const a= require('bootstrap');

// Place your imports for Moment.js and Lodash here...
import moment from 'moment';
import _ from 'lodash';
// const moment= require('moment');
// const _ = require('lodash');
//Or
//import { escape, uniq, chunk } from 'lodash';

// The rest of your code can go here.  You're also welcome to split

let employeesModel = [];

const initializeEmployeesModel = () => {
  $.ajax({
    url: 'https://murmuring-tor-86528.herokuapp.com/employees',
    type: 'GET',
    //contentType: 'application/json'
    dataType: 'json'
  })
    .done(function(data) {
      employeesModel = data;
      refreshEmployeeRows(employeesModel);
    })
    .fail(function() {
      //console.log('error: ' + err.statusText);
      showGenericModal('Error', 'Unable to get Employees');
    });
};

const refreshEmployeeRows = employees => {
  let compiled = _.template(
    '<% _.forEach(employees, function(emp) { %>' +
      '<div class="row body-row" data-id="<%- emp._id %>">' +
      '<div class="col-xs-4 body-column"><%- emp.FirstName %></div>' +
      '<div class="col-xs-4 body-column"><%- emp.LastName %></div>' +
      '<div class="col-xs-4 body-column"><%- emp.Position.PositionName %></div>' +
      '</div><% }); %>'
  );
  $('#employees-table')
    .empty()
    .append(compiled({ employees: employees }));
};

const showGenericModal = (title, message) => {
  $('.modal-title')
    .empty()
    .append(title);
  $('.modal-body')
    .empty()
    .append(message);
  $('#genericModal').modal('show');
};

const getFilteredEmployeesModel = filterString => {
  let emp = _.filter(employeesModel, empM => {
    return (
      empM.FirstName.toUpperCase().includes(filterString.toUpperCase()) ||
      empM.LastName.toUpperCase().includes(filterString.toUpperCase()) ||
      empM.Position.PositionName.toUpperCase().includes(filterString.toUpperCase())
    );
  });
  return emp;
};

const getEmployeeModelById = id => {
  let empM = null;
  _.find(employeesModel, emp => {
    if (emp._id === id) {
      //npm run eslint change == to ===
      empM = _.cloneDeep(emp);
    }
  });
  return empM;
};

$(function() {
  initializeEmployeesModel();
  $('#employee-search').keyup(function() {
    let filterEmp = getFilteredEmployeesModel($(this).val());
    refreshEmployeeRows(filterEmp);
  });
  $(document).on('click', '.body-row', function() {
    let matchEmpId = getEmployeeModelById($(this).attr('data-id'));
    if (matchEmpId !== null) {
      matchEmpId.HireDate = moment(matchEmpId.HireDate).format('LL');
      var compiled = _.template(
        '<strong>Address: </strong> <%- matchEmpId.AddressStreet %> <%- matchEmpId.AddressCity %>, <%- matchEmpId.AddressState %> <%- matchEmpId.AddressZip %></br>' +
          '<strong>Phone Number: </strong> <%- matchEmpId.PhoneNum %> ext: <%- matchEmpId.Extension %></br>' +
          '<strong>Hire Date: </strong> <%- matchEmpId.HireDate %>'
      );
      let templateEmp = compiled({ matchEmpId });
      showGenericModal(matchEmpId.FirstName + ' ' + matchEmpId.LastName, templateEmp);
    }
  });
});
