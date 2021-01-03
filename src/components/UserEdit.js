import React from 'react';
import { Edit, EmailField, SimpleForm, TextField } from 'react-admin';

const UserEdit = (props) => {
    return (
        <Edit {...props}>
            <SimpleForm>
                <TextField disabled source='id' />
                <TextField source='name' />
                <EmailField source='email' />
            </SimpleForm>
        </Edit>
    )
}

export default UserEdit
