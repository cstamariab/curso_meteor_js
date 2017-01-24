/**
 * Created by Christian on 23-01-2017.
 */
import { Projects } from '../../../lib/collections/projects';
import { AutoForm } from 'meteor/aldeed:autoform';
import { Router }  from 'meteor/iron:router';
Template.projectForm.helpers({
    formCollection() {
       return Projects;
    }
});

Template.projectForm.onCreated(function () {
    AutoForm.addHooks(['projectForm'],{
        onSuccess: function (operation,result,template) {
            Router.go('/projects');
        }
    });
});

