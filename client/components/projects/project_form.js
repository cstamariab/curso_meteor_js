/**
 * Created by Christian on 23-01-2017.
 */
import { Projects } from '../../../lib/collections/projects';

Template.projectForm.helpers({
    formCollection() {
       return Projects;
    }
});