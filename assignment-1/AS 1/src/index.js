/*********************************************************************************
* WEB422 – Assignment 1
* I declare that this assignment is my own work in accordance with Seneca Academic
Policy.
* No part of this assignment has been copied manually or electronically from any
other source
* (including web sites) or distributed to other students.
*
* Name: Li-Ching,Cheng  Student ID: 143292175 Date: 2019/05/15
*
*
********************************************************************************/

const URL_ = 'https://murmuring-tor-86528.herokuapp.com/';

$(document).ready(function() {
    console.log('jQuery working');

    $('#teams-menu').on('click', function(event) {
        event.preventDefault();
        $.ajax({
            url: URL_ + 'teams',
            type: 'GET',
            contentType: 'application/json'
        })
            .done(function(data) {
                $('#data')
                    .empty()
                    .append('<h3>Teams</h3>')
                    .append('<pre></pre>');
                //.append(JSON.stringify(data))
                $('pre').html(prettyPrintJson.toHtml(data));
            })
            .fail(function(err) {
                console.log('error: ' + err.statusText);
            });
    });

    $('#employees-menu').on('click', function(event) {
        event.preventDefault();
        $.ajax({
            url: URL_ + 'employees',
            type: 'GET',
            contentType: 'application/json'
        })
            .done(function(data) {
                $('#data')
                    .empty()
                    .append('<h3>Employees</h3>')
                    .append('<pre></pre>');
                //.append(JSON.stringify(data))
                $('pre').html(prettyPrintJson.toHtml(data));
            })
            .fail(function(err) {
                console.log('error: ' + err.statusText);
            });
    });

    $('#projects-menu').on('click', function(event) {
        event.preventDefault();
        $.ajax({
            url: URL_ + 'projects',
            type: 'GET',
            contentType: 'application/json'
        })
            .done(function(data) {
                $('#data')
                    .empty()
                    .append('<h3>Projects</h3>')
                    .append('<pre></pre>');
                //.append(JSON.stringify(data))
                $('pre').html(prettyPrintJson.toHtml(data));
            })
            .fail(function(err) {
                console.log('error: ' + err.statusText);
            });
    });

    $('#positions-menu').on('click', function(event) {
        event.preventDefault();
        $.ajax({
            url: URL_ + 'positions',
            type: 'GET',
            contentType: 'application/json'
        })
            .done(function(data) {
                $('#data')
                    .empty()
                    .append('<h3>Positions</h3>')
                    .append('<pre></pre>');
                //.append(JSON.stringify(data))
                $('pre').html(prettyPrintJson.toHtml(data));
            })
            .fail(function(err) {
                console.log('error: ' + err.statusText);
            });
    });
});
