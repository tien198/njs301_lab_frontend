import type { IErrorRes } from '../../models/interfaces/errorRes';

import styles from './authen.module.css';
import modalStyle from '../../components/modal/Modal.module.css'

import { Form, useNavigate, useActionData } from 'react-router-dom';


import ErrorMsg from '../../components/layouts/ErrorMsg';
import { useCallback } from 'react';
import modalStore from '../../components/modal/store';
import InformModal from '../../components/modal/InformModal';



export default function ResetPassword() {
    const actionData: IErrorRes | undefined = useActionData()
    let errorEntries: [string, string][] = []
    if (actionData?.errors)
        errorEntries = Object.entries(actionData.errors)

    const navigate = useNavigate()

    const modalFnc = useCallback(() => {
        navigate('/')
        modalStore.getState().setHidden(modalStyle['hidden'])
    }, [])

    return (
        <div className={styles['container']}>
            <h2 className={styles['title']}>Email</h2>
            <Form className={styles['form']} method="post">
                <input name='email' type="text" placeholder="Email" className={styles['input']} />
                {actionData?.errors
                    && errorEntries.map(i =>
                        <ErrorMsg key={i[0]} msg={i[1]} />
                    )
                }
                <div>

                    <button type="submit" className={styles['button-bg-white']}>Reset Password</button>
                </div>
            </Form>
            <InformModal truthyFnc={modalFnc} falsyFnc={modalFnc} />
        </div>
    );
}