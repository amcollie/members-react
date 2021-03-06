import members from '../apis/members';
import history from '../history';

import {
    CREATE_MEMBER,
    FETCH_MEMBERS,
    FETCH_MEMBER,
    EDIT_MEMBER,
    DELETE_MEMBER
} from '../types';

export const createMember = formValues => async dispatch => {
    const response = await members.post('/', formValues );

    dispatch({ type: CREATE_MEMBER, payload: response.data });

    history.push('/');
};

export const fetchMembers = () => async dispatch => {
    const response = await members.get('/');

    dispatch({ type: FETCH_MEMBERS, payload: response.data });
};

export const fetchMember = id => async dispatch => {
    const response = await members.get(`/${id}`);

    dispatch({ type: FETCH_MEMBER, payload: response.data });
};

export const deleteMember = id => async dispatch => {
    await members.delete(`/${id}`);

    dispatch({ type: DELETE_MEMBER, payload: id });

    history.push('/');
};

export const editMember = (id, formValues) => async dispatch => {
    const response = await members.put(`/${id}`, formValues);

    dispatch({ type: EDIT_MEMBER, payload: response.data });

    history.push('/');
};
