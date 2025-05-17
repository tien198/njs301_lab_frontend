import type IAuthError from '../../../models/interfaces/response/error/authError';
import type { IErrorRes } from '../../../models/interfaces/response/error';

import styles from '../authen.module.css';

import { Form, useActionData } from 'react-router-dom';
import ErrorMsg from '../../../components/layouts/ErrorMsg';



export default function Signup() {
    const actionData: IErrorRes<IAuthError> | undefined = useActionData()
    let error: IAuthError = {}
    if (actionData?.cause)
        error = actionData.cause

    return (
        <div className={styles['container']}>
            <h2 className={styles['title']}>Signup</h2>
            <Form className={styles['form']} method="post">
                <input name='email' type="text" placeholder="Email" className={styles['input']} />
                {error.email && <ErrorMsg msg={error.email} />}

                <input name='password' type="password" placeholder="Password" className={styles['input']} />
                {error.password && <ErrorMsg msg={error.password} />}

                <input name='confirmPassword' type="password" placeholder="Confirm password" className={styles['input']} />
                {error.confirmPassword && <ErrorMsg msg={error.confirmPassword} />}

                <button type="submit" className={styles['button']}>Signup</button>
            </Form>
        </div>
    );
}

