/**
 * Created by Christian on 22-01-2017.
 */

import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Notes } from './notes';
import { check } from 'meteor/check';
import { Meteor } from 'meteor/meteor';
import { Index, MinimongoEngine } from 'meteor/easy:search';


export const Projects = new Mongo.Collection('projects');

export const ProjectsIndex = new Index({
    collection: Projects,
    fields:['name','summary'],
    engine: new MinimongoEngine(),
    defaultSearchOptions: {limit:3}
});

Projects.attachSchema(new SimpleSchema({
    name: {
        type: String,
        label: 'Nombre del proyecto',
        max: 200
    },
    owner: {
        type: String,
        label: 'Propietario',
        autoValue(){
            return this.userId;
        },
        autoform: {

            type: "hidden"

        }
    },
    created:{
        type: Date,
        autoValue(){
            return new Date();
        },
        autoform: {
            type:"hidden"
        }
    },
    summary: {

        type: String,
        label: "Detalle del proyecto",
        optional: true,
        max: 2000,
        autoform: {
            type: "textarea",
            rows:10,
            class: "materialize-textarea"
        }
    },
    notes: {

        type: [Notes]

    }
}));

Projects.allow({
    insert: function (userId, doc)
    {
        return doc.owner = userId;
    }

});

Meteor.methods({
    'projects.remove'(projectId){
        check(projectId , String);
        Projects.remove(projectId);
    }
})
