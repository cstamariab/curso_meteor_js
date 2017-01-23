/**
 * Created by Christian on 23-01-2017.
 */
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Notes = new SimpleSchema({
    note: {
        type: String,
        label:"Nota"
    }
});