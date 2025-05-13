import type { IErrorResGen } from '../../models/interfaces/errorRes';
import type IAuthError from '../../models/interfaces/authError';

import styles from './authen.module.css';

import { Form, useActionData } from 'react-router-dom';
import ErrorMsg from '../../components/layouts/ErrorMsg';


export default function Signup() {
    const actionData: IErrorResGen<IAuthError> | undefined = useActionData()
    let error: IAuthError = {}
    if (actionData?.errors)
        error = actionData.errors

    return (
        <div className={styles['container']}>
            <h2 className={styles['title']}>Signup</h2>
            <Form className={styles['form']} method="post">
                <input name='email' type="text" placeholder="Email" className={styles['input']} />
                {error.wasExist && <ErrorMsg msg={error.wasExist} />}

                <input name='password' type="password" placeholder="Password" className={styles['input']} />
                <input name='confirmPassword' type="password" placeholder="Confirm password" className={styles['input']} />
                {error.confirmPass && <ErrorMsg msg={error.confirmPass} />}

                <button type="submit" className={styles['button']}>Signup</button>
            </Form>
        </div>
    );
}

