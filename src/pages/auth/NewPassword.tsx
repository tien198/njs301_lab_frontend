import type { IErrorRes } from '../../models/interfaces/errorRes';

import styles from './authen.module.css';
import modalStyle from '../../components/modal/Modal.module.css'

import { Form, useNavigate, useActionData } from 'react-router-dom';
import { useCallback } from 'react';


import ErrorMsg from '../../components/layouts/ErrorMsg';
import modalStore from '../../components/modal/store';
import InformModal from '../../components/modal/InformModal';
import { shopRouteURL_Absolute } from '../../utilities/RouteUlti/routeUrl';
import type IAuthError from '../../models/interfaces/authError';



export default function NewPassword() {
    const actionData: IErrorRes | undefined = useActionData()
    let error: IAuthError = {}
    if (actionData?.errors)
        error = actionData.errors

    const navigate = useNavigate()

    const modalFnc = useCallback(() => {
        navigate(shopRouteURL_Absolute.login)
        modalStore.getState().setHidden(modalStyle['hidden'])
    }, [])

    return (
        <div className={styles['container']}>
            <h2 className={styles['title']}>Email</h2>
            <Form className={styles['form']} method="post">
                <input name='password' type="password" placeholder="Password" className={styles['input']} />
                <input name='confirmPassword' type="password" placeholder="Confirm password" className={styles['input']} />
                {error.confirmPass && <ErrorMsg msg={error.confirmPass} />}

                <div>
                    <button type="submit" className={styles['button-bg-white']}>Reset Password</button>
                </div>
            </Form>
            <InformModal truthyFnc={modalFnc} falsyFnc={modalFnc} />
        </div>
    );
}